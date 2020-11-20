import React from 'react'
import styled from 'styled-components'
import { IoIosAddCircleOutline } from 'react-icons/io'
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
function education() {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#0E3232';
    }
    function closeModal() {
        setIsOpen(false);
    }


    return (
        <Container>
            <div className="headerPAr">
                <h5 className="title">БОЛОВСРОЛ</h5>
            </div>
            <div className="ParentInfo">
                <div className="colOne">
                    <div className="main-info">
                        <label className="B">Боловсрол:</label>
                        <select className="getinput val" name="education" >
                            <option value="" >- Сонго -</option>
                            <option value="Доктор">Доктор</option>
                            <option value="Магистр">Магистр</option>
                            <option value="Бакалавр">Бакалавр</option>
                            <option value="Мэргэшсэн">Мэргэшсэн</option>
                            <option value="Бүрэн дунд">Бүрэн дунд</option>
                        </select>
                    </div>
                    <div className="main-info">
                        <label className="B">Улс:</label>
                        <select className="getinput val" name="country" >
                            <option value="" >- Сонго -</option>
                            <option value="Монгол">Монгол</option>
                            <option value="Орос">Орос</option>
                            <option value="Хятад">Хятад</option>
                            <option value="Солонгос">Солонгос</option>
                            <option value="Америк">Америк</option>
                            <option value="Австрали">Австрали</option>
                        </select>
                    </div>
                    <div className="main-info">
                        <label className="B">Мэргэжил:</label>
                        <input className="getinput val" placeholder="Мэргэжил" type="text" name="edu" />
                    </div>
                    <div className="main-info">
                        <label className="B">Голч дүн:</label>
                        <input className="getinput val" placeholder="3.2" type="text" name="count" />

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
        </Container>
    )
}

export default education


const Container = styled.div`
    padding-top:10px;  
    
`