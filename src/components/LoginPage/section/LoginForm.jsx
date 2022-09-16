import React, { useState } from "react";
import { makeStyles } from '@mui/styles'
import { Card } from "react-bootstrap";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { ImKey } from 'react-icons/im';
import { FaUser } from 'react-icons/fa'
import Colors from "../../../helpers/Colors";
import { Link } from "react-router-dom";
// import FontSize from "../../../helpers/Fontsize";


const useStyles = makeStyles({
    root: {
        '& .form_card': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        '& .form_container': {
            width: '400px',
            // width:'100%',
            padding: '20px',

            '& label': {
                display: 'flex'
            }

        },

        '& .user_con': {
            position: 'relative',
            // width: '100%',


            '& input': {
                border: '1px solid #C2C2C2',
                borderRadius: '40px',
                padding: ' 6px 40px',
                width: '100%',
                outline: 'none',
                fontSize: '14px',
                marginBottom: '20px',
                minWidth: '0',
            }

        },
        '& .user_icon': {
            position: 'absolute',
            bottom: '53%',
            left: 10,
            color: Colors.yellow,
        },
        '& .mail_con': {
            position: 'relative',
            '& input': {
                border: '1px solid #C2C2C2',
                borderRadius: '40px',
                padding: ' 6px 40px',
                width: '100%',
                outline: 'none',
                fontSize: '14px',
                marginBottom: '20px',
                minWidth: '0',

            }

        },
        '& .mail_icon': {
            position: 'absolute',
            bottom: '53%',
            left: 10,
            color: Colors.yellow
        },

        '& .PhoneInput': {
            border: '1px solid #C2C2C2',
            borderRadius: '40px',
            padding: ' 6px 10px',
            minWidth: '0',
            width: '100%',
            marginBottom: '20px',
            marginTop: '0px',
            '& .PhoneInputInput': {
                border: 'none',
                outline: 'none',
                color: '#4D4D4D',
                fontSize: '14px',
                fontWeight: 'bold'

            }
        },
        '& .password_con': {
            position: 'relative',
            '& .Imkey_icon': {
                position: 'absolute',
                bottom: '53%',
                left: 10,
                color: Colors.yellow
            },
            '& input': {
                border: '1px solid #C2C2C2',
                borderRadius: '40px',
                padding: ' 6px 40px',
                width: '100%',
                outline: 'none',
                fontSize: '14px',
                marginBottom: '20px',
                minWidth: '0',
            }
        },
        '& .icon_con': {
            position: 'absolute',
            bottom: '44%',
            right: '20px'
        },
        '& .adress': {
            // marginLeft: '-64px',
            '& textarea': {
                width: '100%',
                padding: '0px 30px 0px 50px',
                textAlign: 'start',
                border: '1px solid grey',
                outline: 'none',
                height: '20vh',

            }
        },
        '& .selection': {
            // marginLeft: '10px',
            width: '100%',


            // '& .options': {
            '& select': {
                width: '100%',
                border: '1px solid grey',
                borderRadius: '50px',
                padding: '6px 10px',
                outline: 'none',
                marginBottom: '20px',
                // background: 'red',


            },



            // }
        },
        '& .submit_form': {
            border: '1px solid #F2F2F2',
            borderRadius: '50px',
            padding: '5px 50px',
            display: 'flex',
            margin: '10px auto 0 auto',
            background: 'linear-gradient(to right bottom, #08E0C3, #28C5E5)',
            color: Colors.white,
            fontSize: '15px',
            fontWeight: 'bold',
            // width:'50%'
        },
        '& .already_account': {
            marginTop: '20px',
            // textAlign: 'center',
            '& button': {
                border: 'none',
                background: 'none',
                color: Colors.orange,
                fontSize: '15px',
                fontWeight: 'bold',



            }
        }
        // '& .form-flex': {

        //     display: "flex",
        //     justifyContent: "space-evenly",
        //     alignItems: "center",
        //     ['@media (max-width:500px)']: {
        //         display: "block",
        //     },
        // },

    }
})
const LoginForm = ({ number, setNumber, iconLoad, seticonLoad, setpassword,  setActiveTab }) => {
    const onOpenClose = () => {
        seticonLoad(!iconLoad)
    }

    const haveaccount = () => {
        setActiveTab("1")

    }
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <section className="form_card">
                <Card className="form_container">
                    <form >
                        {/* <div className="d-flex "> */}
                        {/* <div className="form-flex"> */}
                        <div >
                            <div >
                                <div>
                                    <label>Name</label>
                                    <div className="user_con">
                                        <input type="name" placeholder="Enter your name..." />
                                        <FaUser className="user_icon" size={18} />
                                    </div>
                                </div>
                                <div>
                                    <label>Mobile Number</label>
                                    <PhoneInput
                                        international
                                        countryCallingCodeEditable={false}
                                        defaultCountry="IN"
                                        // value={number}
                                        onChange={setNumber}
                                        maxlength="16"
                                    />

                                </div>
                            </div>
                            <div >
                                <div >
                                    <label>Email ID</label>
                                    <div className="mail_con">
                                        <input type="email" placeholder="Enter your Email id..." required />
                                        <GrMail className="mail_icon" size={18} />
                                    </div>
                                </div>
                                <div>
                                    <label className="">password</label>
                                    <div className="password_con">
                                        <input type={iconLoad ? 'text' : 'password'} placeholder='Enter your Password' onChange={e => setpassword(e.target.value)} required />
                                        <span className="icon_con"> {iconLoad ? <AiFillEye onClick={onOpenClose} size={25} /> : <AiFillEyeInvisible onClick={onOpenClose} size={25} />}</span>
                                        <ImKey className="Imkey_icon" size={18} />
                                    </div>
                                </div>

                            </div>
                            <div >
                                <div className="adress">
                                    <label>Address</label>
                                    <div className="text_area">
                                        <textarea placeholder="Enter Your Address" />
                                    </div>
                                </div>
                                <div className="selection">
                                    <div>
                                        <label>City</label>
                                        <div className="options">
                                            <select>
                                                <option selected>Select City</option>
                                                <option>Delhi</option>
                                                <option>Chennai</option>
                                                <option>Thiruvandrapuram</option>
                                                <option>bombay</option>
                                                <option>Punjab</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label>State</label>
                                        <div>
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
                                </div>

                            </div>


                        </div>


                        {/* </div> */}


                        <button className="submit_form">Submit</button>
                    </form>

                </Card>
            </section>
            <div className="already_account">
                <button onClick={haveaccount}>Already have an account? Login</button>
            </div>

        </div>
    )
}

export default LoginForm;