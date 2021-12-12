import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import List from './components/List'
import Filter from './components/Filter'
import NewSpent from './img/nuevo-gasto.svg'
import { generateId } from './helpers/index'

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )
  
  const [newSpent, setNewSpent] = useState(
    JSON.parse(localStorage.getItem('spents')) ?? []
  )

  const [isValid, setIsValid] = useState(false)
  const [modal, setModal] = useState(false)
  const [animatedModal, setAnimatedModal] = useState(false)
  const [editSpent, setEditSpent] = useState({})
  const [filter, setFilter] = useState('')
  const [filterSpent, setFilterSpent] = useState([])

  useEffect(()=>{
    if(filter) {
      // filter for category
      const filtering = newSpent.filter(spent => spent.category === filter)
      setFilterSpent(filtering)
    }
  }, [filter])

  // saving budget in localStorage
  useEffect(()=>{
    localStorage.setItem('budget', budget) ?? 0
  }, [budget])

  // validate budget page if there is saved budget in local storage
  useEffect(()=>{
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    setBudget(budgetLS)
    if(budgetLS > 0){
      setIsValid(true)
    }
  },[])

  // Saving spents in localStorage
  useEffect(()=>{
    localStorage.setItem('spents', JSON.stringify(newSpent))
  }, [newSpent])

  // modal 'mode on' when editSpent has changed
  useEffect(()=> {
    if(Object.keys(editSpent).length > 0){
      setModal(true)
      setTimeout(() => {
        setAnimatedModal(true)
      }, 500);
    }
  }, [editSpent])

  // modal 'mode on'
  function handleNewSpent () {
    setEditSpent({})
    setModal(true)
    setTimeout(() => {
      setAnimatedModal(true)
    }, 500);
  }

  // delete spent
  function handleDelete(id){
    const deleteSpent = newSpent.filter(spent => spent.id !== id)
    setNewSpent(deleteSpent)
  }

  // save or update spents
  function addBudget (spent){
    if(editSpent.id){
      spent.id = editSpent.id
      spent.date = editSpent.date
      const editSpents = newSpent.map(spnt => spnt.id === spent.id ? spent : spnt)
      setNewSpent(editSpents)
    } else {
        spent.id = generateId()
        spent.date = Date.now()
        setNewSpent([...newSpent, spent])
    }
    setEditSpent({})
  }

  return (
    <div className={modal ? 'fijar' : undefined}>
      <Header 
      newSpent={newSpent}
      setNewSpent = {setNewSpent}
      setBudget={setBudget}
      budget={budget}
      isValid={isValid}
      setIsValid={setIsValid}
      />
      {isValid && (
        <>
          <main>
            <Filter 
              filter = {filter}
              setFilter = {setFilter}
            />
            <List 
              filterSpent = {filterSpent}
              filter = {filter}
              newSpent={newSpent}
              setEditSpent={setEditSpent}
              handleDelete={handleDelete}
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
                editSpent={editSpent}
                setEditSpent={setEditSpent}
                />}

    </div>
    
  )
}

export default App
