import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import {  useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
// import { useNavigate } from 'react-router-dom';
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;
const svgAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/main');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const svgProps = useSpring({
    loop: true,
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(100%)' },
    config: { duration: 2000 },
  });


  return (
    <HomeContainer>
      <Navbar>
        <Logo>Expense Tracker</Logo>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinks>
      </Navbar>

      <Content>
        <Title>Welcome to Our App</Title>
        <DashboardButton onClick={handleDashboardClick}>Go to Dashboard</DashboardButton>
        <LoginButton onClick={handleLoginClick}>Login</LoginButton>

        <CardsContainer>
          <Card>
            <h2>Encourage Users</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Card>
          <Card>
            <h2>Make It Easy</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Card>
          <Card>
            <h2>Stay Updated</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Card>
        </CardsContainer>
      </Content>

      <Footer>
        <p>© 2022 Expense Tracker. All rights reserved.</p>
      </Footer>
      <BackgroundSVG style={svgProps}>
        <path d="M0 0h100v100H0V0z" fill="#F0F0F0" />
        <path d="M0 0h100v100H0V0z" fill="#333" />
      </BackgroundSVG>
    </HomeContainer>
  );
};

export default Home;

const BackgroundSVG = styled(animated.svg)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation: ${svgAnimation} 20s infinite linear;
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #f0f0f0;
  animation: ${fadeIn} 1s ease-in;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const DashboardButton = styled(Button)`
  background-color: #4CAF50;
  color: white;
`;

const LoginButton = styled(Button)`
  background-color: #008CBA;
  color: white;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 200px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 1s ease-in;

  h2 {
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }
`;