import {motion} from 'framer-motion'
import Navbar2 from '../components/navbar2.js';
import Footer from '../components/footer.js';
import Ggrid from '../components/genregrid.js';
import './bygenre.css'
function Bygenre() {
  return (
    <motion.div
     initial={{scaleX:0}}
    animate={{scaleX:1}}
    exit={{scaleX:0}}
    transition={{duration:0.5}}
     >
      <Navbar2/>
      <Ggrid/>
      <Footer/>
     </motion.div>
  );
}

export default Bygenre;