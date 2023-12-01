import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};


export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [accesstitle, setAccesstitle] = useState('Login');
  const [userLocation, setUserLocation] = useState({lat: 5.614323616027832, lng: -0.04806327819824219});

  useEffect(() => {
    // get users geolocation
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setUserLocation({ lat, lng });
      console.log("user data requested and fetched")
    });


  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername, 
                                   accesstitle, setAccesstitle, 
                                   userLocation }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext }; 