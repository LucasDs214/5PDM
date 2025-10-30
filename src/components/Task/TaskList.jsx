import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks, loading } = useTasks();

  if (loading) {
    return <div style={styles.message}>Carregando tarefas...</div>;
  }

  if (tasks.length === 0) {
    return <div style={styles.message}>Nenhuma tarefa encontrada. Comece a adicionar!</div>;
  }

  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    maxWidth: '500px',
    margin: '0 auto',
    marginTop: '10px',
  },
  message: {
    textAlign: 'center',
    color: '#555',
    fontSize: '16px',
    marginTop: '20px',
    fontStyle: 'italic',
  },
};

export default TaskList;
