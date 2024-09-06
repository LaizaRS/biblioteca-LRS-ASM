import './Select.css'

import livros from "../../json/livros.json";

const Select = () => {
    return (
        <select >
            <option />
            {livros.map(livro => <option key={livro.id}>{livro.titulo}</option>)}
        </select>
    )
}

export default Select