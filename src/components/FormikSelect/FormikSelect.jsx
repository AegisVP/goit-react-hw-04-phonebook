import React from 'react';
import { PropTypes } from 'prop-types';

export const FormikSelect = ({ isSelected, onFormikSelect }) => (
  <label>
    Show Formik: &nbsp;
    <input type="checkbox" name="formik" checked={isSelected} onChange={onFormikSelect} />
  </label>
);

FormikSelect.propTypes = { formikSelected: PropTypes.bool, onFormikSelect: PropTypes.func };
