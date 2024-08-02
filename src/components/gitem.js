import './gitem.css'
import Shelf2 from '../images/Sans titres-Photoroom.png'

const Gitem = ({image, title }) =>{
    return(
        <div className='gitem'>
            <div className='persp2'>
                <div className='wrapper3'>
            <div>
            <div className='absolute'><img src={image}  />
            <p>{title}</p>
            </div>
            
            </div>
          <div className='visit'>
          <i class="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i>
          </div>
          </div>
          </div>
          <img className='shelf2' src={Shelf2}  />
        </div>
    )
}

export default Gitem