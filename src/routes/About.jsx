import React from "react";
import classes from "../components/Content/ContentSite.module.css";
import { Card, Space, Typography } from "antd";
const { Text } = Typography;

const About = () => {
  return (
    <Space className={classes.about}
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        position: "relative",
        top: "64px",
      }}
    >
      <Card title="О нас" size="small">
        <p>
          <Typography>
            <Text type="warning" strong={true}>
              Сложно поверить, что все началось с небольшой идеи в простом
              общении с друзьями. И когда мы загорали на пляже, я подумал,
              почему бы не объединить наше увлечение путешествиями и отдыхом со
              сферой информационных технологий. Так родилась идея о создании
              сайта, посвященного теме путешествий и отдыха.
              <br />
              Создание сайта было затруднительным, но в итоге мы получили то,
              что хотели — удобный, информативный и привлекательный ресурс,
              который помогает найти идеальное место для отдыха и путешествия.
            </Text>
          </Typography>
        </p>
      </Card>
    </Space>
  );
};

export default About;
