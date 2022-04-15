import React from "react";
import { Space, Spin } from "antd";

export const Spinner = () => {
  return (
    <Space size="middle">
      <Spin className="ant-spin-spinning" size="large" />
    </Space>
  );
};
