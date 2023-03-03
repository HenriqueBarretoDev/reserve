import React, {useState} from "react";
import styled from "styled-components";
import {AiFillDatabase} from "react-icons/ai";
import iconHall from "../../Assets/Icons/iconHall.png";
import {HiBarsArrowDown} from "react-icons/hi2";
import {DropdownIcon, DropdownOptions, DropdownWrapper, Option} from "./styles";
import {FcApproval} from "react-icons/fc";

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const handleToggleDropdown = () => {
        setOpen(!open);
    };

    const handleOutsideClick = (e) => {
        if (!e.target.closest(".dropdown-wrapper")) {
            setOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleOutsideClick, false);
        return () => {
            document.removeEventListener("click", handleOutsideClick, false);
        };
    });

    return (
        <DropdownWrapper className="dropdown-wrapper">

            <DropdownIcon onClick={handleToggleDropdown}>
                <HiBarsArrowDown style={{minHeight: '40px', width: '40px'}}/>
            </DropdownIcon>
            <DropdownOptions open={open} style={{borderRadius:'10px'}}>
                <Option style={{padding:'10px'}}>Fale Conosco</Option>
                <Option style={{padding:'10px'}}>Agendar Maquiagem</Option>
                <Option style={{padding:'10px'}}>Admin</Option>
            </DropdownOptions>
        </DropdownWrapper>
    );
};

export default Dropdown;
