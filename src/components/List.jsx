import Spent from './Spent'

function List({newSpent}) {
    return (
        <div className="listado-gastos contenedor">
            <h2>{newSpent.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {newSpent.map(spent => (
                <Spent
                key={spent.id} 
                spent={spent}
                />
            ))}
        </div>
    )
}

export default List
