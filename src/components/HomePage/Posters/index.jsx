import React from 'react'
import { makeStyles } from '@mui/styles'
import Kitchen from '../../../helpers/assests/posters/kitchenPoster.png'
import Electronic from '../../../helpers/assests/posters/elactronicPoster.png'

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridGap: '10px',
        margin: '20px 60px',
        // justifyItems: 'center',
        ['@media (max-width:800px)']: {
            gridTemplateColumns: '1fr',
            margin: '20px 40px',
        },
        '& img': {
            width: '100%'
        }
    }
})

const Posters = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div><img src={Kitchen} alt="" /></div>
            <div><img src={Electronic} alt="" /></div>
        </div>
    )
}

export default Posters