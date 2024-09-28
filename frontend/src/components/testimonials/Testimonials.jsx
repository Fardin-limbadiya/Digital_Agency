import React from 'react'
import Slider from 'react-slick'
import testimonialImage1 from '/src/components/testimonials/1.jpg';
import testimonialImage from '/src/components/testimonials/2.jpg';
import testimonialImage3 from '/src/components/testimonials/3.jpg';

const testimonialData = [
      {
            id: 1,
            name: "Fardin Limbadiya -Director of Design Operation, Ahmedabad",
            text: "The results have been incridible with Power Digital, it feels like they're in our trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be.",
            img: testimonialImage1,
      },
      {
            id: 1,
            name: "Chintan Patel -CEO of Design Operation, Ahmedabad",
            text: "The results have been incridible with Power Digital, it feels like they're in our trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be.",
            img: testimonialImage,
      },
      {
            id: 1,
            name: "Fardin Limbadiya -Director of Design Operation, Ahmedabad",
            text: "The results have been incridible with Power Digital, it feels like they're in our trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be.",
            img: testimonialImage3,
      },
];

const Testimonials = () => {
      const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            cssEase: "linear",
            pauseOnHover: true,
            pauseOnFocus: true,

      };
      return (
            <>
                  <div className='py-10 dark:text-white'>
                        <div data-aos="fade-up" data-aos-delay="300" className='container'>
                              {/* testimonial section  */}
                              <div className='grid grid-cols-1 max-w-screen-xl mx-auto gap-6'>
                                    <Slider {...settings}>
                                          {
                                                testimonialData.map(({ id, name, text, img }) => (
                                                      <div key={id} className='my-6'>
                                                            <div className='flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative'>
                                                                  <img src={img} alt="" className='block mx-auto h-[300px] w-full sm:w-[250px] object-fill ' />
                                                                  <div className='space-y-4'>
                                                                        <p className='text-gray-500 text-black/80 dark:text-white/80 xl:pr-40'>{text}</p>
                                                                        <h1 className='text-xl font-bold'>{name}</h1>
                                                                  </div>
                                                                  <p className='text-black/10 text-[12rem] font-serif absolute bottom-0 right-0'>,,</p>
                                                            </div>
                                                      </div>
                                                ))}
                                    </Slider>
                              </div>
                        </div>
                  </div>
            </>
      )
}
export default Testimonials