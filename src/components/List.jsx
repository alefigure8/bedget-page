import Spent from './Spent'

function List({
    newSpent, 
    setEditSpent, 
    handleDelete, 
    filterSpent,
    filter
}) {
    return (
        <div className="listado-gastos contenedor">
           {
                filter ? (
                    <>
                        <h2>{filterSpent.length ? 'Gastos' : `No result for ${filter.slice(0, 1).toUpperCase() + filter.slice(1)}`}</h2>
                        {filterSpent.map(spent => (
                            <Spent
                            key={spent.id} 
                            spent={spent}
                            setEditSpent={setEditSpent}
                            handleDelete={handleDelete}
                            />
                        ))}
                    </>
                ) : (
                    <>
                        <h2>{newSpent.length ? 'Gastos' : 'Add a new spent to start'}</h2>
                        {newSpent.map(spent => (
                            <Spent
                            key={spent.id} 
                            spent={spent}
                            setEditSpent={setEditSpent}
                            handleDelete={handleDelete}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default List
