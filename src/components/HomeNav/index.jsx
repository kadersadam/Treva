import React, { useState, useRef, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import Colors from '../../helpers/Colors'
// import useMediaQuery from '@mui/material/useMediaQuery';
import { GoLocation } from 'react-icons/go'
import { BsBag, BsSearch, BsChevronDown, BsHeart } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import FontSize from '../../helpers/Fontsize'
import Logo from '../../helpers/assests/logo.png'
import { AccordionNav } from './Accordion'
import './homeNav.css'
import { BsCart2 } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdSecurity } from 'react-icons/md'
import Airconditioner from '../.././helpers/assests/Best selling/AC.jpg';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Modal from 'react-bootstrap/Modal';
import Map from '../.././helpers/assests/Map.png'





// import component
import Drawer from "react-modern-drawer";
import { Card } from 'react-bootstrap'
import { CardContent } from '@mui/material'


const useStyles = makeStyles({
    root: {
        position: 'sticky',
        top: '0px',
        background: Colors.white,
        zIndex: 99,
        '& .mobileNav': {
            cursor: 'pointer',
            ['@media (min-width:780px)']: {
                display: 'none'
            },
            '& .grid_container': {
                display: 'grid',
                gridTemplateColumns: '1fr 8fr',
                borderBottom: `0.5px solid ${Colors.grain}`,
                '& div': {
                    textAlign: 'center',
                    '& h3': {
                        fontSize: '30px',
                    },
                    '& img': {
                        width: '200px',
                    },
                }
            },
            '& .flex_container': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderBottom: `0.5px solid ${Colors.grain}`,
                '& div': {
                    textAlign: 'center',
                    '& h3': {
                        fontSize: '30px',
                    },
                    '& img': {
                        width: '150px',
                    },
                }
            },
        },

        '& .homeHead': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            padding: '0px 50px',
            ['@media (max-width:780px)']: {
                display: 'none'
            },
            ['@media (max-width:1300px)']: {
                padding: '0px 20px',
            },
            '& .left_grid': {
                display: 'flex',
                alignItems: 'center',
                ['@media (max-width:1400px)']: {
                    fontSize: FontSize.mdScreen
                },
                '& div': {
                    margin: '0px 20px',
                    cursor: 'pointer',
                    ['@media (max-width:1300px)']: {
                        margin: '0px 10px',
                    },
                },
                '& .select_pincode': {
                    '& .address_clr': {
                        color: Colors.orange,
                    },
                    


                },




            },

            '& .center_grid': {
                textAlign: 'center',
                '& img': {
                    maxWidth: '200px',
                    width: '200px',
                }
            },
            '& .right_grid': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right !important',
                '& div': {
                    margin: '0px 10px',
                    fontSize: FontSize.icons,
                    cursor: 'pointer',
                },

                '& .searchbut': {
                    margin: '0px ',

                },
                '& .icons': {
                    fontSize: FontSize.icons,
                    color: Colors.grey

                },
                '& .count': {
                    position: 'relative',


                    '& .count_num': {
                        position: 'absolute',
                        top: 6,
                        padding: '1px 6px',
                        color: Colors.white,
                        backgroundColor: Colors.orange,
                        fontSize: FontSize.iconCount,
                        borderRadius: '50%',
                    }
                },
                '& .icons:hover': {
                    color: Colors.orange
                },
                '& .login_hover': {
                    position: 'relative',
                    padding: '20px 0',
                    '& .login_register': {
                        fontSize: '18px !important',
                        ['@media (max-width:1200px)']: {
                            fontSize: '16px !important'
                        },
                        // ['@media (max-width:1100px)']: {
                        //     fontSize: '15px !important'
                        // }
                    },
                },
                '& .login_hover_items_con': {
                    position: 'absolute',
                    top: 60,
                    left: '0px',
                    padding: '5px 8px 5px 8px',
                    width: '100%',
                    background: Colors.white,
                    zIndex: 1000,
                    display: 'none',
                    borderRadius: '5px',
                    boxShadow: `0px 0px 15px ${Colors.grey}`,
                    ['@media (max-width:1100px)']: {
                        top: 80,
                    },
                    '& .login_hover_items': {
                        padding: '0px 5px'
                    },
                    '& .login_hover_items:hover': {
                        background: Colors.grain,
                        borderRadius: '5px',
                    },
                    '& .icon': {
                        fontSize: '15px'
                    },
                    '& p': {
                        fontSize: '13px',
                        padding: '0 5px !important',
                        margin: '5px 10px 5px 5px',
                        width: '100%',
                    }
                },
                '& .login_hover:hover': {
                    '& .login_hover_items_con': {
                        display: 'inline-block',
                        // transition: '1s all'
                    }
                },
                '& .carted': {
                    display: 'none',
                    position: 'absolute',
                    padding: '20px 10px',
                    top: 41,
                    left: '-100px',
                    // right:'-100px',
                    boxShadow: `0px 0px 15px ${Colors.grey}`,
                    backgroundColor: Colors.white,
                    // width: '100%',
                    zIndex: '1000',
                    borderRadius: '5px',
                    ['@media (max-width:1100px)']: {
                        top: 60,
                        // left: '-95px',
                        padding: '20px 0px'
                    },

                    '& .carted_inner ': {
                        border: `1px solid ${Colors.grain}`,
                        borderRadius: '7px',
                        // width: '100%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 3fr 1fr',
                        gridGap: '10px',
                        alignItems: 'center',
                        position: 'relative',
                        '& h6': {
                            fontSize: '12px',
                            margin: 0,
                            '& span': {
                                color: Colors.primary,
                                fontSize: '13px'
                            }
                        },
                        '& h4': {
                            fontSize: '13px',
                            color: 'red',
                            '& samp': {
                                color: 'grey'
                            }
                        }
                    },
                    '& .close_icon': {
                        position: 'absolute',
                        right: -10,
                        top: -10,
                        borderRadius: '100px',
                        // left:0,
                        // width: '100%',
                        backgroundColor: Colors.primary,
                        color: Colors.white
                    },
                    '& button': {
                        background: 'linear-gradient(to right bottom, #F55A48, #FBB03B)',
                        border: 'none',
                        padding: '6px 10px ',
                        borderRadius: '50px',
                        color: Colors.white,
                        fontSize: '14px',
                        width: '90%',
                        marginLeft: '15px',
                        // marginRight:'10px'
                    },
                    '& .total_amount': {
                        marginTop: '10px',
                        '& h4': {
                            fontSize: '15px'
                        },
                        '& h3': {
                            fontSize: '15px',
                            color: 'red'
                        }
                    }

                },

                '& .count:hover': {
                    '& .carted': {
                        display: 'inline-block',
                        // width:'100%'
                    }
                }
            }
        },

        '& .navBar': {
            borderTop: `0.2px solid ${Colors.grain}`,
            borderBottom: `0.2px solid ${Colors.grain}`,
            display: 'flex',
            padding: '0px 50px',
            ['@media (max-width:780px)']: {
                display: 'none'
            },
            '& .nav_container': {
                position: 'relative',
                '& .navMenu': {
                    padding: '10px 30px 10px 10px !important',
                    fontWeight: '500',
                    cursor: 'pointer',
                    ['@media (max-width:1400px)']: {
                        fontSize: FontSize.mdScreen,
                    },
                    'navArrow_color': {
                        color: `${Colors.orange} !important`
                    }
                },
                '& .navMenu:hover': {
                    background: 'linear-gradient(to right bottom, #F55A48, #fbb03b)',
                    color: Colors.white,
                    transition: 'all 0.2s'
                },
                '& .navSubMenu': {
                    position: 'absolute',
                    bottom: '-35px',
                    border: `1px solid ${Colors.grain}`,
                    borderTop: 'none',
                    borderRadius: '0 0 5px 5px',
                    '& p': {
                        padding: '5px 20px',
                        margin: 0,
                        borderRadius: '0 0 3px 3px',
                        background: Colors.white
                    },
                    '& p:hover': {
                        background: 'linear-gradient(to right bottom, #F55A48, #fbb03b)',
                        color: Colors.white,
                        transition: 'all 0.2s'
                    }
                },
            },

        },

    },
})

// Hover Dropdown menus in Laptop and system
const DisplayNav = ({ item }) => {

    return (
        <div className='nav_container' key={item.id}>
            <div className='navMenu' >
                <span className='me-2'>{item.navCategory}</span>
                <BsChevronDown className='navArrow_color' />
            </div>
            {
                item.subNav.map((subNav) => {
                    return (
                        <div className='navSubMenu' key={subNav.id}>
                            <p>{subNav.subcatName}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

// Main coding
const HomeNav = () => {
    const Cartnavigate = useNavigate();
    const navigate = useNavigate()
    const homelogo = () => {
        navigate('/')
    }
    const CartPage = () => {
        Cartnavigate('/cart')
    }


    // Mobile toggle drawer
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const classes = useStyles()

    const allCategories = [
        { id: 1, navCategory: 'All Category', subNav: [{ id: 1, subcatName: 'Sample 1', path: '/' }] },
        { id: 2, navCategory: 'Television', subNav: [{ id: 1, subcatName: 'Sample 1', path: '/television' }] },
        { id: 3, navCategory: 'Kitchen Appliances ', subNav: [{ id: 1, subcatName: 'Sample 1', path: '/kitchen ' }] },
        { id: 4, navCategory: 'Air Conditioners', subNav: [{ id: 1, subcatName: 'Sample 1', path: '/airConditioners ' }] },
        { id: 5, navCategory: 'Refrigerators', subNav: [{ id: 1, subcatName: 'Sample 1', path: ' /refrigerators ' }] },
        { id: 6, navCategory: 'Washing Machines', subNav: [{ id: 1, subcatName: 'Sample 1', path: ' /washingMachines' }] }
    ]

    const LoginDropDown = [
        {
            name: 'My orders',
            icon: <BsCart2 />,
            path: '/mycart'
        },
        {
            name: 'My Adresses',
            icon: <GoLocation />,
            path: '/myaddress'
        },
        {
            name: 'Login & security',
            icon: <MdSecurity />,
            path: '/loginsecurity'
        }
    ]


    const [show, setShow] = useState(false);
    const [pincode, setpincode] = useState(false)
    const [searchItem, setSearchItem] = useState("");
    const [filterItem, setFilterItem] = useState([]);
    const [showData, setShowData] = useState(false);
    const upRef = useRef();


    const products = [
        {
            image: Airconditioner,
            title: 'atomberk Effolt+1200mm BLDC Motor with Remote 3 Blade selling',
            amt: 3500,
            offer: 5420
        },
        {
            image: Airconditioner,
            title: 'Lorim ipsum is good content of the developers',
            amt: 3100,
            offer: 4520
        },
        {
            image: Airconditioner,
            title: 'atomberk Effolt+1200mm BLDC Motor with Remote 3 Blade selling',
            amt: 3500,
            offer: 5420
        }
    ]
    useEffect(() => {
        setFilterItem(
            products.filter((item) =>
                item.title.toLowerCase().includes(searchItem.toLowerCase())
            )
        );
        searchItem.length !== 0 ? setShowData(true) : setShowData(false);
        // upRef.current.focus();
    }, [searchItem])
    const datas =
        searchItem.length !== searchItem.length ? products : filterItem;

    return (
        <div className={classes.root}>

            {/* mobile nav */}

            <div className='mobileNav'>
                <div className='grid_container py-2 my-auto'>
                    <div><h3 onClick={toggleDrawer}><FaBars /></h3></div>
                    <div><img src={Logo} alt="logo" onClick={homelogo} /></div>
                </div>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="left"
                    className="navDrawer"
                >
                    <div className='flex_container py-2'>
                        <div><img src={Logo} alt="logo" /></div>
                        <div><h3 onClick={toggleDrawer}><AiOutlineClose /></h3></div>
                    </div>
                    <AccordionNav allCategories={allCategories} />
                </Drawer>
            </div>

            {/* Home head */}
            <div className='homeHead'>

                {/* Left grid */}
                <div className='left_grid'>
                    <div className='fw-bold' role={'button'}>About Us</div>
                    <div className='fw-bold' role={'button'}>Contact</div>
                    <div className='select_pincode' >

                        <div role={'button'} onClick={() => setpincode(true)}><GoLocation />select pincode</div>
                        <div className='address_clr fw-bold' onClick={() => setpincode(true)}>Chennai, Tamilnadu</div>

                        <Modal
                            show={pincode}
                            onHide={() => setpincode(false)}
                            dialogClassName="modal-90w"
                            centered
                         
                        >
                            <Modal.Header >
                                <Modal.Title >
                                    <div >
                                        <Card  className='map-card'>
                                            <div className='d-flex justify-content-between align-items-center '>
                                                <div>
                                                    <img src={Map} style={{ width: '100%' }} />
                                                </div>
                                                <div className={'location'} >
                                                    <p >Choose Delivery Location</p>
                                                    <input type='number' placeholder='eg:600001' />
                                                    <button className='check'>Check Availability</button>
                                                </div>
                                            </div>

                                        </Card>

                                    </div>
                                </Modal.Title>
                            </Modal.Header>

                        </Modal>

                    </div>
                </div>

                {/* Center grid */}
                <div className='center_grid d-flex justify-content-center align-items-center' onClick={homelogo}>
                    <img src={Logo} alt="logo" />
                </div>

                {/* Right grid */}
                <div className='right_grid'>
                    <div className='searchbut'>
                        <Button style={{ border: 'none' }} onClick={() => setShow(true)}>
                            <BsSearch className='icons' />
                        </Button>
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            centered
                        >
                            <Modal.Header >
                                <Modal.Title >
                                    <div className={'inputhold'}>
                                        <input type="text" placeholder='search' ref={upRef} onChange={(e) => setSearchItem(e.target.value)} />

                                        <BsSearch className='searchicon ' />
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={"mbody"} style={{ display: showData ? "block" : "none" }}>

                                <Card >
                                    {
                                        datas.map((item, index) => (
                                            <div className={"row mx-0 p-0"} key={index} >

                                                <div className={"col-lg-5"}>

                                                    <Card.Img src={item.image} />
                                                </div>
                                                <div className={"col-lg-7"}>
                                                    <Card.Body >
                                                        {/* <Card.Title>Card Title</Card.Title> */}
                                                        <Card.Text>
                                                            {item.title}
                                                            <span style={{ color: 'red' }}>{item.amt}</span>
                                                            <span><del>{item.offer}</del></span>
                                                        </Card.Text>

                                                    </Card.Body>

                                                </div>
                                            </div>
                                        ))

                                    }

                                </Card>
                            </Modal.Body>
                        </Modal>


                    </div>
                    <div className='count'>
                        <BsHeart className='icons' />
                        <div className='count_num'>0</div>
                    </div>
                    <div className='count'>
                        <BsBag className='icons' />
                        <div className='count_num'>0</div>
                        <div className='carted ' >

                            <div className='carted_inner '>
                                <div>
                                    <img src={Airconditioner} style={{ width: '100px' }} />
                                </div>
                                <div >
                                    <h3 style={{ width: '125px', fontSize: '13px', marginTop: '10px' }}>Preethi MGA-504 stainless steel Genei jar for Eco Twin.....</h3>
                                    <h6>Brand:<span>Preethi</span></h6>
                                    <h4>₹22,900<samp>×1</samp></h4>
                                </div>
                                <div ><AiOutlineCloseCircle className='close_icon' /></div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center total_amount'>
                                <h4>Sub Total</h4>
                                <h3>₹22,900</h3>
                            </div>
                            <button onClick={CartPage}>View Cart</button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center m-0 login_hover'>
                        <div className='d-flex align-items-center ms-0'>
                            <div className='me-0'><FiUser className='icons' /></div>
                            <div className='fs-6 fw-bold ms-2 login_register'>Login / Register</div>
                        </div>
                        <div className='login_hover_items_con'>
                            {
                                LoginDropDown.map((item, index) => {
                                    return (
                                        <div className='d-flex align-items-center py-1 m-0 login_hover_items' onClick={() => console.log(`${item.path}`)}>
                                            <div className='p-0 m-0 icon'>{item.icon}</div>
                                            <p className='p-0'>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                            <hr className='p-0 m-0 my-1' />
                            <div className='d-flex align-items-center py-1 m-0 login_hover_items' onClick={() => console.log(`/Login`)}>
                                <p className='p-0'>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NavBar */}
            <div className='navBar'>
                {
                    allCategories.map((item) => {
                        return (
                            <DisplayNav item={item} classes={classes} />
                        )
                    })
                }
            </div>

        </div >
    )
}

export default HomeNav






