import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    margin-top: 30px;
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
   
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 15px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
   
`
const Image = styled.img`
    width: 40%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>NARAZ</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Sint nemo accusantium quia. Facere quam blanditiis
                    deserunt accusantium, non consequuntur reprehenderit dolorem.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='3B5999'><Facebook/></SocialIcon>
                    <SocialIcon color='E4405F'><Instagram/></SocialIcon>
                    <SocialIcon color='55ACEE'><Twitter/></SocialIcon>
                    <SocialIcon color='E60023'><Pinterest/></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Usefull Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms and condition</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                 <Room style={{marginRight: "10px"}}/>   22/3 Park street, South Holfenhime 4983
                </ContactItem>
                <ContactItem>
                  <Phone style={{marginRight: "10px"}}/>  +880 1792142026
                </ContactItem>
                <ContactItem>
                   <MailOutline style={{marginRight: "10px"}}/> fardinshaah@gmail.com
                </ContactItem>
                <Image src="https://i.ibb.co/z7sknG2/payment-option.jpg"/>
            </Right>
        </Container>
    );
};

export default Footer;