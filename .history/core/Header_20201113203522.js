import React, {useContext} from 'react';
import {MenuContext} from '@/miscs/ContextMenuProvider'
import styled from 'styled-components';

const Header = () => {

    const {menu} = useContext(MenuContext);
    console.log(menu);
    return (
        <Container>
            
        </Container>
    );
};

export default Header;

const Container = styled.div `
    padding-left:10vw;
    padding-right:10vw;
    background:pink;
    height:50px;
`