import CardLivros from "../CardLivros/CardLivros"
import "./EstanteDeLivros.css"

const EstanteDeLivros = () => {
    return (
        <div className="estante-de-livros">
           <CardLivros />
           <CardLivros />
           <CardLivros />
           <CardLivros />
           <CardLivros />
           
        </div>
    )
}

export default EstanteDeLivros