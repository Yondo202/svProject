import React, {useContext} from 'react';
import {MenuContext} from '@/miscs/ContextMenuProvider'
import styled from 'styled-components';
import Link from 'next/link'

const Header = () => {

    const {menu} = useContext(MenuContext);

    return (
        <Container>
            <Link href="/test"><a>hehe</a></Link>
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