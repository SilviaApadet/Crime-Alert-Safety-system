import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const ReportForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    fetch("http://localhost:5000/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(() => resetForm());
  };


  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    age: Yup.number()
      .min(13, "You must be at least 13 years old to report")
      .required("Age is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    type: Yup.string().required("Type is required"),
    description: Yup.string().min(10, "At least 10 characters").required(),
    location: Yup.string().required("Location is required"),
    date: Yup.date().required("Date is required"),
  });


  return (
    <div className="report-form-container">
      <h2 className="form-title">Report a crime</h2>
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
          <div className="form-group">
            <label className="form-label">Name:</label>
            <Field name="name" className="form-input" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label className="form-label">Age:</label>
            <Field name="age" type="number" className="form-input" />
            <ErrorMessage name="age" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number:</label>
            <Field name="phone" className="form-input" />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label className="form-label">Type of Crime:</label>
            <Field name="type" className="form-input" />
            <ErrorMessage name="type" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label className="form-label">Description:</label>
            <Field name="description" as="textarea" className="form-input" />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label className="form-label">Location:</label>
            <Field name="location" className="form-input" />
            <ErrorMessage name="location" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label className="form-label">Date of Incident:</label>
            <Field name="date" type="date" className="form-input" />
            <ErrorMessage name="date" component="div" className="error-message" />
          </div>
          <button type="submit" className="submit-button">
            Submit Report
          </button>
        </Form>
      </Formik>
    </div>
  );
};


export default ReportForm;



