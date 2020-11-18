import React from 'react';
import Project from '../components/Project';

function PortfolioContainer(){
    return (
    <main>
        <div className="container">
            <section className="jumbotron">
                <h1 className="display-5">Portfolio</h1>
                <hr className="my-4" style={{borderTop: '2px solid'}} />
                <figure className="row" id="rowPort"> 
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <Project />
                        <Project />
                        <Project />
                    </div>
                </figure>
                <div className="btn-group" role="group" aria-label="Basic example" style={{float: 'right'}}>
                    <button type="button" className="btn btn-secondary">Previous</button>
                    <button type="button" className="btn btn-secondary">Next</button>
                </div>
            </section>
        </div>
    </main>
    );
}

export default PortfolioContainer;