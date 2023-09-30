import Header from "./components/header/Header";
import Dashboard from "./components/main/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import './scss/app.scss';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
