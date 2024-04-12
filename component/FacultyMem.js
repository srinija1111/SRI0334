import React, { useState, useEffect } from "react";

const FacultyMem = () => {
  const [faculty, setFaculty] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchfaculty = async () => {
      try {
        const response = await fetch(
          "https://sunanditha2804.github.io/Faculty/Faculty.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFaculty(data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchfaculty();
  }, []);
  const filteredData = faculty.filter((facultyMember) =>
    facultyMember.FacultyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {filteredData.slice(0,5).map((faculty) => (
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <img
                  src={faculty.FacultyImage}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <h5 className="card-title" style={{ textAlign: "left" }}>
                  {faculty.FacultyName}
                </h5>
                <p className="card-text" style={{ textAlign: "left" }}>
                  Position:
                  {faculty.FacultyPosition}
                </p>
                <p className="card-text" style={{ textAlign: "left" }}>
                  Experience:
                  {faculty.FacultyExperience}
                </p>
                <p className="card-text" style={{ textAlign: "left" }}>
                  Degrees:
                  {faculty.FacultyDegree}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FacultyMem;