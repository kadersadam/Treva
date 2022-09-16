import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import OTPInput from "otp-input-react";
import Card from 'react-bootstrap/Card';
import Colors from "../../../helpers/Colors";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& .mobile_login': {
            width: '300px',
            padding: '20px',
            // textAlign: 'start',
            // height: '30vh',
            fontSize: '15px',
            // fontWeight: 'bold',
            '& p': {
                margin: '0'
            }
        },

        '& .otp_field': {
            // background: 'red',
            margin: '10px  auto ',
            
            '& input': {
                margin: '0px 5px !important',
                border: '1px dashed grey',
                outline:'none'
            }
        },
        '& .verify_button': {
            border: '1px solid #F2F2F2',
            borderRadius: '50px',
            padding: '5px 50px',
            display: 'flex',
            margin: '10px auto 0 auto',
            background: 'linear-gradient(to right bottom, #08E0C3, #28C5E5)',
            color: Colors.white,
            fontSize: '15px',
            fontWeight: 'bold',
        }
    }
})

const LoginOtp = ({ number }) => {
    const navigate=useNavigate()
    const [OTP, setOTP] = useState("");
    const verify_otp = () => {
        navigate('/shipping')
    }
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Card className="mobile_login">
                <p>OTP Verify</p>
                <span>Enter OTP Sent on  {number} </span>
                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure className="otp_field" />
                <button className="verify_button" onClick={verify_otp}>Verify</button>
            </Card>
        </div>
    )
}

export default LoginOtp;