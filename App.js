import { Provider } from "react-redux";

import { Routes } from "./routes";
import { store } from "./src/redux/configStore";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
