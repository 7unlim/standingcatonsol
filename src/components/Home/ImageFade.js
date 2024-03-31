import React, { useState, useEffect } from 'react';
import nobgcat from "../../Assets/catnobg.png"
import nobgcatcry from "../../Assets/dontcrypls.png"

const ImageFade = () => {
    const [firstImageOpacity, setFirstImageOpacity] = useState(1); // Start with the first image fully visible
    const [secondImageOpacity, setSecondImageOpacity] = useState(0); // Start with the second image fully transparent

    useEffect(() => {
        // Fade out the first image after 3 seconds
        // const fadeOutTimer = setTimeout(() => {
        //     setFirstImageOpacity(0);
        // }, 2000);

        // // Fade in the second image 3 seconds after the first one starts fading out
        // const fadeInTimer = setTimeout(() => {
        //     setSecondImageOpacity(1);
        // }, 2100); // This ensures the second image starts fading in after the first has faded out

        const interval = setInterval(() => {
            // Fade out the first image and fade in the second image
            setFirstImageOpacity(prevOpacity => (prevOpacity === 1 ? 0 : 1));
            setSecondImageOpacity(prevOpacity => (prevOpacity === 1 ? 0 : 1));
        }, 3500); // Adjust time as needed for each cycle of fading in and out


        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="image-container">
            <div className="overlay-text" style={{ opacity: secondImageOpacity, transition: 'opacity 0.75s ease' }}>ples buy</div>
            <img src={nobgcat} alt="Standing Cat" className="image-first" style= {{ opacity: firstImageOpacity, transition: 'opacity .75s ease' }} />
            <img src={nobgcatcry} alt="Standing Cat is Sad" className="image-second" style={{ opacity: secondImageOpacity, transition: 'opacity 0.75s ease', paddingLeft: "1%" }} />
        </div>
    );
};

export default ImageFade;