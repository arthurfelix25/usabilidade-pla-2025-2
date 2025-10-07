import TextField from './TextField';
import Button from './Button';

function ReminderForm({ value, onChange, onSubmit}){
    return (
        <div>
            <h2>New Reminder</h2>
            <TextField
            value= {value}
            onChange={onChange}
            placeholder="Enter your reminder"
            />
            <Button 
            text= "Add Reminder"
            onClick={onSubmit}
            />
        </div>
    );
}

export default ReminderForm;