import React from 'react'

const Contact = () => {
  return (
    <footer className="pt-4 pb-4 contact justify-content-center d-flex" >
    <div className="container d-flex flex-column justify-content-right" id="Contact">

        <div className="row contentrow">
        <div className="col-md-6">
            <h5 className="secondary">Contact Me</h5>
            <p className="secondary">Reach me by filling out the form below</p>
        </div>
        </div>

        <form>

        <div className="row formrow">
            <div className="form-group col-md-6 mb-3">
            <label className="form-label" htmlFor="formName">Name</label>
            <input type="text" className="form-control border-0 rounded-0" id="formName" placeholder="Enter your name"/>
            </div>
        </div>

        <div className="row formrow">
            <div className="form-group col-md-6 mb-3">
            <label className="form-label" htmlFor="formEmail">Email address</label>
            <input type="email" className="form-control border-0 rounded-0" id="formEmail" placeholder="Enter your email"/>
            </div>
        </div>

        <div className="row formrow">
            <div className="form-group col-md-6 mb-4">
            <label className="form-label" htmlFor="formMessage">Message</label>
            <textarea className="form-control border-0 rounded-0" id="formMessage" rows="3" placeholder="Your message"></textarea>
            </div>
        </div>

        <div className="row formrow">
            <div className="form-group col-md-6 mb-3">
            <button type="submit" className="btn btn-primary border-0 rounded-0">Submit</button>
            </div>
        </div>

        </form>

    </div>
    </footer>
  )
}

export default Contact