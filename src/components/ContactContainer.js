import React from 'react';

function ContactContainer(){
    return (
    <main>
        <div className="container">
            <br/>
            <section className="jumbotron">
                <h1 className="display-5">Contact</h1>
                <p className="lead">Please allow up to 2-4 days for me to reply.</p>
                <hr className="my-4" style={{borderTop: '2px solid' }} />
                <a href="https://www.linkedin.com/in/elwin-ung/" target="blank"><i className="fab fa-linkedin fa-4x"></i></a>
                <a href="mailto:elwin.ung@gmail.com" style={{color: 'rgb(112, 111, 111)', marginLeft: '2%'}}><i className="fas fa-envelope fa-4x"></i></a>
                <br/><br/>
                <hr style={{borderTop: '3px solid'}} />
                <p className="lead">OR you can leave me a message here.</p>
                <form action="https://formspree.io/mbjpjrly" method="POST">
                    <div className="form-group">
                        <label for="contactName">Name</label>
                        <input type="text" name="name" className="form-control" id="contactName" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <label for="inputEmail">Email</label>
                      <input type="email" name="_replyto" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label for="inputMsg">Message</label>
                        <textarea type="text" name="message" className="form-control" id="inputMsg" rows="3" placeholder="Your message here..."></textarea>
                      </div>
                    <button type="submit" className="btn btn-primary btn-lg" value="Send">Submit</button>
                  </form>
            </section>
        </div>
    </main>
    );
}

export default ContactContainer;