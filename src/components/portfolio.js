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
              img={"/saber.jpg"} 
              title="Saber" 
              description="An attempt at a more complete piece"
              modal="#Modal-1">
            </PortfolioCards>          
          </div>

          <div className="col-md-4 mb-3">
            <PortfolioCards 
              img={"/robin.jpg"} 
              title="Robin" 
              description="One of my personal favourites."
              modal="#Modal-2">
            </PortfolioCards>
          </div>

          <div className="col-md-4 mb-3">
            <PortfolioCards 
              img={"/navia.jpg"} 
              title="Navia" 
              description="A practice project from reference."
              modal="#Modal-3">
            </PortfolioCards>
          </div>
        </div>
      </div>

      <Modals 
        modalID="Modal-1" 
        title="Saber"
        img={"/saber.jpg"} 
        description="An experimental piece."
      />  
      <Modals 
        modalID="Modal-2" 
        title="Robin"
        img={"/robin.jpg"} 
        description="A fun sketch."
      />  
      <Modals 
        modalID="Modal-3" 
        title="Navia"
        img={"/navia.jpg"} 
        description="A piece that has burnt me out more than once."
      />        
    </section>
    
  )
}

export default Portfolio