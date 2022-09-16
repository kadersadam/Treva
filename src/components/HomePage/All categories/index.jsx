import React from 'react'
import Airconditioner from '../../../helpers/assests/Best selling/AC.jpg'
import Refrigerator from '../../../helpers/assests/Best selling/Fridge.jpg'
import { makeStyles } from '@mui/styles'
import Colors from '../../../helpers/Colors'
import FontSize from '../../../helpers/Fontsize';
import ItemsSlider from './ItemsSlider';
import appDownload from '../../../helpers/assests/app download poster/appDownload.png'


const useStyles = makeStyles({
    root: {
        margin: '20px 60px',
        ['@media (max-width:1100px)']: {
            gridTemplateColumns: '1fr',
            // margin: '20px 0px',
        },
        ['@media (max-width:500px)']: {
            margin: '10px 50px 5px 50px',
        },
        '& .img_container': {
            ['@media (max-width:1100px)']: {
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
    },
    slider: {
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
    },
    appDownloadPoster: {
        // margin: '20px 60px',
        margin: '100px 0px ',
        '& img': {
            width: '100%'
        }
    }
})

const Allcategories = () => {

    const classes = useStyles()

    const allItems = [
        {
            id: 1,
            titleFName: 'Tele',
            titleLName: 'vision',
            path: '/television',
            items: [
                {
                    id: 1,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 0,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 2,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 25,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 3,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 4,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 0,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 5,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 25,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 6,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 7,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
            ]
        },
        {
            id: 2,
            titleFName: 'Air',
            titleLName: 'Conditioner',
            path: '/airconditioner',
            items: [
                {
                    id: 1,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 0,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 2,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 25,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 3,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 4,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 0,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 5,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 25,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 6,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 7,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
            ]
        },
        {
            id: 3,
            titleFName: 'Refrige',
            titleLName: 'rator',
            path: '/refrigerator',
            items: [
                {
                    id: 1,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Refrigerator,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,

                },
                {
                    id: 2,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Refrigerator,
                    offer: 0,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 3,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Refrigerator,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 4,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Refrigerator,
                    offer: 25,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 5,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Refrigerator,
                    offer: 0,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 6,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Refrigerator,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 7,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Refrigerator,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                }
            ]


        }
    ]

    return (
        <>
            {
                allItems.map((item) => {
                    return (
                        <div className={classes.root} key={item.id}>
                            <div className='d-flex flex-column px-2'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4>{item.titleFName}<span>{item.titleLName}</span></h4>
                                    <h6 role={'button'} onClick={() => console.log(`${item.path}`)}>View All</h6>
                                </div>
                                <div className='items_container'>
                                    <ItemsSlider item={item} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={classes.appDownloadPoster} >
                <img src={appDownload} alt="" />
            </div>
        </>
    )
}

export default Allcategories