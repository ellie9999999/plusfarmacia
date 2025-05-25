import React from 'react';
import { Link } from 'react-router-dom';
import './Sucursales.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock, FaArrowLeft } from 'react-icons/fa';

const sucursales = [
  {
    nombre: 'Sucursal Centro',
    direccion: 'Av. España #101, San Salvador',
    telefono: '2222-1234',
    whatsapp: '50371234567',
    horario: 'Lunes a Sábado de 8:00 AM a 6:00 PM',
    color: '#f8bbd0',
  },
  {
    nombre: 'Sucursal Santa Tecla',
    direccion: 'Boulevard Sur y 7a Calle Poniente',
    telefono: '2223-5678',
    whatsapp: '50371234568',
    horario: 'Lunes a Domingo de 9:00 AM a 5:00 PM',
    color: '#b2ebf2',
  },
  {
    nombre: 'Sucursal Soyapango',
    direccion: 'Calle Agua Caliente, frente a Multiplaza',
    telefono: '2224-7890',
    whatsapp: '50371234569',
    horario: 'Lunes a Viernes de 8:30 AM a 5:30 PM',
    color: '#e1bee7',
  },
];

function Sucursales() {
  return (
    <div className="sucursales-container">
      <div className="sucursal-header">
        <h2>🏥 Nuestras Sucursales</h2>
        <Link to="/" className="volver-btn">
          <FaArrowLeft /> Volver al inicio
        </Link>
      </div>

      {/* Mapa ficticio */}
      <div className="map-container">
        <iframe
          title="Mapa Sucursales"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8743208752744!2d-89.21819128474198!3d13.69963240213257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330c54e8de90d%3A0xfcdcae36e3700bcb!2sPlaza%20Mundo!5e0!3m2!1ses!2ssv!4v1680100000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Lista de sucursales */}
      <div className="sucursal-grid">
        {sucursales.map((suc, index) => (
          <div key={index} className="sucursal-card" style={{ backgroundColor: suc.color }}>
            <h3>{suc.nombre}</h3>
            <p><FaMapMarkerAlt /> {suc.direccion}</p>
            <p><FaPhoneAlt /> {suc.telefono}</p>
            <p><FaWhatsapp /> <a href={`https://wa.me/${suc.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
            <p><FaClock /> {suc.horario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sucursales;
