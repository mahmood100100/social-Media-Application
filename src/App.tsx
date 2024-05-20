import { RouterProvider } from "react-router-dom";
import { router } from "./layouts/Routes.jsx";
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right: '0'}}></div>
      <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
