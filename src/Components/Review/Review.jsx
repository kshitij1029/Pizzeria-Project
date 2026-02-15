import React, { useState } from 'react'
import Comments from './Comments'
import Dots2 from './Dots2'
import man_1 from '../../assets/man-1.jpg'
import woman_1 from '../../assets/woman-1.png'
import man_2 from '../../assets/man-2.jpg'

const icon = [man_1, woman_1, man_2];
const comment = ["The best in town! I've tried pizzas all over the city, but nothing beats the authentic stone-baked flavor here. The Flowy Egg is a must-try for any egg lover.", "Pizza Town has become our go-to spot for family dinner. The ingredients are always fresh, the atmosphere is so welcoming, and that 30% discount on the app makes it such a great deal!", "Incredible service and even better food. I usually order for delivery, and it always arrives piping hot. Highly recommend the Pepperoni Feast for a satisfying meal."];
const name = ["Alexander Barley", "Rosie Kooch", "Ralph Bekshaw"];

const Review = () => {
  const [isIndex, setIsIndex] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  function moveRight(){
    if(isIndex<name.length-1) setIsIndex(isIndex+1);
    if(isIndex==name.length-2) setIsLast(true);
    setIsFirst(false);
  }
  function moveLeft(){
    if(isIndex>0) setIsIndex(isIndex-1);
    if(isIndex==1) setIsFirst(true);
    setIsLast(false);
  }
  return (
    <div className='Review bg-[url("https://www.foodrepublic.com/img/gallery/how-to-portion-out-pizzas-for-20-very-hungry-friends/l-intro-1701270198.jpg")] object-cover h-100 w-full flex flex-col justify-center items-center '>
        <div className='flex justify-around items-center  w-full'>
          <div className={`rounded-4xl p-3 cursor-pointer  ${isFirst ? "invisible" : ""}`} onClick={moveLeft}>
            <i className="text-slate-300 hover:text-white fa-solid fa-less-than text-xl"></i>
          </div>
          <Comments img={icon[isIndex]} comment={comment[isIndex]} name={name[isIndex]}/>
          <div className={`'rounded-4xl p-3 cursor-pointer ${isLast ? "invisible" : ""}`} onClick={moveRight}>
            <i className='text-slate-300 hover:text-white fa-solid fa-greater-than text-xl' ></i>
          </div>
        </div>
        <Dots2 index={isIndex}/>
    </div>
  )
}

export default Review