import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./views/Home";
import styles from "./App.module.scss";

function App() {
  return (
    <Provider store={store}>
      <div className={styles["app-container"]}>
        <Sidebar />
        <div className={styles["main-container"]}>
          <Topbar />
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
