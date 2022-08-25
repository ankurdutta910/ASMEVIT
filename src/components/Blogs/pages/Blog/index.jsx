import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import GoToTop from '../../../../GoToTop'


const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
<GoToTop />



      {blog ? (

   



        <div className='blog-wrap'>
          
          <section id="blog_header" style={{backgroundImage: `url(${blog.cover})`}} className="d-flex align-items-center justify-content-center" >
    <div className="container" style={{marginBottom: '30px'}}>

      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
        <h2>{blog.title}</h2>
        
        </div>
      </div>

     

    </div>
  </section>



   
          <div class="page-wrapper container my-5">
     <div class="content">
         <div class="row" >
            
         </div>
         <div class="row">
             <div class="col-md-8">
                 <div class="blog-view">
                     <article class="blog blog-single-post">
                        
                      
                         <div class="blog-image">
                            
                         </div>
                         <div class="blog-content" >
                         <p className='blog-desc'>{blog.description}</p>
                         </div>
                     </article>
                    
                 
                    
                 </div>
               
             </div>
             <aside class="col-md-4">
                 
                 <div class="widget post-widget">
                    
                     <div class="about-author">
                      
                         <div class="author-details" style={{marginTop: '15px',fontSize: '15px',textAlign: 'left',}}>
                        <span class="blog-author-name btn" style={{fontWeight:'800'}}><span style={{color: '#8f8f8f', fontWeight:'normal'}}>Written by:</span> {blog.authorName}</span><hr></hr>
                            
                             
                         </div>
                     </div>
                 </div>




                 <div class="widget post-widget">
   
              </div>





               
              
             </aside>
         </div>
     </div>
     <br></br>
     <h6 class="btn" style={{color: 'white',backgroundImage: 'linear-gradient(to right, #2266d4 , #0094e3)'}}>Published by officialasmevit</h6> 
 </div>

                   
        
        
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
