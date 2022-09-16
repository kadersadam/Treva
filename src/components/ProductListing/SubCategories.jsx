import React from "react";
import { makeStyles } from '@mui/styles'
// import Colors from '../../../helpers/Colors'
import { Accordion } from "react-bootstrap";
import { Collapse, Checkbox, Col, Row } from 'antd';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'



const { Panel } = Collapse;
const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '5px',
        '& .whole': {
            ['@media (max-width:800px)']: {
                // display: display
            },
        },
        '& .box': {
            backgroundColor: 'white',

            // width:'100%'
            // underline: 'none',
            // marginleft: '50px'
            // '& .ant-collapse': {
            //     backgroundColor: 'transparent'
            // }

        },


    },
    checkboxContainer: {
        '& .ant-checkbox-checked': {
            '& .ant-checkbox-inner': {
                backgroundColor: 'green',
                borderColor: 'green',
                outline: 'none',
                border: 'none'
            }
        },
        '& .ant-checkbox-wrapper:hover': {
            '& .ant-checkbox-inner': {
                borderColor: 'none !important'
            }
        },
        '& .inner': {
            borderBottom: 'none'
        },


    }
})


const subCate = [
    {
        id: 1, headcat: 'Sub Categories', headnav: [
            { id: 1, name: 'Air cooler', path: '/' },
            { id: 2, name: 'Exhaust Fan', path: '/' },
            { id: 3, name: 'Fan', path: '/' },
            { id: 4, name: 'Garment Care/ Iron Box', path: '/' },
            { id: 5, name: 'Geyser/Waterheater', path: '/' },
            { id: 6, name: 'Pedestal Fan', path: '/' },
            { id: 7, name: 'Tower Fan', path: '/' },
            { id: 8, name: 'Water Dispenser', path: '/' }
        ]
    },
    {
        id: 1, headcat: 'Brands', headnav: [
            // { id: 1, name: 'Air cooler', path: '/' },
            // { id: 2, name: 'Exhaust Fan', path: '/' },
            // { id: 3, name: 'Fan', path: '/' },
            // { id: 4, name: 'Garment Care/ Iron Box', path: '/' },
            // { id: 5, name: 'Geyser/Waterheater', path: '/' },
            // { id: 6, name: 'Pedestal Fan', path: '/' },
            // { id: 7, name: 'Tower Fan', path: '/' },
            // { id: 8, name: 'Water Dispenser', path: '/' }
        ]
    },
    {
        id: 1, headcat: 'Price', headnav: [
            // { id: 1, name: 'Air cooler', path: '/' },
            // { id: 2, name: 'Exhaust Fan', path: '/' },
            // { id: 3, name: 'Fan', path: '/' },
            // { id: 4, name: 'Garment Care/ Iron Box', path: '/' },
            // { id: 5, name: 'Geyser/Waterheater', path: '/' },
            // { id: 6, name: 'Pedestal Fan', path: '/' },
            // { id: 7, name: 'Tower Fan', path: '/' },
            // { id: 8, name: 'Water Dispenser', path: '/' }
        ]
    },
    {
        id: 1, headcat: 'Brands', headnav: [
            // { id: 1, name: 'Air cooler', path: '/' },
            // { id: 2, name: 'Exhaust Fan', path: '/' },
            // { id: 3, name: 'Fan', path: '/' },
            // { id: 4, name: 'Garment Care/ Iron Box', path: '/' },
            // { id: 5, name: 'Geyser/Waterheater', path: '/' },
            // { id: 6, name: 'Pedestal Fan', path: '/' },
            // { id: 7, name: 'Tower Fan', path: '/' },
            // { id: 8, name: 'Water Dispenser', path: '/' }
        ]
    },
    {
        id: 1, headcat: 'Price', headnav: [
            // { id: 1, name: 'Air cooler', path: '/' },
            // { id: 2, name: 'Exhaust Fan', path: '/' },
            // { id: 3, name: 'Fan', path: '/' },
            // { id: 4, name: 'Garment Care/ Iron Box', path: '/' },
            // { id: 5, name: 'Geyser/Waterheater', path: '/' },
            // { id: 6, name: 'Pedestal Fan', path: '/' },
            // { id: 7, name: 'Tower Fan', path: '/' },
            // { id: 8, name: 'Water Dispenser', path: '/' }
        ]
    },
    {
        id: 1, headcat: 'Brands', headnav: [
            // { id: 1, name: 'Air cooler', path: '/' },
            // { id: 2, name: 'Exhaust Fan', path: '/' },
            // { id: 3, name: 'Fan', path: '/' },
            // { id: 4, name: 'Garment Care/ Iron Box', path: '/' },
            // { id: 5, name: 'Geyser/Waterheater', path: '/' },
            // { id: 6, name: 'Pedestal Fan', path: '/' },
            // { id: 7, name: 'Tower Fan', path: '/' },
            // { id: 8, name: 'Water Dispenser', path: '/' }
        ]
    },
    {
        id: 1, headcat: 'Price', headnav: [
            // { id: 1, name: 'Air cooler', path: '/' },
            // { id: 2, name: 'Exhaust Fan', path: '/' },
            // { id: 3, name: 'Fan', path: '/' },
            // { id: 4, name: 'Garment Care/ Iron Box', path: '/' },
            // { id: 5, name: 'Geyser/Waterheater', path: '/' },
            // { id: 6, name: 'Pedestal Fan', path: '/' },
            // { id: 7, name: 'Tower Fan', path: '/' },
            // { id: 8, name: 'Water Dispenser', path: '/' }
        ]
    },
]
const SubCategories = ({display }) => {
   

    const Checked = () => {
        console.log("checked");
    }



  
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className="whole">
                <Collapse defaultActiveKey={0}
                    expandIcon={({ isActive }) => isActive ? <AiFillMinusSquare style={{ fontSize: '18px', color: 'red' }} /> : <AiFillPlusSquare style={{ fontSize: '18px', color: 'red' }} />}
                >

                    {

                        subCate.map((item, i) => {


                            return (


                                <Panel header={item.headcat} key={i} className="box">

                                    <div className={classes.checkboxContainer} >
                                        <Checkbox.Group /*style={{ width: '100%' }}*/ onChange={Checked} className="inner">

                                            {
                                                item.headnav.map(headnav => {
                                                    return (
                                                        <Row >
                                                            <Col span={100} >
                                                                <Checkbox value={headnav.name} className="" >{headnav.name}</Checkbox>
                                                            </Col>
                                                        </Row>

                                                    )
                                                })
                                            }

                                        </Checkbox.Group>
                                    </div>
                                </Panel>




                            )
                        })
                    }


                </ Collapse >

            </div>

        </div>
    )
}

export default SubCategories

