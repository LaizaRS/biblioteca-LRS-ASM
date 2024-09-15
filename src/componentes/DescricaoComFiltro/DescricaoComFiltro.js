import livros from "../../json/livros.json";
import Select from "../Select/Select";
import "./DescricaoComFiltro.css";

const DescricaoComFiltro = ({ generoSelecionado, setGeneroSelecionado, autorSelecionado, setAutorSelecionado }) => {
    // 1. Extrai todos os gêneros e remove duplicados usando um Set para armazenar ids únicos
    const idsUnicosGenero = new Set();
    const idsUnicosAutor = new Set();
    const generosUnicos = [];
    const autoresUnicos = [];

    livros.forEach((livro) => {
        if (!idsUnicosGenero.has(livro.genero.id)) {
            idsUnicosGenero.add(livro.genero.id);
            generosUnicos.push(livro.genero);

        }

        if (!idsUnicosAutor.has(livro.autor.id)) {
            idsUnicosGenero.add(livro.autor.id);
            autoresUnicos.push(livro.autor);
        }
    });

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