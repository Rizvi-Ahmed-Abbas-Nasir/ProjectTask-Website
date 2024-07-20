"use client"
import { useEffect } from "react";
import OnScrollAnimation from '../OnScrollAnimmation';
import Image from "next/image";

export default function Featured() {

     //On Scroll Animation Function
     useEffect(()=> {
        if (typeof document !== 'undefined') {
          // will run in client's browser only
          var hiddenElements = document.querySelectorAll(".hidden");
        //   var hiddenElement2 = document.querySelectorAll(".hidden2");
        //   var hiddenElement2 = document.querySelectorAll(".hidden3");
          // console.log(hiddenElements);
           OnScrollAnimation(hiddenElements)
        //    OnScrollAnimation(hiddenElement2)
        }
        },[]);
    return(
        <div className="FeaturedContainer">
            <div className="FeatureContent hidden">
                <div className="FeatureText">
                    <h1>Featured Categories</h1>
                    <p>What do you need to find?</p>
                </div>
                <div className="FeaturedBox">
                    <div className="FeaturedBoxes">
                        <div className="FeaturedCircle">
                            <Image 
                                src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/computer.svg"
                                 
                                width={80}
                                height={80}
                            />

                        </div>
                        <div className="FeaturedP">
                            <p>Building</p>
                        </div>
                    </div>
                    <div className="FeaturedBoxes">
                    <div className="FeaturedCircle">
                    <Image 
                                src=" https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/construction.svg"
                                width={80}
                                height={80}
                            />
                            </div>
                            <div className="FeaturedP">
                            <p>Computer</p>
                        </div>
                   
                    </div>
                    <div className="FeaturedBoxes">
                    <div className="FeaturedCircle">
                    <Image 
                                src="  https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/painting.svg"
                                width={80}
                                height={80}
                            />
                            </div>
                            <div className="FeaturedP">
                            <p>Car</p>
                        </div>
                   
                    </div>
                    <div className="FeaturedBoxes">
                    <div className="FeaturedCircle">
                    <Image 
                                src=" https://www.svgrepo.com/show/67430/paint-brush.svg"
                                width={80}
                                height={80}
                            />
                            </div>
                            <div className="FeaturedP">
                            <p>Painting</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
    
};
