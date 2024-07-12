import React from 'react';
import './CardSlider.css'
function CardSlider() {
  return (
    <div  className='w-3/4 m-auto'>
        <div className='mt-20'>
            {data.map((d) =>{

                <div className='bg-white h-[450px] text-black rounded-xl'>
                    <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                        <img src={d.img} alt='' className='h-44 w-44 ' />
                    </div>
                    <div>
                        <p>
                            {d.name}
                        </p>
                        <p>
                            {d.review}
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            })}
        </div>
      
    </div>
  )
}

const data  = [
    {
        name: "Sunil Bajiya",
        img: "https://st2.depositphotos.com/1930953/9069/i/450/depositphotos_90693862-stock-photo-portrait-of-a-caucasian-businessman.jpg",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
, {
    name: "Sunil Bajiya",
    img: "https://st2.depositphotos.com/1930953/9069/i/450/depositphotos_90693862-stock-photo-portrait-of-a-caucasian-businessman.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Sunil Bajiya",
    img: "https://st2.depositphotos.com/1930953/9069/i/450/depositphotos_90693862-stock-photo-portrait-of-a-caucasian-businessman.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Sunil Bajiya",
    img: "https://st2.depositphotos.com/1930953/9069/i/450/depositphotos_90693862-stock-photo-portrait-of-a-caucasian-businessman.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Sunil Bajiya",
    img: "https://st2.depositphotos.com/1930953/9069/i/450/depositphotos_90693862-stock-photo-portrait-of-a-caucasian-businessman.jpg",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },



];
export default CardSlider;
