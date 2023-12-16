import React, { Component } from "react";
import { message, Select } from "antd";
import { getAllChannelsAPI } from "../../api/channel";

class Index extends Component {
  state = {
    channelList: [],
  };

  getAllChannels = async () => {
    try {
      const res = await getAllChannelsAPI();
      // console.log(res);
      const data = res.data.channels.map((item) => {
        return {
          value: item.id,
          label: item.name,
        };
      });
      this.setState({
        channelList: data,
      });
    } catch (err) {
      message.error("获取失败");
    }
  };

  async componentDidMount() {
    await this.getAllChannels();
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <Select
          value={value}
          onChange={onChange}
          placeholder={"请选择频道"}
          style={{
            width: 200,
          }}
          options={this.state.channelList}
        >
          {/*<Option></Option>*/}
        </Select>
      </div>
    );
  }
}

Index.propTypes = {};

export default Index;
