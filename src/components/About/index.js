import React from 'react';
import Profile from '../../assets/images/aaliyah.JPG'

function About() {
  return (
    <section className="about" id="about">
      
         <div>
        <img src={Profile} alt="profile" className="profile float-left"></img>
      </div>
 
      <div className="mt-3">
        

        <p>Hi there! I'm Aaliyah and I'm extremely passionate about capturing memories that you will cherish forever. </p>
        <br></br>
        <p>I have lived in Indiana all my life and have always loved finding beautiful locations that are often overlooked.  Whether it be a backroad or a certain street in town,  I will have a vision to make it look great for you.</p>
      <br></br>
      <p>I also have a boyfriend of 6 years and a 3 year old son, so I understand how important it is to have photos to look back on.  Each year I break out my scrapbook and document all the special moments I've been lucky enough to have with the ones I love.  It is truly nostalgic. </p>
      </div>
      
    </section>

  );
}

export default About;