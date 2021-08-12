
import React from 'react'

const footer = () => {
    return (
        
        
        <div className="containter-fluid bg-footer">
        <div className="container">
            <div className="row m-0">
                <div className="col-md-8  text-center m-auto py-5">
                    <p className="text-light">Subscribe now to delivering the latest product trends and industry news straight to your inbox.
                    <div className="row m-0 mt-3 px-md-5">
                        <div className="col-8 p-0 ">
                            <input className="form-control " placeholder="Email Address" />
                        </div>
                        <div className="col-4 p-0 ">
                            <button className="btn-secondary btn "> Subscribe</button>
                        </div>
                    </div>
                </p>
                </div>
            </div>
        </div>
        <div className="row m-0">
        <div className="d-lg-flex col-md-12  justify-content-between px-5 d-lg-flex">

        <div className="p-2  flex-fill align-self-center">
         <a href="#"> <div class="fa fa-facebook px-1 mb-2 text-light"></div></a>
         <a href="#"> <div class="fa fa-linkedin px-1 mb-2 text-light"></div></a>
         <a href="#"> <div class="fa fa-twitter px-1 mb-2 text-light"></div></a>
         <a href="#"> <div class="fa fa-instagram px-1 mb-2 text-light"></div></a>
        </div>
        
         <div className=" p-2 row flex-fill  justify-content-left align-self-center">
             <div className="p2 d-lg-flex">
           <div class=" p-2 text-white">About</div>
           <div class=" p-2 text-white">About</div>
           <div class=" p-2 text-white">About</div>
           <div class=" p-2 text-white">About</div>
           <div class=" p-2 text-white">About</div>
           <div class=" p-2 text-white">About</div>
           </div >
           {/* <div class="fa fa-facebook px-2 text-white">Blog</div>
           <div class="fa fa-facebook px-2 text-white">Service</div>
           <div class="fa fa-facebook px-2 text-white">Contact us</div>
           <div class="fa fa-facebook px-2 text-white">Team</div>
           <div class="fa fa-facebook px-2 text-white">How we work</div> */}
         </div> 
         <div className="p-2  flex-fill align-self-center justify-content-right">
         <div class="fa fa-mobile px-1 mb-2 text-light">&nbsp;&nbsp;01-0998879</div>
         <div class="fa fa-envelope px-1 text-light">&nbsp;&nbsp;  info@bhotahity.com</div>
        </div>
     </div>
        
        </div>
   </div>
    )
}

export default footer
