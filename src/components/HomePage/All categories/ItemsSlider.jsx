import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { makeStyles } from '@mui/styles';
import FontSize from '../../../helpers/Fontsize';
import Colors from '../../../helpers/Colors';
import Card from 'react-bootstrap/Card';
import { BsCart2 } from 'react-icons/bs'
import Airconditioner from '../../../helpers/assests/Best selling/AC.jpg'

const useStyles = makeStyles({
    root: {
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


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "linear-gradient(to right bottom, #F55A48, #fbb03b)" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}


const ItemsSlider = ({ item }) => {

    const classes = useStyles()

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
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

    const [products, setProducts] = useState(item.items)

    useEffect(() => {
        console.log(products)
    }, [])


    return (
        <div className={classes.root}>
            <Slider {...settings}>
                {
                    products.map((items, index) => {
                        return (
                            <Card key={index} className='card_container mb-2'>
                                <Card.Body>
                                    <p className='p-0 m-0 mb-1 brand_name'>{items.brand}</p>
                                    <h6 className='p-0 m-0 card_title'>{items.title}</h6>
                                    <div className='card_img_container'>
                                        <Card.Img className='py-2 card_img' variant="top" src={items.brandImage} />
                                        {
                                            items.offer > 0 ? (<div className='offer_num fw-bold d-flex flex-column'>
                                                <div>{items.offer}%</div>
                                                <div>OFF</div>
                                            </div>) : null
                                        }
                                    </div>
                                    <Card.Text>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='d-flex flex-column'>
                                                <h5 className='p-0 m-0 card_price'>₹{(items.cutPrice - (items.cutPrice * items.offer / 100)).toLocaleString()}</h5>
                                                <p className='p-0 m-0 card_cutPrice'><del>₹{items.cutPrice.toLocaleString()}</del></p>
                                            </div>
                                            <div className='cart_logo'><BsCart2 /></div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default ItemsSlider