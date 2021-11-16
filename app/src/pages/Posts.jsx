import React, { useState, useEffect , useRef } from "react";   //useRef работает  на подобии навдения мышкой в f12. с current
import MyModal from "../components/MyModal/MyModal";
import ModalDel from "../components/MyModal/ModalDel";
import ModalPost from "../components/MyModal/ModalPost";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Loader from "react-loader-spinner";



//pagination 

const Posts = (props) => {
  const trigger = useRef(null)
  const observer = useRef(null)
  const [posts, setPosts] = useState([]);
  const [page, setPage]  = useState(1); //
  const limit = 10;
  const delay = 1000;
  const [loading, setLoading] = useState(true);
  const pageCount = 100/limit;
  const pageChange = (page)=>{
    // console.log(page);
    setPage(page.selected+1)

  }
  const [showModal, setshowModal] = useState(false);
  const [idDel, setId] = useState();
  const [filter, setFilter] = useState(posts);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [ShowModalPost, setShowModalPost] = useState(false);
  

  const fetchPosts = async () => {
    const postsFetched = await axios.get("https://jsonplaceholder.typicode.com/posts",{
      params:{
        _limit:limit, //количество постов на одной странице
        _page: page //номер страницы
       }
    });
    setPosts([...posts,...postsFetched.data]);
    setLoading(false);
  };

  
  useEffect(()=>{ 
    const callback = function(entries, observer) { 
       if(entries[0].isIntersecting){ 
        setPage(page+1) 
       } 
    }; 
    observer.current = new IntersectionObserver(callback); 
    observer.current.observe(trigger.current) 
  },[]); 
  console.log(trigger.current);


  useEffect(() => { 
    console.log("USE") 
  fetchPosts(); 
}, [page]); 





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
    // setPosts(posts.filter((post) => post.id !== idDel));
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


  // console.log(trigger);
  return (
    <>

 {/* {loading ? ( */}
   {/*
            <Loader
              className="loader-center"
              type="BeatLoader	"
              color="#ee6e73"
              height={100}
              width={100}
              timeout={delay} //3 secs
            />
          ) : ( */}
     
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
                  // onChange={onChange}
                />
              </div>
              <div className="input-field col s6">
               
                <input
                  id="id"
                  type="text"
                  className="validate"
                  value={post.id}
                  placeholder="Enter id"
                  // onChange={onChange}
                />
              </div>
              <div className="input-field col s6">
           
            <input
                  id="title"
                  type="text"
                  className="validate"
                  value={post.title}
                  placeholder="Enter title"
                  // onChange={onChange}
                />
            </div>
              <div className="input-field col s6">
                
                <input
                  id="body"
                  type="text"
                  value={post.body}
                  className="validate"
                  placeholder="Enter body"
                  // onChange={onChange}
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
              // onChange={onChange}
              placeholder="Search by title"
            ></textarea>
          </div>
        </div>


        {posts &&
            posts.map((post) => (   //было postsSearch
              <div class="row" >
              <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text" 
                onClick={() =>
                  showPostFunc(post.id, post.body, post.title, post.userId)
                } >
                    <h5 class="card-title">{post.title}</h5>
                    <p>{post.body}</p>
                  </div>
                  <div class="card-action">
                    <a href="#">{post.userId}</a>
                    <a href="#">{post.id}</a>
                    <i
                      className="material-icons"
                      onClick={() => showModalFunc(post.id)}
                    >
                      delete
                    </i>
                  </div>
                </div>
              </div>
            </div>
            ))}
            {/* {posts && posts.map((post)=> 
              <div class="card blue-grey darken-1"> 
            <div className="card-content white-tex"> 
                <span class="card-title">{post.title}</span> 
                <p>{post.body}</p> 
            </div> 
            </div>)}  */}

        <div ref={trigger} className="red accent-4">I'am trigger</div> 
            <ReactPaginate 
                className="pagination selected" 
                activeClassName="active" 
                nextClassName="material-icons" 
                previousClassName="material-icons" 
                breakLabel="..." 
                nextLabel=">" 
                onPageChange={pageChange} 
                pageRangeDisplayed={5} 
                pageCount={pageCount} 
                previousLabel="<" 
             /> 
          </div>
            {/* )} */}
    </>
  );
};
export default Posts;