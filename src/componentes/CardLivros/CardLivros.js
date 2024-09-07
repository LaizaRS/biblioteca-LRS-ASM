import './CardLivros.css';
import livros from "../../json/livros.json";


const CardLivros = () => {


    return (
        <div className="estante-de-livros">

            {livros.map((livro) => (
                <div key={livro.id} className='card-livros'>
                    <h3 className='genero'>{livro.genero.nome}</h3>
                    <h4>{livro.autor.nome}</h4>
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
