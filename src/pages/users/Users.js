import { Button, Form, Input, Popconfirm } from "antd";
import React, { useState } from "react";
import { CustomTable } from "../../components/CustomTable";
import HeaderBar from "../../components/HeaderBar";
import CustomModal from "../../components/Modal";

const Users = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setOpenModal(true);
    setIsEditing(true);
  };

  const handleDelete = () => {};

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "ascend",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      //   sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      //   sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, data) => (
        <>
          <Button
            className="bg-blue-600 font-medium text-gray-100"
            onClick={() => handleEdit(data)}
          >
            Edit
          </Button>
          &nbsp;
          <Popconfirm
            title="Are you sure to delete this User?"
            onConfirm={() => handleDelete(data)}
            okText="Yes"
            cancelText="No"
          >
            <Button className="bg-red-600 font-medium text-gray-100">
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col p-3">
        <HeaderBar
          handlePress={handleOpenModal}
          text={"ADD USER"}
          title={"Users"}
          subtext={"Manage users"}
        />

        <CustomTable
          cols={columns}
          rows={sampleUsers}
          style={{ marginTop: "40px" }}
        />
      </div>

      <CustomModal
        handleCancel={handleCloseModal}
        handleOk={handleCloseModal}
        isModalOpen={openModal}
        title={isEditing ? "Update User" : "Create User"}
        w={800}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Role" name="role">
          <Input />
        </Form.Item>
      </CustomModal>
    </>
  );
};

export default Users;

const sampleUsers = [
  {
    name: "New User",
    email: "newuser@gmail.com",
    role: "user",
    phone: "0711223344",
  },
  {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role: "user",
    phone: "0711223355",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "user",
    phone: "0711224455",
  },
  {
    name: "New User",
    email: "newuser@gmail.com",
    role: "user",
    phone: "0711223344",
  },
  {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role: "user",
    phone: "0711223355",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "user",
    phone: "0711224455",
  },
  {
    name: "New User",
    email: "newuser@gmail.com",
    role: "user",
    phone: "0711223344",
  },
  {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role: "user",
    phone: "0711223355",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "user",
    phone: "0711224455",
  },
  {
    name: "New User",
    email: "newuser@gmail.com",
    role: "user",
    phone: "0711223344",
  },
  {
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    role: "user",
    phone: "0711223355",
  },
  {
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "user",
    phone: "0711224455",
  },
];
