import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Modals = (modalItem) => {
  return (
    <div className="modal fade" id={modalItem.modalID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-0">

        <div className="modal-header">
            <h1 className="modal-title fs-4" id="exampleModalLabel">{modalItem.title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="modal-body p-3">
            <div className="text-center">
            <img className="img-fluid mb-3" src={modalItem.img}  />
            <p>{modalItem.description}</p>
            </div>
        </div>

        </div>
    </div>
    </div>
  )
}

export default Modals