import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';

const styles = {
  textTop: {
    color: '#10375c',
    lineHeight: '1.7rem'
  },
  textMuted: {
    color: '#10375c',
    fontSize: '0.9rem',
    lineHeight: '1.7rem'
  },
  errorMsg: {
    color: '#d61456',
    fontSize: '0.8rem',
    lineHeight: '1.7rem'
  }
};

const diagnosis = [
  { value: 'ALS', label: 'ALS' },
  { value: "Alzheimer's", label: "Alzheimer's" },
  { value: 'Cancer', label: 'Cancer' },
  { value: 'Heart Disease', label: 'Heart Disease' },
  { value: 'HIV and AIDS', label: 'HIV and AIDS' },
  { value: 'Liver Disease', label: 'Liver Disease' },
  { value: 'Lung Disease', label: 'Lung Disease' },
  { value: 'Renal Disease', label: 'Renal Disease' },
  { value: 'Sepsis', label: 'Sepsis' },
  { value: 'Other/Unknown', label: 'Other/Unknown' }
];

const location = [
  { value: 'Home', label: 'Home' },
  { value: 'Hospital/Facility', label: 'Hospital/Facility' }
];

const relationship = [
  { value: 'professional healthcare', label: 'A professional healthcare facility or officer' },
  { value: 'relative/loved one/myself', label: 'A relative, a loved one, or myself' }
];

export default function Inquiry() {
  const [submittedData, setSubmittedData] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState,
    formState: { errors }
  } = useForm({
    defaultValues: {
      patientFirstName: '',
      patientLastName: '',
      patientPhoneNumber: '',
      diagnosis: '',
      location: '',
      contactFirstName: '',
      contactLastName: '',
      email: '',
      contactPhoneNumber: '',
      relationship: ''
    }
  });

  const onSubmit = data => {
    // event.preventDefault();
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('/newInquiry', req)
      .then(res => res.text())
      .then(response => {
        // setLoading(true);
      });
    // .catch(setError);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setSubmittedData(true);
    }
  }, [formState, submittedData, reset]);

  return (
    <form
        className="container mt-3 d-flex flex-column col-lg-10"
        onSubmit={handleSubmit(onSubmit)}>
      <div className="row flex-column">
        <h1 className="px-3 py-2 my-2 my-lg-3">Referrals</h1>
      </div>
      <div className="row flex-column my-2">
        <div className="p-3 py-2 py-md-0">
          <h6 style={styles.textTop} >
            Thank you for referring your hospice-eligible patient to Hope Care Hospice. Complete the form below to submit your secure referral.
          </h6>
        </div>
        <div className="p-3 py-2 py-md-0">
          <h6 style={styles.textTop} >
            If you are a clinician who prefers to speak to us in person, call 714-724-8033 to make a referral over the phone.
          </h6>
        </div>
        <div className="p-3 py-2 py-md-0">
          <h6 style={styles.textMuted} className="text-muted" >
            Fields marked with * are required.
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
          <Form.Group className="col-md-5 mb-3 m-md-0">
            <Form.Label htmlFor="patientFirstName">Patient&apos;s First Name: *</Form.Label>
            <Form.Control
                autoFocus
                type="text"
                name="patientFirstName"
                {...register('patientFirstName', {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "Patient's first name should be at least 2 characters."
                  }
                })}
                placeholder="Patient First Name"/>
            {errors.patientFirstName?.type === 'required' && (
            <p className="errorMsg px-3" style={styles.errorMsg}>Patient&apos;s first name is required.</p>
            )}
            {errors.patientFirstName?.type === 'minLength' && (
            <p className="errorMsg px-3" style={styles.errorMsg}>{errors.patientFirstName.message}</p>
            )}
          </Form.Group>
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="patientLastName">Patient&apos;s Last Name: *</Form.Label>
            <Form.Control
                type="text"
                name="patientLastName"
                {...register('patientLastName', {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "Patient's last name should be at least 2 characters."
                  }
                })}
                placeholder="Patient Last Name" />
            {errors.patientLastName?.type === 'required' && (
              <p className="errorMsg px-3" style={styles.errorMsg}>Patient&apos;s last name is required.</p>
            )}
            {errors.patientLastName?.type === 'minLength' && (
              <p className="errorMsg px-3" style={styles.errorMsg}>{errors.patientLastName.message}</p>
            )}
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="patientPhoneNumber">Patient&apos;s Phone Number:</Form.Label>
            <Form.Control
                type="text"
                name="patientPhoneNumber"
                {...register('patientPhoneNumber', {
                  minLength: {
                    value: 10,
                    message: 'Phone number should be 10 numbers only.'
                  }
                })}
                placeholder="Patient Phone Number" />
            {errors.patientPhoneNumber?.type === 'minLength' &&
            <p className="errorMsg px-3" style={styles.errorMsg}>{errors.patientPhoneNumber.message}</p>
              }
          </Form.Group>
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="diagnosis">Patient&apos;s Diagnosis: *</Form.Label>
            <Controller
                name="diagnosis"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} options={diagnosis} />
                )}
                defaultValue=""
              />
            {errors.diagnosis && (
            <p className="errorMsg px-3" style={styles.errorMsg}>This is a required field.</p>
            )}
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="location">Patient&apos;s Current Location: *</Form.Label>
            <Controller
                name="location"
                control = {control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} options={location} />
                )}
                defaultValue=""
                />
            {errors.location && (
            <p className="errorMsg px-3" style={styles.errorMsg}>This is a required field.</p>
            )}
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="contactFirstName">Patient Contact First Name: *</Form.Label>
            <Form.Control
                type="text"
                name="contactFirstName"
                {...register('contactFirstName', {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "Contact's first name should be at least 2 characters."
                  }
                })}
                placeholder="Patient Last Name" />
            {errors.contactFirstName?.type === 'required' && (
            <p className="errorMsg px-3" style={styles.errorMsg}>Contact&apos;s last name is required.</p>
            )}
            {errors.contactFirstName?.type === 'minLength' && (
            <p className="errorMsg px-3" style={styles.errorMsg}>{errors.contactFirstName.message}</p>
            )}
          </Form.Group>
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="contactLastName">Patient Contact Last Name: *</Form.Label>
            <Form.Control
                type="text"
                name="contactLastName"
                {...register('contactLastName', {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "Contact's last name should be at least 2 characters."
                  }
                })}
                placeholder="Patient Last Name" />
            {errors.contactLastName?.type === 'required' && (
            <p className="errorMsg px-3" style={styles.errorMsg}>Contact&apos;s last name is required.</p>
            )}
            {errors.contactLastName?.type === 'minLength' && (
            <p className="errorMsg px-3" style={styles.errorMsg}>{errors.contactLastName.message}</p>
            )}
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="email">Patient Contact Email: *</Form.Label>
            <Form.Control
                type="email"
                name="email"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Please enter a valid email'
                  }
                })}
                placeholder="Contact email address" />
            {errors.email?.type === 'required' && (
            <p className="errorMsg px-3" style={styles.errorMsg}>Email address is required.</p>
            )}
            {errors.email?.type === 'pattern' && (
            <p className="errorMsg px-3" style={styles.errorMsg}>{errors.email.message}</p>
            )}
          </Form.Group>
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="contactPhoneNumber">Patient Contact Phone Number: *</Form.Label>
            <Form.Control
                type="text"
                name="contactPhoneNumber"
                {...register('contactPhoneNumber', {
                  minLength: {
                    value: 10,
                    message: 'Phone number should be 10 numbers only.'
                  }
                })}
                placeholder="Patient Phone Number" />
            {errors.contactPhoneNumber?.type === 'minLength' &&
            <p className="errorMsg px-3" style={styles.errorMsg}>{errors.contactPhoneNumber.message}</p>
              }
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="d-flex px-3 py-md-2 flex-column flex-md-row col-12 justify-content-between">
          <Form.Group className="col-md-5 mb-3 m-md-0" >
            <Form.Label htmlFor="relationship">This Referral is made on behalf of: *</Form.Label>
            <Controller
                name="relationship"
                control = {control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field} options={relationship} />
                )}
                defaultValue=""
                />
            {errors.relationship && (
            <p className="errorMsg px-3" style={styles.errorMsg}>This is a required field.</p>
            )}
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="d-flex col-12 justify-content-center justify-content-md-end">
          <Button
            type="submit"
            className="call-button-all m-2 px-5">
            <b>SUBMIT</b></Button>
        </div>
      </div>
      <div className="row flex-column my-2">
        <div className="p-3 py-2 py-md-0">
          <h6 style={styles.textMuted}>
            {submittedData ? 'Thank you for your submission! We will contact you soon.' : ''}
          </h6>
        </div>
      </div>
    </form>
  );
}