import React from "react";

/**
 * Component for 3 dot dropdown menu
 * @returns {Element}
 * @constructor
 */
const EditButton = () => {
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
              <li><a>Edit</a></li>
              <li><a>Delete</a></li>
          </ul>
      </div>
  )
}

export default EditButton;