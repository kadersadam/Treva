import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        '& .acc_body': {
            padding: '0 !important',
            '& p': {
                margin: 0,
                padding: '10px 0px 10px 30px'
            }
        },
    }
})

export const AccordionNav = ({ allCategories }) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Accordion>
                {
                    allCategories.map(item => {
                        return (
                            <Accordion.Item key={item.id} eventKey={item.id}>
                                <Accordion.Header>{item.navCategory}</Accordion.Header>
                                {
                                    item.subNav.map(subNav => {
                                        return (
                                            <Accordion.Body key={subNav.id} className='acc_body' onClick={() => console.log(subNav.path)}>
                                                <p>{subNav.subcatName}</p>
                                            </Accordion.Body>
                                        )
                                    })
                                }
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </div>
    )
}