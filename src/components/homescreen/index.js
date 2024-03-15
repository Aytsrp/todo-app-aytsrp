import AddModal from "../modal/add";
import DeleteModal from "../modal/delete/[id]";
import EditModal from "../modal/edit/[id]";
import { useState, useEffect } from "react";

const Homescreen = () => {
  const [activity, setActivities] = useState([]);

  const fetchActivities = async () => {
    const response = await fetch("/api/activity");
    const data = await response.json();
    setActivities(data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleActivity = () => {
    fetchActivities();
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-100 text-neutral justify-center items-center">
        <div className="card w-96 p-5 bg-white flex flex-row rounded-b-none justify-between items-center text-black">
          <p className="text-xl font-medium">Aktivitas</p>
          <AddModal onActivityAdded={handleActivity} />
        </div>
        <div className="card w-96 p-5 rounded-t-none bg-white text-black">
          <div className="form-control">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Aktivitas</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {activity.map((item, index) => (
                    <tr key={index}>
                      <th>
                        {" "}
                        <label className="label cursor-pointer">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-info [--chkfg:white]"
                          />
                        </label>
                      </th>
                      <td>{item.activity}</td>
                      <td className="flex flex-col sm:flex-row gap-2 justify-center items-center h-full">
                        {/* <EditModal activity={item.activity} onActivityEdit={handleActivity}/>  */}
                        <DeleteModal
                          activity={item.id}
                          onActivityDeleted={handleActivity}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homescreen;
