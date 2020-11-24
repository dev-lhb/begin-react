import React from 'react';

const Wrapper = ({ children }) => {
    const Style = {
        border: '2px solid black',
        padding: '16px',
    };

    return (
        <div style={Style}>
            {children}
        </div>
    )
}

export default Wrapper;