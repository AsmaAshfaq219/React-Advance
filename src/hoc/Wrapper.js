import React from 'react';

//Using Wrapper to reuse styling or other things for example

const Wrapper = (Wrapcomponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <Wrapcomponent {...props} />
            </div>
        );
    }
}

export default Wrapper;