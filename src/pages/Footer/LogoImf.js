import "./LogoImf.css"
import maps_logo from "../Footer/Images/map_pin.svg"
import footer_logo from "../Footer/Images/Neoteric-Technology-Logo.svg"

export const LogoImf = ({Mode}) => {
  return (
    <div className="LogoContainer col-lg-4 col-md-12 col-sm-12 col-12">
          <img src={footer_logo}></img>
          <p style={Mode?{color:"white"}:{color:"black"}}>
          <span> <img className="map_pin" src={maps_logo}  style={Mode?{backgroundImage:`url${maps_logo}`}:{backgroundImage:`url${maps_logo}`}}></img></span>
          MIG - 55 ,15 ,Kukatpally Housing Board road, Green Hills Rd, near Kaithalapur ground, Hyderabad, Telangana 500072
          </p>
    </div>
  )
}

