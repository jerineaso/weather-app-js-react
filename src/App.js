import { useState } from 'react';
import Details from './components/Details';
import './styles/App.css';
import axios from 'axios'

function App() {

  const [modal, setModal] = useState(false)
  const [locate, setLocate] = useState(false)
  const [cityName, setCityName] = useState('');
  const [apiResponse, setApiResponse] = useState('')
  const [error, setError] = useState('')
  const API = process.env.REACT_APP_API
  

    function getLocation(){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(showPosition,showError);
          setLocate(true)
      }else{
          console.log(("not supported"));
          setLocate(false)
      }
    }

    async function showPosition(position){
      let lat = position.coords.latitude;
      let lon = position.coords.longitude
      

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API}`).then(res => setApiResponse(res.data))

    }

    function showError(error)
    {
      switch(error.code) 
      {
      case error.PERMISSION_DENIED:
          setError("User denied the request for Geolocation")
          break;
      case error.POSITION_UNAVAILABLE:
          setError("Location information is unavailable.")
          break;
      case error.TIMEOUT:
          setError("The request to get user location timed out.")
          break;
      case error.UNKNOWN_ERROR:
          setError("An unknown error occurred.")
          break;
      }
    }


  async function valueChanged(value){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${API}`).then(res => setApiResponse(res.data))
  }
  

  return (
    <>
    <div className="centered">
      <div className="intro_img">
        <img src="src\weather_icons\day.svg" alt="icon" />
      </div>
      <h2 className="heading">Discover the Weather in Your City</h2>
      <p id="descrip">Get to know your weather conditions </p>

      <div className="input_part">
          <p className="warning">{error}</p>
          <input type="text" name="weather" id="weather" value={cityName} onChange={(e)=>{
            e.preventDefault();
            setCityName(e.target.value)
            valueChanged(e.target.value);
            setModal(true)
          }}/>
          <div className="separator"></div>
          <input type="button" value="Get Device Location" id="locate_btn" onClick={(e)=>{
            e.preventDefault();
            getLocation();
            locate ? setModal(true) : setModal(false)
          }}/>
      </div>
    </div>
    <Details 
      country = {apiResponse}
      modal = {modal}
    />
    </>
  );
}

export default App;
