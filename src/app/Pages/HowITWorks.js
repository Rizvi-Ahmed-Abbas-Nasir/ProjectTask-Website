"use client"
import { useEffect } from "react";
import OnScrollAnimation from '../OnScrollAnimmation';
import Image from "next/image";



export default function HowITWorks() {
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
        <div className="WorksContainer">
            <div className="WorksContent hidden ">
                <div className="WorksText">
                    <h1>How It Works</h1>
                    <p>Aliquam lorem ante, dapibus in, viverra quis</p>
                </div>
                <div className="WorksBox">
                    <div className="WorksBoxes">
                    <div className="WorksBoxesCircle" >
                    <Image 
                                src="https://www.svgrepo.com/show/192583/tasks-list.svg"
                                width={80}
                                height={80}
                            />
                            </div>
                            <div className="WorksBoxDetails">
                                <h2>Tasks</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                    </div>
                    <div className="WorksBoxes">
                    <div className="WorksBoxesCircle">

                    <Image 
                                src="https://www.svgrepo.com/show/508317/search.svg"
                                width={80}
                                height={80}
                            />
                            </div>
                            <div className="WorksBoxDetails">
                                <h2>Search</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                    </div>
                    <div className="WorksBoxes">
                    <div className="WorksBoxesCircle">

                    <Image 
                                src="https://www.svgrepo.com/show/530260/map.svg"
                                width={80}
                                height={80}
                            />
                            </div>
                            <div className="WorksBoxDetails">
                                <h2>Map</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                    </div>
                  
                </div>
            </div>

        </div>
    );
    
};
