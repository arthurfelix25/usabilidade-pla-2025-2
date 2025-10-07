import React, { useState } from 'react';
import './App.css';
import ReminderForm from './components/ReminderForm';
import ReminderCard from './components/ReminderCard';

function App() {
  const [reminderInput, setreminderInput] = useState('');
  const [reminders, setReminders] = useState([]);

  const addReminder = () => {
    if (!reminderInput.trim()) return;
    const newReminder = {
      id: Date.now(),
      title: reminderInput,
      observation: [], 
      observationInput: ''
    };
    setReminders([...reminders, newReminder]);
    setreminderInput('');
  };
  const updateObservationInput = (id, value) => {
    setReminders(reminders.map(reminder =>
      reminder.id === id ? { ...reminder, observationInput: value } : reminder
    ));
};

const addObservation = (id) => {
  setReminders(reminders.map(reminder => {
    if (reminder.id === id && reminder.observationInput.trim()){
      return{
        ...reminder,
        observation: [...reminder.observation, reminder.observationInput],
        observationInput: ''
      };
    }
    return reminder;
  }))
};

return (
  <div className="container">
    <ReminderForm
    value= {reminderInput}
    onChange= {e => setreminderInput(e.target.value)}
    onSubmit= {addReminder}
    />

    <div className="cards">
      {reminders.map(reminder => (
        <ReminderCard
        key= {reminder.id}
        reminder= {reminder}
        onObservationChange={updateObservationInput}
        onObservationSubmit={addObservation}
        />
      ))}
    </div>
  </div>
 );
}

export default App;
