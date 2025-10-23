import Navbar from "./components/Navbar"
import Catlog from "./components/Catlog"
import Carrito from "./components/carrito"
import Fusion from "./components/FusionCarroCat"
import { BrowserRouter } from "react-router"
import ProductosProvider from "./context/productos"

function App() {

  return (
    <>
      <BrowserRouter>
        <ProductosProvider>
          <Navbar></Navbar>
          <Fusion></Fusion>
        </ProductosProvider>
      </BrowserRouter>
    </>
  )
}

export default App
