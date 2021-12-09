import closeBtn from '../img/cerrar.svg'

function Modal({setModal, animatedModal, setAnimatedModal}) {

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
            <form className={`formulario ${animatedModal ? "animar" : "cerrar"}`}>
                <legend> New Spent </legend>
                <div className='campo'>
                    <label htmlFor="name">Spent</label>
                    <input type="text" id='name' placeholder='add spent' />

                </div>
            </form>
        </div>
    )
}

export default Modal
