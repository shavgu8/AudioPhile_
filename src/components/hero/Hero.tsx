import './hero.module.scss'
import classname from './hero.module.scss'
import image from './Bitmap.png'
import secimage from './Bitmaqp.png'
import { Button1 } from '../button/button'
import { NavLink } from 'react-router-dom'
const HeroContainer = ()=>{
    return(
        <section className={classname['section']}>
            <div className={classname['text']}>
                <h2>
                    new product
                </h2>
                <h1>
                XX99 Mark II
                Headphones
                </h1>
                <p>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
            <NavLink to={'/products/headphones/4'}>  <Button1/></NavLink>
            </div>
            <div className={classname['image']}>
                <img id={classname['frimage']} src={image} alt="image" />
                <img id={classname['secimage']} src={secimage} alt="" />
            </div>
        </section>
    )
}
export default HeroContainer