import Select from "../Select/Select"
import "./DescricaoComFiltro.css"
import livros from "../../json/livros.json";

const DescriçaoComFiltro = () => {
    const generosUnicos = [...new Set(livros.map((livro) => livro.genero.nome))];
    const autoresUnicos = [...new Set(livros.map((livro) => livro.autor.nome))];

    return (
        <div className="DescricaoComFiltro">
            <h3 className="cor-roxa">newsletter exclusiva</h3>
           <h1 className="margin-top-e-botton-32px"> Biblioteca LRS-ASM</h1>
           <p>Assine nossa newsletter e transforme seu espaço de trabalho em um oásis de produtividade!</p>

           <form>
           <Select selecione="Selecione o Gênero" options={generosUnicos} />
           <Select selecione="Selecione o Autor" options={autoresUnicos}  />
              
           </form>

        </div>
    )
}

export default DescriçaoComFiltro