import { TRAER_TODOS } from "../types/jobsTypes";

export const traerTodos = (payload) => ({
    type: TRAER_TODOS,
    payload,
});