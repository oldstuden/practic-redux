import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Task } from 'components/Task/Task';
import { getTasks, getStatusFilter } from '../../redux/selectors';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};
export const TaskList = () => {
  // Get array tasks from state Redux
  const tasks = useSelector(getTasks);
  // Get value filter from state Redux
  const statusFilter = useSelector(getStatusFilter);
  // Calculation array tasks which need to be displayed in the interface
  const visibleTask = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTask.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
