"use client"
import { useEffect } from "react";
import OnScrollAnimation from '../OnScrollAnimmation';
import Image from "next/image";
// import computeworking from '../Images/images.jpeg';
// import carWorking from '../Images/carWorking.jpg';

export default function Service() {
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
        <div className="ServicesContainer">
            <div className="ServiceContent hidden">
                <div className="ServiceText">
                    <h1>Most Popular Services</h1>
                    <p>What do you need to find?</p>
                </div>
                <div className="ServiresBox">
                    <div className="ServiesBoxes">
                        <div className="ServicesBoxContent">
                            <div  className="boximg"> 
                            <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/393242/car-repair.svg"
                                height={50}
                                width={50}

                               
                            />
                            </div>
                            <div className="ServiceBoxText">
                                <h2>Car Reparing</h2>
                            </div>
                            <div className="ServiceBoxText2">
                                <p>Mumbai, India</p>
                                <p>9343343522</p>
                            </div>
                            <div className="ServiceBoxText3">
                                <p>Rate 9.5</p>
                                <h3>30.00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ServiesBoxes">
                    <div className="ServicesBoxContent">
                            <div  className="boximg"> 
                            <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/48307/technical-support.svg"
                                height={50}
                                width={50}

                              
                            />
                            </div>
                            <div className="ServiceBoxText">
                                <h2>Service </h2>
                            </div>
                            <div className="ServiceBoxText2">
                                <p>Mumbai, India</p>
                                <p>9343343522</p>
                            </div>
                            <div className="ServiceBoxText3">
                                <p>Rate 9.5</p>
                                <h3>30.00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ServiesBoxes">
                         <div className="ServicesBoxContent">
                            <div  className="boximg"> 
                            <Image 
                                className="ComputerReparingIMh"
                                src="https://www.svgrepo.com/show/155324/computer-service.svg"
                                height={70}
                                width={60}

                               
                            />
                            </div>
                            <div className="ServiceBoxText">
                                <h2>Computer Reparing </h2>
                            </div>
                            <div className="ServiceBoxText2">
                                <p>Mumbai, India</p>
                                <p>9343343522</p>
                            </div>
                            <div className="ServiceBoxText3">
                                <p>Rate 9.5</p>
                                <h3>30.00</h3>
                            </div>
                        </div>
                        </div>
                  
                </div>
            </div>

        </div>
    );
    
};
