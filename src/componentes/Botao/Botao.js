import './Botao.css'

const Botao = ({descricao}) => {
    return (
        <button className='botao-mostrar-mais'>{descricao}</button>
    )
}

export default Botao