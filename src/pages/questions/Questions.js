import { Button, Form, Input, Popconfirm } from "antd";
import React, { useState } from "react";
import { CustomTable } from "../../components/CustomTable";
import HeaderBar from "../../components/HeaderBar";
import CustomModal from "../../components/Modal";

const Questions = () => {
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
          text={"ADD Question"}
          title={"User Question"}
          subtext={"Manage user Questions"}
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
        title={isEditing ? "Update Question" : "Create Question"}
        w={800}
      >
        <Form.Item label="Description" name="description">
          <Input />
        </Form.Item>
      </CustomModal>
    </>
  );
};

export default Questions;

const sampleUsers = [
  // },onst sampleUsers = [
  {
    time: "new question ",
  },
];
