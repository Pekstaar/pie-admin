import { Button, Form, Select } from "antd";
import React, { useState } from "react";
import { CustomTable } from "../../components/CustomTable";
import HeaderBar from "../../components/HeaderBar";
import CustomModal from "../../components/Modal";

const UpdateThingsStatus = () => {
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

  const columns = [
    {
      title: "Thing",
      dataIndex: "thing",
      key: "thing",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, data) => (
        <>
          <Button
            className="bg-indigo-600 font-medium text-gray-100"
            onClick={() => handleEdit(data)}
          >
            Edit Status
          </Button>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col p-3">
        <HeaderBar
          handlePress={handleOpenModal}
          title={"Status"}
          subtext={"Manage things status"}
          hideBtn
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
        <Form.Item label="Status" name="status">
          <Select defaultValue="status one">
            <Select.Option value="status one">Status One</Select.Option>
            <Select.Option value="status two">Status Two</Select.Option>
            <Select.Option value="status three">Status Three</Select.Option>
            <Select.Option value="status four">Status Four</Select.Option>
            <Select.Option value="status five">Status Five</Select.Option>
            <Select.Option value="status six">Status Six</Select.Option>
            <Select.Option value="status seven">Status Seven</Select.Option>
            <Select.Option value="status eight">Status Eight</Select.Option>
          </Select>
        </Form.Item>
      </CustomModal>
    </>
  );
};

export default UpdateThingsStatus;

const sampleUsers = [
  // },onst sampleUsers = [
  {
    thing: "Lorem ipsum ",
    status: "Status One",
  },
  {
    thing: " dolor sit ",
    status: "Status One",
  },
  {
    thing: "amet consectetur",
    status: "Status One",
  },
  {
    thing: " adipisicing elit.",
    status: "Status Two",
  },
  {
    thing: "Repellat beatae",
    status: "Status Two",
  },
];
