// import React, { Component, useState, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
// import { SubmitButton, ResetButton, Label, InputField, ErrorText } from 'components/ContactFormFormik/ContactFormFormik.styled';
import { SubmitButton, Label, InputField, ErrorText } from 'components/ContactFormFormik/ContactFormFormik.styled';
import { Box } from 'components/Common/Box.styled';

let initialValues = { id: '', name: '', number: '' };

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const addButtonText = 'Add user';
// const editButtonText = 'Update user';

export const ContactFormFormik = ({ onSubmit, onResetForm }) => {
  // const [id, setId] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const contactSubmitHandler = (val, act) => {
    const userAddedSuccessfully = onSubmit(val);
    if (userAddedSuccessfully) act.resetForm();
  };

  // useEffect(() => {
  //   if (editId) {
  //     formik.setFieldValue('id', editId);
  //     formik.setFieldValue('name', editName);
  //     formik.setFieldValue('number', editNumber);
  //   }

  //   setId(editId);
  //   setName(editName);
  //   setNumber(editNumber);
  // }, [editId, editName, editNumber]);

  // const onResetLocalForm = () => {
  //   formik.setFieldValue('id', '');
  //   formik.setFieldValue('name', '');
  //   formik.setFieldValue('number', '');
  //   onResetForm();
  // };

  // if (editId && !id) {
  //   setId(editId);
  //   setName(editName);
  //   setNumber(editNumber);
  // }

  // let setFields = null;
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={contactSubmitHandler}>
      <Form>
        <InputField name="id" hidden />
        <Box display="flex" flexDirection="column" mt="10px" p="0" border="1px solid #888888" borderRadius="2px">
          <Label htmlFor="contactName">Name</Label>
          <InputField id="contactName" type="text" name="name" title="Enter your name" required />
          <ErrorText name="name" component="div" />
        </Box>
        <Box display="flex" flexDirection="column" mt="10px" p="0" border="1px solid #888888" borderRadius="2px">
          <Label htmlFor="contactNumber">Phone number</Label>
          <InputField
            id="contactNumber"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,15}"
            title="Phone number must be up to 15 digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorText name="number" component="div" />
        </Box>
        {/* {editId ? (
          <Box display="flex">
            <SubmitButton type="submit">{editButtonText}</SubmitButton>
            <ResetButton type="reset" onClick={onResetForm}>
              🔙
            </ResetButton>
          </Box>
        ) : ( */}
        <SubmitButton type="submit">{addButtonText}</SubmitButton>
        {/* )} */}
        Formik + yup
      </Form>
    </Formik>
  );
};

//❌✍️👎👍🛑⛔🔙
