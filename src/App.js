import { AppWrapper } from "./components/styles";
import Home from "./components/Home";
import InstructorProfile from "./components/InstructorProfile";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { Route , Switch,Redirect } from "react-router";

const App = ({ instructors }) => {
  const [currentPage, setCurrentPage] = useState("/");

  const homemadeRouter = () =><Switch>
  <Route path='/instructors/:instructorSlug' >
    <InstructorProfile
            instructors={instructors}
          />
  </Route>
  <Route path='/404' >
    <NotFound goTo={setCurrentPage} />
  </Route>
  
  <Route exact path='/' >
    <Home instructors={instructors} goTo={setCurrentPage} />
  </Route>
  <Route  path='/' >
    <Redirect to="/404" />
  </Route>
    
</Switch>

  return <AppWrapper>{homemadeRouter()}</AppWrapper>;
};

export default App;
