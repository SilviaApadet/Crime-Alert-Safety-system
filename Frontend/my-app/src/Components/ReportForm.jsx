import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ReportForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    fetch("http://localhost:3000/reports", {
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
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Submit Crime Report</h2>
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
        <Form className="space-y-3">
          <div>
            <label>Name:</label>
            <Field name="name" className="w-full border p-1" />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Age:</label>
            <Field name="age" type="number" className="w-full border p-1" />
            <ErrorMessage name="age" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Phone Number:</label>
            <Field name="phone" className="w-full border p-1" />
            <ErrorMessage name="phone" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Type of Crime:</label>
            <Field name="type" className="w-full border p-1" />
            <ErrorMessage name="type" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Description:</label>
            <Field name="description" as="textarea" className="w-full border p-1" />
            <ErrorMessage name="description" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Location:</label>
            <Field name="location" className="w-full border p-1" />
            <ErrorMessage name="location" component="div" className="text-red-500" />
          </div>
          <div>
            <label>Date of Incident:</label>
            <Field name="date" type="date" className="w-full border p-1" />
            <ErrorMessage name="date" component="div" className="text-red-500" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit Report
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReportForm;

