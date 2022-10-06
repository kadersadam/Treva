import React from "react";
import { makeStyles } from '@mui/styles'
import Colors from "../../helpers/Colors";
import Star from '../../helpers/assests/Brandsimage/Star.png';
import LLoyd from '../../helpers/assests/Brandsimage/Lloyd.png';
import Ificon from '../../helpers/assests/Brandsimage/iffalcon.png';
import Bosch from '../../helpers/assests/Brandsimage/Bosch.png'
import { Box } from "@mui/system";
import HomeNav from "../HomeNav";
import FooterPage from "../Shared/Footer";
import Copy from "../Shared/Footer/Copy";


const useStyles = makeStyles({
    root: {
        margin:'90px',
        // width:'100%',
        '& .grid_container': {
            display: 'grid',
            gridTemplateColumns: '1fr ',
            ['@media (max-width:1400px)']: {
                gridTemplateColumns: 'repeat(4, 1fr)',
            },
            ['@media (max-width:1000px)']: {
                gridTemplateColumns: 'repeat(3, 1fr)',
            },
            ['@media (max-width:780px)']: {
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            ['@media (max-width:500px)']: {
                gridTemplateColumns: 'repeat(1, 1fr)',
            },
            '& .grid_items': {
                border: `1px solid ${Colors.grain}`,
                padding: '25px',
                '& .img_container': {
                    '& img': {
                        width: '35px',
                        ['@media (max-width:600px)']: {
                            // width: '70px',
                        },
                    }
                },
                '& .item_title': {
                    fontWeight: '600',
                    ['@media (max-width:600px)']: {
                        fontSize: '16px !important'
                    },
                },
                '& .item_count': {
                    ['@media (max-width:600px)']: {
                        fontSize: '14px !important'
                    },
                }
            }
        }
    }
})
const OurBrands = () => {
    const brand = [
        {
            title: 'Blue Star',
            items: '126 items',
            images: Star,

        },
        {
            title: 'Blue Star',
            items: '126 items',
            images: LLoyd,
        },
        {
            title: 'Blue Star',
            items: '126 items',
            images: Star,

        },
        {
            title: 'Blue Star',
            items: '126 items',
            images: LLoyd,

        },
        {
            title: 'IffaIcon',
            items: '126 items',
            images: Ificon,

        },
        {
            title: 'Bosh',
            items: '126 items',
            images: Bosch

        },
        {
            title: 'IffaIcon',
            items: '126 items',
            images: Ificon,

        },
        {
            title: 'Bosh',
            items: '126 items',
            images: Bosch

        },
        {
            title: 'Bosh',
            items: '126 items',
            images: Bosch

        },
        {
            title: 'Blue Star',
            items: '126 items',
            images: Star,

        },
        {
            title: 'Blue Star',
            items: '126 items',
            images: Star,

        },
        {
            title: 'Blue Star',
            items: '126 items',
            images: Star,

        },
        {
            title: 'Blue Star',
            items: '126 items',
            images: Star,

        },
        {
            title: 'Blue Star',
            items: '126 items',
            images: Star,

        },
        {
            title: 'IffaIcon',
            items: '126 items',
            images: Ificon,

        },
        {
            title: 'Bosh',
            items: '126 items',
            images: Bosch

        },
        {
            title: 'IffaIcon',
            items: '126 items',
            images: Ificon,

        },
        {
            title: 'Bosh',
            items: '126 items',
            images: Bosch
        },
        {
            title: 'Bosh',
            items: '126 items',
            images: Bosch
        },
        
    ]
    const ItemSliced=brand.slice(0,16)
    const classes=useStyles()
    return (
        <>
            <HomeNav/>
        <div className={classes.root}>
            <h1 style={{textAlign:'center'}}>Brands</h1>
            <Box className='grid_container'>
            {
                ItemSliced.map((item, index) => (
                    <div key={index} className='grid_items d-flex align-items-center justify-content-center'  >
                        <div className='img_container me-1'><img src={item.images} alt="" /></div>
                        <div>
                            <p className=' m-0 p-0 item_title'>{item.title}</p>
                            <p className='m-0 p-0 item_count'>{item.items} </p>
                        </div>
                    </div>
                ))
                }
            </Box>

            </div>
            <FooterPage />
            <Copy/>
        </>
    )
}

export default OurBrands;