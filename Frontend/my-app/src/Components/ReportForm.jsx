// ReportForm.js
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ReportForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    fetch("http://localhost:5000/reports", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    .then(res => res.json())
    .then(data => {
      alert("Report submitted successfully");
      resetForm();
    });
  };

  return (
    <Formik
      initialValues={{ type: '', description: '', location: '', date: '' }}
      validationSchema={Yup.object({
        type: Yup.string().required('Required'),
        description: Yup.string().min(20, 'Too short').required('Required'),
        location: Yup.string().required('Required'),
        date: Yup.date().required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col gap-4 max-w-md mx-auto mt-8">
        <label>Type</label>
        <Field name="type" as="select">
          <option value="">Select a type</option>
          <option value="Theft">Theft</option>
          <option value="Assault">Assault</option>
          <option value="Burglary">Burglary</option>
        </Field>
        <ErrorMessage name="type" component="div" className="text-red-500" />

        <label>Description</label>
        <Field name="description" as="textarea" />
        <ErrorMessage name="description" component="div" className="text-red-500" />

        <label>Location</label>
        <Field name="location" type="text" />
        <ErrorMessage name="location" component="div" className="text-red-500" />

        <label>Date</label>
        <Field name="date" type="date" />
        <ErrorMessage name="date" component="div" className="text-red-500" />

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit Report</button>
      </Form>
    </Formik>
  );
};

export default ReportForm;
