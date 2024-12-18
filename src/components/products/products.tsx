import './pd.module.scss'
import classname from './pd.module.scss'
import speaker from '../../../public/assets/product-zx9-speaker/mobile/image-product.jpg'
import headphone from '../../../public/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import earphone from '../../../public/assets/product-yx1-earphones/mobile/image-product.jpg'
import arrow from '../../../public/assets/shared/desktop/icon-arrow-right.svg'
const ProductsContainer = () => {
    return (
        <section className={classname['main']}>
            <div className={classname['innermain']}>
                <div className={classname['first']}>
                    <img src={headphone} alt="" />
                </div>
                <div className={classname['second']}>
                <h2>
                    headphones</h2>
                    <span style={{
                        display:'flex',
                        alignItems:'center',
                        gap:'10px'
                    }}>
                        <span>shop</span>
                        <img src={arrow} alt="" />
                       </span>
                    </div>
            </div>
            <div className={classname['innermain']}>
                <div className={classname['first']}>
                    <img src={speaker} alt="" />
                </div>
                <div className={classname['second']}>
                <h2>
                    speakers</h2>
                    <span style={{
                        display:'flex',
                        alignItems:'center',
                        gap:'10px'
                    }}>
                        <span>shop</span>
                        <img src={arrow} alt="" />
                       </span>
                </div>
            </div>
            <div className={classname['innermain']}>
                <div className={classname['first']}>
                    <img src={earphone} alt="" />
                </div>
                <div className={classname['second']}>
                <h2>
                    earphones</h2>
                    <span style={{
                        display:'flex',
                        alignItems:'center',
                        gap:'10px'
                    }}>
                        <span>shop</span>
                        <img src={arrow} alt="" />
                       </span>
                </div>
            </div>
        </section>
    )
}
export default ProductsContainer