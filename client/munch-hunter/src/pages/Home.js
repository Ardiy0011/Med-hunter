import React from 'react';
import '../components/Home.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
    <Header />

    <div className='faded-box'>
        <div className='middlelayer'>

        <div className='innerbox'>
            <h1>Discover the Power of Instant Emergency Assistance</h1>

            <p> In times of urgency, every second counts. Our cutting-edge web
             application brings a revolutionary approach to accessing emergency
              healthcare—meet your personalized emergency response system!</p>

              <Link to="/" ><button className="slide-up-button">Emmergency</button></Link> 
        </div>

        </div>
        <div className='swih'></div>
        <div className='r-image'>
        <div className='left-box'></div>
        <div className='right-box'>

        <h1>Why Choose Us?</h1>
        <h2>Immediate Hospital Locating</h2>
            <p>Click a button, and we'll swiftly find the nearest hospitals
                 within a 5-mile radius, ensuring prompt medical attention 
                 when it's needed the most.</p>


            <h2>Real-Time Information</h2>
            <p>Get crucial information about the hospitals, including contact details, 
                current occupancy, and available services. Stay informed and make decisions 
                with confidence..</p>

        </div>
        </div>

        <div className='swih'>
            

        </div>

        <div className='r-image'>
  
        <div className='right-box'>

            <h1>User-Friendly Interface</h1>
            <p>With a sleek and intuitive design, our web application ensures a 
                seamless experience. It's user-friendly, efficient, and designed 
                for ease of use during high-pressure situations.</p>
        </div>
        <div className='lefty-box'></div>
        </div>

        
    </div>

    </div>
  );
};

export default Home;
