import React from 'react';
import { useDispatch} from 'react-redux';
import { definePage} from '../../store/actions';
import style from './ButtonNavigation.module.css';


function ButtonNavigation({number}) {
  const dispatch = useDispatch();
  function handlerChangePage (e) {
    dispatch(definePage(e.target.value));
  }
  return (
    <div>
       <button className={style.btn} value={number} onClick={handlerChangePage}>{number}</button>
    </div>
  );
};

export default ButtonNavigation;