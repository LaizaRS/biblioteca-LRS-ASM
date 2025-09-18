import { useState } from "react";
import livros from "../../json/livros.json";
import CardLivros from "../CardLivros/CardLivros";
import DescricaoComFiltro from "./DescricaoComFiltro/DescricaoComFiltro";

import ImagensTranparentes from "../ImagensTransparentes/ImagensTransparentes";
import NavBar from "../NavBar/NavBar";
import "./LayoutTelaPrincipal.css";

const LayoutTelaPrincipal = () => {
  const [generoSelecionado, setGeneroSelecionado] = useState("");
  const [autorSelecionado, setAutorSelecionado] = useState("");

  return (
    <div className="centralizando">
      <NavBar />
      <div className="position-relative">
        <div className="z-index">
          <DescricaoComFiltro
            generoSelecionado={generoSelecionado}
            setGeneroSelecionado={setGeneroSelecionado}
            autorSelecionado={autorSelecionado}
            setAutorSelecionado={setAutorSelecionado}
          />
        </div>
        <div className="position-absolute">
          <ImagensTranparentes />
        </div>
      </div>
      <div className="sobrepondo-a-segunda-coluna">
        <CardLivros
          generoSelecionado={generoSelecionado}
          autorSelecionado={autorSelecionado}
          livros={livros}
        />
      </div>
    </div>
  );
};

export default LayoutTelaPrincipal;
