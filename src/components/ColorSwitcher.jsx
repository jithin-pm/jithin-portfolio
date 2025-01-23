import React, { useContext, useEffect, useState } from 'react';
import '../styles/colorswitcher.css';
import { ColorContext } from '../context/ContextShare';

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
                <div className='color-picker'>
                    <h6>Color Switcher</h6>
                    <div className='colors'>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: 'rgb(128 128 128)' }}
                            onClick={() => handleColorChange('rgb(128 128 128)')}
                        ></i>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: '#c50900' }}
                            onClick={() => handleColorChange('#c50900')}
                        ></i>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: 'rgb(65 105 225)' }}
                            onClick={() => handleColorChange('rgb(65 105 225)')}
                        ></i>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: '#3b945e' }}
                            onClick={() => handleColorChange('#3b945e')}
                        ></i>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: '#9b1750' }}
                            onClick={() => handleColorChange('#9b1750')}
                        ></i>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: 'rgb(241 196 15)' }}
                            onClick={() => handleColorChange('rgb(241 196 15)')}
                        ></i>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: '#e64833' }}
                            onClick={() => handleColorChange('#e64833')}
                        ></i>

                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: '#4f318f' }}
                            onClick={() => handleColorChange('#4f318f')}
                        ></i>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: '#1affa3' }}
                            onClick={() => handleColorChange('#1affa3')}
                        ></i>
                        <i
                            className="fa-solid fa-droplet fa-xl"
                            style={{ color: 'rgb(238 97 146)' }}
                            onClick={() => handleColorChange('rgb(238 97 146)')}
                        ></i>
                    </div>
                </div>
            )}
            <div className="fixed-icon" onClick={showColorPicker}>
                {
                    show ?
                        <i class="fa-solid fa-xmark fa-xl mb-3" style={{ color }}></i>
                        :
                        <i className="fa-solid fa-palette fa-2xl" style={{ color }}></i>
                }

            </div>
        </div>
    );
}

export default ColorSwitcher;
