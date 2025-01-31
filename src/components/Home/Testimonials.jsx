
"use client"
import { useEffect, useState } from 'react';
import '../../CSS/Home/Testimonials.css'


export default function Testimonials() {
  const images = [
    "https://www.thecambridgeschool.org/wp-content/uploads/2023/10/bobby-1024x576.png",
    "https://www.thecambridgeschool.org/wp-content/uploads/2023/10/mary-barnes-1024x576.png",
    "https://www.thecambridgeschool.org/wp-content/uploads/2023/10/brady-1024x576.png",
    "https://www.thecambridgeschool.org/wp-content/uploads/2023/10/claire-1024x576.png",


  ];
  const images1 = [

    "https://www.thecambridgeschool.org/wp-content/uploads/2023/10/josh-1024x576.png",
    "https://www.thecambridgeschool.org/wp-content/uploads/2023/10/ryan-1024x576.png",
    "https://www.thecambridgeschool.org/wp-content/uploads/2024/01/alumni-liam-1024x576.png",
    "https://www.thecambridgeschool.org/wp-content/uploads/2023/10/hollin-1024x576.png",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);


  const [currentIndex1, setCurrentIndex1] = useState(0);

  const nextSlide1 = () => {
    setCurrentIndex1((prevIndex1) =>
      prevIndex1 === images1.length - 1 ? 0 : prevIndex1 + 1
    );
  };

  const prevSlide1 = () => {
    setCurrentIndex1((prevIndex1) =>
      prevIndex1 === 0 ? images1.length - 1 : prevIndex1 - 1
    );
  };
  useEffect(() => {
    const interval1 = setInterval(nextSlide1, 5000);
    return () => clearInterval(interval1); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className='bg p-5'>
      <h1 className='thead'>Testimonials </h1>
      <h1 className='text-5xl text-center mt-[-20px] font-black text-stone-100'>&#x291A;&#x2919;</h1>
      <div className='lg:flex md:border-2 border-stone-100 rounded-2xl md:p-5 md:m-10'>
        <div className='bg'>
          <div className='slider-container'>

            <div className="slider-container">
              <button onClick={prevSlide} className="prev-btn">
                &#10094;
              </button>
              <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slider-img" />
              <button onClick={nextSlide} className="next-btn">
                &#10095;
              </button>
            </div>
          </div>
        </div>
        <div className='bg'>
          <div className='slider-container'>

            <div className="slider-container">
              <button onClick={prevSlide1} className="prev-btn">
                &#10094;
              </button>
              <img src={images1[currentIndex1]} alt={`Slide ${currentIndex1}`} className="slider-img" />
              <button onClick={nextSlide1} className="next-btn">
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
