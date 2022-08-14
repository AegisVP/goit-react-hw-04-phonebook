import React from 'react';
import { Box } from 'components/Common/Box.styled';
import { Button, Label, InputField } from 'components/Filter/Filter.styled';
import { PropTypes } from 'prop-types';

export const FilterForm = ({ onChange, filterValue, onClear }) => {
  return (
    <Box display="flex" flexDirection="column" my="10px" p="0" border="1px solid #888888" borderRadius="2px">
      <Label htmlFor="contactFIlter">
        Filter
        {filterValue.length > 0 && (
          <Button type="button" onClick={onClear}>
            ❌
          </Button>
        )}
      </Label>
      <InputField id="contactFIlter" onChange={onChange} type="text" name="filter" value={filterValue} />
    </Box>
  );
};

FilterForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
  onClear: PropTypes.func.isRequired
};
