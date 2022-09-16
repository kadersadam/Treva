import React from "react";
import { makeStyles } from '@mui/styles'
import CartTable from "./CartTable";
import CartCoupon from "./CartCoupon";
import HomeNav from "../HomeNav";
import FooterPage from "../Shared/Footer";
import Copy from "../Shared/Footer/Copy";


const useStyles = makeStyles({
    root: {
        '& .cart_component': {
            margin: '90px',
            ['@media (max-width:1024px)']: {
                margin: ' 90px 15px',
            },

        },
        '& .cardGrid_component': {
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            gridGap: ' 0 30px',
            ['@media (max-width:1024px)']: {
                gridTemplateColumns: '2fr 1fr',
            },
            ['@media (max-width:800px)']: {
                display: 'block',
                // gridTemplateColumns: ' 1fr',
                
            },
        }

    }
})

const MyCart = () => {
    
    
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <HomeNav />
            <div className="cart_component">
                <h2 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bolder', color: '#4D4D4D' }}>MY Cart</h2>
                <div className="cardGrid_component">

                    <CartTable />
                    <CartCoupon />

                </div>

            </div>
            <FooterPage />
            <Copy/>

        </div>
    )
}

export default MyCart;