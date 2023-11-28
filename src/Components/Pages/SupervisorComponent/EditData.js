
import React, { useEffect, useState } from "react";

function PutMethod() {
  const [update, setUpdate] = useState("");
  const [data, setData] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  const fetchGet = () => {
    fetch("http://localhost:3000/Employee")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    fetchGet();
  }, []);

  const fetchData = (itemId) => {
    fetch(`http://localhost:3000/Employee/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: update }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Update successful", res);
        
        fetchGet();
        setEditingItemId(null);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  const handleChange = (e) => {
    setUpdate(e.target.value);
  };

  const handleEditClick = (itemId) => {
    setEditingItemId(itemId);
    const item = data.find((item) => item.id === itemId);
    setUpdate(item.name);
  };

  const handleUserTask = (itemId) => {
    fetchData(itemId);
  };

  return (
    <>
      <center>
        {data.map((item) => (
          <div key={item.id}>
            {editingItemId === item.id ? (
              <>
                <input
                  value={update}
                  onChange={handleChange}
                  placeholder="Enter new name"
                />
                <button onClick={() => handleUserTask(item.id)}>Update</button>
              </>
            ) : (
              <>
                <p>{item.name}</p>
                <button onClick={() => handleEditClick(item.id)}>edit</button>
              </>
            )}
          </div>
        ))}
      </center>
    </>
  );
}

export default PutMethod;
