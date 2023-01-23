export const SearchBar = ({onChangeHandler,checked}) => {
  console.log(checked)
  return (
    <div className="bar">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={onChangeHandler}
      />
      <div>
        <input type="checkbox" name="" id="" onChange = {checked} />
        <label> Ürün stokta ise göstersin</label>
      </div>
    </div>
  );
};
