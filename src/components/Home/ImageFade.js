import React, { useState, useEffect } from 'react';
import nobgcat from "../../Assets/catnobg.png"
import nobgcatcry from "../../Assets/realestcatcry.png"

const ImageFade = () => {
    const [firstImageOpacity, setFirstImageOpacity] = useState(1); // Start with the first image fully visible
    const [secondImageOpacity, setSecondImageOpacity] = useState(0); // Start with the second image fully transparent

    useEffect(() => {
        // Fade out the first image after 3 seconds
        const fadeOutTimer = setTimeout(() => {
            setFirstImageOpacity(0);
        }, 2000);

        // Fade in the second image 3 seconds after the first one starts fading out
        const fadeInTimer = setTimeout(() => {
            setSecondImageOpacity(1);
        }, 2100); // This ensures the second image starts fading in after the first has faded out

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(fadeInTimer);
        };
    }, []);

    return (
        <div className="image-container">
            <div className="overlay-text" style={{ opacity: secondImageOpacity, transition: 'opacity 0.75s ease' }}>ples buy</div>
            <img src={nobgcat} alt="Standing Cat" className="image first-image" style= {{ opacity: firstImageOpacity, transition: 'opacity .75s ease' }} />
            <img src={nobgcatcry} alt="Standing Cat is Sad" className="image second-image" style={{ opacity: secondImageOpacity, transition: 'opacity 0.75s ease', paddingLeft: "1%" }} />
        </div>
    );
};

export default ImageFade;