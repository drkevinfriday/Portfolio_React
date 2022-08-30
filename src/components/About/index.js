import React from 'react';
import coverImage from "../../assets/images/ProfilePic.jpg"

function About() {
  return (
 <section className='my-5'>
    <h1 id="about">Who am I?</h1>
    <img src={coverImage} className="my-2" style={{width:"100%"}} alt="cover" />
    <section class="my-story" >
        <h3 class="section-title" id="my-story">MY STORY</h3>
        <div class="info">
           <p>My name is Kevin Friday, I have lived in Austin texas since 2010.  I started my education at the University of Minnesota with the aim to be a Business Manager.  During the pursuit of my education I worked as an operations specialist at UPS with the goal of furthering my real world education. That experience soon turned into a career and 14 years later, I still have the itch to learn. 

            I’ve had a fascination with figuring out the way things work, a passion for technology. To quench my thirst for my two passions I enrolled in the Austin Community College computer programming degree program in 2019. 
            I’m currently on track to graduate with an associate degree spring 2022 with plans to pursue a BA in the summer of 2023.  My goal in taking the UT Full-Stack Bootcamp is to build on my current programming knowledge.
            </p> 
        </div>
    </section>
 </section>
 




  );
}

export default About;