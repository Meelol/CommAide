import React from "react";

function Welcome(){
    return (
        <React.Fragment>
        <h1 className="flex justify-center my-8 p-mb-4 text-4xl font-extrabold leading-none 
        tracking-tight text-gray-900 md:text-5xl lg:text-6xl 
        dark:text-white">Welcome to CommAide</h1>
        <p className="flex justify-center mb-6 text-lg font-normal text-gray-500 
        lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Your Voice Matters</p>
        </React.Fragment>
    );
}

export default Welcome;