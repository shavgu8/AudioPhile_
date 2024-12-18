import classname from './navbar.module.scss'
import cart from '../../../public/assets/shared/desktop/icon-cart.svg'
import { NavLink } from 'react-router-dom'
import Modal from '../modal/modal'
import { useState } from 'react'
const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!isModalOpen);

    return (
        <div className={classname['navbar']}>


            <div className={classname['baner']}>
                <img className={classname['meniu']} width={30} src="https://cdn-icons-png.flaticon.com/512/8637/8637657.png " alt="" />
                <h2>audiophile</h2>
            </div>
            <div className={classname['navigation']}>
                <nav>
                    <ul>

                        <NavLink style = {{
                            textDecoration:'none',
                        }}  to={'/'}> <li>home</li></NavLink>
                        <NavLink style = {{
                            textDecoration:'none',
                        }} to={'/products/headphones'}> <li>headphones</li></NavLink>
                        <NavLink style = {{
                            textDecoration:'none',
                        }} to={'/products/speakers'}> <li>speakers</li></NavLink>
                        <NavLink style = {{
                            textDecoration:'none',
                        }} to={'/products/earphones'}> <li>earphones</li></NavLink>
                    </ul>
                </nav>
            </div>
            <div className={classname['cart']}>
             
                <button style={{
                    backgroundColor:"transparent",
                    border:"none",
                    cursor:"pointer"
                }} onClick={toggleModal}>
      <img src={cart} alt="" />
         
      </button>
            </div>
             <Modal isOpen={isModalOpen} onClose={toggleModal} >
       <></>
      </Modal>
        </div>
    )
}
export default Navbar