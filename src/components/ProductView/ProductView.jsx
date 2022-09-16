import React from "react";
import { makeStyles } from '@mui/styles'
import HomeNav from "../HomeNav";
import ViewsPages from "./ViewsPages";
import FooterPage from "../Shared/Footer";
import Copy from "../Shared/Footer/Copy";

const useStyles = makeStyles({
    root: {
       
    }
})
const ProductView = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                <HomeNav />
                <ViewsPages />
                <FooterPage />
                <Copy />
            </div>
        </div>
    )
}
export default ProductView;