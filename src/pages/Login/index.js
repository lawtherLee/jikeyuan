import React, { Component } from "react";
import { Card } from "antd";
import { Button, Checkbox, Form, Input, message } from "antd";
import logo from "assets/logo.png";
import { loginAPI } from "../../api/user";
import styles from "./index.module.scss";
import { setToken } from "../../utils/storage";

class Login extends Component {
  onFinish = async (values) => {
    console.log(values);
    try {
      const res = await loginAPI(values);
      setToken(JSON.stringify(res.data));
      message.success("登录成功");
      this.props.history.push("/home");
    } catch (err) {
      message.error("登录失败");
    }
  };

  render() {
    return (
      <div className={styles.login}>
        <Card className={"login-container"}>
          <img className={"logo"} src={logo} />

          <Form
            onFinish={this.onFinish}
            name="basic"
            validateTrigger={["onBlur", "onChange"]}
            initialValues={{
              mobile: 13800000000,
              code: "246810",
              agree: false,
            }}
          >
            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: "请输入手机号!" },
                {
                  pattern:
                    /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                  message: "手机号格式不对",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="code"
              rules={[
                { required: true, message: "请输入验证码!" },
                {
                  pattern: /^[0-9]{6}$/,
                  message: "验证码格式不对",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator(check, val) {
                    if (val) return Promise.resolve();
                    return Promise.reject(new Error("请勾选协议"));
                  },
                },
              ]}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;
