import React, {useState} from 'react';
import {HamburguerContent, ShowHamburgerMenu } from './styles';
import { Divide as Hamburger} from 'hamburger-react';
import MenuCalendar from "../Calendar";

const HamburguerMenu = () => {
    const [showMenuCalendar, setShowMenuCalendar] = useState(false);

    return (
        <HamburguerContent>
            <ShowHamburgerMenu>
            <Hamburger size={20} distance="sm"
                       onToggle={toggled => {
                           setShowMenuCalendar(toggled);
                       }}
            />
            {showMenuCalendar && <MenuCalendar/>}
            </ShowHamburgerMenu>
        </HamburguerContent>
    );
};

export default HamburguerMenu;
