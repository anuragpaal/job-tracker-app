import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandidates } from "../candidateThunk";

export default function Candidates() {
  const dispatch = useDispatch();

  const { list, loading } = useSelector((s) => s.candidates);

  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch]);

  return(
    <div>
        <h2 className="text-2xl font-bold mb-6">Candidates</h2>
        
        {loading && <p>Loading...</p>}

        <div className="grid grid-cols-3 gap-6">
            {list.map((c) =>(
                <div key={c.id} className="bg-white p-5 shadow rounded">
                    <h3 className="font-bold">
                        {c.name}
                    </h3>
                    <p>{c.email}</p>
                    <p className="text-gray-500">
                        {c.company.name}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}
