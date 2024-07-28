import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import './caroussel.css'
import Image1 from '../images/image1.jpg'
import Image2 from '../images/image2.jpg'
import Image3 from '../images/image3.jpg'


const Caroussel = () => {
    return (
      <div className='swipercont'>
        <Swiper className='swprcontinr'
        modules={[Navigation, Pagination]}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
    >
      <SwiperSlide className='swprcontinr'><img src={Image1} className='imgstl' style={{width:'50%'}} alt="" /></SwiperSlide>
      <SwiperSlide className='swprcontinr'><img src={Image2} className='imgstl' style={{width:'50%'}} alt="" /></SwiperSlide>
      <SwiperSlide className='swprcontinr'><img src={Image3} className='imgstl' style={{width:'50%'}} alt="" /></SwiperSlide>
      </Swiper>
      </div>
    );
  }
  
  export default Caroussel;