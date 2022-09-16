import React from "react";
import { makeStyles } from '@mui/styles';
import { Rate } from 'antd';
import { Progress, Avatar } from 'antd';
import Colors from "../../helpers/Colors";

const useStyles = makeStyles({
    root: {
        '& .Reviews_container': {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr ',
            marginTop: '5%',
            ['@media (max-width:800px)']: {
                display: 'block'

            },
        },
        '& .ant-rate-star-full': {
            '& div': {
                color: Colors.yellow
            }

        },
        '& .star_Ratings': {
            marginTop: '10px',
            width: '90%',
            ['@media (max-width:800px)']: {
                width: '100%',

            },
            '& h6': {
                width: '100px'
            }
        },
        '& .Our_reviews': {
            ['@media (max-width:800px)']: {
                marginTop: '25PX'

            },
            '& h5': {
                color: Colors.primary,
                fontSize: '20px'
            },
            '& p': {
                fontSize: '14px',
                height: '24px'
            },
            '& textarea': {
                // padding: '10px',
                borderRadius: '5px',
                marginBottom: '10px',
            },
            '& .submit': {
                color: Colors.white,
                background: 'linear-gradient(to right bottom, #08E0C3, #28C5E5)',
                border: 'none',
                padding: '6px 26px ',
                borderRadius: '50px',
                fontSize: '16px',

            }

        },
        '& .line': {
            width: '100%',
            height: '1px',
            backgroundColor: 'lightgray',
            marginBottom: '10px'
        },
        '& .Reviews_Commands': {
            marginTop: '15%',
            
        }


    }
})

const Reviews = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <section></section>
            <div className="Reviews_container">
                
                <div>
                    <h3 style={{ marginBottom: '0', color: 'green', fontSize: '35px' }}>4.00</h3>
                    <Rate style={{ fontSize: '14px' }} defaultValue={3.5} />
                    <div className="star_Ratings d-flex align-items-center">
                        <h6> 5 star </h6>
                        <Progress percent={100} />
                    </div>
                    <div className="star_Ratings d-flex align-items-center">
                        <h6> 4 star </h6>
                        <Progress percent={100} />
                    </div>
                    <div className="star_Ratings d-flex align-items-center">
                        <h6> 3 star </h6>
                        <Progress percent={100} />
                    </div>
                    <div className="star_Ratings d-flex align-items-center">
                        <h6> 2 star </h6>
                        <Progress percent={100} />
                    </div>
                    <div className="star_Ratings d-flex align-items-center">
                        <h6> 1 star </h6>
                        <Progress percent={10} />
                    </div>


                </div>

                <div className="Our_reviews">
                    <h5>SUBMIT YOUR REVIEW </h5>
                    <p>Your email address will not be published.Required field are marked</p>
                    <p>Your rating for this product <Rate style={{ fontSize: '24px' }} defaultValue={0} /></p>
                    <textarea rows="4" cols="50" placeholder="Write Your Review Here" />
                    <div><button className="submit">Submit Review</button></div>
                </div>
            </div>

            <div className="Reviews_Commands">
                <div className="d-flex ">
                    <div>
                        <Avatar >M</Avatar>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <h6 style={{ margin: '0' }}>Mercy IT Corp</h6>
                        <Rate style={{ fontSize: '10px' }} defaultValue={4.5} /><span>5.0</span>
                    </div>

                </div>

                <div>
                    <h2 style={{ textAlign: "end", fontSize: '12px' }}>2 days</h2>
                    <p style={{ fontSize: '13px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                </div>
                <div className="line"></div>
                <div className="d-flex">
                    <div>
                        <Avatar>M</Avatar>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <h6 style={{ margin: '0' }}>Mercy IT Corp</h6>
                        <Rate style={{ fontSize: '10px', marginBottom: '0' }} defaultValue={4.5} /><span>5.0</span>
                    </div>

                </div>
                <div>
                    <h2 style={{ textAlign: "end", fontSize: '12px' }}>2 days</h2>
                    <p style={{ fontSize: '13px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                </div>
            </div>

        </div>
    )
}

export default Reviews;