import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListaCategoriaApi from "../../../api/ListaCategoriaApi";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const [start, setStart] = useState(0);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  useEffect(() => {
    const cargar = async () => {
      const data = await ListaCategoriaApi.findAll();
      setCategorias(data);
    };
    cargar();
  }, []);

  const handlePrev = () => {
    setStart(prev => (prev - itemsPerPage < 0 ? 0 : prev - itemsPerPage));
  };

  const handleNext = () => {
    setStart(prev => (prev + itemsPerPage >= categorias.length ? prev : prev + itemsPerPage));
  };

  const visibles = categorias.slice(start, start + itemsPerPage);

  return (
    <section>
      <h5>Explora las categorías</h5>
      <div className="recomendadoscategoria">
        <button className="flechaizquierda2" onClick={handlePrev} disabled={start === 0}>
          &lt;
        </button>
        <div className="ContainerCategoria">
          {visibles.map((cat) => (
            <div
              key={cat.id}
              className="categorias"
              onClick={() => navigate(`/categorias/${cat.id}`)}
            >
              <img
                src={
                  cat.imagen
                    ? `http://localhost:3001/uploads/categorias/${cat.imagen}`
                    : "https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg"
                }
                alt={cat.nombre}
              />
              <p>{cat.nombre}</p>
            </div>
          ))}
        </div>
        <button
          className="flechaderecha2"
          onClick={handleNext}
          disabled={start + itemsPerPage >= categorias.length}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Categorias;
