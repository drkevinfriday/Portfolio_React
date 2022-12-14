
import React from 'react';
import { SocialIcon } from 'react-social-icons';


 function Footer() {
  return (
    <section class="container" id="connect">
    <h3 class="section-title connect-color">CONNECT</h3>
    <div >
        <ul class="list">
            {/* <!-- List item element --> */}
            <li class='listItems'>
                <SocialIcon url="https://twitter.com/" />
            </li>
            <li class='listItems'>
                <SocialIcon url="https://github.com/drkevinfriday" />
            </li>
            <li class='listItems'>
                <SocialIcon url="https://www.linkedin.com/in/kevin-friday-a898026b/" />
            </li>
            <li class='listItems'>
                <SocialIcon url="https://twitter.com/" />
            </li>
           
        </ul>
    </div>
</section>
  );
}
export default Footer