import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Havells from '../../../../helpers/assests/BrandItems/Havells.png'
import Colors from '../../../../helpers/Colors';

const useStyles = makeStyles({
    root: {
        width: '100%',
        '& .grid_container': {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
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
                border: `1px solid ${Colors.grey}`,
                padding: '25px',
                '& .img_container': {
                    '& img': {
                        width: '80px',
                        ['@media (max-width:600px)']: {
                            width: '70px',
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

const BrandItems = () => {

    const classes = useStyles()

    const items = [
        {
            title: 'Havells',
            items: '126 items',
            images: Havells
        },
        {
            title: 'Blue Star',
            items: '127 items',
            images: Havells
        },
        {
            title: 'Bosch',
            items: '12 items',
            images: Havells
        },
        {
            title: 'Havells',
            items: '126 items',
            images: Havells
        },
        {
            title: 'Blue Star',
            items: '127 items',
            images: Havells
        },
        {
            title: 'Bosch',
            items: '12 items',
            images: Havells
        },
        {
            title: 'Havells',
            items: '126 items',
            images: Havells
        },
        {
            title: 'Blue Star',
            items: '127 items',
            images: Havells
        },
        {
            title: 'Bosch',
            items: '12 items',
            images: Havells
        },
        {
            title: 'Havells',
            items: '126 items',
            images: Havells
        },
        {
            title: 'Blue Star',
            items: '127 items',
            images: Havells
        },
        {
            title: 'Bosch',
            items: '12 items',
            images: Havells
        },
    ]

    const slicedItems = items.slice(0, 10)

    return (
        <div className={classes.root} style={{ width: '100%' }}>
            <Box className='grid_container'>
                {
                    slicedItems.map((item, index) => {
                        return (
                            <div key={index} className='grid_items d-flex align-items-center justify-content-center' onClick={() => console.log('clicked')}>
                                <div className='img_container me-1'><img src={item.images} alt="" /></div>
                                <div>
                                    <p className='fs-5 p-0 m-0 item_title'>{item.title}</p>
                                    <p className='fs-6 p-0 m-0 item_count'>{item.items} </p>
                                </div>
                            </div>
                        )
                    })
                }
            </Box>
        </div>
    );
}

export default BrandItems