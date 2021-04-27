import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import About from './AboutComponent';
import {
    postComment,
    postFeedback,
    fetchDishes,
    fetchResources,
    fetchRecommanded,
    fetchComments,
    fetchHotdeals,
    fetchOutOfStockProducts,
    addToCart,
    removeToCart,
    loginUser,
    logoutUser,uploadProduct,uploadResource,
    googleLogin, fetchWaiters,
    addResourcesReport,updateProduct,uploadMiscellaneous,
    increaseStock, signUp,changeFlippingCardSaveBehavior,pushInvoice
} from "../redux/ActionCreators";
import {actions} from "react-redux-form";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Login from "./Login";
import SignUp from "./SignUp";
import WiterHome from './Receptions/WiterHome';
import Navigation from './Navigation';
import Dashboard from './Manager/Reports/Dashboard';
import MainManager from './Manager/Main';
import IncreaseProduct from "./Manager/Products/IncreaseProduct";
import * as ActionTypes from "../redux/ActionTypes";
import {quantity} from "../redux/Forms";
import '../css/styles.css';

const mapStateToProps = state => {
    return {

        products: state.products,
        resources: state.resources,
        comments: state.comments,
        recommanded: state.recommanded,
        hotdeals: state.hotdeals,
        outOfStockProducts: state.outOfStockProducts,
        cart: state.cart,
        auth: state.auth,
        userCollection: state.userCollection,
        behaviors: state.behaviors,
        waiters: state.waiters,
        miscellaneous: state.miscellaneous
    }
}

const mapDispatchToProps = (dispatch) => ({
    uploadMiscellaneous: (values,proof)=>dispatch(uploadMiscellaneous(values,proof)),
    uploadResource: (values,image) =>dispatch(uploadResource(values,image)),
    uploadProduct: (values,image) =>dispatch(uploadProduct(values,image)),
    pushInvoice: (receptionistName, waiterName,clientName,paymentStatus,totalPrice,orders) =>dispatch(pushInvoice(receptionistName, waiterName,clientName,paymentStatus,totalPrice,orders)),
    fetchWaiters: () => dispatch(fetchWaiters()),
    addResourcesReport: (resourceId, unitPrice,quantity,from,name) => dispatch(addResourcesReport(resourceId, unitPrice,quantity,from,name)),
    changeFlippingCardSaveBehavior:(behavior) => dispatch(changeFlippingCardSaveBehavior(behavior)),
    signUp:(value, typeOfUser) => dispatch(signUp(value, typeOfUser)),
    increaseStock:(resourceId, unitPrice,quantity,from,name)=>dispatch(increaseStock(resourceId,unitPrice,quantity,from,name)),
    addToCart: (item) => dispatch(addToCart(item)),
    removeToCart: (removeId) => dispatch(removeToCart(removeId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    updateProduct: (values) => dispatch(updateProduct(values)),
    resetFeedbackForm: () => {
        dispatch(actions.reset('feedback'))
    },
    fetchComments: () => {
        dispatch(fetchComments())
    },
    fetchRecommanded: () => {
        dispatch(fetchRecommanded())
    },
    fetchHotdeals: () => {
        dispatch(fetchHotdeals())
    },
    postFeedback: (firstname, lastname, email, contactType, telnum, agree) => dispatch(postFeedback(firstname, lastname, email, contactType, telnum, agree)),
    fetchDishes: () => {
        dispatch(fetchDishes())
    },
    fetchResources: () => {
        dispatch(fetchResources())
    },
    fetchOutOfStockProducts: () => {
        dispatch(fetchOutOfStockProducts())
    },
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
    googleLogin: () => dispatch(googleLogin())

});


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            mainNavItems: {
                1: {
                    name: 'Home',
                    to: '/home',
                    icon: 'fa fa-home fa-lg'

                },
                2: {
                    name: 'About Us',
                    to: '/aboutus',
                    icon: 'fa fa-info fa-lg'
                },
                3: {
                    name: 'Menu',
                    to: '/menu',
                    icon: 'fa fa-list fa-lg'
                },
                4: {
                    name: 'Contact Us',
                    to: '/contactus',
                    icon: 'fa fa-address-card fa-lg'
                }
            }
        });

    }


    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchRecommanded();
        this.props.fetchHotdeals();
        this.props.fetchOutOfStockProducts();
        this.props.fetchResources();
        this.props.fetchWaiters();


    }
    componentWillUnmount() {
        this.props.logoutUser();
    }


    render() {
        const HomePage = () => {
            return (
                <Home products={this.props.products}
                      dish={this.props.products.products.filter((dish) => dish.featured)[0]}
                      dishesLoading={this.props.products.isLoading}
                      dishesErrMess={this.props.products.errMess}
                      promotion={this.props.recommanded.recommanded.filter((promo) => promo.featured)[0]}
                      hotdeal={this.props.hotdeals.hotdeals.filter((hotdeal) => hotdeal.featured)[0]}
                      hotdealsLoading={this.props.hotdeals.isLoading}
                      hotdealsErrMess={this.props.hotdeals.errMess}
                      promosLoading={this.props.recommanded.isLoading}
                      promosErrMess={this.props.recommanded.errMess}
                      addToCart={this.props.addToCart}
                      removeToCart={this.props.removeToCart}
                      cart={this.props.cart}
                      hotdeals={this.props.hotdeals}

                />
            );
        }

        const DishWithId = ({match}) => {
            return (
                <DishDetail
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    ErrMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}

                />
            );


        };
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                // this.props.auth.isAuthenticated
                localStorage.getItem('user') !=null
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        );
        return (
            <div>
                <Navigation mainNavItems={this.state.mainNavItems}
                            auth={this.props.auth}
                            loginUser={this.props.loginUser}
                            logoutUser={this.props.logoutUser}
                            googleLogin={this.props.googleLogin}
                            userCollection={this.props.userCollection}
                            cart={this.props.cart}/>
                <TransitionGroup>
                    <CSSTransition  key={this.props.location.key}
                                   appear
                                   classNames="fade" timeout={{enter: 300, exit: 200}}>
                        <Switch>
                            <Route path="/Home" component={HomePage}/>
                            <Route exact path="/menu" component={() => <Menu products={this.props.products}/>}/>
                            <Route path="/menu/:dishId" component={DishWithId}/>
                            <Route exact path="/contactus"
                                   component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}
                                                             postFeedback={this.props.postFeedback}/>}/>
                            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}/>
                            <Route exact path="/login" component={() => <Login loginUser={this.props.loginUser} googleLogin={this.props.googleLogin} />}/>
                            <PrivateRoute exact path="/witer" component={() => <WiterHome products={this.props.products}
                                                                                   addToCart={this.props.addToCart}
                                                                                   removeToCart={this.props.removeToCart}
                                                                                          waiters={this.props.waiters}
                                                                                   cart={this.props.cart}
                                                                                          uploadMiscellaneous={this.props.uploadMiscellaneous}
                                                                                          pushInvoice={this.props.pushInvoice}
                            />}/>

                            <PrivateRoute path="/management" component={() => <MainManager products={this.props.products}
                                                                                           uploadProduct={this.props.uploadProduct}
                                                                                    resources={this.props.resources}
                                                                                           uploadResource={this.props.uploadResource}
                                                                                    increaseStock={this.props.increaseStock}
                                                                                    searchingOutput={this.props.searchingOutput}
                                                                                    searchText={this.props.searchText}
                                                                                           miscellaneous={this.props.miscellaneous}
                                                                                           uploadMiscellaneous={this.props.uploadMiscellaneous}
                                                                                           updateProduct={this.props.updateProduct}
                                                                                           addResourcesReport = {this.props.addResourcesReport}
                                                                                           changeFlippingCardSaveBehavior={this.props.changeFlippingCardSaveBehavior}
                                                                                           behaviors={this.props.behaviors}
                                                                                    outOfStockProducts={this.props.outOfStockProducts}/>}/>

                            <Route path="/signup" component={() => <SignUp signUp={this.props.signUp} />}/>


                            <Redirect to="/home"/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));