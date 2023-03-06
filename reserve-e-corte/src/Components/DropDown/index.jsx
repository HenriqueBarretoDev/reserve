import React, {useState} from "react";
import {HiBarsArrowDown} from "react-icons/hi2";
import {DropdownIcon, DropdownOptions, DropdownWrapper, Option} from "./styles";
import {useNavigate} from "react-router";

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
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

    function goToAdmin() {
        navigate("/admin");
    }

    return (
        <DropdownWrapper className="dropdown-wrapper" onClick={handleToggleDropdown}>
            <DropdownIcon>
                <HiBarsArrowDown style={{width: '30px', height: '30px'}}/>
            </DropdownIcon>
            <DropdownOptions open={open} style={{borderRadius: '10px'}}>
                <Option style={{padding: '10px'}}>Fale Conosco</Option>
                <Option style={{padding: '10px'}}>Agendar Maquiagem</Option>
                <Option style={{padding: '10px'}}>Cadastrar Promoção</Option>
                <Option style={{padding: '10px'}} onClick={goToAdmin}>Admin</Option>
            </DropdownOptions>
        </DropdownWrapper>
    );
};

export default Dropdown;
