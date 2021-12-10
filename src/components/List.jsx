function List({newSpent}) {
    return (
        <div>
            <ul>{newSpent.map(spent => (
                <>
                    <li>{spent.name}</li>
                    <li>{spent.amount}</li>
                    <li>{spent.category}</li>
                </>
            ))}</ul>
        </div>
    )
}

export default List
