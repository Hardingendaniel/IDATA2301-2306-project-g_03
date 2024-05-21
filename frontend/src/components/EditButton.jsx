import React, {useState} from "react";
import {UpdateUserModal} from "./Modal/UpdateUserModal";
import {asyncApiRequest} from "../tools/requests";

/**
 * Component for 3 dot dropdown menu
 * @returns {Element}
 * @constructor
 */
const EditButton = ({hotelId, initialStatus}) => {
    const [status, setStatus] = useState(initialStatus);
    const openChangeModal = () => {
        document.getElementById("changeModal").showModal();
    }

    /**
     * Sends update active status to backend (PATCH)
     */
    const handleToggleClick = async () => {
        try {
            const requestBody = String(!status)
            const response = await asyncApiRequest("PATCH", `/hotels/${hotelId}`, requestBody);
            setStatus(!status);
        } catch (error) {
            console.error("An error occurred while hiding hotel with id: " + hotelId);
        }
    }

    /**
     * Sends delete api call to backend (DELETE)
     */
    const handleDeleteClick = async () => {
        try {
            const response = await asyncApiRequest("DELETE", `/hotels/${hotelId}`);
        } catch (error) {
            console.log("An error occurred while deleting hotel with id: " + hotelId);
        }
    }

    return (
      <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 btn-ghost btn-xs rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
              </svg>
          </div>
          <ul tabIndex={0}
              className="dropdown-content z-[1] menu p-2 font-normal shadow bg-base-100 rounded-2xl w-36">
              <li><a onClick={openChangeModal}>Edit</a></li>
              <li><a onClick={handleToggleClick}>{status ? "Hide" : "Show"}</a></li>
              <li><a onClick={handleDeleteClick} className="text-red">Delete</a></li>
          </ul>
          <dialog id="changeModal" className="modal">
              <UpdateUserModal />
          </dialog>
      </div>
  )
}

export default EditButton;