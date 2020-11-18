import React from 'react';
import {NavLink} from 'react-router-dom';

function Project(){
    return (
    <>
        <NavLink to="https://github.com/ElwinUng0120/README-Generator" target="blank">
            <img className="hoverZoom" src="http://placehold.it/500x300" alt="readme_generator.jpg" value="1"/>
        </NavLink>
        <br/><br/>
    </>
    );
}

export default Project;