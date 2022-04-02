import React from "react";
import { Button, Space } from "antd";


function handleClick(e) {
  e.preventDefault();
  console.log('Есть контакт');
}

export const SpaceButton = () => {
  

  return (
    <>
      <Space>
        <Button type="primary" onClick={handleClick}>Create post</Button>
      </Space>
    </>
  );
};
