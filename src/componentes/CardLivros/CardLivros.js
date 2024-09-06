import './CardLivros.css'

const CardLivros = () => {
    return (
        <div className='card-livros'>
            <h3 className='genero'>Genero</h3>
            <h4>autor</h4>
            <img 
            className='img-card-livro'
            src='../../../imagem-livros-3.jpg'
            alt='livro'
            />
            <p>descrição</p>

        </div>
    )
}

export default CardLivros