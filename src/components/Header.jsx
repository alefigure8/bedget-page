import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

function header({setBudget, budget, isValid, setIsValid}) {
    return (
        <header>
            <h1>Budget Control</h1>
            {
                isValid ?
                <ControlBudget 
                budget={budget}
                />
                :

                <NewBudget 
                  setBudget={setBudget}
                  budget={budget}
                  setIsValid={setIsValid}
                />
            }
        </header>
    )
}

export default header
