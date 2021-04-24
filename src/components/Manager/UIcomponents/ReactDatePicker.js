import React from 'react'
import {FormGroup, Label, FormText} from 'reactstrap'
import {Alert} from 'reactstrap';

var DatePicker = require("reactstrap-date-picker");

class ReactDatePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date().toISOString(),
            formattedValue: 'Today',
            selectedDate: false
        }
    }

    handleChange(value, formattedValue) {
        this.setState({
            value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
            formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
        })
    }

    componentDidUpdate() {
        // Access ISO String and formatted values from the DOM.
        var hiddenInputElement = document.getElementById("example-datepicker");
        console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
        console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
    }

    render() {
        return (
            <FormGroup>
                <Label> </Label>
                <DatePicker id="example-datepicker"
                            value={this.state.value}
                            onChange={(v, f) => this.handleChange(v, f)}/>
                <FormText> <Alert color="info">Selected Date: <b> {this.state.formattedValue} </b> click <a
                    className="alert-link">here </a> to fetch data</Alert> </FormText>
            </FormGroup>
        )
    }
}

export default ReactDatePicker;