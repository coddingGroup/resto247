import * as ActionTypes from './ActionTypes';
import {DISHES} from "../shared/dishes";
import {baseUrl} from "../shared/baseUrl";
import {auth, firestore, fireauth, firebasestore} from '../firebase/firebase';








export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const increaseStockComplete = () =>({
    type: "",
    payload: true
});
export const changeStock = (resourceId, quantity,unitPrice,from) =>({
    type: ActionTypes.ADD_STOCK,
    payload:{
        resourceId:resourceId,
        quantity: quantity,
        unitPrice:unitPrice,
        from:from
    }
});
export const increaseStock = (resourceId, unitPrice,quantity,from,name )=> (dispatch) =>{
    if(!auth.currentUser){
        alert("login first");
        console.log("login first");
        return;
    }
    return firestore.collection('stockUp').add({
        quantity:quantity,
        unitPrice:unitPrice,
        from:from,
        resourceName:name,
        resourceId:resourceId,
        createdAt:firebasestore.FieldValue.serverTimestamp()
    })
        .then(docRef =>{
            firestore.collection('stockUp').doc(docRef.id).get()
                .then(doc =>{
                    if (doc.exists) {
                        const data = doc.data();
                        const id = doc.id;
                        let newStock = {id, ...data};
                        dispatch(changeStock(newStock));
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                })
        })
        .catch(error => {
        console.log('Post comments ', error.message);
        alert('Your comment could not be posted\nError: ' + error.message);
    })
}

export const signUp = (...field) => (dispatch) =>{

}
export const postComment = (dishId, rating, comment) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    return firestore.collection('comments').add({
        author: {
            'id': auth.currentUser.uid,
            'firstname': auth.currentUser.displayName ? auth.currentUser.displayName : auth.currentUser.email
        },
        dish: dishId,
        rating: rating,
        comment: comment,
        createdAt: firebasestore.FieldValue.serverTimestamp(),
        updatedAt: firebasestore.FieldValue.serverTimestamp()
    })
        .then(docRef => {
            firestore.collection('comments').doc(docRef.id).get()
                .then(doc => {
                    if (doc.exists) {
                        const data = doc.data();
                        const id = doc.id;
                        let comment = {id, ...data};
                        dispatch(addComment(comment))
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                });
        })
        .catch(error => {
            console.log('Post comments ', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        })
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return firestore.collection('dishes').get()
        .then(snapshot => {
            let products = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const id = doc.id
                products.push({id, ...data});
            });
            return products;
        })
        .then(products => dispatch(addDishes(products)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (products) => ({
    type: ActionTypes.ADD_DISHES,
    payload: products
});

export const fetchComments = () => (dispatch) => {
    return firestore.collection('comments').get()
        .then(snapshot => {
            let comments = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const id = doc.id
                comments.push({id, ...data});
            });
            return comments;
        })
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return firestore.collection('promotions').get()
        .then(snapshot => {
            let promos = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const id = doc.id
                promos.push({id, ...data});
            });
            return promos;
        })
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {

    dispatch(leadersLoading());

    return firestore.collection('leaders').get()
        .then(snapshot => {
            let leaders = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const id = doc.id
                leaders.push({id, ...data});
            });
            return leaders;
        })
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const postFeedback = (feedback) => (dispatch) => {

    return firestore.collection('feedback').add(feedback)
        .then(response => {
            console.log('Feedback', response);
            alert('Thank you for your feedback!');
        })
        .catch(error => {
            console.log('Feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};

export const requestLogin = () => {
    return {
        type: ActionTypes.LOGIN_REQUEST
    }
}

export const receiveLogin = (user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}
export const setUser = (user="JSON.parse(localStorage.getItem('user'))", userCollection="JSON.parse(localStorage.getItem('userCollection'))") =>({
    type: ActionTypes.SET_USER,
    user: user,
    userCollection: userCollection
})

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return auth.signInWithEmailAndPassword(creds.username, creds.password)
        .then(() => {
            let user = auth.currentUser;

            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(user));



            firestore.collection('userCollection').where('userId', '==', user.uid).get()
                .then(snapshot => {
                    console.log(snapshot);
                    let userCollection ;
                    snapshot.forEach(doc => {

                        userCollection = doc.data();
                        localStorage.setItem('user', JSON.stringify(user));
                        localStorage.setItem('userCollection', JSON.stringify(userCollection));
                        dispatch(setUser(user, userCollection));
                    });


                })
                .catch(error => console.log(error.message));
        })
        .catch(error => dispatch(loginError(error.message)));


};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}

export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    auth.signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
    localStorage.removeItem('user');
    dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
    dispatch(setUser());
}

export const postFavorite = (dishId) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    return firestore.collection('favorites').add({
        user: auth.currentUser.uid,
        dish: dishId
    })
        .then(docRef => {
            firestore.collection('favorites').doc(docRef.id).get()
                .then(doc => {
                    if (doc.exists) {
                        dispatch(fetchFavorites())
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                });
        })
        .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = (dishId) => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;

    return firestore.collection('favorites').where('user', '==', user.uid).where('dish', '==', dishId).get()
        .then(snapshot => {
            console.log(snapshot);
            snapshot.forEach(doc => {
                console.log(doc.id);
                firestore.collection('favorites').doc(doc.id).delete()
                    .then(() => {
                        dispatch(fetchFavorites());
                    })
            });
        })
        .catch(error => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => (dispatch) => {

    if (!auth.currentUser) {
        console.log('No user logged in!');
        return;
    }

    var user = auth.currentUser;

    dispatch(favoritesLoading(true));

    return firestore.collection('favorites').where('user', '==', user.uid).get()
        .then(snapshot => {
            let favorites = {user: user, products: []};
            snapshot.forEach(doc => {
                const data = doc.data()
                favorites.products.push(data.dish);
            });
            console.log(favorites);
            return favorites;
        })
        .then(favorites => dispatch(addFavorites(favorites)))
        .catch(error => dispatch(favoritesFailed(error.message)));
}

export const favoritesLoading = () => ({
    type: ActionTypes.FAVORITES_LOADING
});

export const favoritesFailed = (errmess) => ({
    type: ActionTypes.FAVORITES_FAILED,
    payload: errmess
});

export const addFavorites = (favorites) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites
});

// const combineUserInfo = (userId, user) =>{
//     firestore.collection('userCollection').where('resourceId', '==', userId).get()
//         .then(snapshot => {
//             console.log(snapshot);
//             let userC = snapshot[0];
//             user = {...user, ...userC};
//             return user;
//         })
//         .catch(error => console.log("fail to add user"));
// }

export const googleLogin = () => (dispatch) => {
    const provider = new fireauth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            var user = result.user;

            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(user));
            localStorage.setItem('user', JSON.stringify(user));
            firestore.collection('userCollection').where('userId', '==', user.uid).get()
                .then(snapshot => {
                    console.log(snapshot);
                    let userCollection ;
                    snapshot.forEach(doc => {

                        userCollection = doc.data();

                        localStorage.setItem('userCollection', JSON.stringify(userCollection));
                        dispatch(setUser(user, userCollection));
                    });


                })
                .catch(error => console.log(error.message));
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        });
}


// export const addComment = (comment) =>({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// });

// export const postComment = (dishId, rating, author, comment) => (dispatch) =>{
//
//     const newComment ={
//         dishId: dishId,
//         rating: rating,
//         author: author,
//         comment: comment
//     }
//     newComment.date = new Date().toISOString();
//
//     return fetch(baseUrl + 'comments',{
//         method: 'POST',
//         body: JSON.stringify(newComment),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'same-origin'
//     })
//     .then(response => {
//         if(response.ok){
//             return response;
//         }
//         else{
//             var error = new Error ('Error '+ response.status + ': '+ response.statusText);
//             error.response = response;
//             throw error;
//         }
//     },
//     error => {
//         var errmess = new Error (error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(response => dispatch(addComment(response)))
//     .catch(error => {console.log('Post comments ', error.message)
//         alert('Your comment could be posted\nError:'+error.message)})
//
// }

export const addToCart = (item) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: item
})
export const removeToCart = (removeId) => ({
    type: ActionTypes.REMOVE_TO_CART,
    removeId: removeId
});


export const fetchResources = () => (dispatch) => {
    dispatch(resourcesLoading(true));

    return firestore.collection('resources').get()
        .then(snapshot => {
            let resources = [];
            snapshot.forEach(doc => {
                const data = doc.data()
                const id = doc.id
                resources.push({id, ...data});
            });
            return resources;
        })
        .then(products => dispatch(addResources(products)))
        .catch(error => dispatch(resourcesFailed(error.message)));
    // dispatch(resourcesLoading(true))
    //
    // return fetch(baseUrl + 'resources')
    //     .then(response => {
    //             if (response.ok) {
    //                 return response;
    //             } else {
    //                 var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //                 error.response = response;
    //                 throw error;
    //             }
    //         },
    //         error => {
    //             let errmess = new Error(error.message);
    //             throw errmess;
    //         })
    //     .then(response => response.json())
    //     .then(resources => dispatch(addResources(resources)))
    //     .catch(error => dispatch(resourcesFailed(error.message)));
}

export const resourcesLoading = () => ({
    type: ActionTypes.RESOURCES_LOADING
});

export const resourcesFailed = (errmess) => ({
    type: ActionTypes.RESOURCES_FAILED,
    payload: errmess
});

export const addResources = (resources) => ({
    type: ActionTypes.ADD_RESOURCES,
    payload: resources
});


// export const fetchDishes = () => (dispatch) => {
//     dispatch(dishesLoading(true))
//
//     return fetch(baseUrl + 'dishes')
//             .then(response => {
//                 if(response.ok){
//                     return response;
//                 }
//                 else{
//                     var error = new Error ('Error '+ response.status + ': '+ response.statusText);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//             error => {
//                 let errmess = new Error (error.message);
//                 throw errmess;
//             })
//             .then(response => response.json())
//             .then(dishes => dispatch(addDishes(dishes)))
//             .catch(error => dispatch(dishesFailed(error.message)));
// }

// export const dishesLoading = ()=>({
//     type: ActionTypes.PRODUCTS_LOADING
// });

// export const dishesFailed =(errmess) => ({
//     type: ActionTypes.PRODUCTS_FAILED,
//     payload:errmess
// });

// export const addDishes =(dishes) =>({
//     type: ActionTypes.ADD_PRODUCTS,
//     payload: dishes
// });

// export const fetchComments= () => (dispatch) => {
//     return fetch(baseUrl + 'comments')
//             .then(response => {
//                 if(response.ok){
//                     return response;
//                 }
//                 else{
//                     var error = new Error ('Error '+ response.status + ': '+ response.statusText);
//                     error.response = response;
//                     throw error;
//                 }
//             },
//             error => {
//                 var errmess = new Error (error.message);
//                 throw errmess;
//             })
//             .then(response => response.json())
//             .then(comments => dispatch(addComments(comments)))
//             .catch(error => dispatch(commentsFailed(error.message)));
// }

// export const commentsFailed =(errmess) => ({
//     type: ActionTypes.COMMENTS_FAILED,
//     payload:errmess
// });

// export const addComments =(comments) =>({
//     type: ActionTypes.ADD_COMMENTS,
//     payload: comments
// });


export const fetchRecommanded = () => (dispatch) => {
    dispatch(recommandedLoading(true))

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(recommanded => dispatch(addRecommanded(recommanded)))
        .catch(error => dispatch(recommandedFailed(error.message)));
}

export const recommandedLoading = () => ({
    type: ActionTypes.RECOMMANDED_LOADING
});

export const recommandedFailed = (errmess) => ({
    type: ActionTypes.RECOMMANDED_FAILED,
    payload: errmess
});

export const addRecommanded = (recommanded) => ({
    type: ActionTypes.ADD_RECOMMANDED,
    payload: recommanded
});


export const fetchHotdeals = () => (dispatch) => {
    dispatch(hotdealsLoading(true))

    return fetch(baseUrl + 'hotdeals')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(hotdeals => dispatch(addHotdeals(hotdeals)))
        .catch(error => dispatch(hotdealsFailed(error.message)));
}

export const hotdealsLoading = () => ({
    type: ActionTypes.HOTDEALS_LOADING
});

export const hotdealsFailed = (errmess) => ({
    type: ActionTypes.HOTDEALS_FAILED,
    payload: errmess
});

export const addHotdeals = (hotdeals) => ({
    type: ActionTypes.ADD_HOTDEALS,
    payload: hotdeals
});


export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

// export const postFeedback= (firstname, lastname, email, contactType, telnum,agree) => (dispatch) =>{
//     dispatch(addFeedback(true))
//
//     const feedback ={
//         firstname: firstname,
//         lastname: lastname,
//         email: email,
//         contactType: contactType,
//         telnum: telnum,
//         agree:agree
//     }
//
//     return fetch(baseUrl + 'feedback',{
//         method: 'POST',
//         body: JSON.stringify(feedback),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         credentials: 'same-origin'
//     })
//     .then(response => {
//         if(response.ok){
//             return response;
//         }
//         else{
//             var error = new Error ('Error '+ response.status + ': '+ response.statusText);
//             error.response = response;
//             throw error;
//         }
//     },
//     error => {
//         var errmess = new Error (error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(response => dispatch(addFeedback(response)))
//     .then(response => alert('Thank you for you feedback!\n'+JSON.stringify(response.payload)))
//     .catch(error => {console.log('Post Feedback ', error.message)
//         alert('Your feedback could be posted\nError:'+error.message)})
//
// }

export const fetchOutOfStockProducts = () => (dispatch) => {
    dispatch(OutOfStockLoading(true));

    return fetch(baseUrl + 'outOfStockProducts').then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var err = new Error(error.message);
            throw err;
        }
    ).then(response => response.json())
        .then(dishes => dispatch(addOutOfStockProducts(dishes)))
        .catch(error => dispatch(OutOfStockProductsFailed(error.message)));

};
export const OutOfStockLoading = () => ({
    type: ActionTypes.OUT_OF_STOCK_PRODUCTS_LOADING
});
export const OutOfStockProductsFailed = (errMess) => ({
    type: ActionTypes.OUT_OUT_STOCK_PRODUCTS_FAILED,
    payload: errMess
});

export const addOutOfStockProducts = (outOfStockProducts) => ({
    type: ActionTypes.ADD_OUT_OF_STOCK_PRODUCTS,
    payload: outOfStockProducts
});


