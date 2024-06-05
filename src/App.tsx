import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./Layouts/Routes.tsx";
import { store } from './State/Store.ts'
import "@mantine/core/styles.css";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

    </div>
  );
}

export default App;
