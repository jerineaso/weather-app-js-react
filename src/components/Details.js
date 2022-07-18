import React from 'react'
import '../styles/Details.css'

function Details(props) {
  return (
   <>
    <div className={!props.modal ? "detailed_tab close" : "detailed_tab"}>
      <h2 className="heading-section">Detailed Report</h2>
      <div className="main_sec">
        <div className="left_img">
          <img src="" alt="icon" srcset="" className='weather_img'/>
        </div>
        <div className="right_desc">
          <div className="aligned">
            <div className="sub_head_country">Country Name </div>
            <p className="country_name">{props.country.name}</p>
          </div>
            <div className="aligned">
            <div className="sub_head_country">Feels Like </div>
          <p className="weather_now">{props.country ? props.country.weather[0].description : null}</p>
          </div>
          <div className="aligned">
          <div className="sub_head_country">Temperture </div>
          <p className="temp">{props.country ? props.country.main.temp : null}</p>
          </div>
          <div className="aligned">
          <div className="sub_head_country">Pressure </div>
          <p className="pressure">{props.country ? props.country.main.pressure : null}</p>
          </div>
          <div className="aligned">
          <div className="sub_head_country">Humidity </div>
          <p className="humidity">{props.country ? props.country.main.humidity : null}</p>
          </div>
          <div className="aligned">
          <div className="sub_head_country">Wind Speed </div>
          <p className="wind">{props.country ? props.country.wind.speed : null}</p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Details