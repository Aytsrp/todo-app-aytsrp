import { MdEdit, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

const EditModal = ({ activity : initialActivity, onActivityEdit }) => {
  const [activity, setActivities] = useState(initialActivity ? initialActivity.activity : "");

  useEffect(() => {
    if (initialActivity) {
      setActivities(initialActivity);
    }
  }, [initialActivity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/activity/edit/${activity.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activity: activity,
      }),
    });
    if (response.ok) {
      console.log("Activity edited successfully");
      onActivityEdit();
    } else {
      console.log("Failed to edit activity");
    }
  };

  return (
    <>
      <button
        className="btn text-white btn-warning hover:text-white hover:btn-warning"
        onClick={() => document.getElementById("editModal").showModal()}
      >
        <MdEdit className="w-5 h-5" />
      </button>
      <dialog id="editModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <MdClose />
            </button>
          </form>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <p className="text-xl font-bold">Edit Aktivitas</p>
            <label className="form-control">
              <input
                type="text"
                placeholder="Aktivitas"
                className="input input-sm input-bordered w-full focus:outline-none"
                maxLength={64}
                required
                onChange={(e) => setActivities(e.target.value)}
                value={activity}
              />
            </label>
            <button
              className="btn btn-sm btn-warning text-white hover:btn-warning hover:text-white"
              type="submit"
            >
              Edit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default EditModal;
