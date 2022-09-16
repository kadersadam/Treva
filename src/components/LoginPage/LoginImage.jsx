import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import { ImMobile2 } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { Card, Container } from "react-bootstrap";
import { Tabs } from 'antd';
import HomeNav from "../HomeNav";
import LoginMobile from "./section/LoginMobile";
import Colors from "../../helpers/Colors";
import LoginMail from "./section/LoginMail";
import FooterPage from "../Shared/Footer";
import Copy from "../Shared/Footer/Copy";
import LoginOtp from "./section/LoginOtp";
import LoginForm from "./section/LoginForm";

const { TabPane } = Tabs;


const useStyles = makeStyles({
    root: {
        marginTop: "8%",
        marginBottom: '8%',
        '& .ant-tabs-top ': {
            '& .ant-tabs-nav': {
                '& .ant-tabs-ink-bar': {
                    width: '1px',
                    height: '3px',
                    background: Colors.orange


                }
            },
            '& .ant-tabs-nav::before': {
                border: 'none'
            }
        },
        '& .log': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '& span': {
                fontSize: '13px',
                color: '#4D4D4D',
                fontWeight: 'bold'
                // marginLeft: '20px',
            },
            '& p': {
                border: '1px solid orange',
                borderRadius: '50%',
                width: '55px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10px',
                // background: 'orange',
                fontSize: '20px',
                // marginLeft: '20px',
                padding: '5px 0 0 0',
                '& .mail': {
                    marginBottom: '5px',
                    color: Colors.yellow
                },
                '& .Im2': {
                    marginBottom: '5px',
                    color: Colors.yellow

                },


            }
        },
        '& .tab_span': {
            // display: 'flex',
            // justifyContent : 'space-between'
            margin: '0 55px'
        },
        '& .ant-tabs-tab': {
            padding: '0 !important',
            // margin: '0px 35px'
        }
    }
})
const LoginImage = () => {
    const [number, setNumber] = useState("")
    const [isOtpClicked, setIsOtpClicked] = useState(false)
    const [Form, setForm] = useState(false)
    // const [account, setaccount] = useState(false)
    const [isLoginPage, setIsLoginPage] = useState(true)
    const [iconLoad, seticonLoad] = useState(false)
    const [activeTab, setActiveTab] = useState("1");

    const [password, setpassword] = useState('')

    useEffect(() => {
        seticonLoad(iconLoad)
    }, [iconLoad])

    const classes = useStyles()

    const onTabChange = active => {
        setActiveTab(active)
        console.log(active);
    }

    return (
        <>
            <HomeNav />
            <div className={classes.root}>
                <Container>
                    <div className="row">
                        <div className="Col-lg-5">
                            <Tabs activeKey={activeTab} onChange={onTabChange} centered className="tab_span">
                                <TabPane
                                    tab={
                                        <div className="log">
                                            <span >
                                                Login With
                                            </span>
                                            <p>
                                                <ImMobile2 className="Im2" />
                                            </p>
                                        </div>}
                                    key="1">
                                    <div style={{ textAlign: 'center' }}>
                                        {isOtpClicked ?
                                            <LoginOtp number={number} />
                                            : <LoginMobile setActiveTab={setActiveTab} number={number} setNumber={setNumber} setIsOtpClicked={setIsOtpClicked}  />
                                        }
                                    </div>
                                </TabPane>
                                <TabPane
                                    tab={
                                        <div className="log">
                                            <span>
                                                Login With
                                            </span>
                                            <p><FiMail className="mail" /></p>
                                        </div>
                                    }
                                    key="2">
                                    <div style={{ textAlign: 'center' }}>
                                        {
                                            Form ?
                                                <LoginForm setActiveTab={setActiveTab} setForm={setForm} number={number} setNumber={setNumber} iconLoad={iconLoad} seticonLoad={seticonLoad} setpassword={setpassword}  /> : <LoginMail setForm={setForm} iconLoad={iconLoad} seticonLoad={seticonLoad} setpassword={setpassword} />
                                        }

                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </Container>
            </div>
            <FooterPage />
            <Copy />
        </>
    )
}

export default LoginImage;