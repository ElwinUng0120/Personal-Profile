import React from 'react';
import {NavLink} from 'react-router-dom';

function AboutContainer(){
    return (
    <main>
        <div className="container">
            <section className="jumbotron">
                <h1 className="display-5">About Me...</h1>
                <hr className="my-4" style={{borderTop: '2px solid'}} />
                <div className="row single-post no-gutters">
                    <div className="col">
                        <figure className="image-wrapper float-left pr-3">
                            <img src="./img/aboutMe.jpg" alt="Profile pic" style={{height: '300px', width: '250px'}} />
                        </figure>
                        <article className="single-post-content-wrapper pr-3">
                            <p>Hi there!</p>
                            <p>
                                I'm Elwin Ung and I'm from Toronto, Canada. I graduated from Ryerson University in summer 2019 with the Bacholor of Electrical Engineering.
                                Electrical engineering was cool to me when I was younger and becoming an engineer was my career goal until I was lost after graduating and COVID-19 hit the world.<br/>
                                After months of job applying/self-exploring/online learning, I found full-stack development, especially back-end development because I enjoy programming and providing solutions more than designing (but I do think I have pretty good sense).<br/>
                            </p>
                            <p>
                                I'm currently taking a full-stack bootcamp hosted by University of Toronto and Trilogy. 
                                Here is the <a href="https://bootcamp.learn.utoronto.ca/coding/" target="blank"><strong>link</strong></a> to the bootcamp's site if you want to see what I have been learning or check out my {<NavLink to="/portfolio"><strong>portfolio</strong></NavLink>} to see what I can actually do.
                            </p>
                        </article>
                    </div>
                </div>
                <br/>
                <article className="row pl-3">
                    <p>
                        As a programmer, I do love gaming, especially FPS since the first game I played was Counter-Strike and I spent quite a bit of my childhood playing it.
                        I also like immerse myself into fiction novels as they depict worlds and stories that carry me away from reality. 
                        Life science books are my "backups", especially psychology if I don't have a good novel at the time.
                        They expand my understanding on how we as human beings work and maybe one day I can overcome natural responses to the environment around me.
                    </p>
                    <p>
                        Another hobby I do is Kendo. It is a martial art and a sport nowadays. It helps me release stress from studying and discipline myself into building routines because of its martial art nature.
                        I didn't expect much when I first started but the growing commnuity has kept me going and I enjoy building the connections.
                        Here is a <a href="https://kendo-canada.com/about-kendo/" target="blank"><strong>quick introduction</strong></a> on Kendo in case you are interested.
                    </p>
                </article>
                <br/>
                <p style={{float: 'right', marginRight: '4%'}}>Check out my other profiles!</p>
                <section id="bioIcons">
                    <a href="https://github.com/ElwinUng0120?tab=repositories" target="blank" style={{color: 'black'}}><i className="fab fa-github-square fa-4x"></i></a>
                    <a href="https://www.linkedin.com/in/elwin-ung/" target="blank" style={{marginLeft: '10%'}}><i className="fab fa-linkedin fa-4x"></i></a>
                </section> 
            </section>
        </div>
    </main>
    );
}

export default AboutContainer;