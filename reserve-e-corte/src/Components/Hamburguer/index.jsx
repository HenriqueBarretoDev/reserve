import React, { useState } from 'react';
import { HamburguerContent } from './styles';
import { Divide, Divide as Hamburger } from 'hamburger-react';

const Hamburguer = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HamburguerContent>
      <Hamburger toggled={isOpen} toggle={setOpen}/>
      {/* <Hamburger size={20} /> */}
    </HamburguerContent>
  );
};
export default Hamburguer;
