import { MdClose, MdDelete } from "react-icons/md";

const DeleteModal = () => {
  return (
    <>
      <button
        className="btn text-white btn-error hover:text-white hover:btn-error"
        onClick={() => document.getElementById("deleteModal").showModal()}
      >
        <MdDelete className="w-5 h-5" />
      </button>
      <dialog id="deleteModal" className="modal">
      <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <MdClose />
            </button>
          </form>
          <form className="flex flex-col gap-4">
            <p className="text-xl font-bold">Hapus Aktivitas</p>
            <p>Apakah anda yakin untuk menghapus aktivitas ini?</p>
              <button className="btn btn-sm btn-error text-white hover:btn-error hover:text-white">
                Hapus
              </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
export default DeleteModal;
