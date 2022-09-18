import { Button, Form, Popconfirm, TimePicker } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { CustomTable } from "../../components/CustomTable";
import HeaderBar from "../../components/HeaderBar";
import CustomModal from "../../components/Modal";

const ResponseTime = () => {
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
          text={"ADD TIME"}
          title={"Response Time"}
          subtext={"Manage time to respond"}
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
        title={isEditing ? "Update Time" : "Create Time"}
        w={800}
      >
        <Form.Item label="Time" name="description">
          <TimePicker
            className="w-full"
            onChange={() => {}}
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
          />
        </Form.Item>
      </CustomModal>
    </>
  );
};

export default ResponseTime;

const sampleUsers = [
  // },onst sampleUsers = [
  {
    time: "09:00 ",
  },
  {
    time: "12:00 ",
  },
  {
    time: "15:00",
  },
  {
    time: " 16:00",
  },
];
