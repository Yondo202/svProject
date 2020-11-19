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
                        <span className="val">Гантулга</span>
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
                        <span className="B">Ам бүл:</span>
                        <span className="val">3 (Ээж, Эмэгтэй дүү)</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Утас:</span>
                        <span className="val">99801406</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Email:</span>
                        <span className="val">yondooo61@gmail.com</span>
                    </div>
                    <div className="main-info">
                        <span className="B">Facebook:</span>
                        <span className="val">fb://yondok</span>
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
         width:65%;
         font-size:17px;  
         .colOne{
             width:43%;
             .main-info{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                
                 .B{
                     color:rgba(255,255,255, 0.8);
                     width:40%;
                 }
                 .val{
                    // margin-left:15px;
                    width:55%;
                 }
             }
         }
    }
`