import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelection } from '../action/selection-actions';

const ExamplePage1 = () => {
  const dispatch = useDispatch();
  const selections = useSelector(state => state.selections);
  const [isChecked, setIsChecked] = useState(selections['exampleCheckbox1'] || false);

  console.log(selections);
  useEffect(() => {
    setIsChecked(selections['exampleCheckbox1'] || false);
  }, [selections]);

  const handleSelectionChange = (newValue) => {
    setIsChecked(newValue);
    dispatch(setSelection('exampleCheckbox1', newValue));
    //console.log(newValue);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={(e) => handleSelectionChange('e.target.checked')} />
      {/* Other page content */}
    </div>
  );
};

export default ExamplePage1;
