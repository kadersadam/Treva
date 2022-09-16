import React from "react";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        
        '& .product-description': {
            fontSize: '17px',
            // height: '50px',
            '& ul': {
                padding: ' 0px 18px',
                '& li': {
                    padding:'10px'
                }
            },
            
      }
    }
})

const Description = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="product-description">
                <p>HDR : No | 3D Technology : No | Contrast Ratio : 4000:01' |Response Time : 16 ms | Refresh Rate : 60 Hz | Screen Size (Diagonal) : 81.28 cm (32 inch) | Panel Type : VA | Screen Resolution : 1366 x 768 | Display Type : HD Ready | Video Formats : MPEG2, M-JPEG, MPEG4, H.265, MP4, MKV, MOV, MPG, DAT, AVI, VOB</p>
                <h5>Key Features</h5>
                <ul>
                    <li> Resolution : HD Ready(1366*768)</li>
                    <li> Connectivity : 3 HDMI ports, 2 USB ports</li>
                    <li> Sound :  8 + 8 Watts, Down Firing TV Speaker, Surround Sound Technology </li>
                    <li> Refresh Rate: 60 Hz</li>
                </ul>

            </div>
           
        </div>

    )
}



export default Description;