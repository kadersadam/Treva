import React from "react";
import { makeStyles } from '@mui/styles';
import BillingForm from "./BillingForm";
import ShippingOrder from "../ShippingPage/ShippingOrder";

const useStyles = makeStyles({
    root: {
        margin: '90px ',
        ['@media (max-width:800px)']: {
            margin: '90px 15px'
        },
        '& .billing_grid': {
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gridGap: '30px',
            marginTop: '10%',
            width: '100%',
            ['@media (max-width:800px)']: {
                gridTemplateColumns: '1fr',
            }
        }
    }
})

const Billing = ({ setCurrentPage }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="billing_grid">
                <BillingForm setCurrentPage={setCurrentPage} />
                <ShippingOrder/>
            </div>
        </div>
    )
}

export default Billing