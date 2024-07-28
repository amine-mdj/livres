import './item.css'
import Shelf from '../images/wall-bookshelf.png'

const Item = ({image, title, price}) => {
    
   return (
    <div className='wrapper1'>
      <div className='persp'>
        <div className='wrapper2'>
        <img className='img4' src={image} alt="" />
        <p>{title}</p>
        <p>{price}</p>
        <button>Add to cart</button>
   </div>
   </div>
   <img className='shelf' src={Shelf} alt="" srcset="" />
    </div>
   )
}

export default Item