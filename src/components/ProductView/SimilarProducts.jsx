import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import FontSize from "../../helpers/Fontsize";
import Colors from "../../helpers/Colors";
import { BsCart2 } from 'react-icons/bs'



const useStyles = makeStyles({
    root: {


        '& .simplebrand_name': {
            fontSize: FontSize.mdScreen
        },
        '& .simplecard_title': {
            fontSize: FontSize.cardTitle,
            width: '100%',
            maxHeight: '40px',
            overflow: 'hidden',
        },
        '& .simplecard_img_container': {
            position: 'relative',
            '& .simpleoffer_num': {
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
        '& .simplecard_price': {
            color: Colors.primary,
        },
        '& .simplecard_cutPrice': {
            color: Colors.grey1,
            fontSize: FontSize.mdScreen,
        },
        '& .simplecart_logo': {
            fontSize: FontSize.cartIcon,
            padding: '1px 8px 5px 8px',
            background: Colors.primaryBackground,
            borderRadius: '50%',
            color: Colors.white
        },
    }
})

const SimilarProducts = ({ item }) => {
    const [similar, setsimilar] = useState(item.items)
    useEffect(() => {
        console.log(similar)
    }, [])


    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Slider {...settings}>

                {

                    similar.map((items, index) => {
                        return (
                            <Card key={index} className='simple_container mb-2'>
                                <Card.Body>
                                    <p className='p-0 m-0 mb-1 simplebrand_name'>{items.brand}</p>
                                    <h6 className='p-0 m-0 simplecard_title'>{items.title}</h6>
                                    <div className='simplecard_img_container'>
                                        <Card.Img className='py-2 simplecard_img' variant="top" src={items.brandImage} />
                                        {
                                            items.offer > 0 ? (<div className='simpleoffer_num fw-bold d-flex flex-column'>
                                                <div>{items.offer}%</div>
                                                <div>OFF</div>
                                            </div>) : null
                                        }
                                    </div>
                                    <Card.Text>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='d-flex flex-column'>
                                                <h5 className='p-0 m-0 simplecard_price'>₹{(items.cutPrice - (items.cutPrice * items.offer / 100)).toLocaleString()}</h5>
                                                <p className='p-0 m-0 simplecard_cutPrice'><del>₹{items.cutPrice.toLocaleString()}</del></p>
                                            </div>
                                            <div className='simplecart_logo'><BsCart2 /></div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })

                }

            </Slider >
        </div >
    )
}

export default SimilarProducts;