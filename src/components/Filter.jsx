import {useEffect, useState} from 'react'

function Filter({filter, setFilter}) {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label>Filter Spents</label>
                    <select 
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="safe">Safe</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="various">Various</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filter
