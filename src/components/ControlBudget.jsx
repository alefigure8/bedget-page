import { useEffect, useState } from 'react'
import {formatCurrency} from '../helpers/index'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function ControlBudget({
        budget, 
        newSpent, 
        setNewSpent, 
        setBudget,
        setIsValid
    }) {
    const [porcent, setPorcent] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    useEffect(()=>{

        // calc available and spent
        const totalSpent = newSpent.reduce((preview, current) => preview + current.amount, 0)

        // calc porcent
        const newPorcent = (((budget - available) / budget) * 100).toFixed(1)

        setAvailable(budget - totalSpent) 
        setSpent(totalSpent)
        setTimeout(() => {
            setPorcent(newPorcent)
        }, 1000);
    }, [newSpent, available])

    // reset app
    function handleResetApp(){
        const result = confirm('Are you sure you want to reset your budget?')
        if(result){
            setNewSpent([])
            setBudget(0)
            setIsValid(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcent > 100 ? '#DC2626' : '#3B82FC',
                    trailColor: '#F5F5F5',
                    textSize: '25px',
                    textColor: porcent > 100 ? '#DC2626' : '#3B82FC'
                })}
                value={porcent}
                maxValue={100}
                text={`${porcent}%`}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Reset App
                </button>
                <p>
                <span>Budget:</span> {formatCurrency(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo' : undefined }`}>
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
