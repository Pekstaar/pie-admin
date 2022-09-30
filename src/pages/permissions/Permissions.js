import { Checkbox, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { CustomTable } from "../../components/CustomTable";
import HeaderBar from "../../components/HeaderBar";
import CustomModal from "../../components/Modal";

const Permissions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRole, setSelectedRole] = useState("--select role--");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsEditing(false);
  };

  // const handleEdit = () => {
  //   setOpenModal(true);
  //   setIsEditing(true);
  // };

  // const handleDelete = () => {};
  const handleCheck = (e, data) => {
    // handle data
    console.log(data?.name, "IS CHECKED: ", e.target.checked);
  };
  const handleCheckAdd = (e, data) => {
    // handle data
    console.log(data?.name, "ADD IS CHECKED: ", e.target.checked);
  };
  const handleCheckEdit = (e, data) => {
    // handle data
    console.log(data?.name, "EDIT IS CHECKED: ", e.target.checked);
  };
  const handleCheckView = (e, data) => {
    // handle data
    console.log(data?.name, "VIEW IS CHECKED: ", e.target.checked);
  };
  const handleCheckDelete = (e, data) => {
    // handle data
    console.log(data?.name, "DELETE IS CHECKED: ", e.target.checked);
  };

  const handleSelectedRoleChange = (value) => {
    setSelectedRole(value);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "#",
      key: "#",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
      render: (_, data) => (
        <>
          <Checkbox
            defaultChecked={data?.isChecked}
            onChange={(e) => handleCheck(e, data)}
          />
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
    },

    // Add checkbox
    {
      title: "Add",
      dataIndex: "add",
      key: "add",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
      render: (_, data) => (
        <>
          <Checkbox
            defaultChecked={data?.add}
            onChange={(e) => handleCheckAdd(e, data)}
          />
        </>
      ),
    },

    // View Checkbox
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
      render: (_, data) => (
        <>
          <Checkbox
            defaultChecked={data?.view}
            onChange={(e) => handleCheckView(e, data)}
          />
        </>
      ),
    },
    // Edit Checkbox
    {
      title: "Edit",
      dataIndex: "edit",
      key: "edit",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
      render: (_, data) => (
        <>
          <Checkbox
            defaultChecked={data?.edit}
            onChange={(e) => handleCheckEdit(e, data)}
          />
        </>
      ),
    },
    // Delete checkbox
    {
      title: "Delete",
      dataIndex: "delete",
      key: "delete",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
      render: (_, data) => (
        <>
          <Checkbox
            defaultChecked={data?.delete}
            onChange={(e) => handleCheckDelete(e, data)}
          />
        </>
      ),
    },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col p-3 ">
        <HeaderBar
          handlePress={handleOpenModal}
          text={"ADD PERMISSION"}
          title={"Permissions"}
          subtext={"Manage permissions"}
        >
          <div className="w-1/2 mx-auto">
            <Form.Item required label="Select Role" name="role">
              <Select
                defaultValue={selectedRole}
                onChange={handleSelectedRoleChange}
              >
                <Select.Option value="admin">Admin</Select.Option>
                <Select.Option value="two">User two</Select.Option>
                <Select.Option value="three">User three</Select.Option>
                <Select.Option value="four">User four</Select.Option>
                <Select.Option value="five">User five</Select.Option>
                <Select.Option value="six">User Six</Select.Option>
              </Select>
            </Form.Item>
          </div>
        </HeaderBar>

        <div>
          <CustomTable
            cols={columns}
            rows={sampleUsers}
            // style={{ marginTop: "40px" }}
          />
        </div>
      </div>

      <CustomModal
        handleCancel={handleCloseModal}
        handleOk={handleCloseModal}
        isModalOpen={openModal}
        title={isEditing ? "Update Permission" : "Create Permission"}
        w={800}
      >
        <Form.Item label="Name" name="name">
          <Input placeholder="--enter permission name--" />
        </Form.Item>
      </CustomModal>
    </>
  );
};

export default Permissions;

const sampleUsers = [
  // },onst sampleUsers = [
  {
    name: "Lorem ",
    isChecked: false,
    delete: false,
    edit: true,
    add: true,
    view: true,
  },
  {
    name: " dolor ",
    isChecked: true,
    delete: false,
    edit: false,
    add: false,
    view: true,
  },
  {
    name: "amet",
    isChecked: false,
    delete: false,
    edit: false,
    add: true,
    view: true,
  },
  {
    name: " adipisicing.",
    isChecked: true,
    delete: false,
    edit: false,
    add: false,
    view: true,
  },
  {
    name: "Repellat",
    isChecked: true,
    delete: true,
    edit: true,
    add: true,
    view: true,
  },
];
