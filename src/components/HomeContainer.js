import React from 'react';

function HomeContainer(){
    return (
    <main>
        <div className="mask rgba-black-light align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col text-center" style={{color: 'white'}}>
                        <h1 className="text-uppercase font-weight-bold pt-md-5 pt-5" style={{fontSize: '100px', marginTop: '15%'}}>
                            <strong>Welcome</strong>
                        </h1>
                        <h4 className="h4-reponsive text-uppercase font-weige-bold">
                            <strong>This is my journal on learning Full-stack development</strong>
                        </h4>
                        <h5 className="h5-reponsive font-weige-bold">
                            <strong>Feel free to browse around!</strong>
                        </h5>
                        <hr className="hr-light" />
                        <h5 className="text-uppercase mb-4 white-text">
                            <strong>Software / Full-stack developement</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default HomeContainer;