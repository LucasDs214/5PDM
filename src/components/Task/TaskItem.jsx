import React from 'react';
import { useTasks } from '../../hooks/useTasks';

function TaskItem({ task }) {
  const { deleteTask } = useTasks();

  // Implementação futura: Alternar 'completed'
  // const toggleTask = () => { /* lógica de update do Firestore */ };

  return (
    <li style={styles.item}>
      <span style={{ 
        ...styles.text, 
        textDecoration: task.completed ? 'line-through' : 'none', 
        color: task.completed ? '#999' : '#333' 
      }}>
        {task.text}
      </span>
      <div style={styles.actions}>
        {/* <button onClick={toggleTask} style={styles.toggleButton}>
          {task.completed ? 'Desfazer' : 'Concluir'}
        </button> */}
        <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>
          Excluir
        </button>
      </div>
    </li>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    marginBottom: '8px',
    borderRadius: '8px',
    backgroundColor: '#fefefe',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    transition: '0.3s',
    cursor: 'default',
  },
  text: {
    fontSize: '16px',
    flex: 1,
    wordBreak: 'break-word',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#ff4d4d',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.2s',
  },
  toggleButton: {
    backgroundColor: '#00519D',
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    padding: '6px 12px',
    cursor: 'pointer',
    transition: '0.2s',
  },
};

export default TaskItem;
