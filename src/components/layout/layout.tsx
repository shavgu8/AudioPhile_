import Footer from "../footer/footer"
import HumenImage from "../humenimage/humenimage"
import Navbar from "../navbar/navbar"
import ProductsContainer from "../products/products"
import Product from "../../page/product"
import classname from './layout.module.scss'
import { useAppSelector } from "../../store/hook"
import { useParams } from "react-router-dom"
const Layout = () => {
    const {data} = useAppSelector((state)=> state.prod)
    const {productsname} = useParams()
    return (
        <>
       
            <div style={{
                backgroundColor: "black"
            }}>
                <Navbar />
            </div>
            <div style={{
                width:"100%",
                height:"226px",
                backgroundColor:"black",
                margin:"0",
                padding:"0",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",

            }}>
           <h1  style={{
                color:"white",
                margin:"0",
                padding:"0",
                textTransform:"uppercase"
            }}> {productsname}</h1>
        </div>
            <Product />
            <div className={classname['both']} >
                <ProductsContainer />
                <HumenImage />
            </div>
            <div style={{
                backgroundColor: "black"
            }}>
                <Footer />
            </div>
        </>



    )
}
export default Layout