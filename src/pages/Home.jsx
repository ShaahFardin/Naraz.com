import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`


const Home = () => {
    return (
        <Container >
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input />
                        <FontAwesomeIcon style={{fontSize:16, color: 'gray'}} icon={faSearch} />
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

export default Home;