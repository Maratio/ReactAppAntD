import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Card.module.css";
import { EditOutlined, DeleteOutlined, StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Rate } from "antd";
import { BACKEND_URL } from "../../constants.js";
const { Meta } = Card;

const CardPostDetail = () => {
  const { id } = useParams();
  const [dataPost, setDataPost] = useState('')

  function getPost() {
    fetch(`${BACKEND_URL}/api/posts/${id}?`, { method: "GET" })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            console.log(data);
            setDataPost(data);
          });
        }
      })
      .catch((err) => console.error("error >>>>>", err));
  }

useEffect(() => getPost(),[id])


  return (
    <Card
      className={classes.cardDetail}
      size="small"
      extra={<Rate value={Math.ceil(Math.random() * 5)} />}
      hoverable
      cover={<img alt="example" src={dataPost.url} />}
      actions={[
        <EditOutlined onClick={() => {}} key="edit" />,
        <DeleteOutlined onClick={() => {}} key="delete" />,
      ]}
    >
      <div className={classes.bodyDetail}>
        <Meta
          className={classes.metaDetail}
          title={"N" + dataPost.id + ". " + dataPost.title}
          description={dataPost.body}
        />
      </div>
    </Card>
  );
};

export default CardPostDetail;
