import { useAppDispach, useAppSelector } from "../store/hook"
import { useEffect } from "react"
import { NavLink, useParams } from "react-router-dom"
import FetchingProducts from "../store/products/prodsAsincAwait"
import Loading from "../loading/loading"
import Navbar from "../components/navbar/navbar"
import classname from './../scss/products.module.scss'
import { Button1 } from "../components/button/button"
import ProductsContainer from "../components/products/products"
import HumenImage from "../components/humenimage/humenimage"
import earphone from '../../public/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'
import xx59 from '../../public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import mark1 from '../../public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import mark2 from '../../public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import zx7 from '../../public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'
import zx9 from '../../public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import Footer from "../components/footer/footer"
const Products = () => {
   const dispach = useAppDispach()
   const { productsId } = useParams()
   const { data, error, status } = useAppSelector((state) => state.prods)
   console.log(data)
   useEffect(() => {
      dispach(FetchingProducts())
   }, [dispach])

   if (status === 'loading') {
      return <Loading />
   }
   if (status === 'failed') {
      alert(error)
   }
   return (
      <>
         {status === 'loaded' && (
            data.filter((item) => item.id === productsId).map((item) => {
               console.log(item.gallery.first.desktop)
               return (
                  <div key={item.id}>
                     <div style={{
                        backgroundColor: 'black'
                     }}>
                        <Navbar />
                     </div>
                     <main>
                        <div className={classname['product']}>
                           <div className={classname['leftside']}>
                              <img src={`/${item.categoryImage.desktop}`} alt="" />
                           </div>
                           <div className={classname['rightside']}>
                              <h1>{item.name}</h1>
                              <p>{item.description}</p>
                              <h4>$ {item.price}</h4>
                              <span><Button1 /></span>
                           </div>
                        </div>
                        <div className={classname['featbox']}>
                           <div className={classname['features']}>
                              <h1>features</h1>
                              <p>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

                                 More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
                           </div>
                           <div className={classname['inbox']}>
                              <h1>in the box</h1>
                              <div>
                                 <span>1x</span>
                                 <p>Headphone Unit</p>

                              </div>
                           </div>
                        </div>
                        <div className={classname['ImageContainer']}>
                           <div className={classname['TwoImage']}>

                              <img src={`/${item.gallery.first.desktop}`} alt="" />

                              <img src={`/${item.gallery.second.desktop}`} alt="" />
                           </div>
                           <div className={classname['OneImage']}>
                              <img src={`/${item.gallery.third.desktop}`} alt="" />
                           </div>
                        </div>

                        {item.id === '2' ? <>

                           <div className={classname['threeimage']}>
                              <div className={classname['maylike']}>
                                 <h1> you may also like
                                 </h1>
                              </div>
                              <div className={classname['both']}>
                                 <div className={classname['images']}>
                                    <div className={classname['innerimage']}>
                                       <div className={classname['inner']}>
                                          <img src={mark2} alt="" />
                                       </div>
                                       <div>
                                          <h2>XX99 MARK II</h2>
                                          <NavLink to={'/products/headphones'}><span><Button1 /></span></NavLink>
                                       </div>
                                    </div>
                                    <div className={classname['innerimage']}>
                                       <div className={classname['inner']}>
                                          <img src={mark2} alt="" />
                                       </div>

                                       <div>
                                          <h2>XX99 MARK I</h2>
                                          <NavLink to={'/products/headphones'}><span><Button1 /></span></NavLink>
                                       </div>
                                    </div>
                                    <div className={classname['innerimage']}>
                                       <div className={classname['inner']}>
                                          <img src={zx9} alt="" />
                                       </div>

                                       <div>
                                          <h2>ZX9 SPEAKER</h2>
                                          <NavLink to={'/products/speakers'}><span><Button1 /></span></NavLink>
                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div></> : <></>}
                        {item.id === '1' ? <>

                           <div className={classname['threeimage']}>
                              <div className={classname['maylike']}>
                                 <h1> you may also like
                                 </h1>
                              </div>
                              <div className={classname['both']}>
                                 <div className={classname['images']}>
                                    <div className={classname['innerimage']}>
                                       <div className={classname['inner']}>
                                          <img src={mark1} alt="" />
                                       </div>
                                       <div>
                                          <h2>XX99 MARK I</h2>
                                          <NavLink to={'/products/headphones'}><span><Button1 /></span></NavLink>
                                       </div>
                                    </div>
                                    <div className={classname['innerimage']}>
                                       <div className={classname['inner']}>
                                          <img src={xx59} alt="" />
                                       </div>

                                       <div>
                                          <h2>XX59</h2>
                                          <NavLink to={'/products/headphones'}><span><Button1 /></span></NavLink>
                                       </div>
                                    </div>
                                    <div className={classname['innerimage']}>
                                       <div className={classname['inner']}>
                                          <img src={zx9} alt="" />
                                       </div>

                                       <div>
                                          <h2>ZX9 SPEAKER</h2>
                                          <NavLink to={'/products/speakers'}><span><Button1 /></span></NavLink>
                                       </div>
                                    </div>
                                 </div>

                              </div>
                           </div></> : <></>}
                           {item.id === '3' ? <>

<div className={classname['threeimage']}>
   <div className={classname['maylike']}>
      <h1> you may also like
      </h1>
   </div>
   <div className={classname['both']}>
      <div className={classname['images']}>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={mark2} alt="" />
            </div>
            <div>
               <h2>XX99 MARK II</h2>
               <NavLink to={'/products/headphones'}><span><Button1 /></span></NavLink>
            </div>
         </div>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={xx59} alt="" />
            </div>

            <div>
               <h2>XX59</h2>
               <NavLink to={'/products/headphones'}><span><Button1 /></span></NavLink>
            </div>
         </div>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={zx9} alt="" />
            </div>

            <div>
               <h2>ZX9 SPEAKER</h2>
               <NavLink to={'/products/speakers'}><span><Button1 /></span></NavLink>
            </div>
         </div>
      </div>

   </div>
</div></> : <></>}
{item.id === '6' ? <>

<div className={classname['threeimage']}>
   <div className={classname['maylike']}>
      <h1> you may also like
      </h1>
   </div>
   <div className={classname['both']}>
      <div className={classname['images']}>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={zx7} alt="" />
            </div>
            <div>
               <h2>ZX7 SPEAKER</h2>
               <NavLink to={'/products/speakers'}><span><Button1 /></span></NavLink>
            </div>
         </div>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={mark1} alt="" />
            </div>

            <div>
               <h2>XX99 MARK I</h2>
               <NavLink to={'/products/headphones'}><span><Button1 /></span></NavLink>
            </div>
         </div>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={xx59} alt="" />
            </div>

            <div>
               <h2>XX59</h2>
               <NavLink to={'/products/speakers'}><span><Button1 /></span></NavLink>
            </div>
         </div>
      </div>

   </div>
</div></> : <></>}
{item.id === '5' ? <>

<div className={classname['threeimage']}>
   <div className={classname['maylike']}>
      <h1> you may also like
      </h1>
   </div>
   <div className={classname['both']}>
      <div className={classname['images']}>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={zx9} alt="" />
            </div>
            <div>
               <h2>ZX9 SPEAKER</h2>
               <NavLink to={'/products/speakers'}><span><Button1 /></span></NavLink>
            </div>
         </div>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={mark1} alt="" />
            </div>

            <div>
               <h2>XX99 MARK I</h2>
               <NavLink to={'/products/headphones'}><span><Button1 /></span></NavLink>
            </div>
         </div>
         <div className={classname['innerimage']}>
            <div className={classname['inner']}>
               <img src={xx59} alt="" />
            </div>

            <div>
               <h2>XX59</h2>
               <NavLink to={'/products/speakers'}><span><Button1 /></span></NavLink>
            </div>
         </div>
      </div>

   </div>
</div></> : <></>}
                        <div className={classname['two']}>

                           <span> <HumenImage /></span>
                        </div>

                     </main>
                     <footer style={{
                        backgroundColor: 'black'
                     }}>
                        <Footer />
                     </footer>
                  </div>
               )
            })
         )}
      </>
   )
}
export default Products