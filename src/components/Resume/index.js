// import React from 'react';
import React, { useState } from 'react';
// import { Document } from 'react-pdf'
import { Document } from 'react-pdf/dist/umd/entry.webpack';

function Resume() {


  return (

    
 <section className='my-5'>
 <div id="header"></div>
<div class="left"></div>
<div class="stuff"></div>

  <h1>Resume</h1>
  <h2>Kevin J Friday</h2>
  <hr />
  <a href="../../assets/KevinJFriday_Resume _IT.pdf" download>
    Click to donwload my resume
</a>

  <p class="head">Interests</p>
  <ul>
    <li>Plants</li>
    <li>Dogs</li>
    <li>Shhoes</li>
    <li>Programming</li>
    <li>Computer Science</li>
  </ul>
  <p class="head">Skills</p>
  <ul>
    <li>Web Design with HTML & CSS</li>
    <li>Node.jsL & </li>
    <li>Sql & Nosql</li>
  </ul>
  <p class="head">Education</p>
  <ul>
   
    <a href="https://twin-cities.umn.edu/">
      <li>University of Minneaota</li>
    </a>
    <a href="https://www.austincc.edu/">
      <li>Austin Community college</li>
    </a>
    <a href="https://techbootcamps.utexas.edu/coding/landing/?s=Google-Brand&dki=Learn%20Coding&pkw=ut%20austin%20coding%20bootcamp&pcrid=454953517096&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CUT-AUSTIN%7CSEM%7CCODING%7C-%7CONL%7CTIER-1%7CALL%7CBRD%7CEXACT%7CCore%7CBootcamp&utm_term=ut%20austin%20coding%20bootcamp&s=google&k=ut%20austin%20coding%20bootcamp&utm_adgroupid=106620982792&utm_locationphysicalms=9028290&utm_matchtype=e&utm_network=g&utm_device=c&utm_content=454953517096&utm_placement=&gclid=CjwKCAjw6raYBhB7EiwABge5KjB99dxuqAM5lSx3cdAO2acI_LqAZpHR74iLc9QV3dP-Gs4ar3zdCBoCgVsQAvD_BwE&gclsrc=aw.ds">
      <li>University of Texas</li>
    </a>
  </ul>
  <p class="head">Experience</p>
  <ul>
    <li>United Parcel Service</li>
    <li>Operation Specialist</li>
  </ul>
  <p class="head">Extracurriculars</p>
  <ul>
    <li>Paddleboard Club</li>
    <li>Gardening Club</li>
    <li>Magic the gathering Club</li>
  </ul>
  
 </section>




  );
}

export default Resume;