import React, {useRef, useState} from 'react';
import {Button, Col, Form, Input, Label, Row, Table} from 'reactstrap';
import {useReactToPrint} from 'react-to-print';
import '../../css/printStyle.css';

const OneItem = ({item, itemKey, removeToCart}) => {

    const deleteItem = () => {
        removeToCart(item.id);
    }
    return (
        <tr className="changeFont" key={item.id + "k" + itemKey}>
            <th scope="row">
                {itemKey}
            </th>
            <td>
                {item.name}
            </td>
            <td>
                {item.quantity}
            </td>
            <td>
                {item.price * item.quantity}
            </td>
            <td className="dontPrint">
                <Button onClick={deleteItem} id={item.id + "k" + itemKey} className="bg-danger"><span
                    className="fa fa-lg fa-trash"></span></Button>


            </td>

        </tr>
    )
}
const TableItems = React.forwardRef(
    (props, ref) => {



        if (props.cart.items.length === 0) {
            return <tr></tr>
        } else {
            let waitersInOptions = props.waiters.map(oneWaiter =>{
                return(
                    <option>
                        {oneWaiter.firstName}
                    </option>
                )
            });
            let handleChange = (event) =>{
                let name = event.target.name;
                let value = event.target.value;
                if(name==="waiterName"){
                    props.setWaiterName(value);
                    localStorage.setItem('waiterName',value);
                }
                else if(name==="paymentStatus"){
                    let isChecked = event.target.checked;
                    if(isChecked){
                        props.setPaymentStatus('paid');
                        props.setChecked(true);
                        localStorage.setItem('paymentCheckBox','true');
                    }
                    else {
                        props.setPaymentStatus('notPaid');
                        props.setChecked(false);
                        localStorage.setItem('paymentCheckBox','false');
                    }
                }
                else if(name==="clientName"){
                    props.setClientName(value);
                    localStorage.setItem('clientName',value);
                }

            }


            let keys = Object.keys(props.cart.items);
            let totalPrice = 0, totalQuantity = 0;
            let items = keys.map(key => {
                totalQuantity += parseInt(props.cart.items[key].quantity);
                totalPrice += (props.cart.items[key].price * props.cart.items[key].quantity);

                return (
                    <OneItem removeToCart={props.removeToCart} item={props.cart.items[key]} itemKey={key} key={key}/>
                )

            })

            return (
                <div className="allContentToPrint" ref={ref}>
                    <div className="changeFont2 container-fluid showWenPrint">
                        <div className="row justify-content-center ">
                            <h2> 24/7 Resto </h2>
                        </div>


                        <div className="row justify-content-center">
                            <div className="col">
                                <b> Client : </b>
                            <span className=""> {props.clientName} </span>
                            </div> <div className="col">|     |</div>
                            <div className="col">
                                <b>Waiter : </b>
                                <span className=""> {props.waiterName} </span>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col">
                                <b>Receptionist : </b>
                                <span> {JSON.parse(localStorage.getItem('userCollection')).firstName} </span>
                            </div>
                            <div className="col">
                                |     |
                            </div>

                            <div className="col">
                                <h2 className="mr-5"> Date</h2> {props.date}
                            </div>
                        </div>


                    </div>
                    <Table striped>
                        <thead>
                        <tr className="changeFont">
                            <th>#</th>
                            <th>Product Name</th>
                            <th> Quantity</th>
                            <th> Price</th>
                            <th className="dontPrint">Operations</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items}
                        <tr className="changeFont">
                            <th>
                                T
                            </th>
                            <th> Total</th>
                            <th> {totalQuantity} </th>
                            <th> {totalPrice}</th>
                        </tr>

                        </tbody>
                    </Table>
                    <div className="mt-5 changeFont">


                        <Form>
                            <Row>
                                <Col>
                                    <Row className="form-group">
                                        <Col><Label className="dontPrint"><b>Client Name</b></Label>
                                        </Col>
                                        <Col>
                                            <Input className="dontPrint" name='clientName' value={props.clientName} onChange={handleChange} type="text"/>


                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Label className="dontPrint" > <b> Order is paid ?</b></Label>
                                        </Col>
                                        <Col>
                                            <Input className="dontPrint" name="paymentStatus" defaultChecked={props.checked} onChange={handleChange} type="checkBox"/>

                                        </Col>


                                    </Row>
                                    <Row>
                                        <span className="showWenPrint inCenter"><b> order is  {props.paymentStatus}</b> </span>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="form-group">
                                        <Col>
                                            <Label className="dontPrint"> <b>waiter</b> </Label>
                                        </Col>
                                        <Col>
                                            <select className="dontPrint" name="waiterName" onChange={handleChange} value={props.waiterName}>
                                                {waitersInOptions}
                                            </select>

                                        </Col>


                                    </Row>

                                </Col>


                            </Row>

                        </Form>
                    </div>
                </div>

            );
        }
    }
);
let TableAddedCarts = ({cart, removeToCart, pushInvoice,waiters}) => {
    const [userCollection] = useState(JSON.parse(localStorage.getItem("userCollection")));
    const [date, setDate] = useState('');
    const [totalQuantity] = useState(0);
    const [totalPrice] = useState(0);
    const [checked, setChecked] = useState(localStorage.getItem('paymentCheckBox') === 'true');
    //const [order,setOrder] = useState(null);
    const [waiterName, setWaiterName] = useState(localStorage.getItem('waiterName') === null?(waiters[0] === undefined?'':waiters[0].firstName):localStorage.getItem('waiterName'));
    const [clientName, setClientName] = useState(localStorage.getItem('clientName')===null?'client':localStorage.getItem('clientName'));
    const [paymentStatus, setPaymentStatus] = useState(localStorage.getItem("paymentCheckBox")==='true'?'paid':'notPaid');
    const [receptionistName] = useState('aime');
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    let handleClick = (event) => {
        localStorage.setItem('paymentCheckBox','false');
        setPaymentStatus('notPaid');
        setClientName('client');
        setChecked(false);

        localStorage.setItem('clientName','client');

        let orderDate = new Date();
        let hour = String(orderDate.getHours()).padStart(2, '0');
        let min = String(orderDate.getMinutes()).padStart(2, '0');
        let dd = String(orderDate.getDate()).padStart(2, '0');
        let mm = String(orderDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = orderDate.getFullYear();

        orderDate = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + min;
        setDate(orderDate);
        handlePrint();
        let keys = Object.keys(cart.items);
        let order = [];
        let totalPrice = 0;
        let totalQuantity = 0;
        keys.forEach(key => {
            let matched ;
            if(cart.items[key].matched !==undefined){
                matched = cart.items[key].matched;
            }
            else if(cart.items[key].marched !==undefined){
                //miss typing at first data
                matched = cart.items[key].marched;
            }
            else{
                matched=false;
            }
            order = [...order, {
                price: cart.items[key].price
                , productName: cart.items[key].name
                , quantity: cart.items[key].quantity,
                matched: matched
            }];
            totalQuantity = totalQuantity + parseInt(cart.items[key].quantity);
            totalPrice = totalPrice + (cart.items[key].price * cart.items[key].quantity);
        })
        pushInvoice(userCollection.firstName, waiterName, clientName, paymentStatus, totalPrice, order);

    }

    return (
        <div>
            <TableItems date={date} cart={cart}
                        waiters={waiters}
                        totalPrice={totalPrice} totalQuantity={totalQuantity} receptionistName={receptionistName}
                        waiterName={waiterName} setWaiterName={setWaiterName}
                        checked={checked} setChecked={setChecked}
                        clientName={clientName} setClientName={setClientName}
                        paymentStatus={paymentStatus} setPaymentStatus={setPaymentStatus}
                        removeToCart={removeToCart} ref={componentRef}/>
            <div className="d-flex justify-content-center">
                <Button onClick={handleClick} color="light"> <i className="d-flex add-to-cart-icon2"> Print {' '} </i><i
                    className="fa fa-3x fa-arrow-circle-right add-to-cart-icon2"></i> </Button>

            </div>

        </div>
    )
}

export default TableAddedCarts;
