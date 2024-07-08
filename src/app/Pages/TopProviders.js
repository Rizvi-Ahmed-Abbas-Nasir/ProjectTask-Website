"use client"
import { useEffect } from "react";
import OnScrollAnimation from '../OnScrollAnimmation';
import Image from "next/image";
export default function TopProviders() {
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
        <div className="TopContainer">
            <div className="TopContent hidden">
                <div className="TopText">
                    <h1>Top Providers</h1>
                    <p>What do you need to find?</p>
                </div>
                <div className="TopsBox">
                    <div className="TopBoexe">
                    <div className="ServicesBoxContent">
                            <div  className="boximg"> 
                            <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/228333/businesswoman-woman.svg"
                                height={50}
                                width={50}
                            />
                            </div>
                          
                        </div>
                    </div>
                    <div className="TopBoexe">
               
                    <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/228377/businessman.svg"
                                height={50}
                                width={50}
                            />
                    
                    </div>
                    <div className="TopBoexe">
                    <Image 
                                className="ComputerReparingIMh"
                                src=" https://www.svgrepo.com/show/228334/teamwork-team.svg"
                                height={50}
                                width={50}
                            />
                    </div>
                    <div className="TopBoexe">
                    <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/228349/businessmen-trade.svg"
                                height={50}
                                width={50}
                            />
                    </div>
                </div>
            </div>

        </div>
    );
    
};
