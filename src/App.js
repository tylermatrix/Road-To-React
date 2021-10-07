import "./App.css";
import React from "react";

const List = ({ list }) =>
  list.map((item) => <Item key={item.objectID} item={item} />);
const Item = ({ item: { title, url, author, num_comments, points } }) => (
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
);

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search:</label>
    <input type="text" id="search" onChange={onSearch} value={search} />
  </div>
);
const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const searchedStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />

      <List list={searchedStories} />
    </div>
  );
};

export default App;
