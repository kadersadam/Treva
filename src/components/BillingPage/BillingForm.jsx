import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Checkbox } from 'antd';
import { Card } from "react-bootstrap";
import Colors from "../../helpers/Colors";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import axios from "axios";

const useStyles = makeStyles({
    root: {
        '& .billing_form': {
            '& h3': {
                fontSize: '25px',
                color: Colors.orange
            },
            '& .billing_card': {
                padding: '10px 30px',
                '& label': {
                    display: 'flex',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: Colors.grey,

                },
                '& input': {
                    padding: '5px 0px 5px 15px',
                    border: '1px solid #C2C2C2',
                    width: '100%',
                    // border: 'none',
                    outline: 'none',
                    color: '#4D4D4D',
                    // fontSize: '14px',
                    // fontWeight: 'bold',
                    borderRadius: '40px',
                }
            },
            '& .PhoneInput': {
                border: '1px solid #C2C2C2',
                borderRadius: '40px',
                '& .PhoneInputCountry': {
                    marginLeft: '10px'
                },
                '& .PhoneInputInput': {
                    border: 'none',
                    marginLeft: '-10px'
                },

            },
            '& select': {
                width: '100%',
                border: '1px solid #C2C2C2',
                borderRadius: '50px',
                padding: '0px 10px',
                outline: 'none',
                padding: '5px 0px 5px 15px',
            },
            '& textarea': {
                borderRadius: '6px',
                padding: '12px 0px 0px 15px',
                height: '20vh',
                outline: 'none',
                border: '1px solid #C2C2C2',
                marginBottom: '10px'

            },
            '& .ship_button': {
                width: '100%',
                fontSize: '15px',
                fontWeight: 'bold',
                padding: '5px 0px',
                border: '1px solid #F2F2F2',
                borderRadius: '20px',
                outline: 'none',
                background: 'linear-gradient(to right bottom, #08E0C3, #28C5E5)',
                color: Colors.white,
            },
            '& .ant-checkbox +span': {
                paddingRight: '0px ',
            }
        }

    }
})
const BillingForm = ({ setCurrentPage }) => {
    // const next = () => setCurrentPage((prev) => prev + 1);
    const [number, setNumber] = useState("")
    // const [payment, setpayment] = useState('https://api.razorpay.com/v1/payments')
    // const next = () => {
    //     setpayment(payment)
    // }
    // const payment = 'https://api.razorpay.com/v1/payments'

    const next = () => setCurrentPage((prev) => prev + 1);


    useEffect(() => {

        axios.get('https://api.razorpay.com/v1/payments')
        //     return () => {
        //         false
        //     }
    }, [])
   



    const classes = useStyles()
    return (
        <div className={classes.root}>
            <section className="billing_form">
                <div>
                    <h3>Billing Address</h3>
                    <Checkbox style={{ marginBottom: '10px', fontSize: '14px', color: Colors.grey, }}><span>Save this information for next time</span></Checkbox>
                    <Card className="billing_card ">
                        <div className="row ">
                            <div className={"col-lg-6  py-2"}>
                                <label>First Name</label>
                                <input type="text" placeholder="Enter Your name" />
                            </div>
                            <div className={"col-lg-6  py-2"}>
                                <label>Last Name</label>
                                <input type="text" placeholder="Enter Your name" />
                            </div>
                        </div>
                        <div className={"row  "}>
                            <div className={"col-lg-6  py-2"}>
                                <label>Email ID</label>
                                <input type="mail" placeholder="Enter Your mail" />
                            </div>
                            <div className={"col-lg-6  py-2"}>
                                <label>Mobile Number</label>

                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="IN"
                                    value={number}
                                    onChange={setNumber}
                                    maxlength="16"
                                    className="input"
                                />
                            </div>
                        </div>
                        {/* <div className={"py-2"}> */}
                        <label>Address</label>
                        <textarea placeholder="Enter Your Address" style={{}} />
                        {/* </div> */}

                        <div className={"row"}>
                            <div className={"col-lg-6 py-2"}>
                                <label>LandMark<span>(optional)</span></label>
                                <input type="text" placeholder="Add Landmark" />
                            </div>
                            <div className={"col-lg-6  py-2"}>
                                <label>State</label>
                                <select>
                                    <option>Delhi</option>
                                    <option>TamilNadu</option>
                                    <option>Kerala</option>
                                    <option>Mumbai</option>
                                    <option>Punjab</option>
                                    <option>Thiruvandrapuram</option>

                                </select>
                            </div>
                        </div>
                        <div className={"row  "}>
                            <div className={"col-lg-6  py-2"}>
                                <label>City</label>
                                <select>
                                    <option selected>Select City</option>
                                    <option>Delhi</option>
                                    <option>Chennai</option>
                                    <option>Thiruvandrapuram</option>
                                    <option>bombay</option>
                                    <option>Punjab</option>
                                </select>
                            </div>
                            <div className={"col-lg-6  py-2"}>
                                <label>Postal Code</label>
                                <input type="number" placeholder="Enter postal code" />
                            </div>
                        </div>
                        <div className={"row "} >
                            <div className={"col-lg-5  py-2"}>
                                <button className="ship_button" onClick={next}> Continue To Payment</button>
                            </div>
                        </div>

                    </Card>
                </div>
            </section>
        </div>
    )
}

export default BillingForm