import Navbar from '../components/navbar.js'
import Caroussel from '../components/caroussel.js'
import Products from '../components/products.js'
import Footer from '../components/footer.js'
import {motion} from 'framer-motion'



function Home() {
  return (
    <motion.div
    initial={{scaleX:0}}
    animate={{scaleX:1}}
    exit={{scaleX:0}}
    transition={{duration:0.5}}
    >
      <Navbar/>
      <Caroussel/>
      <Products/>
      <Footer/>
    </motion.div>
  );
}

export default Home;