import React, { Component } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  SubmitButton,
  ResetButton,
  Label,
  InputField,
  ErrorText,
} from 'components/ContactFormFormik/ContactFormFormik.styled';
import { Box } from 'components/Common/Box.styled';

let initialValues = { id: '', name: '', number: '' };
const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const addButtonText = 'Add user';
const editButtonText = 'Update user';

export class ContactFormFormik extends Component {
  state = initialValues;

  componentDidUpdate() {
    const { editId, editName, editNumber } = this.props;

    if (editId) {
      this.setFields('id', editId);
      this.setFields('name', editName);
      this.setFields('number', editNumber);
    }
  }

  onResetForm = () => {
    this.setFields('id', '');
    this.setFields('name', '');
    this.setFields('number', '');
    this.props.onResetForm();
  };

  contactSubmitHandler = (val, act) => {
    if (this.props.onSubmit(val)) act.resetForm();
  };

  formResetHandler = () => {};

  render() {
    if (this.props.editId && !this.state.id) {
      const { editId, editName, editNumber } = this.props;
      this.setState({ id: editId, name: editName, number: editNumber });
    }

    return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={this.contactSubmitHandler}>
        {({ setFieldValue }) => {
          this.setFields = (name, value) => setFieldValue([name], value);

          return (
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
              {this.props.editId ? (
                <Box display="flex">
                  <SubmitButton type="submit">{editButtonText}</SubmitButton>
                  <ResetButton type="reset" onClick={this.onResetForm}>
                    🔙
                  </ResetButton>
                </Box>
              ) : (
                <SubmitButton type="submit">{addButtonText}</SubmitButton>
              )}
              Formik + yup
            </Form>
          );
        }}
      </Formik>
    );
  }
}
//❌✍️👎👍🛑⛔🔙

ContactFormFormik.propTypes = {
  onSubmit: PropTypes.func,
};
