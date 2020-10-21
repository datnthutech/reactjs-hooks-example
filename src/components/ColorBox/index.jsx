import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};

function getRandomColor(){
    const color_lst = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return color_lst[randomIndex];
}

function ColorBox(props) {
    
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initColor);
        return initColor;
    });

    function handleBoxClick(){
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className="color-box" 
        style={{backgroundColor: color}}
        onClick={handleBoxClick}
        >
            Color Box
        </div>
    );
}

export default ColorBox;