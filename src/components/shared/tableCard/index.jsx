import React from 'react'
import "./style.css"

export default function TableCard(props) {
    const {value}=props
    return (
        <div>
            <td>{value}</td>
        </div>
    )
    
}