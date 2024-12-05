import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import DataForm from "./components/Dataform";

import Analytics1 from "./components/Analytics1";
import Analytics2 from "./components/Analytics2";
import Analytics3 from "./components/Analytics3";
import Analytics4 from "./components/Analytics4";
import Analytics6 from "./components/Analytics6";
import Analytics5 from "./components/Analytics5";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen ">
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/analytics1" element={<Analytics1/>} />
            <Route path="/analytics2" element={<Analytics2/>} />
            <Route path="/analytics3" element={<Analytics3/>} />
            <Route path="/analytics4" element={<Analytics4/>} />
            <Route path="/analytics5" element={<Analytics5/>} />
            <Route path="/analytics6" element={<Analytics6/>} />
            <Route path="/dataform" element={<DataForm />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
