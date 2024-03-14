import { MdAdd, MdClose } from "react-icons/md";
import { useState } from "react";

const AddModal = ({ onActivityAdded }) => {
  const [activity, setActivities] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/activity/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activity: activity
      }),
    });

    if (response.ok) {
      console.log("Activity added successfully");
      onActivityAdded()
    } else {
      console.error("Failed to add activity");
    }
  };
  return (
    <>
      <button
        className="btn text-white btn-success hover:text-white hover:btn-success"
        onClick={() => document.getElementById("addModal").showModal()}
      >
        <MdAdd className="w-5 h-5" />
      </button>
      <dialog id="addModal" className="modal">
      <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <MdClose />
            </button>
          </form>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <p className="text-xl font-bold">Tambah Aktivitas</p>
              <label className="form-control">
                <input
                  type="text"
                  placeholder="Aktivitas"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  maxLength={64}
                  required
                  value={activity}
                onChange={(e) => setActivities(e.target.value)}
                />
              </label>
              <button className="btn btn-sm btn-success text-white hover:btn-success hover:text-white" type="submit">
                Tambah
              </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default AddModal;
