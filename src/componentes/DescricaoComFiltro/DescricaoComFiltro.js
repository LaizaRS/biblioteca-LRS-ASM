import Select from "../Select/Select"
import "./DescricaoComFiltro.css"
import livros from "../../json/livros.json";

const DescricaoComFiltro = ({generoSelecionado, setGeneroSelecionado, autorSelecionado, setAutorSelecionado }) => {
    const generosUnicos = [...new Set(livros.map((livro) => livro.genero.nome))];
    const autoresUnicos = [...new Set(livros.map((livro) => livro.autor.nome))];

    return (
        <div className="DescricaoComFiltro">
            <h3 className="cor-roxa">newsletter exclusiva</h3>
            <h1 className="margin-top-e-botton-32px">Biblioteca LRS-ASM</h1>
            <p>Assine nossa newsletter e transforme seu espaço de trabalho em um oásis de produtividade!</p>

            <form>
                <Select 
                    valor={generoSelecionado}
                    selecione="Todos os Generos" 
                    options={generosUnicos} 
                    aoAlterado={valor => setGeneroSelecionado(valor)}
                />
                <Select 
                    valor={autorSelecionado}
                    selecione="Todos os Autores" 
                    options={autoresUnicos}  
                    aoAlterado={valor => setAutorSelecionado(valor)}
                />
            </form>

        </div>
    )
}

export default DescricaoComFiltro