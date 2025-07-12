function Panel() {
        return (
          <div>
            
          <div className="ContainerPanel">
          <button className="flechaizquierda">&lt;</button>
          <div className="Panel">
           <img src="https://plazavea.vteximg.com.br/arquivos/HP-BANNER-PRINCIPAL-FOOD-D-28-MAY-2025-A.webp?v=638839796599300000" alt="portada"/>
          </div>
          <button className="flechaderecha">&gt;</button>
          </div>

          <div className="ContainerPuntos">
            <span class="Punto usado"></span>
            <span class="Punto"></span>
            <span class="Punto"></span>
          </div>     
        </div>
        );
}

export default Panel