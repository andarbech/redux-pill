import { Provider } from "react-redux";
import Cart from "./components/Cart/Cart";
import Contador from "./components/Contador";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux examples</h1>
        <Contador />
        <hr />
        <Cart/>
      </div>
    </Provider>
  );
}

export default App;
