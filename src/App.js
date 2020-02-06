import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Crear listado de productos con State
  const [ productos, setProductos] = useState ([
    { id: 1, nombre: 'camisa react', precio: 50},
    { id: 2, nombre: 'camisa vue', precio: 40},
    { id: 3, nombre: 'camisa node', precio: 30},
    { id: 4, nombre: 'camisa angular', precio: 20},
  ]);

  // State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
        <Header
          titulo='Tienda virtual'
        />

        <h2>Listado de Productos</h2>

        {productos.map(producto =>(
          <Producto
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        ))}

        <Carrito 
          carrito={carrito}
          agregarProducto={agregarProducto}
        />

        <Footer
          fecha={fecha}          
        />
    </Fragment>
   
  );
}

export default App;
