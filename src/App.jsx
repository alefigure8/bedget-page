import { useState } from 'react'
import Header from './components/Header'
import NewSpent from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

function App() {

  const [budget, setBudget] = useState(0)
  const [isValid, setIsValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animatedModal, setAnimatedModal] = useState(false)

  function handleNewSpent () {
    setModal(true)
    setTimeout(() => {
      setAnimatedModal(true)
    }, 500);
  }

  return (
    <div>
      <Header 
      setBudget={setBudget}
      budget={budget}
      isValid={isValid}
      setIsValid={setIsValid}
      />
      {isValid && (
      <div className='nuevo-gasto'>
        <img 
        src={NewSpent}
        onClick={handleNewSpent}
        />
      </div>
      )}
  	
      {modal && <Modal
                setModal={setModal}
                animatedModal={animatedModal}
                setAnimatedModal={setAnimatedModal}
                />}

    </div>
    
  )
}

export default App
