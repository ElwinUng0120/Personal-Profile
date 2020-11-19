import React from 'react';

function Project(props){
    const projObj = props.obj.slice(props.index, props.index+3);
    console.log(projObj);
    return (
    <>
        {projObj.map(item => {
            // if(item != null){
                const link = './img/portfolio_thumbnails/' + item.name
                return (<a href={item.link} target="blank">
                    <img className="hoverZoom" src={link} alt="readme_generator.jpg" value="1"/>
                </a>);
            // } else {
            //     return <p>More Coming on the Way</p>
            // }
        })}
    </>
    );
}

export default Project;