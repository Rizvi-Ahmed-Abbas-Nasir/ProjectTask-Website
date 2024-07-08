
import Image from "next/image";

export default function Footer() {  
    return(
        <div className="FooterContainer">
            <div className="FooterContent ">
                <div className="MainContent">
                 <div className="FooterCont">
                    <Image 
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/logo-02.svg"
                    width={200}
                    height={50}
                    />
                    <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <h3>Newsletter Signup</h3>
                 </div>
                 <div  className="FooterCont">
                    <h2>Support</h2>
                    <p>Account</p>
                    <p>Book Appointment</p>
                    <p>Order</p>
                    <p>Payments</p>
                    <p>Return</p>
                    <p>Privacy Policy</p>

                 </div>
                 <div  className="FooterCont">
                 <h2>Support</h2>
                    <p>Account</p>
                    <p>Book Appointment</p>
                    <p>Order</p>
                    <p>Payments</p>
                    <p>Return</p>
                    <p>Privacy Policy</p>
                 </div>
                 <div  className="FooterCont">
                 <h2>Support</h2>
                    <p>Account</p>
                    <p>Book Appointment</p>
                    <p>Order</p>
                    <p>Payments</p>
                    <p>Return</p>
                    <p>Privacy Policy</p>
                 </div>
                 <div  className="FooterCont">
                    <h2>Contact</h2>
                    <p>Order</p>
                    <p>Payments</p>
                    <p>Return</p>
                    <p>Privacy Policy</p>
                 </div>
                 </div>
                <div className="AllRight">
                        <p>Copyright 2023 © Company Name. All right reserved.</p>
                </div>
            </div>
        </div>
    );
};
