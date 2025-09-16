import React,{useState} from "react"

// import all image 
import image1 from "../assets/img/gallery/image1.jpg"
import image2 from "../assets/img/gallery/image2.jpg"
import image3 from "../assets/img/gallery/image3.jpg"
import image4 from "../assets/img/gallery/image4.jpg"
import image5 from "../assets/img/gallery/image5.jpg"
import image6 from "../assets/img/gallery/image6.jpg"
import image7 from "../assets/img/gallery/image7.jpg"
import image8 from "../assets/img/gallery/image8.jpg"
import image9 from "../assets/img/gallery/image9.jpg"

const Properties = ()=>{

    const properties = [
        {id:1,image:image1,category:"house",title:"Modern House"},
        {id:2,image:image2,category:"house",title:"Country House"},
        {id:3,image:image3,category:"house",title:"Modern House"},
        {id:4,image:image4,category:"decoration",title:"Living Room"},
        {id:5,image:image5,category:"decoration",title:"Bedroom"},
        {id:6,image:image6,category:"decoration",title:"Kitchen"},
        {id:7,image:image7,category:"furniture",title:"Sofa Set"},
        {id:8,image:image8,category:"furniture",title:"Dining Table"},
        {id:9,image:image9,category:"furniture",title:"Bed Frame"},
        {id:10,image:image1,category:"office",title:"Workspace"},
        {id:11,image:image2,category:"office",title:"Confedience Room"},
        {id:12,image:image3,category:"office",title:"Excecutive Office"},
        {id:13,image:image4,category:"decoration",title:"Bedroom"},
        {id:14,image:image5,category:"decoration",title:"Living Room"},
        {id:15,image:image6,category:"house",title:"Country House"},
        {id:16,image:image7,category:"furniture",title:"Bed Frame"}
    ];

    const [activeFilter,setActiveFilter] = useState("all");

    // Filter properties based on active or filter category 
    const filterproperties = activeFilter === "all" ? properties : properties.filter(property => property.category === activeFilter);

    return (
        <>
            <section id="properties" class="py-5">
		
                <div class="container-fluid">
                    {/* start title */}

                    <div class="row text-center">
                        <div class="col">
                            <h3 class="titles">Properties</h3>
                        </div>
                    </div>

                    {/* end title */}

                    <ul class="list-inline text-center text-uppercase fw-bold ">
                        <li class="list-inline-item propertylists" data-filter="all">All<span class="text-muted mx-md-5 mx-3">/</span></li>
                        <li class="list-inline-item propertylists" data-filter="house">House<span class="text-muted mx-md-5 mx-3">/</span></li>
                        <li class="list-inline-item propertylists" data-filter="decoration">Decoration<span class="text-muted mx-md-5 mx-3">/</span></li>
                        <li class="list-inline-item propertylists" data-filter="furniture">Furniture<span class="text-muted mx-md-5 mx-3">/</span></li>
                        <li class="list-inline-item propertylists" data-filter="office">Office<span class="text-muted mx-md-5 mx-3"></span></li>
                    </ul>

                    <div class="container-fluid">
                        
                        <div class="d-flex flex-wrap justify-content-center">
                            <div class="filters house"><a href={image1} data-lightbox='property' data-title="image1"><img src={image1} alt="img1" width="200px" /></a></div>
                            <div class="filters house"><a href={image2} data-lightbox='property' data-title="image2"><img src={image2} alt="img2" width="200px" /></a></div>
                            <div class="filters house"><a href={image3} data-lightbox='property' data-title="image3"><img src={image3} alt="img3" width="200px" /></a></div>
                            <div class="filters decoration"><a href={image4} data-lightbox='property' data-title="image4"><img src={image4} alt="img4" width="200px" /></a></div>
                            <div class="filters decoration"><a href={image5} data-lightbox='property'  data-title="image5"><img src={image5} alt="img5" width="200px" /></a></div>
                            <div class="filters decoration"><a href={image6} data-lightbox='property' data-title="image6"><img src={image6} alt="img6" width="200px" /></a></div>
                            <div class="filters decoration"><a href={image7} data-lightbox='property' data-title="image7"><img src={image7} alt="img7" width="200px" /></a></div>
                            <div class="filters decoration"><a href={image8} data-lightbox='property' data-title="image8"><img src={image8} alt="img8" width="200px" /></a></div>
                            <div class="filters furniture"><a href={image9} data-lightbox='property' data-title="image9"><img src={image9} alt="img9" width="200px" /></a></div>
                            <div class="filters office"><a href={image1} data-lightbox='property' data-title="image10"><img src={image1} alt="img10" width="200px" /></a></div>
                            <div class="filters office"><a href={image2} data-lightbox='property' data-title="image11"><img src={image2} alt="img1" width="200px" /></a></div>
                            <div class="filters office"><a href={image3} data-lightbox='property' data-title="image12"><img src={image3} alt="img11" width="200px" /></a></div>
                            <div class="filters decoration"><a href={image4} data-lightbox='property' data-title="image13"><img src={image4} alt="img12" width="200px" /></a></div>
                            <div class="filters furniture"><a href={image5} data-lightbox='property' data-title="image14"><img src={image5} alt="img13" width="200px" /></a></div>
                            <div class="filters furniture"><a href={image6} data-lightbox='property' data-title="image15"><img src={image6} alt="img1" width="200px" /></a></div>
                            <div class="filters furniture"><a href={image7} data-lightbox='property' data-title="image16"><img src={image7} alt="img14" width="200px" /></a></div>
                        </div>
                        


                    </div>


                </div>

            </section>
        </>
    )
};

export default Properties;