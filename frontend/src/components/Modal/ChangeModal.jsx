import React, {useState} from "react";

export function ChangeModal() {
    const [showModal] = useState(true)
    return (
        <div className={`modal-box ${showModal ? "" : "hidden"}`}>
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Change/Edit Hotel</h3>
            <div className="divider"></div>

            <div className="flex flex-col">
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <input className="grow" placeholder="New Hotel Name"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <input className="grow" placeholder="New Description"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <input className="grow" placeholder="New Roomtype"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">

                    <input className="grow" placeholder="New Status"/>
                </label>
                <label className="input input-bordered rounded-2xl flex items-center my-4 gap-2">
                    <input className="grow" placeholder="New Price"/>
                </label>

                <button className="btn bg-main font-bold text-lg text-white rounded-2xl hover:bg-header w-full my-4"
                >
                    Save Changes
                </button>
            </div>
        </div>

    )
}