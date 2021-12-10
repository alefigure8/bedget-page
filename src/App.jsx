import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import List from './components/List'
import NewSpent from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0)
  const [isValid, setIsValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animatedModal, setAnimatedModal] = useState(false)
  const [newSpent, setNewSpent] = useState([])

  useEffect(()=>{console.log(newSpent)}, [newSpent]) //TODO Local Storage


  function handleNewSpent () {
    setModal(true)
    setTimeout(() => {
      setAnimatedModal(true)
    }, 500);
  }

  function addBudget (spent){
    setNewSpent([...newSpent, spent])
  }

  return (
    <div className={modal ? 'fijar' : undefined}>
      <Header 
      newSpent={newSpent}
      setBudget={setBudget}
      budget={budget}
      isValid={isValid}
      setIsValid={setIsValid}
      />
      {isValid && (
        <>
          <main>
            <List 
              newSpent={newSpent}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
            src={NewSpent}
            onClick={handleNewSpent}
            />
          </div>
        </>
      )}
  	
      {modal && <Modal
                setModal={setModal}
                animatedModal={animatedModal}
                setAnimatedModal={setAnimatedModal}
                addBudget={addBudget}
                />}

    </div>
    
  )
}

export default App
