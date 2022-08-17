import React from 'react';
import Profile from '../../assets/images/aaliyah.JPG'

function About() {

  return (
    <section className="about" id="about">
         <div>
        <img src={Profile} alt="profile" className="profile float-left"></img>
      </div>
      <div className="mt-3">

        <p>Hi there! I'm Aaliyah and I'm extremely passionate about capturing memories that you will cherish forever. I have a boyfriend of 6 years and a 3 year old, so I understand how important it is to have photos to look back on.</p>
     
      </div>
      
    </section>

  );
}

export default About;