import React, { useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import MyModal from "../components/MyModal/MyModal";
import axios from "axios";
import Loader from "react-loader-spinner";

const Posts = () => {
  const delay = 1000;
  const [loading, setLoading] = useState(true);


  const fetchPosts = async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(posts.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState(null);
  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
    increase:"increase" 
  });
  
  const onChange = (e) => {
    if (e.target.id == "userId") {
      setPost({ ...post, userId: e.target.value });
    } else if(e.target.id == "id") {
      setPost({ ...post, id: e.target.value });
    }
    else if(e.target.id == "title") {
      setPost({ ...post, title: e.target.value });
    }
    else{
      setPost({ ...post, body: e.target.value });
    }
    
  };

  console.log(post);

  const addPost = () => {
    const id = Math.random() * 1;
    setPost({ ...post, id: id });
    setPosts([...posts, post]);
    setPost({
      userId: "",
      id: "",
      title: "",
      body: ""
    });
  };

  const removePost = (id) => {
    const confirm = window.confirm("Реально удалить?")
    if (confirm == true) setPosts(posts.filter((post) => post.id !== id)) //для проверки на удаление
  };
  const clear = () => {
    setPost({ userId: "", id: "", title: "", body: "" });
  };
  console.log(post);
  const [showModal, setshowModal] = useState(false);

  return (
    <>
      <div className="App">
        <div className="containerPosts">

        <MyModal visible={showModal} setVisible={setshowModal}>
          {
            <>
              <div className="input-field col s6">
               
                <input
                  id="userId"
                  type="text"
                  className="validate"
                  value={post.userId}
                  placeholder="Enter userId"
                  onChange={onChange}
                />
              </div>
              <div className="input-field col s6">
               
                <input
                  id="id"
                  type="text"
                  className="validate"
                  value={post.id}
                  placeholder="Enter id"
                  onChange={onChange}
                />
              </div>
              <div className="input-field col s6">
           
            <input
                  id="title"
                  type="text"
                  className="validate"
                  value={post.title}
                  placeholder="Enter title"
                  onChange={onChange}
                />
            </div>
              <div className="input-field col s6">
                
                <input
                  id="body"
                  type="text"
                  value={post.body}
                  className="validate"
                  placeholder="Enter body"
                  onChange={onChange}
                />
                <a

                  className="waves-effect waves-light right btn m-1"
                  onClick={() => clear()}
                >
                  clear
                </a>
                <a
                  className="waves-effect waves-light btn m-1"
                  onClick={() => addPost()}
                >
                  Add
                </a>
              </div>
            </>
          }
        </MyModal>
        <div className="row m-1 button">
          <div className="col s4">
            <a
              className="waves-effect waves-light btn"
              onClick={() => setshowModal(true)}
            >
              Add user
            </a>
          
          </div>
        </div>
        {loading ? (
            <Loader
              className="loader-center"
              type="BeatLoader	"
              color="#ee6e73"
              height={100}
              width={100}
              timeout={delay} //3 secs
            />
          ) : (
            <PostsList search deletePost={removePost}>
              {posts}
            </PostsList>
          )}
        </div>
      </div>
    </>
  );
};
export default Posts;