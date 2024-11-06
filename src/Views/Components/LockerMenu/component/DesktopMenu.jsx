import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import logo from "../../../../assets/desktop-menu.png";
import { DesktopMainMenu, MaterialUISwitch, MenuLink } from "../styles";
import { toggleTheme } from '../../../../Redux/switchTheme'
import { useDispatch, useSelector } from "react-redux";

const DesktopMenu = (props) => {
  const currentTheme = useSelector( (state) => state.LDTheme.value )
  const dispatch = useDispatch();
 
  return (
    <DesktopMainMenu maxWidth="xl">
      <MenuLink href="/" p="0px" className="logo">
        <img src={logo} width="200" height='auto' alt="Logo" />
      </MenuLink>
      <div>
        {props.menuList.map((value, i) => <MenuLink key={i} href={value.link} target={value.target} className={value.customClass}>{value.title}</MenuLink> )}
      </div>
    </DesktopMainMenu>
  );
};

export default DesktopMenu;
