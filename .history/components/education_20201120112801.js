import React from 'react'
import styled from 'styled-components'
import {IoIosAddCircleOutline} from 'react-icons/io'
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
function education() {
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#0E3232';
      }
    function closeModal(){
    setIsOpen(false);
    }


    return (
        <Conainer>
        <div className="headerPAr">
            <h5 className="title">БОЛОВСРОЛНЭМЭХ</h5>
        </div>
        <div className="ParentInfo">
            <div className="colOne">
                <div className="main-info">
                    <label className="B">Эцэг/эхийн нэр:</label>
                    <input className="getinput val" placeholder="Овог" type="text" name="parent" />
                </div>
                <div className="main-info">
                    <label className="B">Нэр:</label>
                    <input className="getinput val" placeholder="Нэр" type="text" name="name" />
                </div>
                <div className="main-info">
                    <label className="B">Хүйс:</label>
                    <select className="getinput val" name="sex" placeholder="сүно">
                        <option value="" >Сонго</option>
                        <option value="man">Эрэгтэй</option>
                        <option value="women">Эмэгтэй</option>
                    </select>
                </div>
                <div className="main-info">
                    <label className="B">Төрсөн огноо:</label>
                    <div className="val">
                        <select className="getinput childs" name="year" placeholder="сүно">
                            <option value="" >Сонго</option>
                            <option value="man">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                        </select>
                        <select className="getinput childs" name="month" placeholder="сүно">
                            <option value="" >Сонго</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                  
                </div>
            </div>

            <div className="colOne">
                <div className="main-info">
                <label className="B">Ам бүл (тоо):</label>
                    <select className="getinput val" name="family" placeholder="сүно">
                        <option value="" >Сонго</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                </select>
                   
                </div>
                <div className="main-info">
                    <label className="B">Утас:</label>
                    <input className="getinput val" placeholder="99801406" type="number" name="phone" />
                </div>
                <div className="main-info">
                    <label className="B" >Email:</label>
                    <input className="getinput val" placeholder="Email@email.com" type="email" name="email" />
                </div>
                <div className="main-info">
                    <label className="B">Facebook(url):</label>
                    <input className="getinput val" type="url" placeholder="fb://Yondok" name="facebook" />
                </div>
            </div>
        </div>

        <Education />
    </Conainer>
    )
}

export default education


const Container = styled.div`
    padding-top:10px;  
    
`