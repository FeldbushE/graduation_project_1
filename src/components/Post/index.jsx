import React from "react";
import { Card, Space, Avatar, Tag, Timeline } from "antd";
import dayjs from "dayjs";
import { UserOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";


export const Post = ({
  title,
  tags,
  text,
  created_at,
  updated_at,
}) => {
  const dataFormated = dayjs(created_at, updated_at).format(
    "DD.MM.YYYY, HH:mm:ss"
  );
  return (
    <>
      <Space direction="vertical">
        <Card title={title} style={{ width: 300, height: 300}}>
          <div>
            <Avatar size="small" icon={<UserOutlined />} />
            <Space direction="vertical">
              <Text italic>maxim_91@inbox.ru</Text>
            </Space>
          </div>
          <Space direction="vertical">
            <Text>{text}</Text>
          </Space>
          <section>
            Tags:
            <Tag>{tags}</Tag>
          </section>

          <section>
            <Timeline>
              <Timeline.Item>{dataFormated}</Timeline.Item>
              <Timeline.Item color="green">
                Last edit {dataFormated}
              </Timeline.Item>
            </Timeline>
          </section>
        </Card>
      </Space>
    </>
  );
};
