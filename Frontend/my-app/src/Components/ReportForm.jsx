import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const ReportForm = () => {
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:5000/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error response:", errorText);
        throw new Error("Failed to submit report. Server responded with an error.");
      }

      const data = await response.json();
      console.log("Successfully submitted:", data);
      resetForm();
      setSubmitError(""); // Clear error if successful
    } catch (err) {
      console.error("Submission failed:", err.message);
      setSubmitError("Submission failed. Please try again later.");
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2).required("Name is required"),
    age: Yup.number().min(13).required("Age is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required(),
    type: Yup.string().required("Type is required"),
    description: Yup.string().min(10).required("Description is required"),
    location: Yup.string().required("Location is required"),
    date: Yup.date().required("Date is required"),
  });

  return (
    <div className="report-form-container">
      <h2 className="form-title">Report a Crime</h2>
      {submitError && <div className="error-message">{submitError}</div>}
      <Formik
        initialValues={{
          name: '',
          age: '',
          phone: '',
          type: '',
          description: '',
          location: '',
          date: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form">
          <FormGroup label="Name:" name="name" />
          <FormGroup label="Age:" name="age" type="number" />
          <FormGroup label="Phone Number:" name="phone" />
          <FormGroup label="Type of Crime:" name="type" />
          <FormGroup label="Description:" name="description" as="textarea" />
          <FormGroup label="Location:" name="location" />
          <FormGroup label="Date of Incident:" name="date" type="date" />

          <button type="submit" className="submit-button">
            Submit Report
          </button>
        </Form>
      </Formik>
    </div>
  );
};

// Reusable form group component
const FormGroup = ({ label, name, type = "text", as = "input" }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <Field name={name} type={type} as={as} className="form-input" />
    <ErrorMessage name={name} component="div" className="error-message" />
  </div>
);

export default ReportForm;
