// import React from 'react';

// const Test = ({data}) => {
//     return (
//         <div>
//             {data.Title && <h1>{data.Title}hahhaha</h1>}
//         </div>
//     );
// };

// export default Test;

import React from 'react'
import styled from 'styled-components'
function top({data}) {
    return (
        <Conainer style={{backgroundImage:"url('/img/Blur.png')"}}>
        </Conainer>
    )
}

export default top


const Conainer = styled.div`
    color:white;
    background-size: cover;
    background-position:center center;
    min-height: 80vh;
    max-height: 100vh;
    height: 100vh;
    width: 100%;
    position: fixed;
    top:0;
    z-index: -2;
`