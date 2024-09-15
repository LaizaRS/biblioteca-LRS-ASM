import './CardLivros.css';

const CardLivros = ({ generoSelecionado, autorSelecionado, livros }) => {
    const livrosFiltrados = livros.filter(livro => {
        return (
            (generoSelecionado === "" || livro.genero.nome === generoSelecionado) &&
            (autorSelecionado === "" || livro.autor.nome === autorSelecionado)
        );
    });

    return (
        <div className="estante-de-livros">

            {livrosFiltrados.map((livro) => (
                <div key={livro.id} className='card-livros'>
                    <h3 className='genero' style={{ color: livro.genero.font_color }}>{livro.genero.nome}</h3>
                    <h4 className='descricao-espaco'>{livro.autor.nome}</h4>
                    <img
                        className='img-card-livro'
                        src={livro.link_imagem}
                        alt={`Capa do livro ${livro.titulo}`}
                    />
                    <h3 className='descricao-espaco'>{livro.titulo}</h3>
                    <p className='descricao-espaco'>{livro.descricao}</p>
                </div>
            ))}
        </div>
    );
}

export default CardLivros;

