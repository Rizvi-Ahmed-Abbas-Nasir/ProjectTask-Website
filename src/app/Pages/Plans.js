"use client"
import { useEffect } from "react";
import OnScrollAnimation from '../OnScrollAnimmation';
import Image from "next/image";

export default function Plans() {
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
        <div className="PlanContainer">
            <div className="PlanContent hidden">
                <div className="PlanText">
                    <h2>Pricing Plan</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h4>
                    <label className="toggle-switch">
                        <input type="checkbox" />
                        <div className="toggle-switch-background">
                            <div className="toggle-switch-handle"></div>
                        </div>
                    </label>
                </div>
                <div className="PlanPricingBoxs">
                    <div className="PlanPricingBox">
                    <div className="PlanBox2">
                            <div className="PlaneIMg2">
                                <Image src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/pricing-seven-3.svg"
                                width={55}
                                height={55}
                                />
                            </div>
                            <div className="TextAndOptions">
                                <h3>Basic</h3>
                                <h2>$ 70.00</h2>
                            </div>
                            <div className="checkBoxPlans"> 
                            <div className="checkbox-wrapper-13 bluePlan">
                                <input id="c1-13" type="checkbox" checked="true" />
                                <label for="c1-13">1 Bathroom cleaning </label>
                            </div>
                            <div className="checkbox-wrapper-13 bluePlan">
                                <input id="c1-13" type="checkbox"  checked="true"  />
                                <label for="c1-13">Up to 3 bedrooms cleaning</label>
                            </div>
                            <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                                <input id="c1-13" type="checkbox"  checked="true"  />
                                <label for="c1-13">1 Livingroom cleaning</label>
                            </div>
                            <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                                <input id="c1-13" type="checkbox"   checked="true"  />
                                <label for="c1-13">Small kitchen (0 - 150 ft2)</label>
                            </div>
                            <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                                <input id="c1-13" type="checkbox"  checked="true"   />
                                <label for="c1-13">Up to 2 additional rooms cleaning</label>
                            </div>
                            </div>
                            <div className="PlanLastBTN2">
                                <button>Choose Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="PlanPricingBox">
                        <div className="PlanBox1">
                            <div className='PlanoneBtn'>
                                <button>Most Popular</button>
                            </div>
                            <div className="PlaneIMg">
                                <Image src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/pricing-seven-2.svg"
                                width={55}
                                height={55}
                                />
                            </div>
                            <div className="TextAndOptions box2">
                                <h3>Basic</h3>
                                <h2>$ 70.00</h2>
                            </div>
                            <div className="checkBoxPlans"> 
                            <div className="checkbox-wrapper-13 box2">
                                <input id="c1-13" type="checkbox" checked="true" />
                                <label for="c1-13">1 Bathroom cleaning </label>
                            </div>
                            <div className="checkbox-wrapper-13 box2 ">
                                <input id="c1-13" type="checkbox"  checked="true"  />
                                <label for="c1-13">Up to 3 bedrooms cleaning</label>
                            </div>
                            <div className="checkbox-wrapper-13 box2 ">
                                <input id="c1-13" type="checkbox"  checked="true"  />
                                <label for="c1-13">1 Livingroom cleaning</label>
                            </div>
                            <div className="checkbox-wrapper-13 box2 ">
                                <input id="c1-13" type="checkbox"   checked="true"  />
                                <label for="c1-13">Small kitchen (0 - 150 ft2)</label>
                            </div>
                            <div className="checkbox-wrapper-13 box2 ">
                                <input id="c1-13" type="checkbox"  checked="true"   />
                                <label for="c1-13">Up to 2 additional rooms cleaning</label>
                            </div>
                            </div>
                            <div className="PlanLastBTN">
                                <button>Choose Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="PlanPricingBox">
                    <div className="PlanBox2">
                            <div className="PlaneIMg2">
                                <Image src="https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/pricing-seven-1.svg"
                                width={55}
                                height={55}
                                />
                            </div>
                            <div className="TextAndOptions">
                                <h3>Basic</h3>
                                <h2>$ 70.00</h2>
                            </div>
                            <div className="checkBoxPlans"> 
                            <div className="checkbox-wrapper-13 bluePlan">
                                <input id="c1-13" type="checkbox" checked="true" />
                                <label for="c1-13">1 Bathroom cleaning </label>
                            </div>
                            <div className="checkbox-wrapper-13  bluePlan">
                                <input id="c1-13" type="checkbox"  checked="true"  />
                                <label for="c1-13">Up to 3 bedrooms cleaning</label>
                            </div>
                            <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                                <input id="c1-13" type="checkbox"  checked="true"  />
                                <label for="c1-13">1 Livingroom cleaning</label>
                            </div>
                            <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                                <input id="c1-13" type="checkbox"   checked="true"  />
                                <label for="c1-13">Small kitchen (0 - 150 ft2)</label>
                            </div>
                            <div className="checkbox-wrapper-13 onePlanBox bluePlan">
                                <input id="c1-13" type="checkbox"  checked="true"   />
                                <label for="c1-13">Up to 2 additional rooms cleaning</label>
                            </div>
                            </div>
                            <div className="PlanLastBTN2">
                                <button>Choose Plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};
