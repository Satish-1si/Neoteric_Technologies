import "./section_5.css";

const Contact_description = () => {
	return (
		
			<div className="contacts_sub_section">
				<h1 className="contacts_sub_sec_Heading">
					Let’s Talk
				</h1>
				<p className="contacts_sub_sec_paragraph">
					we're committed to providing
					exceptional service and support to
					our clients. Whether you have a
					specific inquiry or just want to
					say hello, we'd love to hear from
					you!
				</p>
				<button className="contacts_sub_sec_button">
					Ask us Anything
				</button>
			</div>
	
	);
};
const Contact_Details=()=>{
    return <div className="Contact_Details_sec_section">
           <div className="Contact_Details_child">
                <img src={require("./Images/mail.png")} alt="" className="src" />
                <a href="mailto:neoterictechnologiesinc.com">Drop us a mail at: neoterictechnologiesinc.com</a>
           </div>
           <div className="Contact_Details_child">
                <img src={require("./Images/phone.png")} alt="" className="src" />
                <a href="tel:+7997704778">Call us at: </a>
           </div>
           <div className="Contact_Details_location">
           <div className="Contact_Details_child">
                <img src={require("./Images/marker-pin-01.png")} alt="" className="src" />
                <a href="https://www.google.com/maps?q=latitude,longitude">Reach out to us at:</a>
           </div>
             <p>MIG - 55 ,15 ,Kukatpally Housing Board road, Green Hills Rd, near Kaithalapur ground, Hyderabad, Telangana 500072</p>
           </div>
          
     </div>
}
export const Contacts_Section = () => {
	return (
		<div className="Contacts_container" style={{backgroundImage: `url(${require("./Images/GradientColorFrame.png")})`,}}>
       <div className="contacts_section">
       <Contact_description/>
       <Contact_Details/>
       </div>
    </div>
	);
};
