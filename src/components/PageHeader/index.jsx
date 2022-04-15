import React, { useContext } from "react";
import { PageHeader } from "antd";
import { Button } from 'antd';
import { CurrentUserContext } from "../../context/currentUserContext";
import { ThemeContext } from "../../context/themeContext";

const routes = [
  {
    path: "index",
    breadcrumbName: "Home",
  },
  {
    path: "first",
    breadcrumbName: "Docs",
  },
  {
    path: "second",
    breadcrumbName: "GitHub",
  },
];

export const Header = ({onUpdateUser}) => {
  const currentUser = useContext(CurrentUserContext);
  const { toggleTheme } = useContext(ThemeContext);
  
  function handleClickEditButton(e) {
    e.preventDefault();
    toggleTheme();
    onUpdateUser({name: "Екатерина", about: "Студент"})
  }
  
  return (
    <div className="site-page-header">
      <div className="site-page-header-profile">
       {currentUser.email && <span>{currentUser.email}</span>}
       {currentUser.name && <span>{currentUser.name}: {currentUser.about}</span>}
       <Button className="btn-change-profile" type="primary" onClick={handleClickEditButton}>Change</Button>
      </div>

      <PageHeader className="ant-page-header-heading-title" title="Dialogue" breadcrumb={{ routes }} />
      
    </div>
        
     
    
  );
};
