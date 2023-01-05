import { Divider, Input } from 'antd';

// Iteration 5
function Search({ query, setQuery }) {
  return (
    <>
      <label>Search</label>
      <Input
        value={query}
        type="text"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
    </>
  );
}

export default Search;
