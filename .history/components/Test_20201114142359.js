import React from 'react';

const Test = ({data}) => {
    return (
        <div>
            {data.Title && <h1>{data.Title}</h1>}
        </div>
    );
};

export default Test;