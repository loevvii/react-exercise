import React from 'react'

const PortfolioCards = (item) => {
  return (
    <div className="col">
      <div className="card border-0 rounded-0">
      <img src={item.img} className="card-img-top rounded-0"></img>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text mb-3">{item.description}</p>
          <button type="button" className="btn btn-primary border-0 rounded-0" data-bs-toggle="modal" data-bs-target={item.modal}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCards