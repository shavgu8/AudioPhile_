import classname from './footer.module.scss'
import facebook from '../../../public/assets/shared/desktop/icon-facebook.svg'
import instagram from '../../../public/assets/shared/desktop/icon-instagram.svg'
import twitter from '../../../public/assets/shared/desktop/icon-twitter.svg'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div className={classname['main']}>
            <div className={classname['navbar']}>
                <div className={classname['baner']}><h2>audiophile</h2></div>
                <div className={classname['navigation']}>
                    <nav>
                        <ul>
                            <NavLink style={{
                                textDecoration: 'none',
                                textTransform:'uppercase'
                            }} to={'/'}> <li>home</li></NavLink>
                            <NavLink style={{
                                textDecoration: 'none',
                                textTransform:'uppercase'
                            }} to={'/products/headphones'}> <li>headphones</li></NavLink>
                            <NavLink style={{
                                textDecoration: 'none',
                                textTransform:'uppercase'
                            }} to={'/products/speakers'}> <li>speakers</li></NavLink>
                            <NavLink style={{
                                textDecoration: 'none',
                                textTransform:'uppercase'
                            }} to={'/products/earphones'}> <li>earphones</li></NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={classname['seconddiv']}>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <span>Copyright 2025. All Rights Reserved</span>
            </div>
            <div className={classname['icons']}>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
    )
}
export default Footer