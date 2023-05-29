import {
	ADD_TODO,
	TOGGLE_TODO,
	REMOVE_TODO,
	SHOW_COMPLETED,
} from '../actions/types/todo';

const initialState = {
	allIds: [],
	byIds: {},
};

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO: {
			const { id, content } = action.payload;

			return {
				...state,

				allIds: [...state.allIds, id],

				byIds: {
					...state.byIds,

					[id]: {
						content,
						completed: false,
					},
				},
			};
		}

		case TOGGLE_TODO: {
			const { id } = action.payload;

			const targetTodo = state.byIds[id];

			return {
				...state,

				byIds: {
					...state.byIds,
					[id]: {
						...targetTodo,
						completed: !targetTodo.completed,
					},
				},
			};
		}

		// case REMOVE_TODO: {
		// 	const { id } = action.payload;

		// 	const newAllIds = state.allIds.filter((i) => {
		// 		return i !== id;
		// 	});
		// 	delete state.byIds[id];

		// 	return {
		// 		...state,

		// 		allIds: [...newAllIds],

		// 		byIds: {
		// 			...state.byIds,
		// 		},
		// 	};
		// }

    case REMOVE_TODO: {
      const { id } = action.payload;
      const { [id]: removedTodo, ...updatedByIds } = state.byIds;

      return {
        ...state,
        allIds: state.allIds.filter((todoId) => todoId !== id),
        byIds: updatedByIds,
      };
    }

		default:
			return state;
	}
}
