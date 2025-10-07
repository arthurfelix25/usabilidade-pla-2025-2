import ObservationForm from './ObservationForm';
import ObservationList from './ObservationList';

function ReminderCard({ reminder, onObservationChange, onObservationSubmit }) {
    return (
        <div
        className= "card">
            <h3>{reminder.title}</h3>
            <ObservationForm
            value= {reminder.observationInput}
            onChange= {e => onObservationChange(reminder.id, e.target.value)}
            onSubmit= {() => onObservationSubmit(reminder.id)}
            />
            <ObservationList
            observation={reminder.observation}
            />
        </div>
    );
}

export default ReminderCard;