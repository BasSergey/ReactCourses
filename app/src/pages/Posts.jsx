import React, { useState, useEffect } from "react";
import MyModal from "../components/MyModal/MyModal";
import ModalDel from "../components/MyModal/ModalDel";
import ModalPost from "../components/MyModal/ModalPost";
import axios from "axios";
import Loader from "react-loader-spinner";

const Posts = (props) => {
  const delay = 1000;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [idDel, setId] = useState();
  const [filter, setFilter] = useState(posts);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [ShowModalPost, setShowModalPost] = useState(false);
  const [modalPost, setModalPost] = useState({
    title: "",
    body: "",
    id: "",
  });

  const getSearch = () => {
    if (filter) {
      return filter;
    }
    return posts;
  };
  const postsSearch = getSearch();

  const fetchPosts = async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(posts.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPosts();
  }, []);


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
    else if(e.target.id == "body"){
      setPost({ ...post, body: e.target.value });
    }
    else{
      setFilter(
        posts.filter((post) =>
          post.title.toLowerCase().includes(e.target.value.toLowerCase())+
          post.body.toLowerCase().includes(e.target.value.toLowerCase())
          
        )
      );
    }
    
  };



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

  const clear = () => {
    setPost({ userId: "", id: "", title: "", body: "" });
  };


  const showModalFunc = (id) => {
    setShowModalDelete(!showModalDelete);
    setId(id);
  };

  const deletePost = () => {
    setPosts(posts.filter((post) => post.id !== idDel));
    setShowModalDelete(!showModalDelete);
  };

  const showPostFunc = (id, body, title, userId) => {
    setModalPost({
      title: title,
      body: body,
      id: id,
      userId: userId
    });
    setShowModalPost(!ShowModalPost);
  };

  return (
    <>

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
      <div className="App">
        <div className="containerPosts">

        <ModalDel visible={showModalDelete} setVisible={setShowModalDelete}>
          <h6>
              Точно удалить?
          </h6>
          <a
            class="waves-effect waves-light btn-large right"
            onClick={() => deletePost()}
          >
            Yes
          </a>
          <a
            class="waves-effect waves-light btn-large left"
            onClick={() => setShowModalDelete(!showModalDelete)}
          >
            No
          </a>
        </ModalDel>





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


        <ModalPost visible={ShowModalPost} setVisible={setShowModalPost}>
        <div class="row">
            <div class="col s12 m6" >
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <h5 class="card-title">{modalPost.title}</h5>
                  <p>{modalPost.body}</p>
                </div>
                <div class="card-action">
                  <a href="#">{modalPost.userId}</a>
                  <a href="#">{modalPost.id}</a>
                  <i
                    className="material-icons"
                  >
                    delete
                  </i>
                </div>
              </div>
            </div>
          </div>
        </ModalPost>



        <div className="row m-1 button">
          <div className="col s4">
            <a
              className="waves-effect waves-light btn"
              onClick={() => setshowModal(true)}
            >
              Add post
            </a>
          </div>
        </div>


        <div className="row search">
          <div className="inpyut-field col s6">
            <textarea
              id="icon_prefix2"
              className="materialize-textarea"
              onChange={onChange}
              placeholder="Search by title"
            ></textarea>
          </div>
        </div>


        {postsSearch &&
            postsSearch.map((posts) => (
              <div class="row" >
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text" 
                onClick={() =>
                  showPostFunc(posts.id, posts.body, posts.title, posts.userId)
                } >
                    <h5 class="card-title">{posts.title}</h5>
                    <p>{posts.body}</p>
                  </div>
                  <div class="card-action">
                    <a href="#">{posts.userId}</a>
                    <a href="#">{posts.id}</a>
                    <i
                      className="material-icons"
                      onClick={() => showModalFunc(posts.id)}
                    >
                      delete
                    </i>
                  </div>
                </div>
              </div>
            </div>
            ))}
        </div>
      </div>
          )}
    </>
  );
};
export default Posts;