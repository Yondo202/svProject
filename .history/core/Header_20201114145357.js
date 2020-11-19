import React, { useContext } from 'react';
import { MenuContext } from '@/miscs/ContextMenuProvider'
import styled from 'styled-components';
import Link from 'next/link'

const Header = () => {

    const { menu } = useContext(MenuContext);
    console.log(menu)
    return (
        <Container>
            {/* <Link href="/test"><a>hehe</a></Link> */}
            {menu.length && menu.map(single => (
                <li>
                    {single.Slug && <Link href={single.Slug}><a>{single.Title}</a></Link>}
                    {single.Page && <Link href={'/p/' + single.Page.Slug}><a>{single.Title}</a></Link>}
                </li>
            ))}

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


                {/* <div className="MenuChilds">
                        <span >About</span>
                        <div className="line"></div>
                    </div>
                    <div className="MenuChilds">
                        <span >Pricing</span>
                        <div className="line"></div>
                    </div>
                    <div className="MenuChilds">
                        <span >Contact</span>
                        <div className="line"></div>
                    </div> */}
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