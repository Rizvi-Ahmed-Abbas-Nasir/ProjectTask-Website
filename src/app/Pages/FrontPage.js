import abbas from '../Images/Rizvi Ahmed Abbas2.png';
import Image from 'next/image';
import { Raleway } from 'next/font/google'
import { Roboto } from 'next/font/google'


const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300'] 
})


export default function FrontPage() {
    return(
        <div className="FrontPage">
            <div className="FrontContainer">
                <div className="FrontContent">
                    <div className="FrontTextcontent">
                        <div className={roboto.className} id="HeadingFront">
                            <h3>Search From 150 Awesome Verified Ads!</h3>
                            <h1>Best Solution for Every</h1>
                            <h2>House Problems</h2>
                        </div>

                        <div className="FrontPhotoBox">
                                <h4>2M+ Professionals Register</h4>
                        </div>
                    </div>
                    <div className="CircularImage">
                        <Image className="CircleContent" 
                            src={abbas}
                        />
                    </div>
                </div>
                <div className='FrontSearchBar'>
                    <div className='ForntearchContainer'>
                        <input placeholder="What arr you Looking for" type='search' />
                        <input placeholder='Your Location' type='search' />
                        <button>Search</button>
                    </div>
                </div>        
            </div>
            <div className='FontTextsAndButtons'>
                    <div className='TextsAndButton'>
                            <h3>Popular Searchs</h3>
                            <button>Electrical Work</button>
                            <button>Cleaning</button>
                            <button>AC Repair</button>
                    </div>
                 </div> 
        </div>
    );
    
};
