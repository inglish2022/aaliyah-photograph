import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
    const {
        setCurrentPage
    } = props;



    return (
        <header className='head'>
     <h2>
        {/* <a data-testid="link" href="/">
        </a> */}
     </h2>
            <nav className='navBar'>
                <ul className="flex-row">
                    <li className='aaliyah' id ='title'>
                        <a data-testid="#about" href="#about" onClick={() => setCurrentPage('About')}>
                            AALIYAH'S PHOTOGRAPHS
                        </a>
                    </li>
             
                    <li className='mx-2'>
                        <a data-testid="#about" href="#about" onClick={() => setCurrentPage('About')}>
                            ABOUT ME
                        </a>
                    </li>

                    <li className='mx-2'>
                    <a data-testid="#portfolio" href="#portfolio" onClick={() => setCurrentPage('Portfolio')}>
                            GALLERY
                        </a>
                    </li>
                    
                    <li className="mx-2">
                    <a data-testid="#myContact" href="#myContact" onClick={() => setCurrentPage('ContactForm')}>
                            CONTACT ME
                            </a>
                    </li>
                    
                    </ul>
                  </nav>
                  </header>
    );
}

export default Nav;