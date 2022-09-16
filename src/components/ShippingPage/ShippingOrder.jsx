import React from "react";
import { makeStyles } from '@mui/styles'
import Colors from "../../helpers/Colors";
import { width } from "@mui/system";

const useStyles = makeStyles({
    root: {
        '& .order_form': {
            '& h3': {
                fontSize: '25px',
                color: Colors.orange
            },
            '& .border': {
                border: '1px solid black',
                width: '100%',
                height: '100vh',

            },
            '& .pre': {
                
                fontSize:'14px',
                width: '70%'
            },
            '& .lines': {
                width: '100%',
                height: '1px',
                backgroundColor: 'lightgray',
            },
            '& .total_price': {
                padding: ' 10px 0',
                fontWeight: 'bold',
            }

        }

    }
})

const ShippingOrder = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <section className="order_form">
                <div>
                    <h3>Your Order</h3>
                    <div>
                        <div className="d-flex justify-content-between align-items-center ">
                            <h5>PRODUCT</h5>
                            <h5>TOTAL</h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center ">
                            <div className={"pre"}>

                                <p>Preethi MGA-504 Stainless Steel Genie Jar for Eco Twin, Plus/Chef Pro and Blue Leaf, 0.5-Liter, Silver x1</p>
                            </div>
                            <h6>₹22,900</h6>
                        </div>
                        <div className="lines"></div>
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
                    </div>

                </div>
            </section>

        </div>
    )
}
{/* <div className={" row"}>
                        <div className={"col-lg-8 col-md-8 col-sm-8 col-8"}>
                            <h5>Product</h5>
                        </div>
                        <div className={"col-lg-4 col-md-4 col-sm-4 col-4"}>
                            <h5>Product</h5>
                        </div>
                    </div>
                    <div className={" row"}>
                        <div className={"col-lg-8"}>


                            <h6>dsfdfsdfsdfsdfsdfdsfsdfdsfsdfsdfgdsfsdfs vdfdfdsf afasdfasdf dfdafdafdfgfdgfdgfdgdfgdfg  fdgfdgfdgdfgdfgfdgfdgfdgfdgfdgfdgfdgdfsdfsdf</h6>

                        </div>
                        <div className={"col-lg-4"}>
                            <h5>Product</h5>
                        </div>
                    </div> */}

export default ShippingOrder;