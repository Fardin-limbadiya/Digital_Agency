import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote, SlNotebook } from "react-icons/sl"

const SkillsData = [
      {
            name: "App Development",
            icon: <FaCameraRetro className='text-4xl text-primary' />,
            link: "#",
            description: "Enhance your business with our mobile app development services, creating intuitive, responsive apps that deliver exceptional user experiences and drive growth.",
            absDelay: 0,
      },
      {
            name: "Web Designing",
            icon: <GiNotebook className='text-4xl text-primary' />,
            link: "#",
            description: "Enhance your online presence with our expert web design services. We create visually stunning, user-friendly websites that captivate your audience and drive engagement.",
            absDelay: "300",
      },
      {
            name: "Graphic Designing",
            icon: <SlNotebook className='text-4xl text-primary' />,
            link: "#",
            description: "Elevate your brand with our graphic design services, creating visually compelling designs that communicate your message effectively.",
            absDelay: "500",
      },
      {
            name: "Digital Marketing",
            icon: <SlNote className='text-4xl text-primary' />,
            link: "#",
            description: "Boost your online presence with our digital marketing services. From SEO and social media to email campaigns and PPC advertising, we tailor strategies to drive traffic, increase engagement, and grow your business.",
            absDelay: "700",
      },
];
const Services = () => {
      return (
            <div className='bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center'>
                  <div className='container'>
                        {/* header section  */}
                        <div className='pb-12 text-center space-y-3'>
                              <h1 data-aos="fade-up" className='text-3xl font-semibold text-violet-950 dark:text-primary'>Explore Our Services</h1>
                              <p data-aos="fade-up" data-aos-delay="300">We are self-service data analytics software that lets you create visually.</p>
                        </div>
                        {/* card section  */}
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                              {SkillsData.map((skill) => (
                                    <div data-aos="fade-up" data-aos-delay={skill.aosDelay} key={skill.name} className='card space-y-3 sm:space-y-4 p-4'>
                                          <div>{skill.icon}</div>
                                          <h1 className='text-lg font-semibold'>{skill.name}</h1>
                                          <p className='text-gray-600 dark:text-gray-400'>{skill.description}</p>
                                    </div>
                              ))}
                        </div>
                        {/* button section  */}
                        <div data-aos="fade-up" data-aos-delay="900" data-aos-offset="0" className='text-center mt-4 sm:mt-8'>
                              <button className='btn-primary'>Learn More</button>
                        </div>
                  </div>
            </div>
      );
};

export default Services;