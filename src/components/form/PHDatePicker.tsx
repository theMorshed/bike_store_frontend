import { DatePicker, Form } from 'antd';
import { Controller } from 'react-hook-form';

type TPHDatePickerProps = {
  label?: string;
  name: string;
};

const PHDatePicker = ({ label, name }: TPHDatePickerProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <DatePicker {...field} size="large" style={{width: "100%"}} />
        </Form.Item>
      )}
    />
  );
};


export default PHDatePicker;