import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSignInAlt, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
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
            <FaShoppingCart className="icon" /> Carrito
          </Link>
        </div>
      </nav>

      {/* Header */}
      <div className="header">
        <h2>Bienvenido a FarmaPlus 💊</h2>
        <p>Tu salud es nuestra prioridad</p>
        <input type="text" placeholder="Buscar productos..." className="search-bar" />
      </div>

      {/* Categorías */}
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

      {/* Ofertas */}
<div className="offers">
  <h3>Ofertas 🔥</h3>
  <div className="offer-grid">
    {[
      {
        id: 1,
        img: 'https://m.media-amazon.com/images/I/71631iu1YUL.jpg',
        titulo: 'Multivitaminas Naturales',
        desc: 'Vitaminas esenciales para tu sistema inmune.',
      },
      {
        id: 2,
        img: 'https://s1.elespanol.com/2023/12/13/mujer/belleza/816928598_238369668_1024x576.jpg',
        titulo: 'Crema Facial Hidratante',
        desc: 'Ideal para piel seca o con sensibilidad.',
      },
      {
        id: 3,
        img: 'https://png.pngtree.com/png-clipart/20250516/original/pngtree-detailed-medicine-bottle-with-label-and-several-colorful-pills-png-image_20995985.png',
        titulo: 'Medicamento Antigripal',
        desc: 'Alivio rápido contra la gripe y fiebre.',
      },
    ].map((producto) => (
      <div key={producto.id} className="offer-card">
        <img src={producto.img} alt={producto.titulo} />
        <h4>{producto.titulo}</h4>
        <p>{producto.desc}</p>
        <button>Agregar al carrito</button>
      </div>
    ))}
        </div>
      </div>

      {/* Footer */}
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
