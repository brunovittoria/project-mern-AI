import React from 'react'
import {Link} from 'react-router-dom'

type Props = {
    to: string,
    bg: string,
    text: string,
    textColor: string,
    onClick?: () => Promise<void>//A interrogação (?) indica que essa propriedade é opcional. // Ele indica que, se a propriedade onClick for fornecida, ela deve ser uma função que retorna uma promessa (Promise) que eventualmente resolve para void (vazio). Ou seja, a função não retorna nenhum valor específico (é do tipo void), mas ela pode retornar uma promessa indicando que alguma operação assíncrona está ocorrendo.
}

//Este é um componente customizavel do nosso NavigationLink
const NavigationLink = (props:Props) => {
    return (
        <Link 
            className="nav-link"
            to={props.to} 
            style={{background:props.bg, color: props.textColor}}
        >
            {props.text}
        </Link>
    )
}

export default NavigationLink
