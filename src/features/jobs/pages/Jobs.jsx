import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob, deleteJob, fetchJobs } from "../jobsThunks";

export default function Jobs() {
  const dispatch = useDispatch();

  const { list, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    console.log("Dispatching fetchJobs");
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Jobs</h2>

      {loading && <p>Loading...</p>}

      <table className="bg-white w-full shadow">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map((job) => (
            <tr key={job.id} className="border-b">
              <td className="p-3">{job.id}</td>
              <td className="p-3">{job.title}</td>
              <td className="p-3">
               
                   <button className="bg-green-500 text-white px-4 py-2 m-4 rounded"
                  onClick={() => 
                    dispatch(addJob({
                      title: "Frontend Dev",
                      body: "React Role",
                      userId: 1
                    }))
                  }
                >
                  Add Job
                </button>

                <button onClick={() =>
                  dispatch(deleteJob(job.id))
                } className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete
                </button>
             
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}
