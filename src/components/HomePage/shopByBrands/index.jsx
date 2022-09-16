import React from 'react'
import { makeStyles } from '@mui/styles'
import Colors from '../../../helpers/Colors'
import BrandItems from './BrandItems'

const useStyles = makeStyles({
    root: {
        margin: '0px 60px',
        // justifyItems: 'center',
        '& span': {
            color: Colors.secondary
        },
        '& h4': {
            ['@media (max-width:400px)']: {
                fontSize: '18px !important'
            },
        },
        '& h6': {
            ['@media (max-width:400px)']: {
                fontSize: '15px !important'
            },
        }
    }
})

const ShopByBrands = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className='d-flex justify-content-between align-items-center my-2'>
                <h4>Shop <span>By Brands</span></h4>
                <h6 role={'button'} onClick={() => console.log('clicked')}>View All</h6>
            </div>
            <BrandItems />
        </div>
    )
}

export default ShopByBrands