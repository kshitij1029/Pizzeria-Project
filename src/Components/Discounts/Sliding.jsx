import React, { useState } from 'react'
import Dots from './Dots'
import offer_1 from '../../assets/offer-01.png'
import offer_2 from '../../assets/offer-02.png'
import offer_3 from '../../assets/offer-03.png'
import offer_4 from '../../assets/offer-05.png'

const arr = [offer_1, offer_2, offer_3, offer_4];

const Sliding = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const scrollRef = React.useRef(null);

  // Function to update dots based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setImgIdx(index);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {/* SCROLL CONTAINER:
        - overflow-x-auto: Enables horizontal scrolling
        - snap-x snap-mandatory: Makes images "snap" into place
        - scrollbar-hide: (Optional) CSS to hide scrollbar visual
      */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className='flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 px-4 md:px-10'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides scrollbar for Firefox/IE
      >
        {arr.map((src, index) => (
          <div 
            key={index} 
            className='min-w-[85%] md:min-w-[45%] lg:min-w-[48%] snap-center flex-shrink-0 transition-transform duration-500'
          >
            <img 
              className='h-64 sm:h-80 md:h-100 w-full object-cover rounded-2xl shadow-xl pointer-events-none' 
              src={src} 
              alt={`Offer ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* DOTS: These now update automatically as you swipe */}
      <div className='mt-8'>
        <Dots index={imgIdx} />
      </div>
    </div>
  );
};

export default Sliding