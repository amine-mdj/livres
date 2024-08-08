import './footer.css'
import Heart from '../images/heart2.png'
import Instagram from '../images/social.png'
import Dahabya from '../images/dahabya-Photoroom.png'
import Svg1 from './svg1.js'


const Footer = () => {
    return (
      <div className='ftr'>
        <div className='signature'><Svg1/></div>
        <div className='inst'>
        <p>Follow me on instagram</p>
        <img src={Instagram} alt="" srcset="" />
        </div>
        
        <div className='credit'><p>made with</p>
        <img className='smallhrt' src={Heart} alt="" srcset="" />
        <p>by Amine Medjdoub</p></div>
        <div className='dahabia'><p>nos moyens de paiement</p>
        <img src={Dahabya} alt="" srcset="" />
        </div>
        
      </div>
    );
  }
  
  export default Footer;