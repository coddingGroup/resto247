import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import About from './AboutComponent';
import {
    addResourcesReport,
    addToCart,
    changeFlippingCardSaveBehavior,
    fetchComments,
    fetchDishes,
    fetchOutOfStockProducts,
    fetchResources,
    fetchWaiters,
    googleLogin,
    increaseStock,
    loginUser,
    logoutUser,
    postComment,
    postFeedback,
    pushInvoice,
    removeToCart,
    signUp,
    updateProduct,
    uploadMiscellaneous,
    uploadProduct,
    uploadResource,
    uploadWaiter
} from "../redux/ActionCreators";
import {changeDailyDetailsInvoices, changeDailyInvoices, changeDailyStockUp,changeDailyMiscellaneous,
    changeNonPaidInvoices,setDailyPopularProduct,fetchMatchResourceToProducts,fetchResourceMonthReport,fetchProductMonthReport,
    fetchMiscellaneousMonthReport,
    changeDailyResourcesReports,saveMarchedResource} from "../redux/ActionCreator2";
import {actions} from "react-redux-form";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Login from "./Login";
import SignUp from "./SignUp";
import WiterHome from './Receptions/WiterHome';
import Navigation from './Navigation';
import MainManager from './Manager/Main';
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
        miscellaneous: state.miscellaneous,
        dailyInvoices: state.dailyInvoices,
        dailyInvoiceDetails: state.dailyInvoiceDetails,
        dailyStockUp: state.dailyStockUp,
        dailyResourcesReports:state.dailyResourcesReports,
        dailyMiscellaneous: state.dailyMiscellaneous,
        nonPaidInvoices: state.nonPaidInvoices,
        otherDailyReports:state.otherDailyReports,
        marchResourceToProducts: state.marchResourceToProducts,
        reports: state.reports
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMiscellaneousMonthReport:(year, month) => dispatch(fetchMiscellaneousMonthReport(year,month)),
    fetchResourceMonthReport:(year, month) => dispatch(fetchResourceMonthReport(year,month)),
    fetchProductMonthReport:(year, month) =>dispatch(fetchProductMonthReport(year, month)),
    saveMarchedResource: (resource, products) => dispatch(saveMarchedResource(resource, products)),
    fetchMatchResourceToProducts: () => dispatch(fetchMatchResourceToProducts()),
    setDailyPopularProduct:(product) =>dispatch(setDailyPopularProduct(product)),
    changeNonPaidInvoices:(receptionistName) => dispatch(changeNonPaidInvoices(receptionistName)),
    changeDailyResourcesReports: (startDate,endDate) =>dispatch(changeDailyResourcesReports(startDate,endDate)),
    changeDailyMiscellaneous: (startDate,endDate) => dispatch(changeDailyMiscellaneous(startDate,endDate)),
    changeDailyStockUp: (startDate, endDate) => dispatch(changeDailyStockUp(startDate, endDate)),
    changeDailyDetailsInvoices: (stateDate, endDate) => dispatch(changeDailyDetailsInvoices(stateDate, endDate)),
    changeDailyInvoices: (startDate, endDate) => dispatch(changeDailyInvoices(startDate, endDate)),
    uploadMiscellaneous: (values, proof) => dispatch(uploadMiscellaneous(values, proof)),
    uploadWaiter: (values, image) => dispatch(uploadWaiter(values, image)),
    uploadResource: (values, image) => dispatch(uploadResource(values, image)),
    uploadProduct: (values, image) => dispatch(uploadProduct(values, image)),
    pushInvoice: (receptionistName, waiterName, clientName, paymentStatus, totalPrice, orders) => dispatch(pushInvoice(receptionistName, waiterName, clientName, paymentStatus, totalPrice, orders)),
    fetchWaiters: () => dispatch(fetchWaiters()),
    addResourcesReport: (resourceId, unitPrice, quantity, from, name) => dispatch(addResourcesReport(resourceId, unitPrice, quantity, from, name)),
    changeFlippingCardSaveBehavior: (behavior) => dispatch(changeFlippingCardSaveBehavior(behavior)),
    signUp: (value, typeOfUser) => dispatch(signUp(value, typeOfUser)),
    increaseStock: (resourceId, unitPrice, quantity, from, name) => dispatch(increaseStock(resourceId, unitPrice, quantity, from, name)),
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
        this.props.fetchOutOfStockProducts();
        this.props.fetchResources();
        this.props.fetchWaiters();
        this.props.fetchMatchResourceToProducts();
        let date = new Date();
        this.props.fetchResourceMonthReport(date.getFullYear(), date.getMonth());
        this.props.fetchProductMonthReport(date.getFullYear(), date.getMonth());
        this.props.fetchMiscellaneousMonthReport(date.getFullYear(), date.getMonth());



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
        const PrivateRouteW = ({component: Component, ...rest}) => (
            <Route {...rest} render={(props) => {
                let userCollection = JSON.parse(localStorage.getItem('userCollection'));
                let typeOfUser = userCollection.typeOfUser;
                if(localStorage.getItem('user') != null){
                    if(typeOfUser === 'receptionist' ){
                        return <Component {...props} />
                    }
                    else {
                        return <Redirect to={{
                            pathname: '/home',
                            state: {from: props.location}
                        }}/>
                    }
                }
                else {
                    return <Redirect to={{
                        pathname: '/home',
                        state: {from: props.location}
                    }}/>
                }



                // return (
                //     // this.props.auth.isAuthenticated
                //     localStorage.getItem('user') != null
                //         ? <Component {...props} />
                //         : <Redirect to={{
                //             pathname: '/home',
                //             state: {from: props.location}
                //         }}/>
                // )
            }}/>
        );
        const PrivateRouteM = ({component: Component, ...rest}) => (
            <Route {...rest} render={(props) => {
                let userCollection = JSON.parse(localStorage.getItem('userCollection'));
                let typeOfUser = userCollection.typeOfUser;
                if(localStorage.getItem('user') != null){
                    if(typeOfUser === 'stockManager' || typeOfUser === 'manager'){
                        return <Component {...props} />
                    }
                    else {
                       return <Redirect to={{
                            pathname: '/home',
                            state: {from: props.location}
                        }}/>
                    }
                }
                else {
                    return <Redirect to={{
                        pathname: '/home',
                        state: {from: props.location}
                    }}/>
                }



                // return (
                //     // this.props.auth.isAuthenticated
                //     localStorage.getItem('user') != null
                //         ? <Component {...props} />
                //         : <Redirect to={{
                //             pathname: '/home',
                //             state: {from: props.location}
                //         }}/>
                // )
            }}/>
        );
        return (
            <div>
                <Navigation mainNavItems={this.state.mainNavItems}
                            products={this.props.products}
                            auth={this.props.auth}
                            loginUser={this.props.loginUser}
                            logoutUser={this.props.logoutUser}
                            googleLogin={this.props.googleLogin}
                            userCollection={this.props.userCollection}
                            cart={this.props.cart}/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key}
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
                            <Route exact path="/login" component={() => <Login loginUser={this.props.loginUser}
                                                                               googleLogin={this.props.googleLogin}/>}/>
                            <PrivateRouteW exact path="/witer" component={() => <WiterHome products={this.props.products}
                                                                                          addToCart={this.props.addToCart}
                                                                                          removeToCart={this.props.removeToCart}
                                                                                          waiters={this.props.waiters}
                                                                                          cart={this.props.cart}
                                                                                          uploadMiscellaneous={this.props.uploadMiscellaneous}
                                                                                          pushInvoice={this.props.pushInvoice}
                                                                                           nonPaidInvoices={this.props.nonPaidInvoices}
                                                                                           changeNonPaidInvoices={this.props.changeNonPaidInvoices}
                            />}/>

                            <PrivateRouteM path="/management"
                                          component={() => <MainManager products={this.props.products}


                                                                        addToCart={this.props.addToCart}
                                                                        removeToCart={this.props.removeToCart}
                                                                        waiters={this.props.waiters}
                                                                        cart={this.props.cart}
                                                                        pushInvoice={this.props.pushInvoice}
                                                                        dailyStockUp={this.props.dailyStockUp}
                                                                        changeDailyStockUp={this.props.changeDailyStockUp}
                                                                        changeDailyResourcesReports={this.props.changeDailyResourcesReports}
                                                                        dailyResourcesReports={this.props.dailyResourcesReports}
                                                                        changeDailyMiscellaneous={this.props.changeDailyMiscellaneous}
                                                                        dailyMiscellaneous={this.props.dailyMiscellaneous}
                                                                        setDailyPopularProduct={this.props.setDailyPopularProduct}
                                                                        saveMarchedResource={this.props.saveMarchedResource}

                                                                        otherDailyReports={this.props.otherDailyReports}
                                                                        uploadProduct={this.props.uploadProduct}
                                                                        resources={this.props.resources}
                                                                        uploadResource={this.props.uploadResource}
                                                                        increaseStock={this.props.increaseStock}
                                                                        searchingOutput={this.props.searchingOutput}
                                                                        searchText={this.props.searchText}
                                                                        dailyInvoices={this.props.dailyInvoices}
                                                                        dailyInvoiceDetails={this.props.dailyInvoiceDetails}
                                                                        changeDailyDetailsInvoices={this.props.changeDailyDetailsInvoices}
                                                                        changeDailyInvoices={this.props.changeDailyInvoices}
                                                                        miscellaneous={this.props.miscellaneous}
                                                                        uploadMiscellaneous={this.props.uploadMiscellaneous}
                                                                        updateProduct={this.props.updateProduct}
                                                                        addResourcesReport={this.props.addResourcesReport}
                                                                        changeFlippingCardSaveBehavior={this.props.changeFlippingCardSaveBehavior}
                                                                        behaviors={this.props.behaviors}
                                                                        outOfStockProducts={this.props.outOfStockProducts}
                                                                        marchResourceToProducts={this.props.marchResourceToProducts}
                                                                        reports={this.props.reports}
                                                                        fetchResourceMonthReport={this.props.fetchResourceMonthReport}
                                                                        fetchProductMonthReport={this.props.fetchProductMonthReport}
                                                                        fetchMiscellaneousMonthReport={this.props.fetchMiscellaneousMonthReport}
                                                                        uploadWaiter={this.props.uploadWaiter}
                                          />}


                            />

                            <Route path="/signup" component={() => <SignUp signUp={this.props.signUp}/>}/>


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