import {
  FieldTimeOutlined,
  UserSwitchOutlined,
  ApartmentOutlined,
  UserOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  MoneyCollectOutlined,
  SettingOutlined,
  UnlockOutlined,
  LockOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <Menu
      style={{
        width: "100%",
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="light"
      // items={items}
    >
      {/* <Menu.Item key="0" icon={<BarChartOutlined />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item> */}

      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/users">Users</Link>
      </Menu.Item>

      <Menu.Item key="2" icon={<ApartmentOutlined />}>
        <Link to="/things">Things</Link>
      </Menu.Item>

      <Menu.Item key="3" icon={<FieldTimeOutlined />}>
        <Link to="/delivery_time">Delivery Time</Link>
      </Menu.Item>

      <Menu.Item key="4" icon={<FieldTimeOutlined />}>
        <Link to="/response_time">Response Time</Link>
      </Menu.Item>

      <Menu.Item key="5" icon={<UserSwitchOutlined />}>
        <Link to="/roles">Roles</Link>
      </Menu.Item>

      <Menu.Item key="6" icon={<UserSwitchOutlined />}>
        <Link to="/food_category">Food Category</Link>
      </Menu.Item>

      <Menu.Item key="7" icon={<BookOutlined />}>
        <Link to="/reports">Reports</Link>
      </Menu.Item>

      <Menu.Item key="8" icon={<QuestionCircleOutlined />}>
        <Link to="/questions">Questions</Link>
      </Menu.Item>

      <Menu.Item key="9" icon={<MoneyCollectOutlined />}>
        <Link to="/currency">Currency</Link>
      </Menu.Item>

      <Menu.SubMenu key="10" icon={<SettingOutlined />} title={"Activities"}>
        <Menu.Item key="12" icon={<ApartmentOutlined />}>
          <Link to="/things/status">Things Status</Link>
        </Menu.Item>

        <Menu.Item key="13" icon={<UsergroupDeleteOutlined />}>
          <Link to="/users/blocked">Blocked Users</Link>
        </Menu.Item>

        <Menu.Item key="14" icon={<UnlockOutlined />}>
          <Link to="/">Privacy Settings</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="11" icon={<LockOutlined />}>
        <Link to="/permissions">Permissions</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
