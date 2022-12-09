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
const Button = styled.button`
    padding: 15px;
    background-color: #007CFF;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0px;
    cursor: pointer;
    
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 10px;
    cursor: pointer;
    text-decoration: underline;
`
const Login = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src="https://i.ibb.co/pWHsk7p/20824342-6343845.jpg" />
            </ImageContainer>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Button>SIGN IN</Button>
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
