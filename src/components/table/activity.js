import EditModal from "../modal/edit/[id]";
import DeleteModal from "../modal/delete/[id]";

const data = [
  {
    activity: "Aktivitas 1",
  },
  {
    activity: "Aktivitas 2",
  },
  {
    activity: "Aktivitas 3",
  },
];

const Activity = () => {
  return (
    <>
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
            {data.map((item, index) => (
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
                  <EditModal />
                  <DeleteModal />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Activity;
