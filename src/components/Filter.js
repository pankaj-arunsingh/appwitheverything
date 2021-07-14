import { changeFilter } from "../reducers/filterReducer";
import { useDispatch } from "react-redux";
const Filter = ({ label }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const filterValue = event.target.value;
    dispatch(changeFilter(filterValue));
  };
  return (
    <>
      <label htmlFor="filter">{label}</label>
      <input placeholder="enter characters to filter" onChange={handleChange} />
    </>
  );
};
export default Filter;
