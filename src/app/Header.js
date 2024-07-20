"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Raleway } from 'next/font/google'
import { Roboto } from 'next/font/google'
import R_Logo from './Images/R_ogo.png'


const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300'] 
})


export default function Header(){

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
      });
    /* Method that will fix header after a specific scrollable */
           const isSticky = (e) => {
                const header = document.querySelector('.header-section');
                const scrollTop = window.scrollY;
                scrollTop >= 80 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
            };
    

     // local storage for saving the visits
    // click for saved 'darkMode' in localStorage
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        var darkMode = localStorage.getItem('darkMode');
      }


    //To enabled DarkTheme function
    const enableDarkTheme = () => {
        // 1 add the class to the body
        document.body.classList.add('darkmode');


        // 2 Update darkMode in the localStorage
        localStorage.setItem('darkMode','enabled');
    }


    const disableDarkTheme = () => {
        // 1 remove the class to body
        document.body.classList.remove('darkmode');


        // 2 update in localstorage
        localStorage.setItem('darkMode', null);
    }


    // If the user already visited and enabled darkmode
    // start things off with it on
    if(darkMode === "enabled"){
        enableDarkTheme();    
    }


    //when user click the button
    // Theme Toggle
    const DarkTheme = () => {
        darkMode = localStorage.getItem('darkMode');
        const themeicon = document.querySelector("#themeicons")
        if(darkMode !== "enabled"){
            enableDarkTheme();
            themeicon.classList.remove("gg-moon")
            themeicon.classList.add("gg-sun")
        }
        else{
            disableDarkTheme();
            themeicon.classList.remove("gg-sun")
            themeicon.classList.add("gg-moon")
        }
    
    }
    // $$
       //Sub-menu bar Mobile Responsive
       const [active, setActive] = useState(false);

    return(
        <div className="Header  header-section">
            <div className={roboto.className} id="HeaderContainer">
                <div className="TextAndLogo">
                    <Image className="R_Logo"
                    src={R_Logo}
                    width={100}
                    />
                </div>
                <div className="HeadersText">
                    <h4>Home</h4>
                    <h4>Services</h4>
                    <h4>Customers</h4>
                    <h4>Providers</h4>
                    <h4>Pages</h4>
                    <h4>Blog</h4>
                    <h4>Admin</h4>
                </div>
                <div className="RegisterAndLogin">
                    <button className={roboto.className}>Register</button>
                    <button className={roboto.className}>Login</button>  
                    <div>
                    <div onClick={DarkTheme} className="ThemeIcons"> <div id="themeicons" className="gg-moon"></div></div>
                    </div>
                </div>
                <div className="HamBurgerIcon" onChange={() => setActive(!active)}>
                    <label for="check" className="HamLabal">
                        <input type="checkbox" id="check" className="HamCheckbox" /> 
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
            </div>

            </div>
        </div>
    );
    
};
