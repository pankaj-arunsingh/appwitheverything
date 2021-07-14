import getAll from "../services/notes";
const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_NOTES":
      return action.data;
    default:
      return state;
  }
};

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();
    dispatch({ type: "INIT_NOTES", data: notes });
  };
};
export default noteReducer;
