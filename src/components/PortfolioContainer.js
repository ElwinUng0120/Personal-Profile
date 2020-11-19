import React from 'react';
import Project from '../components/Project';

function PortfolioContainer(){
    const projObj = [
        {name: 'workout_tracker.jpg', link: 'https://github.com/ElwinUng0120/Workout-Tracker'},
        {name: 'online_offline_tracker.jpg', link: 'https://github.com/ElwinUng0120/Online-Offline-Trackers'},
        {name: 'employee_directory.jpg', link: 'https://github.com/ElwinUng0120/Employee-Directory'},
        {name: 'burger_logger.jpg', link: 'https://github.com/ElwinUng0120/Burger-Logger'},
        {name: 'day_planner.jpg', link: 'https://github.com/ElwinUng0120/Day-Planner'},
        {name: 'employee_tracker.jpg', link: 'https://github.com/ElwinUng0120/Employee-Tracker'},
        {name: 'note_taker.jpg', link: 'https://github.com/ElwinUng0120/Note-Taker'},
        {name: 'prototype.jpg', link: 'https://github.com/ElwinUng0120/Personal-Profile/tree/master'},
        {name: 'pw_generator.jpg', link: 'https://github.com/ElwinUng0120/Password-Generator'},
        {name: 'quiz.jpg', link: 'https://github.com/ElwinUng0120/Timed-Quiz'},
        {name: 'readme_generator.jpg', link: 'https://github.com/ElwinUng0120/README-Generator'},
        {name: 'template_engine.jpg', link: 'https://github.com/ElwinUng0120/Template-Engine_Employee-Summary'},
        {name: 'weather_dashboard.jpg', link: 'https://github.com/ElwinUng0120/Weather-Dashboard'}
    ]
    return (
    <main>
        <div className="container">
            <section className="jumbotron">
                <h1 className="display-5">Portfolio</h1>
                <hr className="my-4" style={{borderTop: '2px solid'}} />
                <figure className="row" id="rowPort"> 
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <Project obj={projObj} startInd={0} endInd={3}/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <Project obj={projObj} startInd={3} endInd={6}/>
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