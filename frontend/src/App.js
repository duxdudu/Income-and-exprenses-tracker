import React, { useMemo } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";

import Orb from "./Components/Orb/Orb";

import Income from "./Components/Income/Income";

import Home from "./Components/home/home";
import Main from "./Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/main"
            element={<Main  />}
          />
          <Route path="/login" element={<Income />} />
          {/* <Route path="/login" element={<Expenses />} /> */}
        </Routes>
      </Router>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  /* main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  } */
`;

export default App;
