import './Select.css'



const Select = ({ options, selecione, aoAlterado}) => {
    return (
        <select onChange={evento => aoAlterado(evento.target.value)}>
            <option value="">{selecione}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default Select