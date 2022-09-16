import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { makeStyles } from '@mui/styles';
// Images
import Kitchen from '../../../helpers/assests/cardProducts/KitchenAppliance.png'
import LedTV from '../../../helpers/assests/cardProducts/TV.png'
import WashingMachine from '../../../helpers/assests/cardProducts/Washingmachine.png'
import Colors from '../../../helpers/Colors';

const useStyles = makeStyles({
    root: {
        margin: '30px 0px 10px 0px',
        '& .row_card': {
            margin: 0
        },
        '& .column_card': {
            margin: '0px auto',
            // width: '30% !important'
            ['@media (max-width:425px)']: {
                margin: '10px auto'
            },
        },
        '& .card_container': {
            textAlign: 'center',
            border: 'none'
        },
        '& .img_card_container': {
            height: '175px',
            '& .img_card': {
                width: '200px',
                margin: '0px auto'
            },
        },
        '& .card_button': {
            width: '110px',
            margin: '0px auto',
            border: 'none',
            borderRadius: '15px',
            padding: '5px 10px',
            background: 'linear-gradient(to right bottom, #F55A48, #fbb03b)',
            color: Colors.white,
        }
    }
})

const CardProducts = () => {

    const classes = useStyles()

    const cardItems = [
        {
            name: 'Kitchen Appliances',
            startPrice: 'Starting at Rs. 2,050',
            imgName: Kitchen,
        },
        {
            name: 'LED TV',
            startPrice: 'Starting at Rs. 2,050',
            imgName: LedTV,
        },
        {
            name: 'Washing Machine',
            startPrice: 'Starting at Rs. 2,050',
            imgName: WashingMachine,
        }
    ]

    return (
        <div className={classes.root}>
            <Row xs={1} md={3} lg={3} className='row_card'>
                {cardItems.map((item, index) => (
                    <Col className='column_card' key={index}>
                        <Card className='card_container'>
                            <div className='img_card_container'>
                                <Card.Img variant="top" src={item.imgName} className='img_card' />
                            </div>
                            <Card.Body className='card_body'>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.startPrice}
                                </Card.Text>
                                <button className='card_button'>Read More</button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CardProducts