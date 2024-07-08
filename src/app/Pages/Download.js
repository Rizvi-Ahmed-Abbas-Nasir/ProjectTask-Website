"use client"
import { useEffect } from "react";
import OnScrollAnimation from '../OnScrollAnimmation';
import phone from "../Images/app-seven.png"
import Image from "next/image";


export default function Download() {
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
        <div className="DownloadContainer">
            <div className="DownloadContent hidden">
                <div className="DownloadBox">
                    <div className="DownloadTextAndButton">
                        <h1>Download Our New App</h1>
                        <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut 
                        metus varius laoreet.Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra,</p>
                        <div className="DownloadTAndBIMg">
                            <Image 
                            className="DownloadIMGG"
                            src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/scan-six.svg"
                            width={200}
                            height={200}
                            />
                            <div className="DownloadTAndBIMg2">
                            <Image 
                             className="DownloadIMGG"
                            src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/googleplay-seven.svg"
                            width={150}
                            height={150}
                            />
                            <Image 
                             className="DownloadIMGG"
                            src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/googleplay-seven.svg"
                            width={150}
                            height={150}
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DownloadPhoneIMG">
                    <Image 
                    className="PhoneING"
                    src={phone}
                    width={500}
                    height={500}
                    />
                </div>
            </div>
        </div>
    );
};
