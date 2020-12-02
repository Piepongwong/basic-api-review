import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Students from "./pages/Students";
import RandomStudent from "./pages/RandomStudent";
import StudentDetail from "./pages/StudentDetail";

function App() {
  const [someState, setSomeState] = useState("lalala")
  return (
    <Switch>
      <Route exact path="/" component={Students} />
      <Route path="/random" component={RandomStudent} />
      <Route path="/student/:somethingelse" component={StudentDetail} />

      {/* <Route path="/" render={(props) => <Students something={someState} {...props} />} /> */}
    </Switch>
  );
}

export default App;
