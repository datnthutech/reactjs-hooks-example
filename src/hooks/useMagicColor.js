import React, { useState, useEffect, useRef } from 'react';

function getRandomColor(currentColor) {
    const colors = ['pink', 'blue', 'green', 'red'];
    const currentIndex = colors.indexOf(currentColor);
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }
    return colors[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = getRandomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = color;
        }, 1000);

        return () => {
            // unmount.
            clearInterval(colorInterval);
        }
    }, [])

    return color;
}

export default useMagicColor;