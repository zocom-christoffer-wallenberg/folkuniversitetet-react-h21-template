//Actions - Bestämmer vad som ska uppdateras i vårt state
export const increment = (count) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}

export const decrement = (count) => {
    return {
        type: 'DECREMENT',
        payload: count
    }
}