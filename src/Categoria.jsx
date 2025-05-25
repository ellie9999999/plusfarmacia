import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Categoria.css';

function Categoria() {
  const { nombre } = useParams();

  const productos = [
    {
      id: 1,
      titulo: "Ibuprofeno 400mg",
      img: "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/162109/1853.png?v=638663449345370000",
    },
    {
      id: 2,
      titulo: "Paracetamol MK",
      img: "https://www.plmconnection.com/plmservices/PharmaSearchEngine/Mexico/DEF/SIDEF/400x400/sanfer_algitrin_tabs_caja12.png",
    },
    {
      id: 3,
      titulo: "Gel Frío Unipatch",
      img: "https://www.unipatch.com.mx/wp-content/uploads/2022/05/UNIPATCH-PRODUCTO-NI%C3%91A-8H.png",
    },
    {
      id: 4,
      titulo: "Acetaminofén + Codeína",
      img: "https://www.ceamed.com/wp-content/uploads/2023/05/acetaminofen-codeina-ceamed-500-30mg.png",
    },
    {
      id: 5,
      titulo: "Naproxeno Sódico",
      img: "https://grupodimec.com/media/catalog/product/cache/d5e5ee8e152ea279e0f47cda1bbef05a/i/m/img_4204.png",
    },
    {
      id: 6,
      titulo: "Pastillas Efervescentes",
      img: "https://img.freepik.com/foto-gratis/pastillas-blancas-envase-aislado_125540-1826.jpg",
    },
  ];

  return (
    <div className="categoria-page">
      {/* Pastillas flotantes decorativas */}
      <div className="pill pill1"></div>
      <div className="pill pill2"></div>
      <div className="pill pill3"></div>

      {/* Banner superior */}
      <div className="banner-categoria">
        <div className="banner-texto">
          <h3>El alivio para <strong>bajar la fiebre</strong> y verlos BIEN</h3>
          <button className="btn-banner">AQUÍ</button>
        </div>
        <img
          className="banner-img"
          src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-9cc4-622f-a98e-18c8dfc45ecb/raw?se=2025-05-25T20%3A17%3A01Z&sp=r&sv=2024-08-04&sr=b&scid=c6d98b0f-9baa-5dcc-adc0-8e25fcf25c75&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-25T19%3A07%3A12Z&ske=2025-05-26T19%3A07%3A12Z&sks=b&skv=2024-08-04&sig=5XXkRdCWoB9ZqAzQ%2BhjlGDj1f2zEfFL17vCiq%2BkTgEs%3D"
          alt="Unipatch producto"
        />
      </div>

      {/* Botón para regresar al home */}
      <div className="volver-container">
        <Link to="/" className="btn-volver">← Volver al inicio</Link>
      </div>

      {/* Título de la categoría */}
      <h2 className="titulo-categoria">Resultado por categoría <span>{nombre.replace("-", " ")}</span></h2>

      {/* Filtros */}
      <div className="filtros-categoria">
        <button className="btn-filtro">Filtros (0)</button>
        <select className="select-orden">
          <option>Orden: A-Z</option>
          <option>Precio: menor a mayor</option>
        </select>
      </div>

      {/* Productos */}
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img src={producto.img} alt={producto.titulo} />
            <h4>{producto.titulo}</h4>
            <p>Ideal para aliviar síntomas de dolor o fiebre.</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categoria;
