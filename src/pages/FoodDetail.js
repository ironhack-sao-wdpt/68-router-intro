import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import foods from "../data.json";

function FoodDetail() {
  const [state, setState] = useState({
    id: 0,
    name: "",
    price: 0,
    available: false,
    img: "",
    description: "",
  });
  const params = useParams();

  useEffect(() => {
    const [foundFoodObj] = foods.filter(
      (currentFoodObj) => currentFoodObj.id === Number(params.id)
    );

    console.log(foundFoodObj);

    if (foundFoodObj) {
      setState({ ...foundFoodObj });
    }
  }, []);

  console.log(params);

  return (
    <div>
      <img src={state.img} alt={state.name} />
      <p>
        <strong>Nome: </strong>
        {state.name}
      </p>
      <p>
        <strong>Preço: </strong>
        {state.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p>
        <strong>Disponível? </strong>
        {state.available ? "Sim" : "Não"}
      </p>
      <p>
        <strong>Descrição: </strong>
        {state.description}
      </p>
    </div>
  );
}

export default FoodDetail;
