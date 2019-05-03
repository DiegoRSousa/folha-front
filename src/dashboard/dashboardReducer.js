const INITIAL_STATE = {summary: {quantidadeTrabalhadores: 0, totalSalario: 0}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}