import { Button, Form, Modal } from "antd";
import React from "react";

const CustomModal = ({
  isModalOpen,
  handleOk,
  handleSubmit,
  handleCancel,
  title,
  w,
  children,
}) => {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleSubmit}
      onCancel={handleCancel}
      width={w}
    >
      <Form onSubmit={handleSubmit} className={"flex flex-col"}>
        <div className="flex flex-col mb-4">{children}</div>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="submit"
            className="mx-auto w-2/4 h-10 rounded bg-indigo-800 font-semibold text-md uppercase text-white"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomModal;
