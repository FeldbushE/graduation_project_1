import React, { useState } from "react";
import { Breadcrumb, PageHeader, Pagination, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";

import { PostList } from "./components/PostList";
import { postData } from "./posts";
import { Footer } from "./components/Footer";
import { SpaceButton } from "./components/SpaceButton";



const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];

export const AppAnt = () => {
  const [posts, setPosts] = useState(postData);
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Dialogue"
        breadcrumb={{ routes }}
        subTitle="This is a subtitle"
      />

      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">All posts</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <main className="dialogue__content container">
        <section>
          <Space direction="vertical">
          <Title level={2}>Welcome to Our Image Board!</Title>
          </Space>
        </section>
        <section>
          <Space direction="vertical">
            <Text>We're stoked that you're here. </Text>
          </Space>
        </section>
        <SpaceButton/>

        <PostList posts={posts} />
      </main>
      
      <Pagination
      defaultCurrent={6}
      total={100}
      pagination={{
        defaultPageSize: "20",
        showSizeChanger: true,
        pageSizeOptions: [20, 50, 100],
      }}
      />
      <Footer />
    </>
    
  );
};
