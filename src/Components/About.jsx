import React from 'react'
import Rating from './Rating'
import about_img from '../assets/about-img.png'

const About = () => {
  return (
    <div className='flex justify-evenly py-10 px-15'>
        <img className='h-95 min-w-81.5 ' src={about_img}/>
        <div className='flex flex-col px-10 justify-evenly pb-10'>
            <h1 className='text-[50px] font-bold bg-clip-text text-transparent bg-linear-to-r from-[#900] via-[#f00] to-[#f00]'>Dine-in to the Finest</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit vitae sunt earum sequi consequatur voluptate fugit fugiat quo animi perferendis reprehenderit, nemo accusamus mollitia blanditiis? Quaerat laborum odit ullam possimus sapiente et similique, delectus aspernatur quae libero consectetur fugit illo enim quidem natus suscipit perspiciatis iusto est reprehenderit qui?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit vitae sunt earum sequi consequatur voluptate fugit fugiat quo animi perferendis reprehenderit, nemo accusamus mollitia blanditiis? Quaerat laborum odit ullam possimus sapiente et similique, delectus aspernatur quae libero consectetur fugit illo enim quidem natus suscipit perspiciatis iusto est reprehenderit qui?</p>
            <Rating/>
        </div>
    </div>
  )
}

export default About