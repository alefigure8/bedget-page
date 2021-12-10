import { useState } from 'react'
import closeBtn from '../img/cerrar.svg'
import Message from './Message'
import { generateId } from '../helpers/index'

function Modal({setModal, animatedModal, setAnimatedModal, addBudget}) {

    // states
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [msg, setMsg] = useState('')

    // onSubmit
    function handleSubmit(e){
        e.preventDefault()

        // validate blanck fields
        if([name, category].includes('')){
            setMsg('All fields are requiered!')
            setTimeout(() => {
                setMsg('')
            }, 3000);
            return
        }

        // validate negative amount
        if(amount < 0){
            setMsg('Please, put a valid amount')
            setTimeout(() => {
                setMsg('')
            }, 3000);
            return
        }

        // create object with items
        let obj = {
            id: generateId(),
            date: Date.now(),
            name,
            amount,
            category
        }

        // take object in App
        addBudget(obj)

        // return fields in blanck
        cleanForm()

        // close modal
        handleClose ()
    }

    // clean form in blanck inputs
    function cleanForm(){
        setName('')
        setAmount(0)
        setCategory('')
    }

    // clase button
    function handleClose () {
        setAnimatedModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }
    
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                src={closeBtn}
                alt='Cerrar modal'
                onClick={handleClose}
                />
            </div>
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animatedModal ? "animar" : "cerrar"}`}
            >
                <legend> New Spent </legend>

                {msg && <Message tipo="error">{msg}</Message>}

                <div className='campo'>
                    <label htmlFor="name">Spent</label>
                    <input 
                        type="text" 
                        id='name' 
                        placeholder='Describe spent' 
                        value={name}
                        onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="number" 
                        id='amount' 
                        placeholder='Describe amounts' 
                        value={amount}
                        onChange={e=>setAmount(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="category">Category</label>
                    <select 
                        id="category"
                        value={category}
                        onChange={e=>setCategory(e.target.value)}
                    >
                        <option value="">--Select--</option>
                        <option value="safe">Safe</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="various">Various</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
                <input type="submit" value="Add Spend"/>
            </form>
        </div>
    )
}

export default Modal
