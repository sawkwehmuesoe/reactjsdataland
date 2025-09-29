import React,{useEffect, useState} from "react"

// import all image 
import image1 from "../assets/img/gallery/image1.jpg"
import image2 from "../assets/img/gallery/image2.jpg"
import image3 from "../assets/img/gallery/image3.jpg"
import image4 from "../assets/img/gallery/image4.jpg"
import image5 from "../assets/img/gallery/image5.jpg"
import image6 from "../assets/img/gallery/image6.jpg"


const Services = ()=>{

    const [images,setImages] = useState({});
    
    useEffect(()=>{
        
        const importimages = async()=>{

            try{
               
                const imageModules = await Promise.all([
                    import("../assets/img/gallery/image1.jpg"),
                    import("../assets/img/gallery/image2.jpg"),
                    import("../assets/img/gallery/image3.jpg"),
                    import("../assets/img/gallery/image4.jpg"),
                    import("../assets/img/gallery/image5.jpg"),
                    import("../assets/img/gallery/image6.jpg"),
                ]);

                // console.log(imageModules);
                // console.log(imageModules[0].default);

                setImages({
                    image1:imageModules[0].default,
                    image2:imageModules[1].default,
                    image3:imageModules[2].default,
                    image4:imageModules[3].default,
                    image5:imageModules[4].default,
                    image6:imageModules[5].default,
                })


                console.log(images);

            }catch(err){
                console.error("Error loading image : ", err);
            }

        }

        importimages();

        

    },[]);


    // console.log(images);

    // console.log(import("../assets/img/gallery/image1.jpg")  );

    const datas = [
        {
            imgname:'image1',
            roomname:"Living Room"
        },
        {
            imgname:'image2',
            roomname:"Mini Bar"
        },
        {
            imgname:'image3',
            roomname:"Dining Room"
        },
        {
            imgname:'image4',
            roomname:"Meeting Room"
        },
        {
            imgname:'image5',
            roomname:"Bed Room"
        },
        {
            imgname:'image6',
            roomname:"Pantry Room"
        },
    ];

    if(Object.keys(images).length === 0){
        return <div className="text-center py-5">Loading Images...</div>
    }

    return (
        <>
            {/* Start Service Section */}
            <section id="services" className="py-4 services">

                <div className="container-fluid">

                    {/* Start title */}
                    <div className="row text-center">
                        <div className="col-12">
                            <h3 className="titles text-light">Our Service</h3>
                            <p className="lead text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>

                    {/* End title */}

                    <div className="row">

                        {
                            datas.map((data,idx)=>(
                                <div key={idx} className="col-lg-4 col-md-6 mb-3">
                                    <div className="card border-0 servicescards">
                                        <img src={images[data.imgname]} alt="image1"/>
                                        <h5 className="text-light text-uppercase fw-bold py-2 servicetexts">{data.roomname}</h5>
                                    </div>
                                </div>
                            ))
                        } 

                    </div>

                </div>
            </section>

	{/* End Service Section */}    
        </>
    )
};

export default Services;