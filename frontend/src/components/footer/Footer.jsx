import React from 'react'
import {  FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';


const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Feature",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support"
  },
  {
    title: "Delivey Details",
    link: "/#delivery-details"
  },
  {
    title: "Terms & Conditions",
    link: "/#terms"
  },
  {
    title: "Privacy Policy",
    link: "/#policy"
  },
]
const ResourcesLinks = [
  {
    title:"Free Ebooks",
    link:"/#ebooks",
  },
  {
    title:"How to Blog",
    link:"/#blogs",
  },
  {
    title:"Subscribe Us",
    link:"https://youtube.com/@bouncing_back_stronger?si=nhgJlB9Lv8fRWxFg",
  },
]

const Footer = () => {
  return (
    <>
      <div className='bg-black/95 text-white'>
        <div className='container'>
          <div className='grid md:grid-cols-3 py-5'>
            {/* company details  */}
            <div className='py-8 px-4'>
              <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>Digital Agency</h1>
              <p className='text-sm'>
                We are a creative digital agency specializing in web development, branding, and marketing solutions. Our mission is to deliver innovative and tailored strategies that help businesses thrive online.
              </p>
              <br />
              {/* social Handling */}
              <div className='flex item-center gap-4 mt-6'>
                <a href="https://www.linkedin.com/in/fardin-limbadiya-3979ff87">
                  <FaLinkedin className='text-2xl hover:text-primary duration-300' />
                </a>
                <a href="https://github.com/Fardin-limbadiya">
                  <FaGithub className='text-2xl hover:text-primary duration-300' />
                </a>
                <a href="https://www.instagram.com/fardin_limbadiya/">
                  <FaInstagram className='text-2xl hover:text-primary duration-300' />
                </a>

              </div>
            </div>
            {/* Links section  */}
            <div className='grid grid--cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
              {/* First col  */}
              <div>
                <div className='py-8 px-4'>
                  <h1 className='text-xl font-bold mb-3'>Company</h1>
                  <ul className='space-y-3'>
                    {FooterLinks.map((link) => (
                      <li key={link.title}
                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400'><span>{link.title}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* second cols  */}
              <div>
                <div className='py-8 px-4'>
                  <h1 className='text-xl font-bold mb-3'>Company</h1>
                  <ul className='space-y-3'>
                    {HelpLinks.map((link) => (
                      <li key={link.title}
                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400'><span>{link.title}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* third cols  */}
              <div>
                <div className='py-8 px-4'>
                  <h1 className='text-xl font-bold mb-3'>Resources</h1>
                  <ul className='space-y-3'>
                    {ResourcesLinks.map((link) => (
                      <li key={link.title}
                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400'><span>{link.title}</span></li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;

