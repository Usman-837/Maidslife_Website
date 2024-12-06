const initialState = {
    cards: [
        { id: 1, isVisible: false, count: 0, price: 19 },
        { id: 2, isVisible: false, count: 0, price: 25 },
        { id: 3, isVisible: false, count: 0, price: 25 },
        { id: 4, isVisible: false, count: 0, price: 25 },
        { id: 5, isVisible: false, count: 0, price: 25 },
        { id: 6, isVisible: false, count: 0, price: 19 },
    ],
    totalCost: 0, // Initialize totalCost
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
                totalCost: state.totalCost + state.cards.find((card) => card.id === action.payload).price,
            };

        case 'DECREMENT_COUNT':
            const card = state.cards.find((card) => card.id === action.payload);
            const newCount = Math.max(0, card.count - 1);

            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload
                        ? { ...card, count: newCount, isVisible: newCount > 0 }
                        : card
                ),
                totalCost: state.totalCost - (newCount < card.count ? card.price : 0),
            };

        default:
            return state;
    }
};

export default popularAddonsReducer;
