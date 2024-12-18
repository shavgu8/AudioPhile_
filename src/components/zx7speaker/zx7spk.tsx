import image from './Bitmap@2x.png'
import clasname from './zx7spk.module.scss'
import image2 from './Bitmap.png'
import { Button2 } from '../button/button'
import { NavLink } from 'react-router-dom'
const Zx7Speaker =()=>{
    return(
        <div className={clasname['main']}>
            <div className={clasname['positiondiv']}>
                      <h2>Zx7 speaker</h2>
                      <NavLink to={'/products/speakers/5'}><Button2/></NavLink>
            </div>
          <img className={clasname['frimage']} src={image2} alt="" />
          <img  className={clasname['scimage']} src={image} alt="" />
        </div>
    )
}
export default Zx7Speaker