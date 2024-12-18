import { NavLink } from 'react-router-dom'
import image from '../../../public/assets/product-yx1-earphones/desktop/image-gallery-2.jpg'
import { Button2 } from '../button/button'
import classname from './earphone.module.scss'
const Earphone  = ()=>{
    return(
        <div className={classname['main']}>
            <div className={classname['left']}><img src={image} alt="" /></div>
            <div className={classname['right']}>
           
                <h1>yx1 earphone</h1>
             <NavLink to={'/products/earphones/1'}>   <Button2/></NavLink>
            </div>
        </div>
    )
}
export default Earphone