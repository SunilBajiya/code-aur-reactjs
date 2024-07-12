import React from 'react';

import "./BlogTour.css";
function BlogTour() {
  return (
    <div className='blog-wrapper pt-120'>
         <div  className = " container">
            <div  className='row g-4'>
                <div className='col-md-4 col-md-6 col-sm-6'>
                    <div className='blog-card'>
                        <div className='blog-img' >
                            <img src='https://tourx-next.vercel.app/assets/images/blog/b-1.png' alt="" className="img-fluid"/>
                            
                        </div>
                        <div className='blog-details'>
                            <div  className='blog-info'>
                                <a className='blog-writer' href='#'>
                               <i className='flaticon-user'></i>&nbsp; Sunil Bajiya
                                </a>
                                <a className='blog-comment' href='#'>
                               <i></i>Franch Rivira
                                </a>
                                
                            </div>
                            <a className='blog-title ' href='#' > Donec Egestas Orci Viverra Fermentum Risus.</a>
                            <div className='blog-btn'>
                                <a className='btn-common-sm ' href='#'> ::before
                                 Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog-card">
                        <div class="blog-img">
                            <img src="https://tourx-next.vercel.app/assets/images/blog/b-14.png" alt="" class="img-fluid"/>
                            <div class="blog-date"><i class="flaticon-calendar">
                            </i></div>
                            </div><div class="blog-details">
                            <div class="blog-info">
                            <a class="blog-writer" href="/blog#">
                            <i class="flaticon-user">
                            </i>&nbsp;Sunil Bajiya</a>
                            <a class="blog-comment" href="#">
                            <i></i>Mount Dtna</a>
                            </div><a class="blog-title" href="/blog-details">Donec Egestas Orci ViverraDonec Egestas Orci Viverr Fermentum Risus..</a>
                            <div class="blog-btn"><a class="btn-common-sm" href="/blog-details">Read More</a></div>
                    </div></div></div>
                    </div>
               </div>
               <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog-card">
                        <div class="blog-img">
                            <img src="https://tourx-next.vercel.app/_next/static/media/breadcrumb-bg.10224260.png" alt="" class="img-fluid"/>
                            <div class="blog-date"><i class="flaticon-calendar">
                            </i></div>
                            </div><div class="blog-details">
                            <div class="blog-info">
                            <a class="blog-writer" href="/blog#">
                            <i class="flaticon-user">
                            </i>&nbsp;Sunil Bajiya</a>
                            <a class="blog-comment" href="#">
                            <i></i>dubai</a>
                            </div><a class="blog-title" href="/blog-details">Donec Egestas Orci ViverraDonec Egestas Orci Viverr Fermentum Risus..</a>
                            <div class="blog-btn"><a class="btn-common-sm" href="/blog-details">Read More</a></div>
                    </div>
                    </div>
                    </div>
                    
                    </div>
         
      

  );
};

export default BlogTour;
