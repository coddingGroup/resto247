import '../../../../css/styles.css';


let ProfitCard = (props) =>{
    let grossProfit =props.monthIncone - props.monthExpensesOnStock;
    let operatingProfit =grossProfit - props.monthExpenseMiscellaneous;
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card-box-outer color2">
                        <div className="inner">
                            <h3> {grossProfit} </h3>
                            <p> Gross Profit </p>
                        </div>
                        <div href="#" className="card-box-footer">
                        <div className="row">







                            <div className="col-sm-6">
                                <div className="card-box color3">
                                    <div className="inner">
                                        <h3> {props.monthExpensesOnStock} </h3>
                                        <p> Money spends </p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-money" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card-box bg-orange">
                                    <div className="inner">
                                        <h3> {props.monthIncone} </h3>
                                        <p> Money earn </p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>











                        </div>

                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card-box-outer bg-light color2F">
                        <div className="inner">
                            <h3> {operatingProfit} </h3>
                            <p> Operating profit </p>
                        </div>
                        <div href="#" className="card-box-footer">
                            <div className="row">







                                <div className="col-sm-6">
                                    <div className="card-box color2">
                                        <div className="inner">
                                            <h3> {grossProfit} </h3>
                                            <p> grossProfit </p>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-money" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card-box bg-warning">
                                        <div className="inner">
                                            <h3> {props.monthExpenseMiscellaneous} </h3>
                                            <p> Miscellaneous (Expense) </p>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>











                            </div>

                        </div>
                    </div>
                </div>















                {/*<div className="col-lg-3 col-sm-6">*/}
                {/*    <div className="card-box bg-green">*/}
                {/*        <div className="inner">*/}
                {/*            <h3> ₹185358 </h3>*/}
                {/*            <p> Today’s Collection </p>*/}
                {/*        </div>*/}
                {/*        <div className="icon">*/}
                {/*            <i className="fa fa-money" aria-hidden="true"></i>*/}
                {/*        </div>*/}
                {/*        <a href="#" className="card-box-footer">View More <i*/}
                {/*            className="fa fa-arrow-circle-right"></i></a>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col-lg-3 col-sm-6">*/}
                {/*    <div className="card-box bg-orange">*/}
                {/*        <div className="inner">*/}
                {/*            <h3> 5464 </h3>*/}
                {/*            <p> New Admissions </p>*/}
                {/*        </div>*/}
                {/*        <div className="icon">*/}
                {/*            <i className="fa fa-user-plus" aria-hidden="true"></i>*/}
                {/*        </div>*/}
                {/*        <a href="#" className="card-box-footer">View More <i*/}
                {/*            className="fa fa-arrow-circle-right"></i></a>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col-lg-3 col-sm-6">*/}
                {/*    <div className="card-box bg-red">*/}
                {/*        <div className="inner">*/}
                {/*            <h3> 723 </h3>*/}
                {/*            <p> Faculty Strength </p>*/}
                {/*        </div>*/}
                {/*        <div className="icon">*/}
                {/*            <i className="fa fa-users"></i>*/}
                {/*        </div>*/}
                {/*        <a href="#" className="card-box-footer">View More <i*/}
                {/*            className="fa fa-arrow-circle-right"></i></a>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
export default ProfitCard;