import { TRAER_TODOS } from '../types/jobsTypes';

const INITIAL_STATE = {
	jobs: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODOS:
			return { ...state, jobs: action.payload };

		default: return state;
	};
};