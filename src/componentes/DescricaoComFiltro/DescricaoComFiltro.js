import Select from "../Select/Select"
import "./DescricaoComFiltro.css"
import livro from "../../json/livros.json";

const DescriçaoComFiltro = () => {
    return (
        <div className="DescricaoComFiltro">
            <h3 className="cor-roxa">newsletter exclusiva</h3>
           <h1 className="margin-top-e-botton-32px"> Biblioteca LRS-ASM</h1>
           <p>Assine nossa newsletter e transforme seu espaço de trabalho em um oásis de produtividade!</p>

           <form>
                <Select 
                    livros={livro.autor_id}
                    
     
                />
               
               <Select 
                    livros={livro.genero_id}
                    
           
                />
               
              
           </form>

        </div>
    )
}

export default DescriçaoComFiltro