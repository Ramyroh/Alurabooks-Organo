import './Formulario.css'
import Campotext from '../CompTexto/index'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import {useState} from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCasdastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className ='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campotext
                 value={nome} 
                 aoAlterado={valor => setNome(valor)}
                 obrigatorio={true} 
                 label='nome' 
                 placeholder='Digite seu nome' 
                 />

                <Campotext 
                value={cargo} 
                aoAlterado={valor => setCargo(valor)}
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite seu cargo' 
                />

                <Campotext 
                value={imagem}
                aoAlterado={valor => setImagem(valor)}
                label='Imagem' 
                placeholder='Informe o endereço da imagem' 
                />

                <ListaSuspensa 
                value={time}
                aoAlterado={valor => setTime(valor)}
                obrigatorio={true} 
                label='Time' 
                itens={props.times} 
                />

                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario