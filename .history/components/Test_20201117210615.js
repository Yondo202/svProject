 import React from 'react';
 import styled from 'styled-components'

const Test = ({data}) => {
    return (
        <Conainer>
            {data.Title && <h1>{data.Title}</h1>}
        </Conainer>
    );
};

export default Test;

const Conainer = styled.div`
    color:white;
`