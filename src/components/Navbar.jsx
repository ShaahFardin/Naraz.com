import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    display: flex;
`
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
    ${mobile({fontSize:"12px", marginRight: "10px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:"center"})}
`
const Navbar = () => {
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input placeholder='search'/>
                        <FontAwesomeIcon style={{ fontSize: 16, color: 'gray' }} icon={faSearch} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>NARAZ.</Logo>
                </Center>
                <Right>
                    <MenuItems>Register</MenuItems>
                    <MenuItems>Sing in</MenuItems>
                    <MenuItems>
                        <Badge color="secondary" badgeContent={5} showZero>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;