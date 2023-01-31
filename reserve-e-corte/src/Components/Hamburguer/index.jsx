import React, { useState } from 'react';
import { HamburguerContent } from './styles';
import { Divide, Divide as Hamburger } from 'hamburger-react';

const HamburguerMenu = () => {

  return (
    <HamburguerContent>
      <Hamburger
        onToggle={toggled => {
          if (toggled) {
            console.log('menu aberto');
          } else {
            console.log('menu fechado');
          }
        }}
      />
    </HamburguerContent>
  );
};

export default HamburguerMenu;
