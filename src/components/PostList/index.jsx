import { Col, Row } from "antd";
import React from "react";

import { Post } from "../Post";



export const PostList = ({ posts }) => {
  return (
    <>
      <Row gutter={16}>
        <Col>
          {posts.map((post) => (
            <Post key={post._id} {...post} />
          ))}
        </Col>
      </Row>
    </>
  );
};
