import React from 'react'
import { makeStyles } from '@mui/styles'
import Colors from '../../../helpers/Colors'

const useStyles = makeStyles({
    root: {
        
        '& p': {
            // width: '100%',
            margin: '10px 40px',
            ['@media (max-width:800px)']: {
                margin:'10px 30px'
            },
        },
        '& div': {
            // margin:'20px 60px',
            '& .doted': {
                width: '65%',
                height: '2px',
                background: Colors.grey,
                ['@media (max-width:800px)']: {
                  width:'58%'
                },

            }
        },
        ['@media (max-width:500px)']: {
            '& p': {
                alignItems: 'center ',
                // width:'100%'
            },
            '& .doted': {
            display:'none'
            }
        },
    }
})
const Copy = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className='d-flex align-items-center foot'>
                <div>
                    <p >© 2021 My Website.All Rights Reserved </p>
                </div>
                <div className='doted' ><span></span></div>
            </div>

        </div>
    )
}

export default Copy