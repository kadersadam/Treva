import React, { useState } from "react";
import { makeStyles } from '@mui/styles'
import Card from 'react-bootstrap/Card';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import Colors from "../../../helpers/Colors";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& .mobile_login': {
            // display: 'inline-flex',
            width: '300px',
            padding: '20px',
            textAlign: 'start',
            // height: '30vh',
            fontSize: '15px',
            // fontWeight: 'bold',
            ['@media (max-width:800px)']: {
                width: '100%'
            },
            ['@media (max-width:500px)']: {
                width: '100%'
            }

        },
        '& .PhoneInput': {
            border: '1px solid #C2C2C2',
            borderRadius: '40px',
            padding: ' 6px 10px',
            minWidth: '0',
            width: '100%',
            marginBottom: '20px',
            marginTop: '10px',
            '& .PhoneInputInput': {
                border: 'none',
                outline: 'none',
                color: '#4D4D4D',
                fontSize: '14px',
                fontWeight: 'bold'

            }
        },
        '& .otp_button': {
            marginTop: '10px',
            // width: '100px',
            border: '1px solid #F2F2F2',
            borderRadius: '50px',
            padding: '5px 50px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '20px',
            background: 'linear-gradient(to right bottom, #08E0C3, #28C5E5)',
            color: Colors.white,
            fontSize: '15px',
            fontWeight: 'bold',
            ['@media (max-width:800px)']: {
                padding: '5px 40px',
                marginTop: '0px',
            },

        },
        '& .register_anchor': {
            marginTop: '20px',
            '& button': {
                color: Colors.orange,
                fontSize: '15px',
                fontWeight: 'bold',
                border: 'none',
                background: 'none',

            }
        }

    }
})

const LoginMobile = ({ number, setNumber, setIsOtpClicked, setActiveTab }) => {
    const [otp, setotp] = useState("")
    const [active, setactive] = useState(false)


    const sendotp = () => {
        setIsOtpClicked(true)

    }
    const Forms = () => {
        setActiveTab("2")
    }


    const classes = useStyles()
    return (
        <div className={classes.root}>
            <section >
                <Card className="mobile_login">
                    <label>Mobile Number</label>
                    <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="IN"
                        value={number}
                        onChange={setNumber}
                        maxlength="16"
                    />
                    <button className="otp_button" onClick={sendotp} value={otp}>Send OTP</button>
                </Card>
                <div className="register_anchor">

                    <button onClick={Forms}>Register Now</button>
                    {/* {
                        isLoginPage ?
                            'Login Page' : 'Register Page'
                    } */}
                </div>
            </section>


        </div>
    )
}

export default LoginMobile;