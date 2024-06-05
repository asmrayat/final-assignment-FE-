import React from 'react';
import Slider from '../Components/SharedComponent/Slider';

const GiftCard = () => {
    const imageLink = ["https://m.media-amazon.com/images/G/01/GiftCards/2024/Q2/VX-2491/FD24_Desktop_GCLP_Hero_3400x680_EN_1._SX3000_QL85_.jpg","https://m.media-amazon.com/images/G/01/GiftCards/2024/Q2/VX-2485/VX-2485_Desktop_AGCLP_Hero_3400x680_EN-US._SX3000_QL85_.jpg"]
    return (
        <div>
          <Slider links={imageLink}></Slider>
          <div className='w-full flex'>
            <div className='w-1/2'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/Q1_2024/GCLP_D_AGC.jpg" alt="" />
            </div>
            <div className='w-1/2'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/Q1_2024/GCLP_D_BGC.jpg" alt="" />
            </div>
          </div>
          <div className='w-full flex'>
            <div className='w-1/2'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/Q1_2024/GCLP_D_Reload.jpg" alt="" />
            </div>
            <div className='w-1/2'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/Q1_2024/GCLP_D_Incentives.jpg" alt="" />
            </div>
          </div>
        </div>
    );
};

export default GiftCard;