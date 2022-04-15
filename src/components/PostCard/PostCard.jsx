import React, {  useContext } from "react";
import { Card, Space, Avatar, Tag, Timeline, Modal, Typography } from "antd";
import 'antd/dist/antd.css';
import {
  ArrowLeftOutlined,
  DeleteOutlined,
  EditOutlined,
  LikeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import dayjs from "dayjs";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../context/currentUserContext";


const { Title } = Typography;

export const PostCard = ({
  onPostLike,
  onPostDelete,
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
  const isLiked = likes && likes.some((id) => id === currentUser);
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);

  function handleLikeClick() {
    onPostLike({ _id, likes });
  }

  function hendleClickBack(){
    navigate(-1);
  }

  const { confirm } = Modal;

  function showDeleteConfirm() {
  confirm({
    title: 'Are you sure you want to delete the post?',
    icon: <DeleteOutlined />,
    content: 'After deletion, it is not possible to restore!',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log(_id);
      console.log('Ok');

      return onPostDelete(_id);      
    },
    onCancel() {
      console.log('Cancel');
    },
  });

  
}

  return (
    <>
    <section>
    <ArrowLeftOutlined onClick={hendleClickBack}/>
    </section>
      <Space direction="vertical">
        <Card      
          title={title}
          extra={<EditOutlined />}
          style={{ width: 400 }}
          cover={<img alt="example" src={image}/>}
        >
          <div>
            <Avatar size="small" icon={<UserOutlined />} />
            <Space direction="vertical">
              <Text italic>maxim_91@inbox.ru</Text>
            </Space>
          </div>
                  
          <section>
          <Title level={5}>{text}</Title>
          <Title level={5}>Created at</Title>
          <Title level={5}>Last edit {dataFormated}</Title>            
          </section>
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
            <DeleteOutlined onClick={showDeleteConfirm} type="dashed" />
                     
          </section>
        </Card>
      </Space>
    </>
  );
};
