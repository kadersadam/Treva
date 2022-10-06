import React from "react";
import { makeStyles } from '@mui/styles'
import Colors from "../../helpers/Colors";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        // width: '100%',
        ['@media (max-width:800px)']: {
            display: 'grid',
            gridTemplateColumns: '1fr  1fr',
        },
        ['@media (max-width:500px)']: {
            display: 'grid',
            gridTemplateColumns: '  1fr',
        },


        '& .coupon_apply': {
            ['@media (max-width:800px)']: {
                textAlign: 'center',
                marginTop: '20px'
            }

        },
        '& .coupon_field': {
            width: '100%',
            '& input': {
                border: '1px solid #F2F2F2 ',
                borderRadius: '20px',
                padding: '3px  20px',
                outline: 'none',
                backgroundColor: '#F2F2F2',
                color: '#C2C2C2',
                height: '35px',
                // ['@media(max-width:1024px)']: {
                //     width: '76%'
                // },
            },
            '& button': {
                backgroundColor: Colors.primary,
                padding: ' 7px 10px ',
                marginLeft: '-38px',
                borderTopRightRadius: '20px ',
                borderBottomRightRadius: '20px',
                color: Colors.white,
                fontSize: '14px',
                height: '36px',
                outline: 'none',
                border: '1px solid #F2F2F2 ',
                ['@media (max-width:1100px)']: {
                    marginLeft: '-57px'
                },
                // ['@media (max-width:1500px)']: {
                //     marginLeft: '-20px'
                // }

            }
        },
        '& .final_price': {
            marginTop: '20px',
            width: '100%',
            padding: '0 6px'

        },
        '& .card_height': {
            height: '38vh',
            // ['@media (max-width:1440px)']: {
            //     height: '25vh'
            // },
            ['@media(max-width:1024px)']: {
                height: '35vh',
            },
            ['@media(max-width:800px)']: {
                height: '43vh',
            },
        },
        '& .lines': {
            width: '100%',
            height: '1px',
            backgroundColor: 'lightgray',
        },
        '& .total_price': {
            padding: ' 10px 0',
            fontWeight: 'bold',
            '& h6': {
                fontSize: '14px',
                color: '#4D4D4D',
                marginTop: '5px'
            },

        }

    }
})


const CartCoupon = () => {
    const navigate = useNavigate()
    const checkoutPrice = () => {
        navigate('/loginmobile')
    }
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="coupon_apply">
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>If you have a coupon code,please apply it below</p>
                <div className="coupon_field">
                    <input type="number" placeholder="Coupon code." /><button>APPLY COUPON</button>
                </div>
            </div>

            <div className="final_price">
                <Card>
                    <Card.Body>
                        <div className="card_height">
                            <div className="d-flex justify-content-between align-items-center total_price" >
                                <h6>Subtotal</h6>
                                <span >₹22,900</span>
                            </div>
                            <div className="lines"></div>
                            <div className="d-flex justify-content-between align-items-center total_price">
                                <h6>Shipping Fee</h6>
                                <span style={{ color: 'green' }}>₹Free</span>
                            </div>
                            <div className="lines"></div>
                            <div className="d-flex justify-content-between align-items-center total_price">
                                <h6>Coupon Discount</h6>
                                <span>₹0</span>
                            </div>
                            <div className="lines"></div>
                            <div className="d-flex justify-content-between align-items-center total_price">
                                <h6>Grand Total</h6>
                                <span style={{ color: Colors.red, fontSize: '15px' }}>₹22,900 </span>

                            </div>
                            <div style={{ textAlign: 'end', marginTop: '-20px' }}>
                                <span style={{ fontSize: '12px', fontWeight: 'lighter' }} >( Incl. of All Taxes. )</span></div>
                            <div style={{ textAlign: 'center', marginTop: '15px' }}>
                                <button style={{ border: '1px solid #F2F2F2', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', width: '100%', padding: '5px 0', background: 'linear-gradient(to right bottom, #08E0C3, #28C5E5)', color: Colors.white }} onClick={checkoutPrice}>Proceed to checkout</button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default CartCoupon;