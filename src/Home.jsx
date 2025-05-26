import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaFacebookF, FaInstagram, FaWhatsapp, FaTrash, FaPlus } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [carrito, setCarrito] = useState([]);
  const [mensajeAgregado, setMensajeAgregado] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    setMensajeAgregado(true);
    setTimeout(() => setMensajeAgregado(false), 2000);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const productos = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/71631iu1YUL.jpg',
      titulo: 'Multivitaminas Naturales',
      precio: 9.99,
      desc: 'Vitaminas esenciales para tu sistema inmune.',
    },
    {
      id: 2,
      img: 'https://s1.elespanol.com/2023/12/13/mujer/belleza/816928598_238369668_1024x576.jpg',
      titulo: 'Crema Facial Hidratante',
      precio: 5.50,
      desc: 'Ideal para piel seca o con sensibilidad.',
    },
    {
      id: 3,
      img: 'https://png.pngtree.com/png-clipart/20250516/original/pngtree-detailed-medicine-bottle-with-label-and-several-colorful-pills-png-image_20995985.png',
      titulo: 'Medicamento Antigripal',
      precio: 4.75,
      desc: 'Alivio rápido contra la gripe y fiebre.',
    },
  ];

  return (
    <div className="home-container">
      {mensajeAgregado && (
        <div className="mensaje-popup gold-text">
          ¡Producto agregado al carrito!
        </div>
      )}

      <nav className="navbar">
        <h1 className="logo">
          <span className="logo-left">farma</span><span className="logo-right">Plus+</span>
        </h1>
        <div className="nav-buttons">
          <Link to="/sucursales" className="nav-btn btn-sucursales">
            🏥 Sucursales
          </Link>
          <Link to="/login" className="nav-btn">
            <FaSignInAlt className="icon" /> Iniciar sesión
          </Link>
          <Link to="/cart" className="nav-btn">
            <FaShoppingCart className="icon" /> Carrito ({carrito.reduce((acc, item) => acc + item.cantidad, 0)})
          </Link>
        </div>
      </nav>

      <div className="header">
        <h2>Bienvenido a FarmaPlus 💊</h2>
        <p>Tu salud es nuestra prioridad</p>
        <input type="text" placeholder="Buscar productos..." className="search-bar" />
      </div>

      <div className="categories">
        <h3>Categorías</h3>
        <div className="category-grid">
          {[
            { nombre: 'Dolor', img: 'https://www.hospitallapaloma.com/wp-content/uploads/2019/04/dolor-de-cabeza-633x422.jpg' },
            { nombre: 'Infantil', img: 'https://static.guiainfantil.com/uploads/salud/medicaG.jpg' },
            { nombre: 'Belleza', img: 'https://www.hogarmania.com/archivos/202004/que-son-los-boosters-y-por-que-incluirlos-en-tu-rutina-de-belleza-668x400x80xX-1.jpg' },
            { nombre: 'Vitaminas', img: 'https://cdn.farmacenter.com.py/448/675567.jpg' },
          ].map((cat, idx) => (
            <Link to={`/categoria/${cat.nombre.toLowerCase()}`} key={idx} className="category-card-modern">
              <div className="category-img-wrapper">
                <img src={cat.img} alt={cat.nombre} />
              </div>
              <p>{cat.nombre}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="offers">
        <h3>Ofertas 🔥</h3>
        <div className="offer-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="offer-card">
              <img src={producto.img} alt={producto.titulo} />
              <h4>{producto.titulo}</h4>
              <p>{producto.desc}</p>
              <p><strong>${producto.precio.toFixed(2)}</strong></p>
              <button className="btn-agregar-icon" onClick={() => agregarAlCarrito(producto)}>
                <FaShoppingCart /> Agregar
              </button>
            </div>
          ))}
        </div>
      </div>

      {carrito.length > 0 && (
        <div className="cart-summary lateral-cart fancy-cart">
          <div className="pill pill-cart1"></div>
          <div className="pill pill-cart2"></div>
          <div className="pill pill-cart3"></div>
          <h4>🛒 Productos en tu carrito</h4>
          <ul>
            {carrito.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.titulo} className="cart-img" />
                <div className="cart-info">
                  <span>{item.titulo}</span>
                  <span>${item.precio.toFixed(2)} x {item.cantidad}</span>
                </div>
                <button className="btn-remove" onClick={() => eliminarDelCarrito(item.id)}><FaTrash /></button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: <strong>${total.toFixed(2)}</strong></p>
          {total >= 20 && (
            <div className="cart-bonus">🎉 ¡Felicidades! Tienes un 10% de descuento por compras mayores a $20.</div>
          )}
        </div>
      )}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Contacto</h4>
            <ul>
              <li><a href="https://wa.me/50312345678" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:info@farmaplus.com">Correo</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Enlaces de interés</h4>
            <ul>
              <li><Link to="/sucursales">Sucursales</Link></li>
              <li><Link to="/ofertas">Promociones</Link></li>
              <li><Link to="/productos">Productos</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/50312345678" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FarmaPlus - Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
