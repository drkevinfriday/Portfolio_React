import React from "react";
import {capitalizeFirstLetter } from "../../utils/helpers";
import Nav from '../Nav';


function Header (){

    // const handleClick = () => {
    //     console.log("click handled")
        
    //   }

   

    // useEffect(()=> {
    //     document.title = capitalizeFirstLetter(currentPage.name);
    // },[currentPage]);
    
    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    //   };
    return(
        <section>
            <h1>       
                <a data-testid= "link" href ="/">
                    <span role="img" aria-label="title"></span> Kevin Friday Portfolio
                </a>   
            </h1>     
            <Nav></Nav>
        </section>
    );
}

export default Header