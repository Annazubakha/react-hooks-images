import s from './Loader.module.css';
import { CircleLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className={s.backdrop}>
      <CircleLoader color="#303f9f" size={150} />
    </div>
  );
};
