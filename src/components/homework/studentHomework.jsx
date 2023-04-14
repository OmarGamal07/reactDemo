import React, { useState } from "react";

const HomeworkForm = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    courseProgramId: "",
    note: "",
    file: null,
  });
  const [fileError, setFileError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      file: file,
    }));
    setFileError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { studentId, courseProgramId, note, file } = formData;

    if (!file) {
      setFileError("Please select a file");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("studentId", studentId);
    formDataToSend.append("courseProgramId", courseProgramId);
    formDataToSend.append("note", note);
    formDataToSend.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/homework", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Optionally, show a success message or redirect to another page.
      } else {
        console.error("Error submitting homework");
      }
    } catch (error) {
      console.error("Error submitting homework", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4">
      <h2 className="mb-4">Submit Homework</h2>
      <div className="mb-3">
        <label htmlFor="studentId" className="form-label">
          Student ID
        </label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="courseProgramId" className="form-label">
          Course Program ID
        </label>
        <input
          type="text"
          name="courseProgramId"
          value={formData.courseProgramId}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="note" className="form-label">
          Note
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="file" className="form-label">
          File
        </label>
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          className="form-control"
          required
        />
        {fileError && (
          <div className="invalid-feedback d-block">{fileError}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default HomeworkForm;
