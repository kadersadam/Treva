import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Airconditioner from '../../../helpers/assests/Best selling/AC.jpg'
import { makeStyles } from '@mui/styles';
import FontSize from '../../../helpers/Fontsize';
import { BsCart2 } from 'react-icons/bs'
import Colors from '../../../helpers/Colors';

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gridGap: '0px 10px',
        ['@media (max-width:1400px)']: {
            gridTemplateColumns: 'repeat(4,1fr)',
        },
        ['@media (max-width:1000px)']: {
            gridTemplateColumns: 'repeat(3,1fr)',
        },
        ['@media (max-width:800px)']: {
            gridTemplateColumns: 'repeat(2,1fr)',
        },
        ['@media (max-width:500px)']: {
            gridTemplateColumns: 'repeat(1,1fr)',
            justifyItems: 'center',
        },
        '& .card_container': {
            margin: '0px auto'
        },
        '& .brand_name': {
            fontSize: FontSize.mdScreen
        },
        '& .card_title': {
            fontSize: FontSize.cardTitle,
            width: '100%',
            maxHeight: '40px',
            overflow: 'hidden',
        },
        '& .card_img_container': {
            position: 'relative',
            '& .offer_num': {
                position: 'absolute',
                top: 10,
                left: -5,
                width: 35,
                height: 35,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                background: Colors.red,
                borderRadius: '50%',
                textAlign: 'center',
                '& div': {
                    fontSize: FontSize.iconCount,
                    color: Colors.white,
                    padding: 0,
                    marging: 0,
                },
            }
        },
        '& .card_price': {
            color: Colors.primary,
        },
        '& .card_cutPrice': {
            color: Colors.grey1,
            fontSize: FontSize.mdScreen,
        },
        '& .cart_logo': {
            fontSize: FontSize.cartIcon,
            padding: '1px 8px 5px 8px',
            background: Colors.primaryBackground,
            borderRadius: '50%',
            color: Colors.white
        },
    }
})

const ItemContainer = () => {

    const classes = useStyles()

    const items = [
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Airconditioner,
            offer: 10,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Airconditioner,
            offer: 25,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Airconditioner,
            offer: 0,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Airconditioner,
            offer: 0,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Airconditioner,
            offer: 0,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Airconditioner,
            offer: 40,
            cutPrice: 57000,
        },
    ]

    const slicedItems = items.slice(0, 10);


    return (
        <div className={classes.root}>
            {
                slicedItems.map((item, index) => {
                    return (
                        <Card style={{ width: '13rem' }} key={index} className='card_container mb-2'>
                            <Card.Body>
                                <p className='p-0 m-0 mb-1 brand_name'>{item.brand}</p>
                                <h6 className='p-0 m-0 card_title'>{item.title}</h6>
                                <div className='card_img_container'>
                                    <Card.Img className='py-2 card_img' variant="top" src={item.brandImage} />
                                    {
                                        item.offer > 0 ? (<div className='offer_num fw-bold d-flex flex-column'>
                                            <div>{item.offer}%</div>
                                            <div>OFF</div>
                                        </div>) : null
                                    }
                                </div>
                                <Card.Text>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='d-flex flex-column'>
                                            <h5 className='p-0 m-0 card_price'>₹{(item.cutPrice - (item.cutPrice * item.offer / 100)).toLocaleString()}</h5>
                                            <p className='p-0 m-0 card_cutPrice'><del>₹{item.cutPrice.toLocaleString()}</del></p>
                                        </div>
                                        <div className='cart_logo'><BsCart2 /></div>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default ItemContainer