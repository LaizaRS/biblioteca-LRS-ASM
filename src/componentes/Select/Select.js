import './Select.css';

const Select = ({ options, selecione, aoAlterado }) => {

    return (
        <select onChange={evento => aoAlterado(evento.target.value)}>
            <option value="">{selecione}</option>
            {options.map((option) => (
                <option key={option.id} value={option.nome}>
                    {option.nome}
                </option>
            ))}
        </select>
    )
}

export default Select