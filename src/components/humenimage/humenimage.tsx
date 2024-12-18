import Image from './Bitmap.png'
import classname from './humenimg.module.scss'
import image from './Bitmap (1).png'

const HumenImage  = ()=>{
    return(
        <div className={classname['mian']}>
            <div className={classname['leftside']}>
                <h1>Bringing you the <span style={{
                    margin:'0',
                    padding:"0",
                    color:"#D87D4A"
                }} >best</span> audio gear</h1>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            <div className={classname['rightside']}>
                <img className={classname['frimage']} src={Image} alt="" />
                <img className={classname['scimage']} src={image} alt="" />
            </div>
        </div>
    )
}
export default HumenImage