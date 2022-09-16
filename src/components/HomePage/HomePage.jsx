import React from 'react'
import HomeNav from '../HomeNav'
import SlickSlider from '../HomeNav/slickSlider'
import FooterPage from '../Shared/Footer'
import Copy from '../Shared/Footer/Copy'
import Allcategories from './All categories'
import BestSelling from './BestSelling'
import CardProducts from './cardProducts/CardProducts'
import Posters from './Posters'
import ShopByBrands from './shopByBrands'

const HomePage = () => {

  return (
    <div>
      <HomeNav />
      <SlickSlider />
      <CardProducts />
      <ShopByBrands />
      <BestSelling />
      <Posters />
      <Allcategories />
      <FooterPage />
      <Copy/>
    </div>
  )
}

export default HomePage