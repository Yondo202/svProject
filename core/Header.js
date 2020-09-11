import React from 'react';
import Link from 'next/link'
import Menu from '@/core/Menu'

class Header extends React.Component {
    state = {
        shown: false,
    }
    render() {
        return (
            <React.Fragment>
                <div id="Header">
                    <div className="flx left" style={{opacity:0}} >EMPTY</div>
                    <div className="flx center">
                        <Link href="/">
                            <a>
                                <img src="/img/logo.png" />
                            </a>
                        </Link>
                    </div>
                    <div className="flx right">
                        <Menu links={this.props.links}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default Header;