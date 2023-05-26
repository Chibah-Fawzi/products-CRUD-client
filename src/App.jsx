import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Routes from './components/Routes';


function App() {
  const [selectedProduct, setSelectedProduct] = useState({});
  // 2. Créer une function qui store l'objet du produit selectionné dans le state
  function ProductProps(e, product) {
    // e.preventDefault();
    setSelectedProduct(product)
  }


  return (

    <>
      <Navbar />
      <Routes selectedProduct={selectedProduct} ProductProps={ProductProps} />

    </>
  )
}

export default App
