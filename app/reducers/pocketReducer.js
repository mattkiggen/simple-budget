const pocketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.pocket.id,
          name: action.pocket.name,
          currentAmount: action.pocket.balance,
          totalAmount: action.pocket.limit,
          color: '#222',
        },
      ];
  }
};

export default pocketReducer;
