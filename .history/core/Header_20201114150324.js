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
                        {single.Slug &&  <div onClick={() => animateScroll.scrollMore(0, { delay: 100 })} className="MenuChilds">
                        <Link href={single.Slug}><a> <span >{single.Title}</span></a></Link>
                            <div className="line"></div>
                        </div>}
                        {single.Page && <div onClick={() => animateScroll.scrollMore(737, { delay: 100 })} className="MenuChilds">
                        <Link href={'/p/' + single.Page.Slug}><a> <span >{single.Title}</span></a></Link>
                            <div className="line"></div>
                        </div>}
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
    height: 80px;
    color:white;
    .checkBtn{
        display:none;
    }
    .menuPar{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        .LogoPar{
            img{
                width:100px;
                height: 100%;
            }
        }
        .MainMenu{
            margin-right:70px;
            width: 40%;
            display:flex;
            justify-content: space-between;
            .MenuChilds{
                &:hover{
                    .line{
                        transform:scale(1);
                    }
                }
                span{
                    cursor:pointer;
                    font-weight:400;
                    transition: all 0.25s ease-in; 
                }
                .line{
                        height:2px;
                        width: 100%;
                        background-color: #2d1dff;
                        transform:scale(0);
                        transition:all 0.3s ease-in;
                }
            }
            
        }
        @media only screen and (max-width: 1000px){
            .MainMenu{
                margin-right:10px;
                width:50%;
            }
        }
        @media only screen and (max-width: 768px){
            .MainMenu{
                display:flex;
                flex-direction: column;
                align-items:center;
                position:fixed;
                right:0;
                top:80px;
                height:60vh;
            }
            .checkBtn{
                display:block;
            }
        }
    }
`

// const Container = styled.div`
//     padding-left:10vw;
//     padding-right:10vw;
//     height:50px;
//     background: ${({ theme }) => theme.colorOne};
// `