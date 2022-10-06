import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import HomeNav from "../HomeNav";
import FooterPage from "../Shared/Footer";
import Copy from "../Shared/Footer/Copy";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import Stepper from 'react-stepper-horizontal';
// import { FormProvider, ShippingPage } from '../components/ShippingPage';
import Shipping from "../ShippingPage/Shipping";
// import ShippingForm from "../ShippingPage/ShippingForm";
import Billing from "../BillingPage/Billing";
import CartImage from '../../helpers/assests/Shpping image/Cart.png'

const useStyles = makeStyles({
    root: {

    }
})
const Form = () => {
    // const [value] = React.useContext(ShippingPage);

    const [currentPage, setCurrentPage] = useState(1);
    const sections = [
        {
            title: 'Checkout Information',
            // icon: <AiOutlineShoppingCart />
        },
        { title: 'Billing Information',  },
        { title: 'Select Payment', },
    ];
    useEffect(() => {
        setCurrentPage(currentPage)
    }, [currentPage])

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(value);
    };

    // const next = () => setCurrentPage((prev) => prev + 1);
    const prev = () => setCurrentPage((prev) => prev - 1);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stepper
                    steps={sections}
                    activeStep={currentPage}
                    activeColor="red"
                    defaultBarColor="red"
                    completeColor="green"
                    completeBarColor="green"
                    
                    

                />

                {currentPage === 1 && (
                    <>
                        <Shipping setCurrentPage={setCurrentPage} />
                        {/* <button onClick={next}>Next</button> */}
                    </>
                )}

                {currentPage === 2 && (
                    <>
                        <Billing setCurrentPage={setCurrentPage} currentPage={currentPage} />
                        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
                        {/* <button onClick={prev}>Back</button> */}
                        {/* <button onClick={next}>Next</button> */}
                        {/* </div> */}
                    </>
                )}

                {currentPage === 3 && (
                    <>
                        <pre>{JSON.stringify(null, 2)}</pre>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button onClick={prev}>Back</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </>
                )}
            </form>
        </>
    );
}


const Steppers = () => {
    const classes = useStyles()
    return (
        <>
            <HomeNav />
            <div className={classes.root}>


                {/* <FormProvider> */}
                <Form />
                {/* </FormProvider> */}

            </div>
            <FooterPage />
            <Copy />
        </>


    )
}

export default Steppers;
