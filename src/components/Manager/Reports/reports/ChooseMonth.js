import {Col, Form, Row} from "reactstrap";
import React from "react";

let ChooseMonth  = () =>{
    let months = [
        '1 January',
        '2 February',
        '3 March',
        '4 April',
        '5 May',
        '6 June',
        '7 July',
        '8 August',
        '9 September',
        '10 October',
        '11 November',
        '12 December'
    ];
    let generateArrayOfYears = () => {
        let max = new Date().getFullYear();
        let min = max - 10
        let years = []

        for (let i = max; i >= min; i--) {
            years.push(i)
        }
        return years
    }
    let years = generateArrayOfYears();


    let monthsInOptions = months.map((month,index) =>{
        return (
            <option key={month} value={index + 1}>{month} </option>
        )
    });
    let yearsInOptions = years.map(year =>{
        return (
            <option key={year} value={year}>{year} </option>
        )
    });


    return (
        <Row>
            <Col>
                <Form>
                    <Row>
                        <Col>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Year</label>
                                </div>
                                <select name='year' className="custom-select" onChange="{changeChosenProduct}">
                                    <option value="null" selected>Choose...</option>
                                    {yearsInOptions}
                                </select>
                            </div>
                        </Col>
                        <Col>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Month</label>
                                </div>
                                <select name='year' className="custom-select" onChange="{changeChosenProduct}">
                                    <option value="null" selected>Choose...</option>
                                    {monthsInOptions}
                                </select>
                            </div>
                        </Col>

                    </Row>
                </Form>
            </Col>
        </Row>
    )
}
export default ChooseMonth;