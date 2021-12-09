import React from 'react'

function ControlBudget({budget}) {

    function formatCurrency (currency){
        return currency.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
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
                <span>Available:</span> {formatCurrency(0)}
                </p>
                <p>
                <span>Spent:</span> {formatCurrency(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlBudget
