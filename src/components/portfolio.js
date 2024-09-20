import React from 'react'
import PortfolioCards from './portfoliocards.js'
import Modals from './modals.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Portfolio = () => {
  return (
    <section className="jumbotron jumbotron-fluid portfolio vh-100 d-flex flex-column justify-content-center" id="Portfolio">
      <div className="container">
        <h1 className="lead text-center display-6 portfolio-head">My Projects</h1>
        <div className="row pb-3 gx-4 justify-content-center align-items-center">
          <div className="col-md-4 mb-3">
            <PortfolioCards 
              img={"/goghie.png"} 
              title="Goghie" 
              description="An attempt at a more complete piece"
              modal="#Modal-1">
            </PortfolioCards>          
          </div>

          <div className="col-md-4 mb-3">
            <PortfolioCards 
              img={"/glupo.png"} 
              title="Glupo" 
              description="One of my personal favourites."
              modal="#Modal-2">
            </PortfolioCards>
          </div>

          <div className="col-md-4 mb-3">
            <PortfolioCards 
              img={"/saber.png"} 
              title="Saber" 
              description="A practice project from reference."
              modal="#Modal-3">
            </PortfolioCards>
          </div>
        </div>
      </div>

      <Modals 
        modalID="Modal-1" 
        title="Goghie"
        img={"/goghie.png"} 
        description="Mainly wanted to try making a more complete piece than usual compared to what I usually do. I also used a completely different brush than usual which made this look much cleaner."
      />  
      <Modals 
        modalID="Modal-2" 
        title="Glupo"
        img={"/glupo.png"} 
        description="One of my favorite pieces. Made using my usual messy brush but turned out looking cleaner than I thought. I initially wanted to do this landscape but decided to make it portrait instead since it made a nice background image."
      />  
      <Modals 
        modalID="Modal-3" 
        title="Saber"
        img={"/saber.png"} 
        description="A practice work based on reference from an image I liked. Tried going for a messier and rougher look with a focus on how the color was placed. Turned out surprisingly well."
      />        
    </section>
    
  )
}

export default Portfolio