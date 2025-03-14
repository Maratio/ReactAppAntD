import React from "react";
import classes from "../pages/ContentSite.module.css";
import {
  AutoComplete,
  Button,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Select,
  Space,
  TimePicker,
  TreeSelect,
} from "antd";

const { Option } = Select;
const { TreeNode } = TreeSelect;

const Profile = () => {
  return (
    <Space className={classes.profile} direction="vertical">
      <Space.Compact block>
        <Input style={{ width: "50%" }} defaultValue="input content" />
        <DatePicker style={{ width: "50%" }} />
      </Space.Compact>
      <Space.Compact block>
        <DatePicker.RangePicker style={{ width: "70%" }} />
        <Input style={{ width: "30%" }} defaultValue="input content" />
        <Button type="primary">查询</Button>
      </Space.Compact>
      <Space.Compact block>
        <Input style={{ width: "30%" }} defaultValue="input content" />
        <DatePicker.RangePicker style={{ width: "70%" }} />
      </Space.Compact>
      <Space.Compact block>
        <Select defaultValue="Option1-1">
          <Option value="Option1-1">Option1-1</Option>
          <Option value="Option1-2">Option1-2</Option>
        </Select>
        <Select defaultValue="Option2-2">
          <Option value="Option2-1">Option2-1</Option>
          <Option value="Option2-2">Option2-2</Option>
        </Select>
      </Space.Compact>
      <Space.Compact block>
        <Select defaultValue="1">
          <Option value="1">Between</Option>
          <Option value="2">Except</Option>
        </Select>
        <Input
          style={{ width: 100, textAlign: "center" }}
          placeholder="Minimum"
        />
        <Input
          className="site-input-split"
          style={{
            width: 30,
            borderLeft: 0,
            borderRight: 0,
            pointerEvents: "none",
          }}
          placeholder="~"
          disabled
        />
        <Input
          className="site-input-right"
          style={{
            width: 100,
            textAlign: "center",
          }}
          placeholder="Maximum"
        />
      </Space.Compact>
      <Space.Compact block>
        <Select defaultValue="Sign Up" style={{ width: "30%" }}>
          <Option value="Sign Up">Sign Up</Option>
          <Option value="Sign In">Sign In</Option>
        </Select>
        <AutoComplete
          style={{ width: "70%" }}
          placeholder="Email"
          options={[{ value: "text 1" }, { value: "text 2" }]}
        />
      </Space.Compact>
      <Space.Compact block>
        <TimePicker style={{ width: "70%" }} />
        <Cascader
          style={{ width: "70%" }}
          options={[
            {
              value: "zhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "hangzhou",
                  label: "Hangzhou",
                  children: [
                    {
                      value: "xihu",
                      label: "West Lake",
                    },
                  ],
                },
              ],
            },
            {
              value: "jiangsu",
              label: "Jiangsu",
              children: [
                {
                  value: "nanjing",
                  label: "Nanjing",
                  children: [
                    {
                      value: "zhonghuamen",
                      label: "Zhong Hua Men",
                    },
                  ],
                },
              ],
            },
          ]}
          placeholder="Select Address"
        />
      </Space.Compact>
      <Space.Compact block>
        <TimePicker.RangePicker />
        <TreeSelect
          showSearch
          style={{ width: "60%" }}
          value="leaf1"
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder="Please select"
          allowClear
          treeDefaultExpandAll
          onChange={() => {}}
        >
          <TreeNode value="parent 1" title="parent 1">
            <TreeNode value="parent 1-0" title="parent 1-0">
              <TreeNode value="leaf1" title="leaf1" />
              <TreeNode value="leaf2" title="leaf2" />
            </TreeNode>
            <TreeNode value="parent 1-1" title="parent 1-1">
              <TreeNode
                value="leaf3"
                title={<b style={{ color: "#08c" }}>leaf3</b>}
              />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
        <Button type="primary">Submit</Button>
      </Space.Compact>
      <Space.Compact>
        <Input placeholder="input here" />
        <InputNumber placeholder="another input" addonBefore="$" />
        <InputNumber placeholder="another input" addonAfter="$" />
      </Space.Compact>
    </Space>
  );
};

export default Profile;
