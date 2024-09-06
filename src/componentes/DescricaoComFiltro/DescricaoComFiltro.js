import "./DescricaoComFiltro.css"

const DescriçaoComFiltro = () => {
    return (
        <div className="DescricaoComFiltro">
            <h3 className="cor-roxa">newsletter exclusiva</h3>
           <h1 className="margin-top-e-botton-32px"> Biblioteca LRS-ASM</h1>
           <p>Assine nossa newsletter e transforme seu espaço de trabalho em um oásis de produtividade!</p>

           <form>
                <select id="genero" name="genero">
                <option value="genero">Escolha um gênero</option>
                <option value="ação">Ação</option>
                <option value="aventura">Aventura</option>
                <option value="terror">Terror</option>
                <option value="infantojuvenil">Infantojuvenil</option>
                       </select>
               
              
                <select id="autor" name="autor">
                <option value="autor">Escolha um autor</option>
                <option value="rick riordan">Rick Riordan</option>
                <option value="jk rowling">J.K Rowling</option>
                <option value="suzanne collins">Suzanne Collins</option>
                <option value="philip pullman">Philip Pullman</option>
                       </select>
           </form>

        </div>
    )
}

export default DescriçaoComFiltro