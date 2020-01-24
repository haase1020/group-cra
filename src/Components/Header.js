import React,{useState} from 'react';
import styled from 'styled-components'


const TitleStyle = styled.h2`
color: purple;
text-align: center;


`

const NavStyle = styled.nav`
background-color: lightblue;

`

const ParaStyle = styled.p`
color: purple;
padding: 3%;
`
const Header = prop =>{
    return(
        <NavStyle>
            <TitleStyle>Hello, {prop.name} its {prop.title}</TitleStyle>
            <ParaStyle> Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem 
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem 
                IpsumLorem IpsumLorem Ipsum
            </ParaStyle>
        </NavStyle>
    )
}
export default Header;

