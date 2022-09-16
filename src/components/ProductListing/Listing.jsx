import React from "react";
import HomeNav from "../HomeNav";
import AirProduct from "./AirProduct";
import SubCategories from "./SubCategories";
import { makeStyles } from '@mui/styles'
import Copy from "../Shared/Footer/Copy";
import FooterPage from "../Shared/Footer";

const useStyles = makeStyles({
    root: {
        '& .grids': {

            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            margin: '90px',
            gridGap: '25px',
            ['@media (max-width:800px)']: {
                gridTemplateColumns: '3fr ',
                '& .sub-cont': {
                    display : 'none'
                }

            },
            ['@media (max-width:500px)']: {
                margin: '40px',
            },
        }
    }
})

const Listing = () => {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <HomeNav />
            <div className="grids">
                <div className="sub-cont" >
                    <SubCategories />
                </div>
                <div>
                    <AirProduct />
                </div>
            </div>
            <FooterPage/>
            <Copy/>


        </div>
    )
}

export default Listing