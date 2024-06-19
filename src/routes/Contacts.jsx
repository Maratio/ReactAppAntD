import React from "react";
import classes from "../components/Content/ContentSite.module.css";
import { CopyOutlined } from "@ant-design/icons";
import { Button, Input, InputNumber, Select, Space, Tooltip } from "antd";

const { Option } = Select;

const Contacts = () => {
  return (
    <Space className={classes.contacts} direction="vertical">
      <Space.Compact block>
        <Input style={{ width: "20%" }} defaultValue="0571" />
        <Input style={{ width: "30%" }} defaultValue="26888888" />
      </Space.Compact>
      <Space.Compact block size="small">
        <Input
          style={{ width: "calc(100% - 200px)" }}
          defaultValue="https://ant.design"
        />
      </Space.Compact>
      <Space.Compact block>
        <Input
          style={{ width: "calc(100% - 200px)" }}
          defaultValue="https://ant.design"
        />
      </Space.Compact>
      <Space.Compact block>
        <Input
          style={{ width: "calc(100% - 200px)" }}
          defaultValue="git@github.com:ant-design/ant-design.git"
        />
        <Tooltip title="copy git url">
          <Button icon={<CopyOutlined />} />
        </Tooltip>
      </Space.Compact>
      <Space.Compact block>
        <Select defaultValue="Zhejiang" allowClear>
          <Option value="Zhejiang">Zhejiang</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>
        <Input
          style={{ width: "50%" }}
          defaultValue="Xihu District, Hangzhou"
        />
      </Space.Compact>
      <Space.Compact block>
        <Select
          allowClear
          mode="multiple"
          defaultValue="Zhejianggggg"
          style={{ width: "50%" }}
        >
          <Option value="Zhejianggggg">Zhejianggggg</Option>
          <Option value="Jiangsu">Jiangsu</Option>
        </Select>
        <Input
          style={{ width: "50%" }}
          defaultValue="Xihu District, Hangzhou"
        />
      </Space.Compact>
      <Space.Compact block>
        <Input.Search style={{ width: "30%" }} defaultValue="0571" />
        <Input.Search
          allowClear
          style={{ width: "50%" }}
          defaultValue="26888888"
        />
        <Input.Search style={{ width: "20%" }} defaultValue="+1" />
      </Space.Compact>
      <Space.Compact block>
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
          <Option value="Option2">Option2</Option>
        </Select>
        <Input style={{ width: "50%" }} defaultValue="input content" />
        <InputNumber defaultValue={12} />
      </Space.Compact>
    </Space>
  );
};

export default Contacts;
