import React, { Component } from "react";
import {
  Breadcrumb,
  Button,
  DatePicker,
  Radio,
  Divider,
  Form,
  Select,
} from "antd";
import styles from "./index.module.scss";

const { RangePicker } = DatePicker;

class Article extends Component {
  render() {
    return (
      <div className={styles.article}>
        <Breadcrumb>
          <Breadcrumb.Item onClick={() => this.props.history.push("/home")}>
            首页
          </Breadcrumb.Item>
          <Breadcrumb.Item>文章管理</Breadcrumb.Item>
        </Breadcrumb>

        <Divider />

        <Form name="basic">
          <Form.Item name="username" label={"状态"}>
            <Radio.Group>
              <Radio value={1}>全部</Radio>
              <Radio value={2}>草稿</Radio>
              <Radio value={3}>待审核</Radio>
              <Radio value={4}>审核通过</Radio>
              <Radio value={5}>审核失败</Radio>
            </Radio.Group>{" "}
          </Form.Item>

          <Form.Item label={"频道"} name={"time"}>
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
              }}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label={"日期"}>
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              筛选
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Article;
