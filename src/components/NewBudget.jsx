import {useState} from 'react'
import Message from './Message'

function NewBudget({setBudget, budget, setIsValid}) {

    const [msg, setMsg] = useState('')

    //validate
    function handleBudget(e){
        e.preventDefault()
        if (!budget || budget < 0) {
            setMsg('No es un presuspuesto válido')

            setTimeout(() => {
                setMsg('')
            }, 3000);

            return
        }

        setIsValid(true)

    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handleBudget} className="formulario">
                <div className="campo">
                    <label htmlFor="budget">Define your budget</label>
                       <input 
                        type="number" 
                        id="budget"
                        value={budget}
                        onChange={ e => setBudget(Number(e.target.value)) }
                        placeholder="Add your Budget"
                    />          
                </div>
                <input 
                type="submit" 
                value="Save" 
                />

            {msg && <Message tipo="error">{msg}</Message>}
            </form>
        </div>
    )
}

export default NewBudget
