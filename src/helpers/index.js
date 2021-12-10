export function generateId(){
    const random = Math.random().toString(36).slice(2)
    const date = Date.now().toString(36)
    return random + date
}

export function formatCurrency (currency){
    return currency.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export function formatDate(date){
    const newDate = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return newDate.toDateString('en-US', options)
}