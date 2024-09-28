import React from 'react'
import BlogCard from './BlogCard'
import Img1 from '../../assets/blog/1.jpg'
import Img2 from '../../assets/blog/2.jpg'
import Img3 from '../../assets/blog/3.png'


const BlogsData = [
      {
            id: 1,
            image: Img1,
            title: "Relatime Analytics",
            description: "The results have been incredible with Power Digital, it feels like they're in pur trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be. The result have been incredable.",
            author: "Someone",
            date: "April 22,2024",
            aosDelay:"0",
      },
      {
            id: 2,
            image: Img2,
            title: "Relatime Analytics",
            description: "The results have been incredible with Power Digital, it feels like they're in pur trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be. The result have been incredable.",
            author: "Someone",
            date: "April 22,2024",
            aosDelay:"300",
      },
      {
            id: 3,
            image: Img3,
            title: "Relatime Analytics",
            description: "The results have been incredible with Power Digital, it feels like they're in pur trench, supporting and understanding us. They're like a partner and mentor in helping us get where we want to be. The result have been incredable.",
            author: "Someone",
            date: "April 22,2024",
            aosDelay:"500",
      },

]

const BlogsComp = () => {
      return (
            <>
                  <div className='bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14'>
                        <div className="container">
                              <h1 data-aos="fade-up" className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold'>Our Blogs</h1>
                              {/* Blogs card  */}
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    {BlogsData.map((blog) => (
                                          <BlogCard key={blog.id} {...blog} />
                                    ))}
                              </div>
                              <div data-aos="fade-up" data-aos-delay="0" className='text-center'>
                                    <button className='btn-primary'>View All Posts</button>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default BlogsComp