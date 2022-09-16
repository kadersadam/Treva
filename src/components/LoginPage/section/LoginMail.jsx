import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles'
import Card from 'react-bootstrap/Card';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { ImKey } from 'react-icons/im';
import Colors from "../../../helpers/Colors";
import FontSize from "../../../helpers/Fontsize";
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles({
    root: {
        '& .Mail_div': {
            display: 'flex',
            justifyContent: 'center',
        },
        '& .mobile_login': {
            // display: 'inline-flex',
            width: '300px',
            padding: '20px',
            textAlign: 'start',
            // height: '30vh',
            fontSize: '15px',
            // fontWeight: 'bold',
            position: 'relative',
            ['@media (max-width:800px)']: {
                width: '60%'
            },
            ['@media (max-width:500px)']: {
                width: '100%'
            },
           
            '& .icon_con': {
                position: 'absolute',
                bottom: '15%',
                right: '10px'
            },
            '& .password_con': {
                position: 'relative'
            },
            '& input': {
                width: '100%',
                padding: '6px 5px 6px 30px',
                borderRadius: '25px',
                margin: '6px 0 0 0',
                border: `1px solid ${Colors.grey1}`,
                outline: 'none'
            },
            '& .submit_button': {
                border: '1px solid #F2F2F2',
                borderRadius: '50px',
                padding: '5px 50px',
                display: 'flex',
                margin: '10px auto 0 auto',
                background: 'linear-gradient(to right bottom, #08E0C3, #28C5E5)',
                color: Colors.white,
                fontSize: '15px',
                fontWeight: 'bold',
                ['@media (max-width:800px)']: {
                    padding: '5px 40px',
                    marginTop: '0px',
                },

            },
            '& .forgot_pwd': {
                textAlign: 'right',
                fontSize: FontSize.mdScreen,
                cursor: 'pointer'
            },
            '& .mail_con': {
                position: 'relative'
            },
            '& .mail_icon': {
                position: 'absolute',
                bottom: '24%',
                left: 10,
                color: Colors.yellow
            }
        },
        '& .register_anchor': {
            marginTop: '20px',
            textAlign: 'center',
            '& button': {
                color: Colors.orange,
                fontSize: '15px',
                fontWeight: 'bold',
                border: 'none',
                background:'none'

            }
        }
    }
})


const LoginMail = ({ setForm, iconLoad, seticonLoad, setpassword} ) => {
    const classes = useStyles()

    
    // const navigate = useNavigate()
    
    const gotoForm = () => {
        setForm(true)
    }
    const onOpenClose = () => {
        seticonLoad(!iconLoad)
    }

    const test = (e) => {
        e.preventDefault();
        alert('submitted')
    }

    return (
        <div className={classes.root}>
            <section className="Mail_div">
                <Card className="mobile_login">
                    <form action="" onSubmit={test}>
                        <label>Email ID</label>
                        <div className="mail_con">
                            <input type="email" placeholder="Enter your Email id..." required />
                            <GrMail className="mail_icon" size={18} />
                        </div>

                        <label className="mt-2">password</label>
                        <div className="password_con">
                            <input type={iconLoad ? 'text' : 'password'} placeholder='Enter your Password' onChange={e => setpassword(e.target.value)} required />
                            <span className="icon_con" > {iconLoad ? <AiFillEye onClick={onOpenClose} size={25}  /> : <AiFillEyeInvisible onClick={onOpenClose} size={25}  /> }</span>
                            <ImKey className="mail_icon" size={18} />
                        </div>
                        <div className="forgot_pwd mt-1">Forgot Password?</div>
                        <button className="submit_button" >Submit</button>

                    </form>
                </Card>
            </section>
            <div className="register_anchor">
                <button onClick={gotoForm}>Register Now</button><br/>

               
            </div>
        </div>
    )
}
// () => setIsLoginPage(pre => !pre)
export default LoginMail;