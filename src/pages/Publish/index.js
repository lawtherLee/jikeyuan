import React, { Component } from "react";
import { Breadcrumb, Button, Divider, Form, Input, Radio, Upload } from "antd";
import styles from "./index.module.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class Publish extends Component {
  render() {
    return (
      <div className={styles.publish}>
        {/*面包屑*/}
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => this.props.history.push("/home")}>
            首页
          </Breadcrumb.Item>
          <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        </Breadcrumb>
        <Divider />

        {/*发布文章*/}
        <Form name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 10 }}>
          <Form.Item
            label="标题"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="频道">
            <Input />
          </Form.Item>
          <Form.Item label="封面">
            <Radio.Group>
              <Radio value={1}>单图</Radio>
              <Radio value={2}>三图</Radio>
              <Radio value={3}>无图</Radio>
            </Radio.Group>{" "}
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Upload listType="picture-card">上传</Upload>
          </Form.Item>

          <Form.Item label={"内容"}>
            <ReactQuill
              placeholder={"请输入内容"}
              style={{ width: 600 }}
            ></ReactQuill>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Publish;
