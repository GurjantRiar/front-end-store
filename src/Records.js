import { useState, useEffect } from "react";
import RecordCard from "./RecordCard.js";

function Records() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/records")
      .then((response) => response.json())
      .then((result) => setRecords(result))
      .catch(console.log);
  }, []);

  return (
    <>
      <div className="row mt-2">
        <div className="col-8">
          <h1>Records</h1>
        </div>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      {records.length === 0 ? (
        <div className="alert alert-warning">No Records</div>
      ) : (
        <div className="row row-cols-3">
          {records.map((e) => (
            <RecordCard key={e.id} record={e} />
          ))}
        </div>
      )}
    </>
  );
}

export default Records;
