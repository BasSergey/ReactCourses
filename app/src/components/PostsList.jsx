import React, { useEffect, useState } from "react";
import MyModal from "../components/MyModal/MyModal";
const PostsList = (props) => {
  const [filter, setFilter] = useState(props.children);

  useEffect(() => {
    //хук появляется сразу после загрузки страницы
    setFilter(props.children); //присваивает
  }, [props.children]); //за чем будем следить

  const getSearch = () => {
    if (filter) {
      //если данный в fiter есть
      return filter;
    }
    return props.children;
  };
  const postSearch = getSearch();
  const onChange = (e) => {
    // console.log(e.target.value)
    setFilter(
      props.children.filter((post) =>
        post.title.toLowerCase().includes(e.target.value.toLowerCase())+
        post.body.toLowerCase().includes(e.target.value.toLowerCase())
        
      )
    );
  };
  const [showModal, setshowModal] = useState(false);
  return (
    <>
      {props.search && (
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
      )}
      {props.children &&
        filter.map((posts) => (
          <MyModal visible={showModal} setVisible={setshowModal}>
            {
              <>
                <div className="input-field col s6">
                  <p>{posts.title}</p>
                </div>
                <div className="input-field col s6">
                  <p>{posts.body}</p>
                </div>
                <div className="input-field col s6">
                  <p>{posts.userId}</p>
                </div>
                <div className="input-field col s6">
                  <p>{posts.id}</p>
                </div>
              </>
            }
          </MyModal>
        ))}
      {props.children &&
        filter.map((posts) => (
          <div class="row" key={posts.id}>
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <h5 class="card-title">{posts.title}</h5>
                  <p>{posts.body}</p>
                </div>
                <div class="card-action">
                  <a href="#">{posts.userId}</a>
                  <a href="#">{posts.id}</a>
                  <i
                    className="material-icons"
                    onClick={() => props.deletePost(posts.id)}
                  >
                    delete
                  </i>
                  <a
                    className="waves-effect waves-light btn"
                    onClick={() => setshowModal(true)}
                  >
                    increase
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostsList;