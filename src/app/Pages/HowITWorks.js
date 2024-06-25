import Image from "next/image";


export default function HowITWorks() {
    return(
        <div className="WorksContainer">
            <div className="WorksContent">
                <div className="WorksText">
                    <h1>How It Works</h1>
                    <p>Aliquam lorem ante, dapibus in, viverra quis</p>
                </div>
                <div className="WorksBox">
                    <div className="WorksBoxes">
                    <Image 
                                src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/work-seven-3.svg"
                                width={100}
                                height={100}
                            />
                    </div>
                    <div className="WorksBoxes">
                    <Image 
                                src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/work-seven-2.svg"
                                width={100}
                                height={100}
                            />
                    </div>
                    <div className="WorksBoxes">
                    <Image 
                                src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/work-seven-1.svg"
                                width={100}
                                height={100}
                            />
                    </div>
                  
                </div>
            </div>

        </div>
    );
    
};
