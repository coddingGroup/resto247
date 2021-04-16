import * as ActionTypes from './ActionTypes';
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (comment) =>({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
export const changeProductToDisplay = (product) =>({
    type: ActionTypes.CHANGE_TEXT_TO_SEARCH,
    payload:product
});
export const postComment = (dishId, rating, author, comment) => (dispatch) =>{
    
    const newComment ={
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error ('Error '+ response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error (error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {console.log('Post comments ', error.message)
        alert('Your comment could be posted\nError:'+error.message)})
        
}

export const fetchOutOfStockProducts = () =>(dispatch)=>{
    dispatch(OutOfStockLoading(true));

    return fetch(baseUrl + 'outOfStockProducts').then(response=>{
        if(response.ok){
            return response;
        }
        else {
            var error = new Error ('Error '+ response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var err = new Error (error.message);
            throw err;
        }
    ).then(response => response.json())
        .then(dishes => dispatch(addOutOfStockProducts(dishes)))
        .catch(error => dispatch(OutOfStockProductsFailed(error.message)));

};
export const OutOfStockLoading = ()=>({
    type: ActionTypes.OUT_OF_STOCK_PRODUCTS_LOADING
});
export const OutOfStockProductsFailed =(errMess) => ({
    type: ActionTypes.OUT_OUT_STOCK_PRODUCTS_FAILED,
    payload:errMess
});

export const addOutOfStockProducts =(outOfStockProducts) =>({
    type: ActionTypes.ADD_OUT_OF_STOCK_PRODUCTS,
    payload: outOfStockProducts
});










export const searchText = (products, text) => (dispatch) => {
    // dispatch(searchLoading(true))
    dispatch(addSearchingText(text));

    let output = products.map(product =>{
        if(product.name.includes(text)){
            return product;
        }
        else {
            return null;
        }
    });
    dispatch(addSearchOutPut(output));
}



// export const searchLoading = ()=>({
//     type: ActionTypes.SEARCH_LOADING
// });

export const searchFail =(errmess) => ({
    type: ActionTypes.SEARCH_FAIL,
    payload:errmess
});

export const addSearchOutPut =(output) =>({
    type: ActionTypes.ADD_SEARCH_RESULT,
    payload: output
});
export const addSearchingText = (text) =>({
   type: ActionTypes.CHANGE_TEXT_TO_SEARCH,
   payload: text
});
















export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    return fetch(baseUrl + 'dishes')
            .then(response => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error ('Error '+ response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error (error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = ()=>({
    type: ActionTypes.PRODUCTS_LOADING
});

export const dishesFailed =(errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload:errmess
});

export const addDishes =(dishes) =>({
    type: ActionTypes.ADD_PRODUCTS,
    payload: dishes
});

export const fetchComments= () => (dispatch) => {
    return fetch(baseUrl + 'comments')
            .then(response => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error ('Error '+ response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error (error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(comments => dispatch(addComments(comments)))
            .catch(error => dispatch(commentsFailed(error.message)));
}

export const commentsFailed =(errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments =(comments) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchRecommanded = () => (dispatch) => {
    dispatch(recommandedLoading(true))

    return fetch(baseUrl + 'promotions')
            .then(response => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error ('Error '+ response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error (error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(recommanded => dispatch(addRecommanded(recommanded)))
            .catch(error => dispatch(recommandedFailed(error.message)));
}

export const recommandedLoading = ()=>({
    type: ActionTypes.RECOMMANDED_LOADING
});

export const recommandedFailed =(errmess) => ({
    type: ActionTypes.RECOMMANDED_FAILED,
    payload:errmess
});

export const addRecommanded=(recommanded) =>({
    type: ActionTypes.ADD_RECOMMANDED,
    payload: recommanded
});


export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true))

    return fetch(baseUrl + 'leaders')
            .then(response => {
                if(response.ok){
                    return response;
                }
                else{
                    var error = new Error ('Error '+ response.status + ': '+ response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error (error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(leaders => dispatch(addLeaders(leaders)))
            .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = ()=>({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed =(errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload:errmess
});

export const addLeaders =(leaders) =>({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});



export const addFeedback = (feedback) =>({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
});

export const postFeedback= (firstname, lastname, email, contactType, telnum,agree) => (dispatch) =>{  
    dispatch(addFeedback(true))

    const feedback ={
        firstname: firstname,
        lastname: lastname,
        email: email,
        telnum: telnum,
        contactType: contactType,
        agree:agree
    }

    return fetch(baseUrl + 'feedback',{
        method: 'POST',
        body: JSON.stringify(feedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error ('Error '+ response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error (error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .then(response => alert('Thank you for you feedback!\n'+JSON.stringify(response.payload)))
    .catch(error => {console.log('Post Feedback ', error.message)
        alert('Your feedback could be posted\nError:'+error.message)})
        
}

