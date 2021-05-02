import React from 'react'
import {Button} from 'react-bootstrap'
import './style.css'

function MyButton({text, clsName, path, onClick}){
    return <Button href={path} className={clsName} onClick={onClick}>{text}</Button>
}

export default MyButton 