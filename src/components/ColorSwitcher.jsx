import React, { useContext, useEffect, useState } from 'react';
import '../styles/colorswitcher.css';
import { ColorContext } from '../context/ContextShare';
import { IoIosColorPalette } from 'react-icons/io';

function ColorSwitcher() {
    const [show, setShow] = useState(false);
    const { color, setColor } = useContext(ColorContext);

    // Load the saved color from localStorage when the component mounts
    useEffect(() => {
        const savedColor = localStorage.getItem('selectedColor');
        if (savedColor) {
            setColor(savedColor);
        }
    }, [setColor]);

    // Function to toggle the color picker visibility
    const showColorPicker = () => {
        setShow(!show);
    };

    // Function to handle color changes and save them to localStorage
    const handleColorChange = (newColor) => {
        setColor(newColor); // Update global color
        localStorage.setItem('selectedColor', newColor); // Save color to localStorage
    };

    return (
        <div className='colorSwitcher'>
            {show && (
                <div className='color-palette-ui'>
                    <div className="palette-inner">
                        <IoIosColorPalette className="palette-base-icon" />
                        
                        {/* Interactive Color Circles positioned over the icon's holes */}
                        <div className="palette-color-hole red" onClick={() => handleColorChange('#c50900')}></div>
                        <div className="palette-color-hole blue" onClick={() => handleColorChange('rgb(65 105 225)')}></div>
                        <div className="palette-color-hole green" onClick={() => handleColorChange('#3b945e')}></div>
                        <div className="palette-color-hole yellow" onClick={() => handleColorChange('rgb(241 196 15)')}></div>
                        <div className="palette-color-hole ash" onClick={() => handleColorChange('rgb(128 128 128)')}></div>
                    </div>
                </div>
            )}
            <div className="fixed-icon" onClick={showColorPicker} style={{ color }}>
                {
                    show ?
                        <i className="fa-solid fa-xmark fa-xl"></i>
                        :
                        <IoIosColorPalette className="palette-trigger-icon" />
                }

            </div>
        </div>
    );
}

export default ColorSwitcher;
