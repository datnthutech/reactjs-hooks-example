import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CssColor.scss';

ChangeColor.propTypes = {
};

function randomColor(){
    const arrList = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    return arrList[Math.trunc(Math.random() * 5)];
}

function ChangeColor(props) {
    
    const [color, setColor] = useState(() => {
        const initialColor = localStorage.getItem('colorBox') || 'deeppink';
        console.log('initial Color: ', initialColor);
        return initialColor;
    });

    function changing () {
        const colorChange = randomColor();
        localStorage.setItem('colorBox', colorChange);
        setColor(colorChange);
    }   

    return (
        <div className="box" 
            style={{backgroundColor: color}}
            onClick={changing}
        >
            
        </div>
    );
}

export default ChangeColor;