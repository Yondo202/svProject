import React, { useContext, useState } from 'react';
import { MenuContext } from '@/miscs/ContextMenuProvider'
import styled from 'styled-components';
import Link from 'next/link'
import HamburgerMenu from 'react-hamburger-menu'
import { DirectLink, Element, Events, animateScroll, scrollSpy, scroller } from "react-scroll";

const Header = () => {
    const [open, close] = useState('');
 
    const { menu } = useContext(MenuContext);
    console.log(menu)

    const handleClick = () => {
        close(!open);
    }
    return (
        <Container>
            <div className="menuPar">
                <div className="LogoPar">
                    <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/39/2019/11/Jevelin_logo_light.png" alt="kk" />
                </div>
                {menu.length && menu.map(single => (
                    <div className="MainMenu">
                        {single.Slug && <Link href={single.Slug}><a> <div onClick={() => animateScroll.scrollMore(0, { delay: 100 })} className="MenuChilds">
                            <span >{single.Title}</span>
                            <div className="line"></div>
                        </div></a></Link>}
                        {single.Page && <Link href={'/p/' + single.Page.Slug}><a><div onClick={() => animateScroll.scrollMore(737, { delay: 100 })} className="MenuChilds">
                            <span >{single.Title}</span>
                            <div className="line"></div>
                        </div></a></Link>}
                    </div>
                ))}
                <label for="check" className="checkBtn">
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={handleClick}
                        width={32}
                        height={15}
                        strokeWidth={2}
                        rotate={0}
                        // color={this.state.color}
                        color="white"
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </label>
            </div>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    padding-left:10vw;
    padding-right:10vw;
    height:50px;
    background: ${({ theme }) => theme.colorOne};
`