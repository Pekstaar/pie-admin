import { Button, Form, Input, Popconfirm } from "antd";
import React, { useState } from "react";
import { CustomTable } from "../../components/CustomTable";
import HeaderBar from "../../components/HeaderBar";
import CustomModal from "../../components/Modal";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Currency = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

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
  const handleHide = () => {
    setIsHidden(!isHidden);
  };

  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      //   sorter: (a, b) => a?.first.localeCompare(b?.first),
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, data) => (
        <div className="flex flex-wrap">
          <Button
            className="bg-blue-600 font-medium text-gray-100"
            onClick={() => handleEdit(data)}
          >
            Edit
          </Button>
          &nbsp;
          <Popconfirm
            title="Are you sure to delete this Currency?"
            onConfirm={() => handleDelete(data)}
            okText="Yes"
            cancelText="No"
          >
            <Button className="bg-red-600 font-medium text-gray-100">
              Delete
            </Button>
          </Popconfirm>
          &nbsp;
          <Popconfirm
            title={`Are you sure to ${
              !isHidden ? "activate" : "deactivate"
            } currency?`}
            onConfirm={() => handleHide(data)}
            okText="Yes"
            cancelText="No"
          >
            <Button className="bg-indigo-700 font-medium text-gray-100 text-xl flex items-center">
              {isHidden ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col p-3">
        <HeaderBar
          handlePress={handleOpenModal}
          text={"ADD CURRENCY"}
          title={"Currencies"}
          subtext={"Manage Currencies"}
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
        title={isEditing ? "Update Currency" : "Create Currency"}
        w={800}
      >
        <Form.Item label="Currency" name="currency">
          <Input />
        </Form.Item>
      </CustomModal>
    </>
  );
};

export default Currency;

const sampleUsers = [
  // },onst sampleUsers = [
  {
    time: "Dollar ",
  },
  {
    time: "Yen ",
  },
  {
    time: "kshs ",
  },
];
