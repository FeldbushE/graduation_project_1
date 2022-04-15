import React, { useContext } from "react";
import { Card, Space, Avatar, Tag, Timeline } from "antd";
import 'antd/dist/antd.css';
import {
  LikeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import dayjs from "dayjs";
import cn from "classnames";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../context/currentUserContext";
import { ThemeContext } from "../../context/themeContext";




export const Post = ({
  onPostLike,
  title,
  image,
  _id,
  likes,
  tags,
  text,
  created_at,
  updated_at,
}) => {
  const dataFormated = dayjs(created_at, updated_at).format(
    "DD.MM.YYYY, HH:mm:ss"
  );
  const currentUser = useContext(CurrentUserContext);
  const { theme } = useContext(ThemeContext);
  
  const isLiked = likes.some((id) => id === currentUser._id);

  function handleLikeClick() {
    onPostLike({ _id, likes });
  }

  return (
    <>
      <Space direction="vertical">
        <Card
          title={<Link to={`/post/${_id}`}>{title}</Link>}
          style={{ width: 300, color: theme.color, background: theme.background }}
          cover={<img alt="example" src={image}/>}
        >
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
            <LikeOutlined
              className={cn("post__favorite-icon", {
                "post__favorite-icon_active": isLiked,
              })}
              onClick={handleLikeClick}
            />
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
