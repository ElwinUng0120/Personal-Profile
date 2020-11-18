import React from 'react';

function Footer(props){
    return (
        <footer style={props.checker ? {position: 'fixed'} : {position: 'absolute'}}>
            <span className="align-middle">Copyright © 2020 Elwin Ung. All Rights Reserved.</span>
        </footer>
    )
}

export default Footer;