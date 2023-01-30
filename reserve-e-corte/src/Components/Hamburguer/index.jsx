import React, { useState } from 'react';
import { HamburguerContent } from './styles';
import { Divide, Divide as Hamburger } from 'hamburger-react';

const HamburguerIcon = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
  
      <Hamburger onToggle={toggled => {
        if (toggled) {
          console.log('menu aberto');
          
        } else {
          
          console.log('menu fechado');
        }
      }}
      label="Show menu"
      />
  
  );
};

export default HamburguerIcon;
