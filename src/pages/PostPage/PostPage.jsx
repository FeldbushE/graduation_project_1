import React, {  useCallback } from "react";
import api from "../../utils/Api";
import { Spinner } from "../../components/Spinner";
import { PostCard } from "../../components/PostCard/PostCard";
import { useParams, useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { NotFound } from "../../components/NotFount/NotFount";



export const PagePost = ({ handlePostLike, handlePostDelete }) => {
  //const [post, setPost] = useState([]);
  const navigate = useNavigate()
  const {postID} = useParams();

  const handler = useCallback(() => {
    return api.getPostById(postID)
  }, [postID])
  const {data: post, loading, error} = useApi(handler);
  

  //useEffect(() => {
    //api.getPostById(postID).then((postData) => {
      //setPost(postData);
    //});
  //}, []);

  function handlePostDelete(postId) {
    api.deletePostList(postId).then((newPost) => {
      const newPosts = posts.filter((c) => c._id !== postId);
      setPosts(newPosts);
    });
  }  

  return (
    <>
      {loading  && <Spinner/> }
      {error && <NotFound title="Страница не найдена" buttonText="На главную" buttonAction={()=> navigate(-1)}/>}
      {post && <PostCard {...post}    
        onPostLike={handlePostLike}
        onPostDelete={handlePostDelete}
      />}
    </>
  );
};
