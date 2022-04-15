import React, { useState, useEffect } from "react";
import { Breadcrumb, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import api from "./utils/Api";
import { Footer } from "./components/Footer";
import { Header } from "./components/PageHeader";
import { PageCatalog } from "./pages/CatalogPage/CatalogPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "./context/currentUserContext";
import { ThemeContext, themes } from "./context/themeContext";
import { NotFoundPage } from "./pages/NotFoundPage/NotFaundPage";
import { SpaceButton } from "./components/SpaceButton";

export const AppAnt = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState(themes.ligth);
  const [contacts, setContacts] = useState([]);

  const addContacts = (contactInfo) => {
    setContacts([...contacts, contactInfo]);
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getPostsList(), api.getUserInfo()])
      .then(([postData, userData]) => {
        setPosts(postData);
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err))
      .finally(() => setTimeout(() => setIsLoading(false)));
  }, []);

  function handleUpdateUser(userUpdate) {
    api.setUserInfo(userUpdate).then((newUserData) => {
      setCurrentUser(newUserData);
    });
  }

  function handlePostLike({ _id, likes }) {
    const isLiked = likes.some((id) => id === currentUser._id);
    api.changeLikeStatus(_id, isLiked).then((newPost) => {
      const newPostsState = posts.map((c) => {
        return c._id === newPost._id ? newPost : c;
      });

      setPosts(newPostsState);
    });
  }

  const handleClickToggleTheme = () => {
    theme === themes.dark ? setTheme(themes.ligth) : setTheme(themes.dark);
  };

 
  return (
    <ThemeContext.Provider
      value={{ theme: theme, toggleTheme: handleClickToggleTheme }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <Header user={currentUser} onUpdateUser={handleUpdateUser} />
        <section className="breadcrumb-dialogue">
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="">Home</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">All posts</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </section>
        
        <SpaceButton />
        <main className="dialogue__content container">
          <section>
            <Space direction="vertical">
              <Title level={2}>Welcome to Our Image Board!</Title>
              <Text>We're stoked that you're here. </Text>
            </Space>
          </section>

          <Routes>
            <Route
              path="/"
              element={
                <PageCatalog
                  isLoading={isLoading}
                  posts={posts}
                  handlePostLike={handlePostLike}
                />
              }
            />

            <Route
              path="/post/:postID"
              element={
                <PagePost
                  currentUser={currentUser}
                  isLoading={isLoading}
                  handlePostLike={handlePostLike}
                />
              }
            />

            <Route path="*" element={<NotFoundPage />} />
            
          </Routes>
        </main>

        

        <Footer />
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
};
