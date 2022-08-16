import React, { useState, useEffect } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';

import ImageSlider from "./components/ImageSlider"

function App() {
  
    // You can skip useEffect if you're not using TailwindCSS
    // Otherwise, for the production usage refer to https://tailwindcss.com/docs/installation
    useEffect(() => {
      if (document) {
        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
  
        document.head.appendChild(stylesheet);
      }
    }, []);
    const [currentPage, setCurrentPage] = useState("About")
    
  function choosePage(page) {
    if (page === 'About') {
      return <About />;
    }
    if (page === 'ImageSlider') {
      return <ImageSlider />;
    }
    if (page === 'ContactForm') {
      return <ContactForm />;
    }
  };
  const [contactSelected, setContactSelected] = useState(false);
  const handlePage = (page) => setCurrentPage(page);       
       
   const slides = [
    { url: "http://localhost:3000/img1.jpg", title: "Baby" },
    { url: "http://localhost:3000/img2.jpg", title: "Baby" },
    { url: "http://localhost:3000/img3.jpg", title: "Baby" },
    { url: "http://localhost:3000/img4.jpg", title: "Baby" },
    { url: "http://localhost:3000/img5.jpg", title: "Baby" },
    { url: "http://localhost:3000/img6.jpg", title: "Baby" },
    { url: "http://localhost:3000/img7.jpg", title: "Baby" },
    { url: "http://localhost:3000/img8.jpg", title: "Baby" },
    { url: "http://localhost:3000/img9.jpg", title: "Baby" },
    { url: "http://localhost:3000/img10.jpg", title: "Baby" },
    { url: "http://localhost:3000/img11.jpg", title: "Baby" },
    { url: "http://localhost:3000/img12.jpg", title: "Baby" },
    { url: "http://localhost:3000/img13.jpg", title: "Baby" },
    { url: "http://localhost:3000/img14.jpg", title: "Baby" },
    { url: "http://localhost:3000/img15.jpg", title: "Baby" },
    { url: "http://localhost:3000/img16.jpg", title: "Baby" },
    { url: "http://localhost:3000/img17.jpg", title: "Baby" },
    { url: "http://localhost:3000/img18.jpg", title: "Baby" },
    { url: "http://localhost:3000/img19.jpg", title: "Baby" },
    { url: "http://localhost:3000/img20.jpg", title: "Baby" },
   ];

   const containerSyles = {
    width: "900px",
    height: "780px",
    margin: "0 auto",
   };

    return (
      <main className='App'>
        
        <Nav 
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          handlePage={handlePage}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}></Nav>
        {choosePage(currentPage)}
        
        <div style={containerSyles}>
          <ImageSlider slides={slides} />
          </div>

          
        
      
        {!contactSelected ? (
          <>
       
          
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
 
      </main>
  
  );
}

  


export default App;