import Task from 'elements/Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.length
        ? tasks.map((task) => {
            return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />;
          })
        : 'Your Task Empty'}
    </>
  );
};

export default Tasks;
