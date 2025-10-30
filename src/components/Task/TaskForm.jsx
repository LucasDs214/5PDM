import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';

function TaskForm() {
  const [taskText, setTaskText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    addTask(taskText.trim());
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="O que precisa ser feito?"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Adicionar
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    padding: '15px 20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    margin: '20px auto'
  },
  input: {
    flex: 1,
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: '0.3s',
  },
  button: {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#00519D',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s',
  }
};

export default TaskForm;
