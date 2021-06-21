import { numberWithDots } from "../utils/general"

export const normalizeData = data => {
    const newData = data.map(card => {
        return {
            ...card,
            value: `$ ${numberWithDots(card.value)}`,
            balance: `$ ${numberWithDots(card.balance)}`
        }
    })
    return newData
}

export const desnormalized = card => {
  
        const prueba = {
            ...card,
        value: parseInt(card.value.replace(/\./g, '').replace(/\$/g, '')),
            balance: parseInt(card.balance.replace(/\./g, '').replace(/\$/g, ''))
    }
    return prueba;
}