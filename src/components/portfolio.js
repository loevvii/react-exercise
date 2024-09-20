import React from 'react';

const Portfolio = () => {
    return (
        <section className="jumbotron jumbotron-fluid pt-3 d-flex justify-content-right align-items-right vh-100">
            <div className="grid-container">
                <div class="row justify-content-center align-items-center g-2">
                    <div class="col"><div className='grid-item'><img 
                    className="disc" 
                    src="https://m.media-amazon.com/images/I/717UvyG+NXL._UF1000,1000_QL80_.jpg"  alt="Profile"  />
                    </div></div>
                    <div class="col"><div className='grid-item'>
                    <h1></h1>
                    </div></div>
                    <div class="col"><p>Schwarz</p>Hello</div>
                    </div>
                    <div className='grid-item'>
                        <div class="row">some text</div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;