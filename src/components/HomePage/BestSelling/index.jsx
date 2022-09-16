import React from 'react'
import { makeStyles } from '@mui/styles'
import Colors from '../../../helpers/Colors'
import headphone from '../../../helpers/assests/Best selling/BSheadphone.png'
import ItemContainer from './ItemContainer'

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '275px 1fr',
        margin: '20px 60px',
        ['@media (max-width:1100px)']: {
            gridTemplateColumns: '1fr',
            // margin: '20px 0px',
        },
        ['@media (max-width:500px)']: {
            margin: '10px 50px 5px 50px',
        },
        '& .img_container': {
            ['@media (max-width:1300px)']: {
                display: 'none'
            },
            textAlign: 'center',
            '& img': {
                width: '100%',
                height: '100%',
            }
        },
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
        },
        // '& .items_container': {
        //     display: 'grid',
        //     gridTemplateColumns:'repeate(5,1fr)'
        // }
    }
})

const BestSelling = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className='img_container'>
                <img src={headphone} alt="" />
            </div>
            <div className='d-flex flex-column px-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Best <span>Selling</span></h4>
                    <h6 role={'button'} onClick={() => console.log('clicked')}>View All</h6>
                </div>
                <div className='items_container'>
                    <ItemContainer />
                </div>
            </div>
        </div>
    )
}

export default BestSelling