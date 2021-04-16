import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import About from './AboutComponent';
import {
  postComment,
  postFeedback,
  fetchDishes,
  fetchRecommanded,
  fetchComments,
  fetchLeaders,
  fetchOutOfStockProducts,
  searchText
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Login from "./Login";
import WiterHome from './Receptions/WiterHome';
import Navigation from './Navigation';
import Management from "./Manager/Management";

const mapStateToProps = state => {
  return {
    products: state.products,
    comments: state.comments,
    recommanded: state.recommanded,
    leaders: state.leaders,
    oneProduct:state.oneProduct,
    outOfStockProducts: state.outOfStockProducts,
    searchingOutput: state.searchingOutput
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchOutOfStockProducts: () =>{dispatch(fetchOutOfStockProducts()) },
  fetchDishes: () => { dispatch(fetchDishes()) },
  searchText: (products,text) =>dispatch(searchText(products, text)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchRecommanded: () => { dispatch(fetchRecommanded()) },
  fetchLeaders: () => { dispatch(fetchLeaders()) },
  postFeedback: (firstname, lastname, email, contactType, telnum, agree) => dispatch(postFeedback(firstname, lastname, email, contactType, telnum, agree))

});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchRecommanded();
    this.props.fetchLeaders();
    this.props.fetchOutOfStockProducts();




  }


  render() {
    const HomePage = () => {
      return (
        <Home products={this.props.products}
          dish={this.props.products.products.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.products.isLoading}
          dishesErrMess={this.props.products.errMess}
          promotion={this.props.recommanded.recommanded.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
          promosLoading={this.props.recommanded.isLoading}
          promosErrMess={this.props.recommanded.errMess}

        />
      );
    }

    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          ErrMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}

        />
      );





    }
    return (
      <div>
        <Navigation />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/Home" component={HomePage} />
              <Route exact path="/menu" component={() => <Menu products={this.props.products} />} />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
              <Route exact path="/login" component={() =><Login /> } />
              <Route exact path="/witer" component={() => <WiterHome />}/>
              <Route exact path="/Manage" component={() => <Management outOfStockProducts={this.props.outOfStockProducts}
                                                                       searchingOutput={this.props.searchingOutput}
                                                                       searchText = {this.props.searchText}
                                                                       products={this.props.products}/>}/>
                
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));