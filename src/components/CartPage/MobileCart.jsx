import React, { useState } from "react";
import { makeStyles } from '@mui/styles'
import { Card } from "antd";
import { RiCloseFill } from 'react-icons/ri'

const useStyles = makeStyles({
    root: {
        margin: '0px 10px',
        '& .lines': {
            width: '100%',
            height: '1px',
            backgroundColor: 'lightgray',
        },
        '& .mobile_card': {
            '& span': {
                fontSize: '15px',
                color: 'grey',
                fontWeight: 'bold',
                '& samp': {
                    color: 'red'
                }
            }
        },
        '& .cards_box': {
            position: 'relative'
        },

        '& .close_ri': {
            position: 'absolute',
            top: '0px',
            right: '-10px',
            fontSize: '20px'
        }
    }
})


const MobileCart = ({ mobiledata }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                <Card >

                    {
                        mobiledata.map((items) => {
                            return (

                                <div className="cards_box">
                                    <div className="lines"></div>

                                    <div className="close_ri">
                                        <RiCloseFill />
                                    </div>
                                    {
                                        items.product.map((pr) => {
                                            return (
                                                <div style={{ marginTop: '20px' }}>

                                                    <div className="d-flex justify-content-between align-items-center mobile_img ">
                                                        <div>
                                                            <img src={pr.image} style={{ width: '100px' }} />

                                                        </div>

                                                        <div>
                                                            <p style={{ width: '150px', fontSize: '13px', color: 'grey', fontWeight: 'bold' }}>{pr.name}</p>

                                                        </div>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center mobile_card">
                                                        {
                                                            items.qty.map((qt) => {
                                                                return (
                                                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: '1px solid #F2F2F2', borderRadius: '10px', padding: '0px 8px', width: '100px', fontSize: '14px', marginTop: '10px', marginBottom: '10px' }}>
                                                                        {qt.sub}
                                                                        {qt.num}
                                                                        {qt.add}

                                                                    </div>

                                                                )
                                                            })
                                                        }
                                                        <span >Price : <samp> {items.mrp}</samp></span>
                                                        <span>Total : <samp>{items.total}</samp></span>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            );
                        })
                    }
                </Card>
            </div>

        </div >
    )
}

export default MobileCart;