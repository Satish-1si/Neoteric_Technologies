import React from 'react'

export default function StayConnected() {
  return (
    <div className='fluid-container News-blogs'>
      <div className='container stay'>
        <div className='row-3'>
            <div className='stay-connected-card-1'>
                <h1 className='mb-4'>Stay Connected</h1>
                <p className='stay-connected-desc'>Subscribe to our newsletter to receive the latest updates directly to your inbox. And don't forget to follow us on social media for real-time insights, discussions, and behind-the-scenes glimpses into the world of Neoteric Technologies. Together, let's stay informed, stay inspired, and drive success in the digital age.</p>
            </div>
            <div className='stay-connected-card-2'>
                <div><p className='emial-header'>Email</p></div>
               <div> <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email"></input>
                </div>
                <div className='button-div'>
                <button className='button'>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
