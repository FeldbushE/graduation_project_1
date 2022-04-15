import React, { useState, useEffect } from "react";
import { PostList } from "../../components/PostList";
import { Spinner } from "../../components/Spinner";
//import { postData } from "./posts";



export const PageCatalog = ({isLoading, currentUser, posts, handlePostLike}) => {
  
  return (
    <>
    {isLoading  && <Spinner/> }
      <PostList
        posts={posts}
        onPostLike={handlePostLike}
        currentUser={currentUser}
      />
    </>
  );
};
