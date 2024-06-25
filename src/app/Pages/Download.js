import phone from "../Images/app-seven.png"
import Image from "next/image";


export default function Download() {
    return(
        <div className="DownloadContainer">
            <div className="DownloadContent">
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
