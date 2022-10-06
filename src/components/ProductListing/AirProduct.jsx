import React, { useState } from "react";
import { makeStyles } from '@mui/styles'
import { Card } from "react-bootstrap";
import { borderColor, textAlign } from "@mui/system";
import Colors from '../../helpers/Colors';
import FontSize from '../../helpers/Fontsize';
import Star from "../.././helpers/assests/Best selling/AC.jpg";
import { BsCart2 } from 'react-icons/bs'
import { MdFilterAlt } from 'react-icons/md'
import { Button, Drawer, Radio, Space } from 'antd';
import SubCategories from "./SubCategories";
import { useNavigate } from "react-router-dom";





const useStyles = makeStyles({
    root: {
        width: '100%',
        '& .Filter_icon': {
                display: 'none',
                ['@media (max-width:800px)']: {
                    display: 'inline-block',

                },
            
        },
        '& .AllAir_product': {
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gridGap: '0px 10px',
            ['@media (max-width:1025px)']: {
                gridTemplateColumns: 'repeat(3,1fr)'
            },
            
            ['@media (max-width:500px)']: {
                gridTemplateColumns: 'repeat(2,1fr)',
                
                
            },
            // ['@media (max-width:350px)']: {
            //     gridTemplateColumns: '1fr',

            // },
          


        },
        '& .Found ': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            
            
        },
        '& .sort': {
            borderRadius: '10px',
            padding: '3px 25px',
            textAlign: 'center',
            borderColor: 'green'
        },
        '& .Aircards_container': {
            margin: '0px auto'
        },
        '& .Air_name': {
            fontSize: FontSize.mdScreen
        },
        '& .Air_title': {
            fontSize: FontSize.cardTitle,
            // width: '100%',
            // maxHeight: '40px',
            overflow: 'hidden',
        },
        '& .AirImg_container': {
            position: 'relative',
            '& .offer_price': {
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
        '& .Air_price': {
            color: Colors.primary,
        },
        '& .Air_cutPrice': {
            color: Colors.grey1,
            fontSize: FontSize.mdScreen,
        },
        '& .Air_logo': {
            fontSize: FontSize.cartIcon,
            padding: '1px 8px 5px 8px',
            background: Colors.primaryBackground,
            borderRadius: '50%',
            color: Colors.white,


        },

    }
})

const AirProduct = () => {
    const navigate=useNavigate()
    const classes = useStyles()
    const Inverter = [

        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Star,
            offer: 0,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Star,
            offer: 10,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Star,
            offer: 10,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Star,
            offer: 20,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Star,
            offer: 10,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Star,
            offer: 20,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Star,
            offer: 40,
            cutPrice: 57000,
        },
        {
            brand: 'Blue Star',
            title: 'Bluestar 1.5 ton 5 star inverter ac',
            brandImage: Star,
            offer: 25,
            cutPrice: 57000,
        },


    ]
    const sliced = Inverter.slice(0, 10);
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState('left');

    const showDrawer = () => {
        setVisible(true);
    };
    const gotoviewcart = () => {
        navigate('/Productview')
    }

    // const onChange = (e) => {
    //     setPlacement(e.target.value);
    // };

    // const onClose = () => {
    //     setVisible(false);
    // };
    return (
        <div className={classes.root}>
            <div className="Found">

                <div className="Filter_product" > <MdFilterAlt className="Filter_icon" onClick={showDrawer} /> 5  products Found</div>
                <div >
                    <select className="sort">
                        <option>sort Products</option>
                    </select>
                </div>
                
            </div>
            <div className="AllAir_product">
                {
                    sliced.map((item, index) => {
                        return (
                            <Card style={{ with: '13rem' }} key={index} className='Aircards_container mb-2' onClick={gotoviewcart}>
                                <Card.Body>
                                    <p className='Air_name'>{item.brand}</p>
                                    <h6 className='p-0 m-0 Air_title'>{item.title}</h6>
                                    <div className="AirImg_container">
                                        <Card.Img className="py-2 Air_img" variant="top" src={item.brandImage} />
                                        {
                                            item.offer > 0 ? (<div className='offer_price fw-bold d-flex flex-column'>
                                                <div>{item.offer}%</div>
                                                <div>off</div>
                                            </div>) : null
                                        }
                                    </div>
                                    <Card.Text>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className="d-flex flex-column">
                                                <h5 className="p-0 m-0 Air_price">₹{(item.cutPrice - (item.cutPrice * item.offer / 100)).toLocaleString()}</h5>
                                                <p className='p-0 m-0 Air_cutprice'><del>₹{item.cutPrice.toLocaleString()}</del></p>
                                            </div>
                                            <div className="Air_logo">
                                                <BsCart2 />
                                            </div>
                                        </div>

                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        )
                    })
                }
            </div>
            
            <Drawer
                
                placement={placement}
                width={300}
                // closeIcon={true}
                
                 onClose = {()=> setVisible(false)}
                visible={visible}
          
            >
                
                <SubCategories  />
 
            </Drawer>
        </div>

    )
}


export default AirProduct