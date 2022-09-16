import React from "react";
import { makeStyles } from '@mui/styles'
import Colors from "../../helpers/Colors";
import ShippingForm from "./ShippingForm";
import ShippingOrder from "./ShippingOrder";

import { Container } from "react-bootstrap";

const useStyles = makeStyles({
    root: {
        margin: '90px ',
        ['@media (max-width:800px)']: {
          margin:'90px 15px'  
        },
        '& .address_label': {
            textAlign: 'center',
            marginTop: '10%',
            '& h4': {
                fontSize: '20px',
                fontWeight: 'bold',
                color: Colors.grey
            },
            '& p': {
                fontSize: '15px',
                color: Colors.grey
            }
        },
        '& .Shipping_grid': {
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

const Shipping = ({ setCurrentPage }) => {
    const classes = useStyles()
    return (
        <>
            
            {/* <Container className={"py-5"}> */}

                <div className={classes.root}>

                    {/* <ShippingStepper /> */}
                    <div className="address_label">
                        <h4>Select the Delivery Address</h4>
                        <p>is the address you'd like to use displayed below? If so, click the corresponding "Delivery to this address" button. Or you can enter a new delivery address.</p>
                    </div>

                    <div className="Shipping_grid">
                        {/* <div className={"col-lg-7 col-md-12"}> {"row"}*/}

                    <ShippingForm setCurrentPage={setCurrentPage} />
                        {/* </div> */}
                        {/* <div className={"col-lg-5"}> */}
                        <ShippingOrder />

                        {/* </div> */}

                    </div>
                </div>
            {/* </Container> */}
            
        </>
    )

}

export default Shipping;