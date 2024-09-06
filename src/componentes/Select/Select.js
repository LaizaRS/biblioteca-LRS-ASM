import './Select.css'



const Select = ({ options, selecione}) => {
    return (
        <select>
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