import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { Button } from 'components/Button/Button';
import { getStatusFilter } from '../../redux/selectors';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  // Get value filter from state Redux
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
