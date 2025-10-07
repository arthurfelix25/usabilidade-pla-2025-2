import TextField from './TextField';
import Button from './Button';

function ObservationForm({ value, onChange, onSubmit}){
    return (
        <div>
            <TextField
            value= {value}
            onChange= {onChange}
            placeholder= "Add an observation"
            />
            <Button 
            text= "Create"
            onClick= {onSubmit}
            />
        </div>
    );
}

export default ObservationForm;