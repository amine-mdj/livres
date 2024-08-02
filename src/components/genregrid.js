import './genregrid.css'
import Gitem from './gitem'

import Fiction from '../images/fiction.jpeg'
import Romance from '../images/romance.jpg'
import Histoire from '../images/histoire.png'
import Politics from '../images/politics.jpg'

const Ggrid = () =>{
    return(
        <div className='ggrid'>
         <Gitem image={Fiction} title="Aventure" />
         <Gitem image={Romance} title="Romantique" />
         <Gitem image={Histoire} title="Historique" />
         <Gitem image={Politics} title="Politique" />
        </div>
    )
}

export default Ggrid