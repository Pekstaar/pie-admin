import { Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { CustomTable } from "../../components/CustomTable";
import HeaderBar from "../../components/HeaderBar";
import CustomModal from "../../components/Modal";

const Permissions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    //   key: "actions",
    //   render: (_, data) => (
    //     <>
    //       <Button
    //         className="bg-blue-600 font-medium text-gray-100"
    //         onClick={() => handleEdit(data)}
    //       >
    //         Edit
    //       </Button>
    //       &nbsp;
    //       <Popconfirm
    //         title="Are you sure to delete this Permission?"
    //         onConfirm={() => handleDelete(data)}
    //         okText="Yes"
    //         cancelText="No"
    //       >
    //         <Button className="bg-red-600 font-medium text-gray-100">
    //           Delete
    //         </Button>
    //       </Popconfirm>
    //     </>
    //   ),
    // },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col p-3">
        <HeaderBar
          handlePress={handleOpenModal}
          text={"ADD PERMISSION"}
          title={"Permissions"}
          subtext={"Manage permissions"}
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
  },
  {
    name: " dolor ",
    isChecked: true,
  },
  {
    name: "amet",
    isChecked: false,
  },
  {
    name: " adipisicing.",
    isChecked: true,
  },
  {
    name: "Repellat",
    isChecked: true,
  },
];
