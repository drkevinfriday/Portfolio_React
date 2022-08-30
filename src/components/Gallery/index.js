import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

// images
import hodl from '../../assets/images/hodl.png'
import hodl2 from '../../assets/images/hodl2.PNG'
import hodl3 from '../../assets/images/hodl3.PNG'
import hodl4 from '../../assets/images/hodl4.PNG'
import quiz from '../../assets/images/quiz.PNG'
import quiz2 from '../../assets/images/quiz2.PNG'
import quiz3 from '../../assets/images/quiz3.PNG'
import quiz4 from '../../assets/images/quiz4.PNG'
import weatherapi from '../../assets/images/weatherapi.PNG'
import weatherapi2 from '../../assets/images/weatherapi2.PNG'
import weatherapi3 from '../../assets/images/weatherapi3.PNG'
import weatherapi4 from '../../assets/images/weatherapi4.PNG'
import note from '../../assets/images/notetaker.PNG'
import note1 from '../../assets/images/notetaker1.PNG'
import note2 from '../../assets/images/notetaker2.PNG'
import note3 from '../../assets/images/notetaker3.PNG'
import EmployeeA from '../../assets/images/EmployeeAide.PNG'
import EmployeeA2 from '../../assets/images/EmployeeAide2.PNG'
import EmployeeA3 from '../../assets/images/EmployeeAide3.PNG'
import EmployeeA4 from '../../assets/images/EmployeeAide4.PNG'
import ism from '../../assets/images/ism.PNG'
import ism2 from '../../assets/images/ism2.png'
import ism3 from '../../assets/images/ism3.png'
import ism4 from '../../assets/images/ism4.png'
// import EmployeeA4 from '../../assets/images/EmployeeAide4.PNG'


function Gallery (props){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState ([
    {
      name: 'Hold on for Dear Life Ape',
      id: 1,
      category: 'hodl-app',
      description: 'A crypto currency app that lets users compare the value of crypto to the value of popular stocks',
      image: hodl,
      image2: hodl2,
      image3: hodl3,
      image4: hodl4,
      url: 'https://drkevinfriday.github.io/Hold-On-for-Dear-Life-Ape/',
      git: 'https://github.com/drkevinfriday/Hold-On-for-Dear-Life-Ape'
    },
    {
      name: 'Pop Quiz',
      id: 2,
      category: 'pop-quiz',
      description: 'A quick quiz showcasing early javascript, html, and css skills',
      image: quiz,
      image2: quiz2,
      image3: quiz3,
      image4: quiz4,
      url: 'https://drkevinfriday.github.io/Popquiz/',
      git: 'https://github.com/drkevinfriday/Popquiz'
    },
    {
      name: 'EmployeeAide',
      id: 3,
      category: 'employee-app',
      description: 'A crypto currency app that lets users compare the value of crypto to the value of popular stocks',
      image: EmployeeA,
      image2: EmployeeA2,
      image3: EmployeeA3,
      image4: EmployeeA4,
      url: 'https://employeeaide.herokuapp.com/',
      git: 'https://github.com/drkevinfriday/projectTwoFullStack'
    },
    {
      name: 'Weather Api App',
      id: 4,
      category: 'weater-app',
      description: 'A simple weather api app ',
      image: weatherapi,
      image2: weatherapi2,
      image3: weatherapi3,
      image4: weatherapi4,
      url: 'https://drkevinfriday.github.io/weather_api/', 
      git: 'https://github.com/drkevinfriday/weather_api'
    },
    {
      name: 'Anti-Ism App',
      id: 5,
      category: 'anti-ism',
      description: 'A social media app that allows users to post stories and images that are related to the anti-ism movement',
      image: ism,
      image2: ism2,
      image3: ism3,
      image4: ism4,
      url: 'https://peaceful-fortress-40561.herokuapp.com/',
      git: 'https://github.com/drkevinfriday/Ism_Mern'
    },
    {
      name: 'Anti-Ism App',
      id: 6,
      category: 'anti-ism',
      description: 'A social media app that allows users to post stories and images that are related to the anti-ism movement',
      image: note,
      image2: note1,
      image3: note2,
      image4: note3,
      url: 'https://appnote-take.herokuapp.com/',
      git: 'https://github.com/drkevinfriday/NoteTaker'
    }
    
  
    
  ]);

  const [index, setIndex] = useState(0);
  const [ offset, setOffset ] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 
  useEffect(() => {
    const onScroll= () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  

  return (
  
   
      <Carousel id="portfolio" fade
      style= {{
        overflow: 'visible', 
        //backgroundColor: 'rgb(249, 247, 241)',
        
        
  
        // testing here
        backgroundColor: "rgb(249, 247, 241)",
        alignItems: 'center'
        
      }}
       variant="dark"  activeIndex={index} onSelect={handleSelect}>
        {photos.map(({ name, category,git, id, description, image, image2, image3, image4, url }) => (
         
          <Carousel.Item key={id} className= 'gallery-carousel'
          >
            <h2
            style= {{
              textAlign: 'center',
              paddingTop: '100px',
              fontSize: '50px',
              
  
            }}
            >My Work</h2>
            <img
              className="d-block w-100 gallery-image"
              src={image}
              alt={name}
              style= {{
                //transform: `translate3d(0px, -${offset/100}px, 0px) `, 
                transform: `translate3d(0px, -${offset/100}px, 0px)`,
                transition: 'transform 0.5s ease-in-out',
                background: 'transparent',
                
                marginTop: '0'
                
                
              }}
              />
              <h3 
              className="gallery-title" 
              style= {{
                transform: `translate3d(0px, ${offset/100}px, 0px)`,
                transition: 'transform 0.5s ease-in-out',
                background: 'transparent',
                textAlign: 'center',
                marginTop: '0',
  
                fontStyle: 'italic',
                opacity: '0.7',
                fontFamily: 'Ogg',
                fontSize: '80px',
                letterSpacing: '-10px',
                textTransform: 'lowercase', 
              }}
              >
              {name}</h3>
  
              <p className="gallery-content"
               style= {{
                transform: `translate3d(0px, -${offset/100}px, 0px)`,
                transition: 'transform 0.5s ease-in-out',
                background: 'transparent',
                marginTop: '10px',
              }}
               >
                
               <a 
               style={{
                color: '#4d453e'
               }}
               href={url} className="gallery-link" target="_blank" >Try it out!</a>
               <a 
               style={{
                color: '#4d453e'
               }}
               href={git} className="gallery-link mx-20" target="_blank" >GitHub!</a>
              
              </p>
             
               <img
              className="d-block w-100 gallery-image"
              src={image2}
              alt={name}
              style= {{
                marginTop: '0px',
                transform: `translate3d(0px, -${offset/100}px, 0px)`,
                transition: 'transform 0.5s ease-in-out',
                background: 'transparent',
                
                
              }}
              />
  
              <img
              className="d-block w-100 gallery-image"
              src={image3}
              alt={name}
              style= {{
                marginTop: '0px',
                transform: `translate3d(0px, -${offset/100}px, 0px)`,
                transition: 'transform 0.5s ease-in-out',
                background: 'transparent',
                position: 'bottom',
              }}
              />
  
           
  
               <img
              className="d-block w-100 gallery-image"
              src={image4}
              alt={name}
              
              style= {{
                marginTop: '0px',
                transform: `translate3d(0px, -${offset/100}px, 0px)`,
                transition: 'transform 0.5s ease-in-out',
                background: 'transparent',
                position: 'bottom',
                
                
                
              }}
              />
                 <p className="gallery-text"
              style= {{
                marginTop: '0px',
                transform: `translate3d(0px, ${offset/100}px, 0px) `,
                transition: 'transform 0.5s ease-in-out',
                background: 'transparent',
  
                fontSize: '12px',
                fontFamily: 'Merriweather, sans-serif',
                textTransform: 'initial',
                letterSpacing: '3px',
                fontWeight: '500',
                color: 'black',
                marginBottom:'100px'
                
              }}
              >{description}</p>
              
            
              
          </Carousel.Item>
          
        ))}
      </Carousel>
    // <section id="portfolio" fade
    // style= {{
    //   overflow: 'visible', 
    //   backgroundColor: 'rgb(249, 247, 241)',
      
      

    //   // testing here
    //   backgroundColor: "carcoal",
    //   alignItems: 'center'
      
    // }}
    //  variant="dark"  activeIndex={index} onSelect={handleSelect}>
    //   {photos.map(({ name, category, id, description, image, image2, image3, image4, url }) => (
       
    //     <section key={id} className= 'gallery-carousel'
    //     >
    //       <h2
    //       style= {{
    //         textAlign: 'center',
    //         paddingTop: '100px',
    //         fontSize: '50px',
            

    //       }}
    //       >My Work</h2>
    //       <img
          
    //         src={image}
    //         alt={name}
    //         style= {{
    //           //transform: `translate3d(0px, -${offset/100}px, 0px) `, 
    //           transform: `translate3d(0px, -${offset/100}px, 0px)`,
    //           transition: 'transform 0.5s ease-in-out',
    //           background: 'transparent',
              
    //           marginTop: '0'
              
              
    //         }}
    //         />
    //         <h3 
    //         className="gallery-title" 
    //         style= {{
    //           transform: `translate3d(0px, ${offset/100}px, 0px)`,
    //           transition: 'transform 0.5s ease-in-out',
    //           background: 'transparent',
    //           textAlign: 'center',
    //           marginTop: '0',

    //           fontStyle: 'italic',
    //           opacity: '0.7',
    //           fontFamily: 'Ogg',
    //           fontSize: '80px',
    //           letterSpacing: '-10px',
    //           textTransform: 'lowercase', 
    //         }}
    //         >
    //         {name}</h3>

    //         <p className="gallery-content"
    //          style= {{
    //           transform: `translate3d(0px, -${offset/100}px, 0px)`,
    //           transition: 'transform 0.5s ease-in-out',
    //           background: 'transparent',
    //           marginTop: '10px',
    //         }}
    //          >
    //          <a 
    //          style={{
    //           color: '#4d453e'
    //          }}
    //          href={url} className="gallery-link" target="_blank" >Check it out!</a>
            
    //         </p>
           
    //          <img
    //         className="d-block w-100 gallery-image"
    //         src={image2}
    //         alt={name}
    //         style= {{
    //           marginTop: '0px',
    //           transform: `translate3d(0px, -${offset/100}px, 0px)`,
    //           transition: 'transform 0.5s ease-in-out',
    //           background: 'transparent',
              
              
    //         }}
    //         />

    //         <img
    //         className="d-block w-100 gallery-image"
    //         src={image3}
    //         alt={name}
    //         style= {{
    //           marginTop: '0px',
    //           transform: `translate3d(0px, -${offset/100}px, 0px)`,
    //           transition: 'transform 0.5s ease-in-out',
    //           background: 'transparent',
    //           position: 'bottom',
    //         }}
    //         />

         

    //          <img
    //         className="d-block w-100 gallery-image"
    //         src={image4}
    //         alt={name}
            
    //         style= {{
    //           marginTop: '0px',
    //           transform: `translate3d(0px, -${offset/100}px, 0px)`,
    //           transition: 'transform 0.5s ease-in-out',
    //           background: 'transparent',
    //           position: 'bottom',
              
              
              
    //         }}
    //         />
    //            <p className="gallery-text"
    //         style= {{
    //           marginTop: '0px',
    //           transform: `translate3d(0px, ${offset/100}px, 0px) `,
    //           transition: 'transform 0.5s ease-in-out',
    //           background: 'transparent',

    //           fontSize: '12px',
    //           fontFamily: 'Merriweather, sans-serif',
    //           textTransform: 'initial',
    //           letterSpacing: '3px',
    //           fontWeight: '500',
    //           color: 'black',
    //           marginBottom:'100px'
              
    //         }}
    //         >{description}</p>
          
    //       <br></br>
            
    //     </section>
        
    //   ))}
    // </section>
  )}; 
  
export default Gallery ;