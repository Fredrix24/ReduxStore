const defaultState = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 }
];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state.map(item =>
        item.id === action.payload
          ? { ...item, count: Math.min(item.count + 1, 25) }
          : item
      );
    }

    case 'DECREMENT': {
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter(item => item.count > 0);
    }

    case 'ADD_ITEM': {
      const newId = Date.now();
      const newItem = {
        id: newId,
        title: action.payload.title,
        count: 1
      };
      return [...state, newItem];
    }

    default:
      return state;
  }
};

export default cartReducer;