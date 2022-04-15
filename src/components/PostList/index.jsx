import { Col, Row } from "antd";
import React from "react";

import { Post } from "../Post";



export const PostList = ({ posts, onPostLike }) => {
  return (
    <>
      <Row >
        <Col >
          
          {posts.map(({__v, ...post}) => (
            <Post key={post._id} {...post} onPostLike={onPostLike}/>
          ))}
          
          
        </Col>
      </Row>
    </>
  );
};
