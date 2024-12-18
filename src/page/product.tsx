import { useEffect } from "react"
import { useAppDispach, useAppSelector } from "../store/hook"
import FetchingProduct from "../store/product/productAsincAwait"
import Loading from "../loading/loading"
import { NavLink, useParams } from "react-router-dom"
import classname from '../scss/product.module.scss'
import { Button1 } from "../components/button/button"
const Product = () => {
  const { data, error, status } = useAppSelector((state) => state.prod)
  console.log(data, error, status)
  const { productsname } = useParams()


  const dispach = useAppDispach()
  useEffect(() => {
    dispach(FetchingProduct())
  }, [dispach])
  if (status === 'failed') {
    alert(error)
  }
  if (status === 'loading') {
    return <Loading />
  }

  return (
    <>
      {status === 'loaded' && (
        data.filter((item) => item.category === productsname).map((item) => {
          return (
            <div className={classname['prodpage']}>
          
              {item.id === '4' ? <>
                <div className={classname['innerprodpage']} key={item.id}>
                  <div className={classname['imgside']}>
                    <img src={`/${item.image.desktop}`} alt="" />
                  </div>
                  <div className={classname['textside']}>
                    <h3> {item.new}</h3>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <NavLink to={`/products/headphones/4`}><span><Button1 /></span></NavLink>
                  </div>

                </div>
              </> : <></>}
              {item.id === '3' ? <>
                <div id={classname['revercediv']} className={classname['innerprodpage']} key={item.id}>
                  <div className={classname['imgside']}>
                    <img src={`/${item.image.desktop}`} alt="" />
                  </div>
                  <div className={classname['textside']}>
                    <h3> {item.new}</h3>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <NavLink to={`/products/headphones/3`}><span><Button1 /></span></NavLink>
                  </div>

                </div>
              </> : <></>}
              {item.id === '2' ? <>
                <div className={classname['innerprodpage']} key={item.id}>
                  <div className={classname['imgside']}>
                    <img src={`/${item.image.desktop}`} alt="" />
                  </div>
                  <div className={classname['textside']}>
                    <h3> {item.new}</h3>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <NavLink to={`/products/headphones/2`}><span><Button1 /></span></NavLink>
                  </div>

                </div>
              </> : <></>}
              {item.id === '1' ? <>
                <div className={classname['innerprodpage']} key={item.id}>
                  <div className={classname['imgside']}>
                    <img src={`/${item.image.desktop}`} alt="" />
                  </div>
                  <div className={classname['textside']}>
                    <h3> {item.new}</h3>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <NavLink to={`/products/earphones/1`}><span><Button1 /></span></NavLink>
                  </div>

                </div>
              </> : <></>}
              {item.id === '5' ? <>
                <div className={classname['innerprodpage']} key={item.id}>
                  <div className={classname['imgside']}>
                    <img src={`/${item.image.desktop}`} alt="" />
                  </div>
                  <div className={classname['textside']}>
                    <h3> {item.new}</h3>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <NavLink to={`/products/speakers/5`}><span><Button1 /></span></NavLink>
                  </div>

                </div>
              </> : <></>}
              {item.id === '6' ? <>
                <div id={classname['revercediv']} className={classname['innerprodpage']} key={item.id}>
                  <div className={classname['imgside']}>
                    <img src={`/${item.image.desktop}`} alt="" />
                  </div>
                  <div className={classname['textside']}>
                    <h3> {item.new}</h3>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                   <NavLink to={`/products/speakers/6`}><span><Button1 /></span></NavLink>
                  </div>

                </div>
              </> : <></>}

            </div>


          )
        })
      )}
    </>
  )
}
export default Product