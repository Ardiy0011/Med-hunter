import React, { useState, useEffect, useContext } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PlaceCard from '../components/PlaceCard';
import Loader from '../components/Loader';
import Intro from '../components/Intro';
import Heartbeatbg from '../components/Heartbeatbg';
import { UserContext } from '../components/UserContext';


function Body() {
  const [data, setData] = useState([]);
  const buttonlabel = 'Hospitals';
  const [loading, setLoading] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [showHeartbeat, setshowHeartbeat] = useState(true)
  const {userLocation, setUserLocation } = useContext(UserContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // this handles the loader, hides it for about 3 seconds and sets its state to true
  const showLoader = () => {
    setLoading(false);
    const loadicon = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return ()=> clearTimeout(loadicon);
  }

  const showcard = () => {
    document.getElementById('info-card').style.display = 'flex';
    
  }

  // encompasses the joint sequence started when the emergency button is clicked
  const renderSequence = () => {
      setButtonVisible(false);
      setshowHeartbeat(false);
      showLoader();
      showcard();
  }

  function fetchData() {
    renderSequence();
    console.log('sequence initiated with button vanished');
    // using string concatenation to join the base url to the geolocation properties
    // incomplete url, the rest of the url is in the proxy code which queries the long and lat below
    const apiUrl = 'http://localhost:8080/api/places?location=' + userLocation.lat + ',' + userLocation.lng;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log('data fetched');
        console.log(result);
        if (result.status === 'OK' && Array.isArray(result.results) && result.results.length > 0) {
          setData(result.results);
        } else {
          setData([{ name: 'No restaurants around you' }]);
          console.error('Invalid or empty data from API');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="App">

      <Header />
      {showIntro ? <Intro /> : null }
      <main className="content">
        <section id="box">
        <button id="buttonbody" onClick={fetchData} style={{ display: isButtonVisible ? 'block' : 'none' }}>
        {buttonlabel}
        </button>
          <div id="bounceshadow" className="bounceshadow">
            #
          </div>
          {showHeartbeat ? <Heartbeatbg /> : null}
          <div id='info-card'>
            <div className='hold'>
              <div className="main-card">
                {data.map((place) => (
                  <PlaceCard key={place.place_id} place={place} />
                  
                ))}
              </div>
              {!loading ? <Loader /> : null}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Body;
