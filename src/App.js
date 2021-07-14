import { useEffect } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { initializeNotes } from "./reducers/noteReducer";
import Cars from "./components/Cars";
import { Link, Switch, Route } from "react-router-dom";

const linkStyle = {
  padding: "20px",
};
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);

  return (
    <>
      <StyledContainer>
        <Link to="/cars" style={linkStyle}>
          Cars
        </Link>
        <Link to="/trucks" style={linkStyle}>
          Trucks
        </Link>
      </StyledContainer>
      <Switch>
        <Route path="/cars">
          <Cars />
        </Route>
        <Route path="/trucks">
          <div>In progress... will be built soon</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
