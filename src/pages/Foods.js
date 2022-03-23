import { Link } from "react-router-dom";

import foods from "../data.json";

function Foods() {
  return (
    <div>
      <h1>Escolha seu pedido</h1>

      <div className="row">
        {foods.map((currentFoodObj) => (
          <div className="col mt-3">
            <div className="card" style={{ width: "18rem" }}>
              <div
                className="card-img-top d-flex align-items-center"
                style={{
                  height: "214px",
                }}
              >
                <img
                  src={currentFoodObj.img}
                  alt={currentFoodObj.name}
                  className="img-fluid"
                  style={{ objectFit: "cover", maxHeight: "100%" }}
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  {currentFoodObj.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h5>
                <p className="card-text">{currentFoodObj.name}</p>

                <Link
                  className="btn btn-primary"
                  to={`/comidas/${currentFoodObj.id}`}
                >
                  Ver Mais
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foods;
