import Earphone from "../components/earphone/earphone"
import Footer from "../components/footer/footer"
import HeroContainer from "../components/hero/Hero"
import HumenImage from "../components/humenimage/humenimage"
import Navbar from "../components/navbar/navbar"
import ProductsContainer from "../components/products/products"
import VibrSpeaker from "../components/vibratspeaker/VibrSpeaker"
import Zx7Speaker from "../components/zx7speaker/zx7spk"
import classname from '../scss/home.module.scss'
import '../scss/home.module.scss'
const Home = () => {
    return (
        <div style={{
            display:"flex",
            flexDirection:'column',
            gap:'200px'
        }
        }>
            <header>
                <Navbar/>
               <HeroContainer/>
            </header>
            <main>
           <div className={classname['both']}>
           <ProductsContainer/>
           <VibrSpeaker/>
           </div>
           <Zx7Speaker/>
           <Earphone/>
           <HumenImage/>
            </main>
            <footer style={{
                backgroundColor:'#101010'
            }}>
              <Footer/>
            </footer>
        </div>
    )
}
export default Home