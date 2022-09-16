import React, { useState } from "react";
import { makeStyles } from '@mui/styles'
import { RiCloseFill } from 'react-icons/ri'
import { Table } from 'antd';
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'
import Airconditioner from '../.././helpers/assests/Best selling/AC.jpg';
import Colors from "../../helpers/Colors";
import MobileCart from "./MobileCart";
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles({
    root: {
        ['@media (max-width:1450px)']: {
            '& .table': {
                display: 'block',
            },

            '& .mobilecart': {
                display: 'none'
            } 
        },
        ['@media (max-width:500px)']: {
            '& .table': {
                display: 'none',
            },
            
            '& .mobilecart': {
                display: 'block'
            }    
        },
        
        
        '& .ant-table-thead ': {
            '& tr': {
                '& th': {
                    padding: '20px 10px',
                    fontSize: '13px',
                    textAlign: 'center',
                    color: '#4D4D4D',
                    ['@media (max-width:1024px)']: {
                        fontSize: '10px',
                        fontWeight: 'bold'
                    },
                    
                }
            }
        },
        '& .ant-table-tbody ': {
            '& tr': {
                '& td': {
                    color: Colors.red,
                    fontSize: '14px',
                    fontWeight: 'bold' 

                }
            }
        },
        '& .product_name': {
            width: '170px',
            fontSize: '11px',
            
        }



    }
})

const CartTable = () => {
    const columns = [
        {
            title: 'PRODUCT',
            dataIndex: 'product',
            key: 'product',
            render: (_, data) => {
                return (
                    <div >
                        {
                            data.product.map((p) => (
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }} >
                                    <RiCloseFill />
                                    <img src={p.image} width={'100px'} />
                                    <div className="product_name">{p.name}</div>
                                </div>
                            ))
                        }
                    </div>
                )
            },



        },
        {
            title: 'QTY',
            dataIndex: 'qty',
            key: 'qty',
            render: (_, datas) => {
                return (
                    <div>
                        {
                            datas.qty.map((q) => (
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: '1px solid #F2F2F2', borderRadius: '10px', padding: '0px 8px', width: '80px', fontSize: '14px' }}>
                                    {q.sub}
                                    {q.num}
                                    {q.add}
                                </div>
                            ))
                        }
                    </div>
                )
            },



        },
        {
            title: 'MRP PRICE',
            dataIndex: 'mrp',
            key: 'mrp'
        },
        {
            title: 'OFFER PRICE',
            dataIndex: 'offer',
            key: 'offer'
        },
        {
            title: 'TOTAL',
            dataIndex: 'total',
            key: 'total'
        }
    ]

    const data = [
        {
            key: 1,
            product: [{
                id: 1,
                image: Airconditioner,
                name: 'Preethi MGA-504 Stainless Steel Genie Jar for Eco Twin, Plus/Chef Pro and Blue Leaf, 0.5-Liter, Silver',

            }],
            qty: [{
                add: <AiOutlinePlus style={{ color: '#FBB03B' }} />,
                num: 1,
                sub: <AiOutlineMinus style={{ color: '#FBB03B' }} />
            }],
            mrp: '₹23,000',
            offer: '₹22,900',
            total: '₹22,900'
        },
        {
            key: 2,
            product: [
                {
                    id: 2,
                    image: Airconditioner,
                    name: 'Preethi MGA-504 Stainless Steel Genie Jar for Eco Twin, Plus/Chef Pro and Blue Leaf, 0.5-Liter, Silver',
                }
            ],
            qty: [
                {
                    add: <AiOutlinePlus style={{ color: '#FBB03B' }} />,
                    num: 1,
                    sub: <AiOutlineMinus style={{ color: '#FBB03B' }} />
                }],
            mrp: '₹23,000',
            offer: '₹22,900 ',
            total: '₹22,900'
        }
    ]

    const classes = useStyles()

    return (

        <div className={classes.root}>
            <div className="mobilecart">
                < MobileCart mobiledata={data} />
            </div>
             <div className="table">
                <Table pagination={false} columns={columns} dataSource={data} style={{ marginTop: '30px' }} />
            </div>

           



        </div>
    )
}

export default CartTable;