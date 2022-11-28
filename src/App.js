import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./views/Home";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Topbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
