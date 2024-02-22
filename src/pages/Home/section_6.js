import "./section_6.css"

export const Clients = () => {
  return (
    <div className='client_Container'>
        <div className="client_Section_description">
             <h1 className="client_section_heading">What our clients say</h1>
             <p className="client_section_paragraph">“Working with Neoteric Technologies has been a game-changer for our business. Their team's expertise, dedication, and innovative solutions have helped us achieve our goals and exceed our expectations”</p>
        </div>
        <div className="client_section_clients">
            <div className="Client_section_boxes">
                <img src={require("./Images/Image_icon.png")} alt=""/>
                <div>
                    <h2>Lorem ipsum</h2>
                    <p>Head of Marketing</p>
                </div>
            </div>
            <div className="Client_section_boxes">
                <img src={require("./Images/Image_icon.png")} alt=""/>
                <div>
                    <h2>Lorem ipsum</h2>
                    <p>web desiginer</p>
                </div>
            </div>
            <div className="Client_section_boxes">
                <img src={require("./Images/Image_icon.png")} alt=""/>
                <div>
                    <h2>Lorem ipsum</h2>
                    <p>Head of Marketing</p>
                </div>
            </div>
        </div>

    </div>
  )
}

