import React from 'react';

// Gif
import spinner from "./gif/spinner.gif"

const Loader = () => {
    return (
        <div style={{display:"flex",alignItems:"center" ,justifyContent:"center",flexDirection:"column"}}>
            <img src={spinner} alt="Loading" />
            <h1 style={{margin:"0 30rem"}}>Loading...</h1>
        </div>
    );
};

export default Loader;