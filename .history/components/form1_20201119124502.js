import React from 'react'
import styled from 'styled-components'

function form1() {
    return (
        <Conainer>
            <h3>ЕРӨНХИЙ МЭДЭЭЛЭЛ</h3>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Эцэг/эхийн нэр:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Нэр:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Хүйс:</span>
                        <span className="val">Эр</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Төрсөн огноо:</span>
                        <span className="val">1996-05-10</span>
                    </div>
                </div>

                <div className="colOne">
                    <div className="main-info">
                        <span className="B">Эцэг/эхийн нэр:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Эцэг/эхийн нэр:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Эцэг/эхийн нэр:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Эцэг/эхийн нэр:</span>
                        <span className="val">Ёндонжамц</span>
                    </div>
                </div>
            </div>
          
        </Conainer>
    )
}

export default form1

const Conainer = styled.div`
    .ParentInfo{
         display:flex;
         flex-direction: row;
         justify-content:space-between; 
         width:60%;
         font-size:16px;  
         .colOne{
             .main-info{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                
                 .B{
                 }
                 .val{
                     margin-left:15px;
                    text-align:start;

                 }
             }
         }
    }
`