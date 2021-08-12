import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const content = () => {
    
      

    return (
        <>
        <div className="row mt-2 ml-1 container-fluid">

            <div className="row  col-md-4 col-sm-12 col-xl-4 border bg-white">
               
                <div className="row col-md-4 mr-2">

                   <div className="col-md-12 ">
                   <img className="image-border-active mr-3   mt-2 mb-1 p-1 "  src="https://bhotahiti-bucket.s3.ap-south-1.amazonaws.com/products/products/1627379976449.webp" />
                   
                   
                   
                   <img className="image-border-dactive  border mt-2" src="https://bhotahiti-bucket.s3.ap-south-1.amazonaws.com/products/products/1627379976449.webp" />
                   
                   
                 
                   <img className="image-border-dactive mt-2" src="https://bhotahiti-bucket.s3.ap-south-1.amazonaws.com/products/products/1627379976449.webp" />
                    </div>

                </div>

                <div className="col-md-8 mt-5 ">
                  <img className="prev-img"  src="https://bhotahiti-bucket.s3.ap-south-1.amazonaws.com/products/products/1627379976449.webp" /> 
                </div> 



            </div>

            <div className="col-md-6 pb-2 mr-1 col-sm-12 col-xl-6 mt-1  z-index-sticky border container" style={{ overflowY:'scroll',overflow:'hidden' }}>

                  <div className="col-12 text-lowercase border-bottom border-light text-secondary" >
                      <small>Home</small>
                      <small className="mx-2">></small>
                      <small>electronics</small>
                      <small className="mx-2">></small>
                      <small>iphone-x-53a7c62f</small>
                  </div>
                  <div className=" col-12 pt-2">
                 
                   <h6>Iphone X</h6>
                   <div className="d-flex">
                   <small className="bg-success  pb-0   btn btn-sm  font-weight-bold rounded text-white">4.4 <span class="ml-1 fa fa-star"></span></small>
                 
                 <p className="ml-3 text-secondary">8,123 Ratings & 300 Reviews</p>
                 </div>
                 
                 <div className="row m-0">
                     <div col-8>
                         <div className="row m-0 pt-3">
                             <h3>NRS 12000</h3>
                             <h6 className="h6 pt-2 pl-2 text-secondary">
                             <del>$1499</del>
                             <span className="ml-2 font-weight-bold text-success">2% off</span>
                             </h6>
                         </div>
                     </div>
                 </div>
                   

       
                 </div>
                 <div className="col-12 mt-4">
                   <h6 className="bg-light p-3 font-weight-bold">Featured Variation
                   <span class="fa fa-flag float-right text-success"></span>
                   </h6>
                   <table className="table table-bordered">
                       <thead>
                           <th>Quantity(From - To)</th>
                           <th>Price(In NRS)</th>
                       </thead>
                        <tbody>
                            <tr>
                                <td>0 -> 1</td>
                                <td>NRS: 120000</td>
                            </tr>
                            <tr>
                                <td>0 -> 1</td>
                                <td>NRS: 120000</td>
                            </tr>
                            <tr>
                                <td>0 -> 1</td>
                                <td>NRS: 120000</td>
                            </tr>
                        </tbody>
                   </table>
               </div>
               <div className="col-12 mt-4">
                   <div className="row m-0">
                       <section className="col-3">
                           <lable className="text-secondary text-uppercase">color</lable>
                        </section> 
                          <section className="col-9">
                          <button type="button" className="text-secondary rounded border mr-1 border-active px-3 py-1">
                              Black
                         </button>

                         <button type="button" className="text-secondary rounded border px-3 py-1 bg-white border-dactive">
                             black
                         </button>
                         
                         
                       </section> 
                   </div>

               </div>
               <div className="col-12 mt-4">
                   <div className="row m-0">
                       <section className="col-3">
                           <lable className="text-secondary text-uppercase">color</lable>
                        </section> 
                          <section className="col-9">
                          <button type="button" className="text-secondary rounded border mr-1 border-active px-3 py-1">
                              Black
                         </button>

                         <button type="button" className="text-secondary rounded border px-3 py-1 bg-white border-dactive">
                             black
                         </button>
                         
                         
                       </section> 
                   </div>

               </div>
               <div className="col-12 mt-4">
                   <div className="row m-0">
                       <section className="col-3">
                           <lable className="text-secondary text-uppercase">color</lable>
                        </section> 
                          <section className="col-9">
                          <button type="button" className="text-secondary rounded border mr-1 border-active px-3 py-1">
                              Black
                         </button>

                         <button type="button" className="text-secondary rounded border px-3 py-1 bg-white border-dactive">
                             black
                         </button>
                         
                         
                       </section> 
                   </div>

               </div>
              
              
               <div className="row col-12 ml-3 border bg-light mt-4 ">
                       <div  className="col-2 p-0"> 
                           <p className="text-secondary m-0 p-2 align-text-bottom">Quality</p>
                        </div>
                        <div className="col-2 p-0 ml-5 ">

                        <div className="btn-group quantity-control" role="group" aria-label="Basic example">
                           <button type="button" className="btn disabled btn-outline-primary">
                             <span className="fa fa-minus"></span>
                            </button>
                           <input type="number" value={2} className="border-secondary border-right-0 border-left-0 rounded-0 form-control text-center p-0" style={{width:'80px' }} />
                          <button type="button" className="btn btn-outline-primary">
                              <span class="fa fa-plus"></span>
                            </button>
                        </div>

                        </div>
                </div>
                <div className=" col-12 m-0  mt-4 ">
                    <h5>Available Features</h5>
                    <div className="d-flex m-0 mt-3">
                        <span className="fa fa-check-square text-success mt-1"></span>
                        <span className="ml-3">
                        Bank Offer10% off on ICICI Bank Credit Cards, up to ₹750. On orders of ₹5000 and aboveT&C
                        </span>

                    </div>
                    <div className="d-flex m-0 mt-3">
                        <span className="fa fa-check-square text-success mt-1"></span>
                        <span className="ml-3">
                        Bank Offer10% off on ICICI Bank Credit Cards, up to ₹750. On orders of ₹5000 and aboveT&C
                        </span>

                    </div>
                    <div className="d-flex m-0 mt-3">
                        <span className="fa fa-check-square text-success mt-1"></span>
                        <span className="ml-3">
                        Bank Offer10% off on ICICI Bank Credit Cards, up to ₹750. On orders of ₹5000 and aboveT&C
                        </span>

                    </div>
                    <div className="d-flex m-0 mt-3">
                        <span className="fa fa-check-square text-success mt-1"></span>
                        <span className="ml-3">
                        Bank Offer10% off on ICICI Bank Credit Cards, up to ₹750. On orders of ₹5000 and aboveT&C
                        </span>

                    </div>
                 </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xl-2 p-0 mt-5">
                 <aside className="col-12 bg-light p-3"> 
                   <p className="text-warning">Please choose products quantity</p>
                   <button className="btn rounded-pill py-1 btn-outline-primary w-100"> 
                    <span className="fa fa-shopping-cart mr-2"></span>
                   Add to cart
                   </button>
                   <button className="btn rounded-pill py-1 btn-primary   color-white w-100 mt-1">
                   <span className="fa fa-shopping-cart mr-2"></span>
                       Buy now
                   </button>
                   <button className="btn btn-outline-success rounded-pill w-100 mt-1 py-1">
                      <span className="fa fa-phone mr-2"></span>
                      Call us
                    </button>
                  <div className="border mt-2 p-1 rounded">
                      <h6 className="font-weight-bold">
                        Supplier Details
                        <span className="fa fa-check-circle float-right mt-1"></span>
                      </h6>
                  </div>

                  <div className="w-100 mt-2">
                  <p className="text-secondary m-0">
                  Bhotahiti Wholeseller, Kathmandu
                    </p>
                      <p className="text-secondary m-0"> 
                      <small>Kathmandu, Balaju-12 Nepal</small>
                    </p>
                </div>   
                 </aside>

            </div>

            

            
        </div>
        <div className="row m-0">
            <div className="col-12 p-3 bg-light">
                <h4>You may also like</h4>
                <Carousel responsive={responsive}>
                    <div >
                       <div className="col-12 pt-3 pl-5 m-2">
                    
                        <img src="https://bhotahiti.com/wp-content/uploads/2021/02/N-1-scaled-510x510.jpg" className="coursal-image" /> 
                        <p className="m-0 mt-1">Buy tshirt</p>
                        <h4>NRS 12000</h4>
                    </div>
                    </div>
                 <div >
                 <div className="col-12 pt-3 pl-5 m-2">
                    
                        <img src="https://bhotahiti.com/wp-content/uploads/2021/02/N-1-scaled-510x510.jpg" className="coursal-image" /> 
                        <p className="m-0 mt-1">Buy tshirt</p>
                        <h4>NRS 12000</h4>
                    </div>
                    </div>
                    <div >
                    <div className="col-12 pt-3 pl-5 m-2">
                    
                        <img src="https://bhotahiti.com/wp-content/uploads/2021/02/N-1-scaled-510x510.jpg" className="coursal-image" /> 
                        <p className="m-0 mt-1">Buy tshirt</p>
                        <h4>NRS 12000</h4>
                    </div>
                    </div>
                    <div >
                    <div className="col-12 pt-3 pl-5 m-2">
                    
                        <img src="https://bhotahiti.com/wp-content/uploads/2021/02/N-1-scaled-510x510.jpg" className="coursal-image" /> 
                        <p className="m-0 mt-1">Buy tshirt</p>
                        <h4>NRS 12000</h4>
                    </div>
                    </div>
                    <div >
                    <div className="col-12 pt-3 pl-5 m-2">
                    
                        <img src="https://bhotahiti.com/wp-content/uploads/2021/02/N-1-scaled-510x510.jpg" className="coursal-image" /> 
                        <p className="m-0 mt-1">Buy tshirt</p>
                        <h4>NRS 12000</h4>
                    </div>
                    </div>
                    <div >
                    <div className="col-12 pt-3 pl-5 m-2">
                    
                        <img src="https://bhotahiti.com/wp-content/uploads/2021/02/N-1-scaled-510x510.jpg" className="coursal-image" /> 
                        <p className="m-0 mt-1">Buy tshirt</p>
                        <h4>NRS 12000</h4>
                    </div>
                    </div>
            </Carousel>
                
            </div>
            </div>

            <div>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active font-weight-bold" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link font-weight-bold" id="profile-tab " data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link font-weight-bold" id="contact-tab font-weight-bold color" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                            </li>
                    </ul>
                            <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><div className="container m-3 p-2">Home</div></div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><div className="container m-3 p-2">Buyers review</div></div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><div className="container m-3 p-2">Question and answer</div></div>
                            </div>
            </div>
        </>
    )
}

export default content
