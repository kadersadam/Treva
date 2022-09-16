import Slider from "react-slick";
import Banner1 from '../../helpers/assests/HomeBanner.png'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        '& img': {
            width: '100%'
        }
    }
})

const SlickSlider = () => {

    const classes = useStyles()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className={classes.root} style={{ zIndex: -1 }}>
            <Slider {...settings}>
                <div>
                    <img src={Banner1} alt="Banner 1" />
                </div>
                <div>
                    <img src={Banner1} alt="Banner 1" />
                </div>
            </Slider>
        </div>
    )
}

export default SlickSlider