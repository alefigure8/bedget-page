import { useEffect, useState } from 'react'
import {formatCurrency} from '../helpers/index'

function ControlBudget({budget, newSpent}) {
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(()=>{
        calcSpent()
    }, [newSpent])

    function calcSpent () {
        const totalSpent = newSpent.reduce((preview, current) => preview + current.amount, 0)
        setAvailable(budget - totalSpent) 
        setSpent(totalSpent)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                <span>Budget:</span> {formatCurrency(budget)}
                </p>
                <p>
                <span>Available:</span> {formatCurrency(available)}
                </p>
                <p>
                <span>Spent:</span> {formatCurrency(spent)}
                </p>
            </div>
        </div>
    )
}

export default ControlBudget
