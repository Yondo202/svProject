import React, {useContext} from 'react';
import {MenuContext} from '@/miscs/ContextMenuProvider'

const Header = () => {

    const test = useContext(MenuContext);
    console.log(test,'inside')
    return (
        <div>
            header
        </div>
    );
};

export default Header;