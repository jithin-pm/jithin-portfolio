import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const HoverImage = ({ baseSrc, hoverSrc, alt, className }) => {
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMaskPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // We keep the mask position even when not hovered so it closes naturally if we animate radius,
    // though for simple implementation sticking to boolean is fine.

    return (
        <div
            ref={containerRef}
            className={`hover-image-container ${className || ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', overflow: 'hidden', display: 'inline-block' }}
        >
            {/* Base Image (Always Visible) */}
            <img
                src={baseSrc}
                alt={alt}
                style={{ display: 'block', width: '100%', height: 'auto' }}
            />

            {/* Hover Image (Revealed by Mask) */}
            <img
                src={hoverSrc}
                alt={alt}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    pointerEvents: 'none',
                    // Use mask-image for soft edges
                    WebkitMaskImage: isHovered
                        ? `radial-gradient(circle 150px at ${maskPosition.x}px ${maskPosition.y}px, black 10%, transparent 80%)`
                        : 'none',
                    maskImage: isHovered
                        ? `radial-gradient(circle 150px at ${maskPosition.x}px ${maskPosition.y}px, black 10%, transparent 80%)`
                        : 'none',
                    // Hide completely when not hovered to avoid any artifacts, though 'none' mask usually shows everything or nothing depending on browser default for mask with no image?
                    // distinct: mask-image: none usually means NO mask, i.e. fully visible. 
                    // We want it HIDDEN when not hovered. 
                    // So when not hovered, mask should be fully transparent or 0 size.
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.2s ease-out'
                }}
            />
        </div>
    );
};

HoverImage.propTypes = {
    baseSrc: PropTypes.string.isRequired,
    hoverSrc: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string
};

export default HoverImage;
