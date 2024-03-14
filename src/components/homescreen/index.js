import AddModal from "../modal/add";
import Activity from "../table/activity";

const Homescreen = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-100 text-neutral justify-center items-center">
        <div className="card w-96 p-5 bg-white flex flex-row rounded-b-none justify-between items-center text-black">
          <p className="text-xl font-medium">Aktivitas</p>
          <AddModal />
        </div>
        <div className="card w-96 p-5 rounded-t-none bg-white text-black">
          <div className="form-control">
            <Activity/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homescreen;
