import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import "./styles.scss";
import Posts from "./components/Posts";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const fetchPost = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setLoading(false);
    setPosts(data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const paginate = (number) => setCurrentPage(number);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="App">
      <h2>My Blog</h2>
      <div>
        {" "}
        {indexOfFirstPost}-{indexOfLastPost} of {posts.length}
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {loading ? <div>Loading...</div> : <Posts posts={currentPost} />}
    </div>
  );
}
