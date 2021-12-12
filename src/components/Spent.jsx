import React from 'react'
import { 
    LeadingActions, 
    SwipeableList, 
    SwipeableListItem, 
    SwipeAction, 
    TrailingActions 
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatCurrency, formatDate } from '../helpers/index'
import iconSafe from '../img/icono_ahorro.svg'
import iconHouse from '../img/icono_casa.svg'
import iconFood from '../img/icono_comida.svg'
import iconSpent from '../img/icono_gastos.svg'
import iconLeisure from '../img/icono_ocio.svg'
import iconHealth from '../img/icono_salud.svg'
import iconSubscriptions from '../img/icono_suscripciones.svg'


function Spent({spent, setEditSpent, handleDelete}) {
    const {category, name, amount, id, date} = spent

    const iconDict = {
        safe: iconSafe,
        house: iconHouse,
        food: iconFood,
        various: iconSpent,
        leisure: iconLeisure,
        health: iconHealth,
        subscriptions: iconSubscriptions,
    }

    // edit
    function leadingActions(){
       return (
            <LeadingActions>
                <SwipeAction 
                onClick={() => setEditSpent(spent)}
                >
                    Edit
                </SwipeAction>
           </LeadingActions>
           )
    }

    // delete
    function trailingAction(){
        return (
            <TrailingActions>
                <SwipeAction
                destructive={true}
                onClick={() => handleDelete(id)}
                >
                     Delete
                </SwipeAction>
            </TrailingActions>
        )
    }

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingAction()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img 
                            src={iconDict[category]}
                        />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{category}</p>
                            <p className='nombre-gasto'>{name}</p>
                            <p className='fecha-gasto'>Added: {' '} <span>{formatDate(date)}</span></p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>{formatCurrency(amount)}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Spent
