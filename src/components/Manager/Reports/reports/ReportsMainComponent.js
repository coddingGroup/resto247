
import React, {useState} from "react";
import ChooseMonth from "./ChooseMonth";
import ProfitCard from "./ProfitCard";
import TempleteToDisplayDataInTableFromArray from "./TempleteToDisplayDataInTableFromArray";

const ReportsMainComponent = (props) => {
    let date = new Date();
    const [month,setMonth] = useState(date.getMonth() + 1);
    const [year, setYear] = useState(date.getFullYear());

    let monthExpensesOnStock = 0;
    props.reports.resourceMonthReport.map(report =>{
        monthExpensesOnStock += report.totalCost;
    });

    let monthIncome = 0;
    props.reports.productMonthReport.map(report =>{
        monthIncome+= report.totalPrice;
    })
    let monthExpenseMiscellaneous = 0;
    props.reports.miscellaneousMonthReport.map(report =>{
        if(report.isExpanse){
            monthExpenseMiscellaneous+= report.totalMoney;
        }
    })

    let makeFetchingAction = (mth) =>{
        props.fetchResourceMonthReport(year, mth);
        props.fetchProductMonthReport(year,mth);
        props.fetchMiscellaneousMonthReport(year,mth);
    }

        // let popularProductCalc = () =>{
    //     let popularProduct = {
    //         totalPrice:0,
    //         totalQuantity: 0,
    //         productName:''
    //     };
    //     if(props.dailyInvoiceDetails === null || props.dailyInvoiceDetails){
    //         return;
    //     }
    //     else if(props.dailyInvoiceDetails.dailyInvoiceDetails === null || props.dailyInvoiceDetails.dailyInvoiceDetails){
    //         return;
    //     }
    //     let products = props.dailyInvoiceDetails.products;
    //      if(products === undefined || products ===null){
    //         return
    //     }
    //     products.forEach((product) => {
    //
    //         let receptionist = Object.keys(props.dailyInvoices.dailyInvoices[product]);
    //         let totalPrice = 0;
    //         let totalQuantity = 0;
    //         receptionist.forEach((rec) => {
    //             totalPrice += parseInt(props.dailyInvoices.dailyInvoices[product][rec].totalPrice);
    //             totalQuantity += parseInt(props.dailyInvoices.dailyInvoices[product][rec].totalQuantity);
    //             if( popularProduct.totalQuantity <= totalQuantity){
    //                 popularProduct.totalQuantity = totalQuantity;
    //                 popularProduct.totalPrice = totalPrice;
    //                 popularProduct.productName = product;
    //             }
    //
    //
    //         });
    //
    //
    //     });
    //     props.setDailyPopularProduct(popularProduct);
    // }
    //
    //
    //
    // popularProductCalc();




    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-2 mt-4">
                    <h3>Choose Date</h3>
                </div>
                <div className="col-12 col-md-8 ">
                    <ChooseMonth  month={month} setMonth={setMonth} year={year}
                                  setYear={setYear} makeFetchingAction={makeFetchingAction}   />


                </div>
            </div>
            <div className="row">
                <ProfitCard monthIncone={monthIncome} monthExpensesOnStock={monthExpensesOnStock} monthExpenseMiscellaneous={monthExpenseMiscellaneous} />
            </div>
            <div className="row">
                <div className="col">

                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">


                    <TempleteToDisplayDataInTableFromArray reports={props.reports} dataToDisplay={props.reports.productMonthReport}
                                                           data={{name:"name",totalPrice:"total Price",totalQuantity: 'Total quantity',month:"month",year:"year"}}
                                                           displayName={"product Month Report"}
                                                           idToUse={"scrollableDivInProductMonthReport"}

                    />
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">


                    <TempleteToDisplayDataInTableFromArray reports={props.reports} dataToDisplay={props.reports.resourceMonthReport}
                                                           data={{name:"name",totalCost:"total Cost",totalQuantity: 'Total quantity',month:"month",year:"year"}}
                                                           displayName={"Resource Month Report"}
                                                           idToUse={"scrollableDivInResourceMonthReport"}

                    />
                </div>
                <div className="col-sm-6">


                    <TempleteToDisplayDataInTableFromArray reports={props.reports} dataToDisplay={props.reports.miscellaneousMonthReport}
                                                           data={{reason:"reason",totalMoney:"total Money",month:"month",year:"year"}}
                                                           displayName={"Miscellaneous Month Report"}
                                                           idToUse={"scrollableDivInMiscellaneousMonthReport"}

                    />
                </div>
            </div>
        </div>


    );
}

export default ReportsMainComponent;