import { MdAdd, MdClose } from "react-icons/md";

const AddModal = () => {
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
          <form className="flex flex-col gap-4">
            <p className="text-xl font-bold">Tambah Aktivitas</p>
              <label className="form-control">
                <input
                  type="text"
                  placeholder="Aktivitas"
                  className="input input-sm input-bordered w-full focus:outline-none"
                  maxLength={64}
                  required
                />
              </label>
              <button className="btn btn-sm btn-success text-white hover:btn-success hover:text-white">
                Tambah
              </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default AddModal;
