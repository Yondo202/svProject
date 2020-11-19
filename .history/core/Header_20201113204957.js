import React, {useContext} from 'react';
import {MenuContext} from '@/miscs/ContextMenuProvider'
import styled from 'styled-components';
import Link from 'next/link'

const Header = () => {

    const {menu} = useContext(MenuContext);
    console.log(menu)
    return (
        <Container>
            <Link href="/test"><a>hehe</a></Link>
            {menu.length && menu.map(single=>(
                <li>
                    {single.Slug && <Link href={single.Slug}><a>{single.Title}</a></Link>}
                    {single.Page && <Link href={'/p/'+single.Page.Slug}><a>{single.Title}</a></Link>}
                </li>
            ))}
        </Container>
    );
};

export default Header;

const Container = styled.div `
    padding-left:10vw;
    padding-right:10vw;
    height:50px;
    background: ${props=>props.theme.colorTwo};
`