import { TRAER_TODOS } from '../types/jobsTypes';
import data from '../../data/support.json';

const INITIAL_STATE = {
	jobs: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODOS:
			return { ...state, jobs: data };

		default: return state;
	};
};