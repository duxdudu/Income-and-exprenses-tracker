import React from "react";
import styled, { css, keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import DOLLAR from "../../img/DOLLAR.webp";

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
    navigate("/main");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleSignUPClick = () => {
    navigate("/signup");
  };

  const svgProps = useSpring({
    loop: true,
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(100%)" },
    config: { duration: 2000 },
  });

  return (
    <HomeContainer>
      <Navbar>
        <Logo>Expense&Income Tracker</Logo>
        <NavLinks>
          <DashboardButton onClick={handleDashboardClick}>
            Try for Free
          </DashboardButton>
          <LoginButton onClick={handleLoginClick}>Login</LoginButton>
          <LoginButton onClick={handleSignUPClick}>SignUP</LoginButton>

        </NavLinks>
      </Navbar>

      <Content>
        <Title>Welcome to Earn</Title>
        <div className="container">
          <div className="discription">
            <h1>Expense and Income </h1>
            <h2>To schedule duties </h2>
            <p>
              "Track your finances like never before
              <br /> with our easy-to-use expense tracker. Setsavings goals and
              <br />
              stay on top of your budget."
            </p>
            <div className="buttons">
              <Button className="buttonGet" >Documention</Button>
              <Button className="buttonGet" onClick={handleDashboardClick}>Get Started</Button>
            </div>
          </div>
          <div className="imageD">
            <img src={DOLLAR} alt="dollars" className="imageDallar" />
          </div>
        </div>

        <CardsContainer>
          <Card>
            <h2>Encourage Users</h2>
            <p>
              "Stay organized and in control of your finances with our
              user-friendly expense tracker. Make better financial decisions
              today."
            </p>
          </Card>
          <Card>
            <h2>Make It Easy</h2>
            <p>
              "Easily visualize your expenses and income with our intuitive
              dashboard. See where your money is going and make smarter
              financial decisions."
            </p>
          </Card>
          <Card>
            <h2>Stay Updated</h2>
            <p>
              "Stay ahead of your finances with our expense tracker. Monitor
              your expenses and income, and make informed decisions about your
              financial future."
            </p>
          </Card>
        </CardsContainer>
        <Footer>
          <p>© 2024 Expense Tracker. All rights reserved.</p>
        </Footer>
      </Content>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #f0f0f0;
  animation: ${fadeIn} 1s ease-in;
  overflow-y: auto;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 97%;
  padding: 10px 20px;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  color: white;
  margin: 20px 20px;
  border-radius: 20px;
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
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  .discription {
    margin-top: 50px;

    .buttons{
      margin-top: 40px;
      .buttonGet{
        border: 2px solid blue;
        font-weight: 600;
        &:hover {
          background-color: blue;
          color: white;
        }
      }
    }
  }
  .container {
    display: flex;
    /* background: blue ;
    color: white; */
    background: rgba(252, 246, 249, 0.78);
    padding-left: 20px;
    border-radius: 10px;
    border: 3px solid blue;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }
  .imageD {
    /* width: 50%; */
    .imageDallar {
      width: 400px;
      height: 400px;
      padding-top: 2px;
    }
  }
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
  background-color: #4caf50;
  color: white;
`;

const LoginButton = styled(Button)`
  background-color: #008cba;
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
  margin: 10px;
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
