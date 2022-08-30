import React from "react";
import {capitalizeFirstLetter } from "../../utils/helpers";


function Nav (props){

    // const handleClick = () => {
    //     console.log("click handled")
        
    //   }

    const {
        categories = [],
        currentCategory,
        setCurrentCategory,
       
    }= props;

    // useEffect(()=> {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    // },[currentCategory]);
    
    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    //   };

    

    return(
        <nav>
                <ul className="flex-row">
                    {
                        categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`}key={category.name}>

                            <span 
                            onClick={()=> {
                                setCurrentCategory(category)
                                console.log(category)
                            }}
                            >
                            {capitalizeFirstLetter(category.name)}

                            </span>
                        </li>
                        ))
                    }
                
                    
                    
                </ul>
            </nav>
    );
}

export default Nav