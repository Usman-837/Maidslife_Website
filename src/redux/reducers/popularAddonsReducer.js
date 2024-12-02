// reducers/popularAddonsReducer.js
const initialState = {
    cards: [
        { id: 1, isVisible: false, count: 0 },
        { id: 2, isVisible: false, count: 0 },
        { id: 3, isVisible: false, count: 0 },
        { id: 4, isVisible: false, count: 0 },
        { id: 5, isVisible: false, count: 0 },
        { id: 6, isVisible: false, count: 0 },
    ],
};

const popularAddonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CARD':
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload
                        ? { ...card, isVisible: !card.isVisible }
                        : card
                ),
            };
        case 'INCREMENT_COUNT':
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload && card.count < 5 
                        ? { ...card, count: card.count + 1 }
                        : card
                ),
            };
            case 'DECREMENT_COUNT':
                return {
                    ...state,
                    cards: state.cards.map((card) =>
                        card.id === action.payload
                            ? { ...card, count: Math.max(0, card.count - 1), isVisible: card.count > 1 }
                            : card
                    ),
                };            
        default:
            return state;
    }
};

export default popularAddonsReducer;
