import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/Store";
import AdminLayout from "./components/admin/AdminLayout";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <AdminLayout />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
