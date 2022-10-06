import React from "react";
import { makeStyles } from '@mui/styles'
import ImageGallery from 'react-image-gallery';
import Colors from "../../helpers/Colors";
import { Rate } from 'antd';
import { RiHeartLine } from 'react-icons/ri';
import Description from "./Description";
import Airconditioner from '../.././helpers/assests/Best selling/AC.jpg';
import SimilarProducts from './SimilarProducts';
import { Tabs } from 'antd';
import Reviews from "./Reviews";
import FontSize from "../../helpers/Fontsize";

const { TabPane } = Tabs;




const useStyles = makeStyles({
    root: {

        margin: '90px',
        ['@media (max-width:500px)']: {
            margin: '25px',

        },

        '& .product-detail-container': {
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            gridGap: '0 50px',
            ['@media (max-width:800px)']: {
                display:'block'
                
            },
        },

        '& .active': {
            padding: ' 10 10px'

        },
        '& .image-gallery-thumbnail.active, .image-gallery-thumbnail': {
            outline: 'none !important',
            border: `1px solid ${Colors.grain}`,
            padding: '10px 6px ',
            borderRadius: '10px',
            margin: '8px'
        },
        '& .image-gallery-right-nav ': {
            '& .image-gallery-svg': {
                width: '20px',

            }
        },
        '& .image-gallery-left-nav ': {
            '& .image-gallery-svg': {
                width: '20px',

            }
        },
        '& .preethi': {
            marginBottom: '10%',
            '& h5': {
                fontSize: '20px',
                ['@media (max-width:800px)']: {
                    fontSize: '16px',

                },
            },
            ['@media (max-width:800px)']: {
                marginTop:'10px'

            },
            
        },
        '& .brand_name': {
            
            '& span': {
                color: Colors.orange,
                fontSize: '14px',

            }
        },
        '& .Review_star': {
            marginBottom: '10px',
            // '& .ant-rate': {
            '& .ant-rate-star-full': {
                '& div': {
                    color: Colors.yellow
                }

            }

            // }
        },
        '& .horizontal-line': {
            width: '100%',
            height: '1px',
            backgroundColor: 'lightgray',
            marginBottom: '10px'
        },
        '& .cab': {
            '& h6': {
                padding: '0 10px'
            }
        },
        '& .web': {
            '& span': {
                color: Colors.blue
            }
        },
        '& .cart': {
            marginBottom: '13px',
            '& button': {
                marginRight: '10px',
                border: '1px solid ',
                borderRadius: '50px',
                backgroundColor: 'transparent',
                color: Colors.primary,
                padding: '5px 10px'
            },
            '& .buy': {
                color: Colors.white,
                background: 'linear-gradient(to right bottom, #08E0C3, #28C5E5)',
                border: 'none',
                padding: '6px 27px ',
                borderRadius: '50px',
                fontSize: '15px',
            },
        },
        '& .categorie': {
            '& p': {
                margin: '0'
            },
            '& span': {
                fontSize: '15px',
                color: '#4D4D4D',
                opacity: '100%'
            }
        },
        '& .lastname': {
            '& span': {
                color: Colors.secondary
            }
        },
        '& .ant - tabs - tab.ant - tabs - tab - active .ant - tabs - tab - btn ': {
            color: 'red',
            textShadow: '0 0 0.25px currentcolor'
        },
        '& .similar_products': {
            marginTop: '10%'
        }

    }
})
const ViewsPages = () => {
    const addcart = () => {
        
    }

    const similarproducts = [
        {
            id: 1,
            titleFName: 'Similar',
            titleLName: 'Products',
            path: '/similarproducts',
            items: [
                {
                    id: 1,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 50,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 2,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 0,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 3,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 10,
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
                    offer: 20,
                    price: 47000,
                    cutPrice: 57000,
                },
                {
                    id: 6,
                    brand: 'Blue Star',
                    title: 'Bluestar 1.5 ton 5 star inverter ac',
                    brandImage: Airconditioner,
                    offer: 25,
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
                }
            ]
        }
    ]

    const images = [
        {
            original: 'http://localhost:3000/static/media/AC.5e12c4ddc4c473f12f97.jpg',
            thumbnail: 'http://localhost:3000/static/media/AC.5e12c4ddc4c473f12f97.jpg',
        },
        {
            original: 'http://localhost:3000/static/media/AC.5e12c4ddc4c473f12f97.jpg',
            thumbnail: 'http://localhost:3000/static/media/AC.5e12c4ddc4c473f12f97.jpg',
        },
        {
            original: 'http://localhost:3000/static/media/AC.5e12c4ddc4c473f12f97.jpg',
            thumbnail: 'http://localhost:3000/static/media/AC.5e12c4ddc4c473f12f97.jpg',
        },
        {
            original: 'http://localhost:3000/static/media/AC.5e12c4ddc4c473f12f97.jpg',
            thumbnail: 'http://localhost:3000/static/media/AC.5e12c4ddc4c473f12f97.jpg',
        },
    ];
    const classes = useStyles()
    return (
        <div className={classes.root}>

            <section className="product-detail-container" >
                <div>
                    <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
                </div>
                <div className="preethi">
                    <h5>
                        Preethi MGA-504 Stainless Steel Genie Jar for Eco Twin, Plus/Chef Pro and Blue Leaf, 0.5-Liter, Silver
                    </h5>
                    <div className="d-flex align-items-center">
                        <div className="brand_name">
                            <h6>Brand : <span> PREETHI</span> | </h6>
                        </div>
                        <div className="Review_star">
                            <Rate style={{ fontSize: '14px' }} defaultValue={2.5} /><span>(3 Review)</span>
                        </div>
                    </div>
                    <div className="horizontal-line" ></div>
                    <div className="d-flex align-items-center cab">

                        <h3 style={{ color: 'red' }}>₹22,900</h3>
                        <h6 style={{ fontSize: '15px', color:'#4D4D4D' }}><del>MRP₹23,000</del></h6>
                        <h6 style={{ color: 'red', fontSize: '15px' }}>(1%off)</h6>

                    </div>
                    <div className="web">
                        <h6 style={{ fontSize: '15px' }}>Sold By: <span>My Website</span></h6>
                    </div>
                    <div className="horizontal-line" ></div>
                    <div className="cart d-flex justify-content-start  align-items-center">
                        <div><button onClick={addcart}>ADD TO CART</button></div>
                        <div><button className="buy">Buy Now</button></div>
                        <div><RiHeartLine style={{ fontSize: '42px', color: 'red' }} /></div>
                    </div>
                    <div className="categorie">
                        <p>Categories:<span>Television</span></p>
                        <p>Vendor:<span>My Website</span></p>
                    </div>
                </div>
            </section>
            <div>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Description" key="1" >
                        <Description />
                    </TabPane>
                    <TabPane tab="Review" key="2">
                        <Reviews />
                    </TabPane>


                </Tabs>
            </div>
            <div className="similar_products">
                {
                    similarproducts.map((item) => {
                        return (
                            <div className="d-flex flex-column " key={item.id}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h4 className="lastname">{item.titleFName}<span>{item.titleLName}</span></h4>
                                    <h6 role={'button'} onClick={() => console.log(`${item.path}`)}>View All</h6>
                                </div>
                                <div className="similar_items">
                                    <SimilarProducts item={item} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}
export default ViewsPages;