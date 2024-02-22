import "./section_3.css"
import { v4 } from "uuid"
const Data=[
    {
        Heading:"Innovation",
        text:"Innovation is at the core of our identity. We're constantly pushing the boundaries of what's possible, exploring new ideas, technologies, and approaches to deliver solutions that are ahead of the curve. With Neoteric Technologies, you can trust that you'll always have access to cutting-edge solutions that drive your business forward." 
    },
    {
        Heading:"Innovation",
        text:"Innovation is at the core of our identity. We're constantly pushing the boundaries of what's possible, exploring new ideas, technologies, and approaches to deliver solutions that are ahead of the curve. With Neoteric Technologies, you can trust that you'll always have access to cutting-edge solutions that drive your business forward." 
    },
    {
        Heading:"Innovation",
        text:"Innovation is at the core of our identity. We're constantly pushing the boundaries of what's possible, exploring new ideas, technologies, and approaches to deliver solutions that are ahead of the curve. With Neoteric Technologies, you can trust that you'll always have access to cutting-edge solutions that drive your business forward." 
    },
    {
        Heading:"Innovation",
        text:"Innovation is at the core of our identity. We're constantly pushing the boundaries of what's possible, exploring new ideas, technologies, and approaches to deliver solutions that are ahead of the curve. With Neoteric Technologies, you can trust that you'll always have access to cutting-edge solutions that drive your business forward." 
    },
    {
        Heading:"Innovation",
        text:"Innovation is at the core of our identity. We're constantly pushing the boundaries of what's possible, exploring new ideas, technologies, and approaches to deliver solutions that are ahead of the curve. With Neoteric Technologies, you can trust that you'll always have access to cutting-edge solutions that drive your business forward." 
    },
    {
        Heading:"Innovation",
        text:"Innovation is at the core of our identity. We're constantly pushing the boundaries of what's possible, exploring new ideas, technologies, and approaches to deliver solutions that are ahead of the curve. With Neoteric Technologies, you can trust that you'll always have access to cutting-edge solutions that drive your business forward." 
    }
]
export const TechnologySolutions=()=> {
   return <section className="Tech_container">
            <div className="Tech_section">
               <h1 className="Tech_Heading">why choose use</h1>
               <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsam blanditiis officia pariatur architecto consequatur ex facilis assumenda et ab. Vero debitis fugiat cum voluptatibus aliquam nulla neque magni suscipit ex illum culpa possimus eos non delectus tempora, porro, distinctio voluptates iusto similique quod sit? Explicabo atque voluptatum repudiandae quis consectetur odit minus suscipit amet esse sit iure laborum, nam ratione blanditiis illo ea in aliquam voluptatem assumenda iste odio.
               </p>
               <div className="TechServices">
                  {
                    Data.map(({Heading})=>{
                        return <div className="service_imformation_box" key={v4()}>
                        <h4>{Heading}</h4>
                        <div className="TechText">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint voluptate, dolore suscipit, dolorum nulla delectus voluptates debitis excepturi deserunt illum consectetur. Vel fugiat ducimus impedit soluta delectus debitis inventore sit.
                        </div>
                  </div>
                    })
                  }

               </div>
            </div>
         </section>
  }
  