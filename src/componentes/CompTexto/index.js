import './CampText.css'
const Campotext = (props) => {

const placeholderModificado = `${props.placeholder}...`

    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    } 

    return (
        <div className = 'campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificado} />
        </div>
    )
}

export default Campotext
