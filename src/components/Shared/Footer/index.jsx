import React from 'react'
import { makeStyles } from '@mui/styles'
import Colors from '../../../helpers/Colors'
// import { colors } from '@mui/material'

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        background: Colors.opacitySecondary,
        padding: '10px 20px',
        ['@media (max-width:800px)']: {
            gridTemplateColumns: 'repeat(2,1fr)',
            // textAlign: 'center'
        },
        ['@media (max-width:500px)']: {
            gridTemplateColumns: 'repeat(1,1fr)',
            textAlign: 'center'
        },
        '& div': {
            margin: '10px 10px',
            '& .footer_heading': {
                color: Colors.yellow,
            },
            '& .footer_phone': {
                color: Colors.secondary
            },
            '& .footer_address, .footer_items': {
                color: Colors.black
            },
            '& .apply_button': {
                width: '150px',
                borderRadius: '50px',
                border: 'none',
                padding: '8px 10px',
                background: Colors.secondaryBackground,
                color: Colors.white
            }
        }
    },
    

})

const FooterPage = () => {

    const classes = useStyles()

    const ourPolicy = [
        {
            name: 'Policy',
            path: '/policy'
        },
        {
            name: 'Terms & Condition',
            path: '/terms&conditions'
        },
        {
            name: 'Shipping ',
            path: '/shipping'
        },
        {
            name: 'Return',
            path: '/return'
        },
        {
            name: 'Blog',
            path: '/blog'
        },

    ]

    const knowUs = [
        {
            name: 'About Us',
            path: '/aboutus'
        },
        {
            name: 'Contact',
            path: '/contact'
        },

    ]

    return (
        <div className={classes.root}>

            {/* Connect with Us */}
            <div className='d-flex flex-column'>
                <p className='footer_heading fw-bold'>Connect with Us</p>
                <h3 className='footer_phone'>+91 12345 67890</h3>
                <address className='footer_address'>Chennai, Tamil Nadu customersupport@mywebsite.com Timing: 10.00 am to 6.00 pm (Mon – Sat)</address>
            </div>

            {/* Our Policy */}
            <div className='d-flex flex-column'>
                <p className='footer_heading fw-bold'>Our Policy</p>
                {
                    ourPolicy.map((item, index) => {
                        return (
                            <p key={index} className='footer_items'>{item.name}</p>
                        )
                    })
                }
            </div>


            {/* Get to Know Us */}
            <div className='d-flex flex-column'>
                <p className='footer_heading fw-bold'>Get to Know Us</p>
                {
                    knowUs.map((item, index) => {
                        return (
                            <p key={index} className='footer_items'>{item.name}</p>
                        )
                    })
                }
            </div>

            {/* Get to Know Us */}
            <div className='d-flex flex-column'>
                <p className='footer_heading fw-bold'>Get to Know Us</p>
                <p className='footer_items'>Sell on Shop</p>
                <p><button className='apply_button'>APPLY HERE</button></p>
            </div>
           

        </div>

    )
}

export default FooterPage