import React,{useEffect, useState} from "react"

// import all image 



const Clients = ()=>{

    const [clientImages,setClientImages] = useState({});
    
    useEffect(()=>{
        
        const importclientimages = async()=>{

            try{
               
                const imageModules = await Promise.all([
                    import("../assets/img/clients/client1.png"),
                    import("../assets/img/clients/client2.png"),
                    import("../assets/img/clients/client3.png"),
                    import("../assets/img/clients/client4.png"),
                    import("../assets/img/clients/client5.png")
                ]);

                // console.log(imageModules);
                // console.log(imageModules[0].default);

                setClientImages({
                    client1:imageModules[0].default,
                    client2:imageModules[1].default,
                    client3:imageModules[2].default,
                    client4:imageModules[3].default,
                    client5:imageModules[4].default                    
                })


                console.log(images);

            }catch(err){
                console.error("Error loading image : ", err);
            }

        }

        importclientimages();

        

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

    if(Object.keys(clientImages).length === 0){
        return <div className="text-center py-5">Loading Client Images...</div>
    }

    return (
        <>
           {/* Start Client Section */} 

		<section class="p-3">
			<div class="container-fluid">
				{/* start title */}
				<div class="row text-center">  
					<div class="col-12">

						<h3 class="titles">Satisfiled Clients</h3>
						<p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						
					</div>
				</div>
				{/* end title */}

				<div class="row ">
					<div class="col-md-12">
						<ul class="list-inline clientslists">


                            {/* {
                                Object.keys(clientImages).map((key,idx)=>(
                                    <li key={idx} class="list-inline-item">
                                        <img src={clientImages[key]} alt={key}/>
                                    </li>
                                ))
                            } */}

                             {
                                Object.entries(clientImages).map(([key,src])=>(
                                    <li key={key} class="list-inline-item">
                                        <img src={src} alt={key}/>
                                    </li>
                                ))
                            }

							
							
						</ul>
					</div>
				</div>
			</div>
		</section>

	{/* End Client Section */}
        </>
    )
};

export default Clients;