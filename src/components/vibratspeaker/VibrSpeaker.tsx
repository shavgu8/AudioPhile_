import classname from './vobrspeaker.module.scss'
import image2 from '../../../public/assets/product-zx9-speaker/desktop/image-removebg-preview(38)@2x.png'
import { Button2 } from '../button/button'
import { NavLink } from 'react-router-dom'
const VibrSpeaker = ()=>{
    return(
        <div className={classname['container']}>
        <div className={classname['imgcont']}>
                 <img   src={image2} alt="" />
        </div>
        <div className={classname['need']} style={{
            width:"10%"
        }}>

        </div>
        <div className={classname['textcont']}>
<h1>ZX9
SPEAKER</h1>
<p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
<NavLink to={'/products/speakers/6'}><span style={{
    height:'48px'
}}><Button2/></span></NavLink>
        </div>
        </div>
    )
}
export default VibrSpeaker