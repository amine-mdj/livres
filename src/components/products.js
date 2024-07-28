import './products.css'
import Item from './item.js'
import Cover1 from '../images/cover1.jpeg'
import Cover2 from '../images/cover2.jpg'
import Cover3 from '../images/cover3.jpg'
import Cover4 from '../images/cover4.jpeg'
import Cover5 from '../images/cover5.jpeg'
import Cover6 from '../images/cover6.jpg'
import Cover7 from '../images/cover7.jpg'


const Products = () => {
    return (
      <div>
        <div className='grid3'>
        <Item image={Cover1} title="ceci est le titre 1"  price="$50 USD" />
        <Item image={Cover2} title="ceci est le titre 2"  price="$78 USD" />
        <Item image={Cover3} title="ceci est le titre 3"  price="$56 USD" />
        <Item image={Cover6} title="ceci est le titre 4"  price="$45 USD" />
        <Item image={Cover5} title="ceci est le titre 5"  price="$69 USD" />
        <Item image={Cover6} title="ceci est le titre 6"  price="$43 USD" />
        <Item image={Cover7} title="ceci est le titre 7"  price="$83 USD" />
        <Item image={Cover1} title="ceci est le titre 1"  price="$50 USD" />
        <Item image={Cover2} title="ceci est le titre 2"  price="$78 USD" />
        <Item image={Cover3} title="ceci est le titre 3"  price="$56 USD" />
        <Item image={Cover6} title="ceci est le titre 4"  price="$45 USD" />
        <Item image={Cover5} title="ceci est le titre 5"  price="$69 USD" />
        <Item image={Cover6} title="ceci est le titre 6"  price="$43 USD" />
        <Item image={Cover7} title="ceci est le titre 7"  price="$83 USD" />
        </div>
        <div className='vcont'>
          <button className='view'>View All</button>
        </div>
      </div>
      
    );
  }
  
  export default Products;