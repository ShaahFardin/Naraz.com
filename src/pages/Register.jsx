import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    flex: 1;

    padding: 60px 80px;
    margin: 10px 30px;
`
const ImageContainer = styled.div`
    flex: 2;
    ${mobile({display:"none"})}
    
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    
`
const Form = styled.form`
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${mobile({width:"100%"})}

`
const Input = styled.input`
    margin: 15px 0px;
    padding: 15px;
    border-radius: 5px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Agreement = styled.span`
    
`
const Button = styled.button`
    padding: 15px;
    background-color: #FF4F5A;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0px;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src="https://i.ibb.co/N6H9ywg/login-page-background-image.jpg" />
            </ImageContainer>
            <Wrapper>
                <Title>SIGN UP</Title>
                <Form>
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Agreement> I agree to the terms and condition</Agreement>
                    <Button>SIGN UP</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;