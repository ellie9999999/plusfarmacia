import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, LogIn } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1>💊 FarmaPlus</h1>
        <div className="nav-buttons">
          <Link to="/login"> <LogIn size={18} /> Iniciar sesión </Link>
          <Link to="/cart"> <ShoppingCart size={18} /> Carrito </Link>
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
          {['Dolor', 'Vitaminas', 'Infantil', 'Belleza'].map((cat, idx) => (
            <div key={idx} className="category-card">
              <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt={cat} />
              <p>{cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ofertas */}
      <div className="offers">
        <h3>Ofertas 🔥</h3>
        <div className="offer-grid">
          {[1, 2, 3].map((id) => (
            <div key={id} className="offer-card">
              <img src={`https://source.unsplash.com/300x200/?medicine,${id}`} alt="Oferta" />
              <h4>Producto #{id}</h4>
              <p>Descripción breve del producto en promoción.</p>
              <button>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
