import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteResume } from "../features/addSlice";
import React, { useState } from 'react';



const CvItems = (props) => {
    const dispatch = useDispatch()

    const item = props.item;

    const mailValue = item.mailValue ? item.mailValue : "Dummy";


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleDelete = () => {
        dispatch(deleteResume(item.id))
    }

    return (
        <div className="cvItems">


            <div className="buttons">
                <p>{mailValue}</p>
                <button onClick={showModal}>
                    View
                </button>
                <br></br>
                <button onClick={handleDelete} style={{ backgroundColor: "red" }}>
                    Delete
                </button>
            </div>


            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <p>mail : {mailValue}</p>
            </Modal>

        </div>
    );
}

export default CvItems;