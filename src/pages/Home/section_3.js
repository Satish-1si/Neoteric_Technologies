import "./section_3.css";
import { v4 } from "uuid";
import InnovationImg from "../Home/Images/Section_3Img/InnovationImg.svg";
import CustomerImg from "../Home/Images/Section_3Img/CustomerImg.svg";
import TimelyDeliveryImg from "../Home/Images/Section_3Img/TimelyDeliveryImg.svg";
import PassionImg from "../Home/Images/Section_3Img/PassionImg.svg";
import CollaborationImg from "../Home/Images/Section_3Img/CollaborationImg.svg";
import FlexibilityImg from "../Home/Images/Section_3Img/FlexibilityImg.svg";

const Data = [
  {
    image: InnovationImg,
    Heading: "Innovation",
    text: "Innovation is at the core of our identity. We're constantly pushing the boundaries of what's possible, exploring new ideas, technologies, and approaches to deliver solutions that are ahead of the curve. With Neoteric Technologies, you can trust that you'll always have access to cutting-edge solutions that drive your business forward.",
  },
  {
    image: CustomerImg,
    Heading: "Customer-Centric",
    text: "Your success is our top priority. We're dedicated to understanding your unique needs and objectives, and we tailor our solutions accordingly. From the initial consultation to ongoing support, we're committed to delivering outcomes that not only meet but exceed your expectations. At Neoteric Technologies, your satisfaction drives everything we do.",
  },
  {
    image: TimelyDeliveryImg,
    Heading: "Timely Delivery",
    text: "Our commitment to punctuality is unwavering, as we prioritize meeting project deadlines with precision and efficiency. With our streamlined processes and dedicated team, you can trust that your projects will be completed on time, every time.",
  },
  {
    image: PassionImg,
    Heading: "Passion",
    text: "We're passionate about what we do. We're driven by a desire to make a positive impact and help our clients succeed. Our team is comprised of dedicated professionals who are genuinely enthusiastic about technology and its potential to transform businesses and industries.",
  },
  {
    image: CollaborationImg,
    Heading: "Collaboration",
    text: "We believe in the power of collaboration. We work closely with our clients, fostering open communication and transparency throughout the entire process. By truly understanding your business and working together as a team, we're able to deliver solutions that are perfectly aligned with your goals.",
  },
  {
    image: FlexibilityImg,
    Heading: "Flexibility",
    text: "We understand that every business is different, which is why we offer flexible solutions that can be customized to suit your specific requirements. Whether you need a fully tailored solution or prefer to start with a standardized offering and scale up as your needs evolve, we've got you covered.",
  },
];
export const TechnologySolutions = ({Mode}) => {
  return (
    <section className="Tech_container" style={Mode?{backgroundColor:"#1D1D1F",color:"white"}:{backgroundColor:"white",color:"black"}}
    >
      <div className="Tech_section">
        <h1 className="Tech_Heading">Why choose use?</h1>
        <p className="InnovationText">
          Innovation is at the core of our identity. We're constantly pushing
          the boundaries of what's possible, exploring new ideas, technologies,
          and approaches to deliver solutions that are ahead of the curve. With
          Neoteric Technologies, you can trust that you'll always have access to
          cutting-edge solutions that drive your business forward.
        </p>
        <div className="TechServices">
          {Data.map(({image, Heading, text }) => {
            return (
              <div className="service_imformation_box" style={Mode?{backgroundColor:"#000000",color:"white"}:{backgroundColor:"white",color:"black"}} key={v4()}>
                <img src={image} className="CardImage" />
                <h4>{Heading}</h4>
                <div className="TechText">{text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
