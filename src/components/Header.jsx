import React from 'react'
import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

function header({
        setBudget, 
        budget, 
        isValid, 
        setIsValid, 
        newSpent, 
        setNewSpent
    }) {
    return (
        <header>
            <h1>Budget Control</h1>
            {
                isValid ?
                <ControlBudget 
                newSpent={newSpent}
                budget={budget}
                setNewSpent = {setNewSpent}
                setIsValid={setIsValid}
                setBudget={setBudget}
                />
                :

                <NewBudget 
                  setBudget={setBudget}
                  setBudget = {setBudget}
                  budget={budget}
                  setIsValid={setIsValid}
                />
            }
        </header>
    )
}

export default header
