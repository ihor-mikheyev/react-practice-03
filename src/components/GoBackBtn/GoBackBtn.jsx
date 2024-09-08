import { Link, useLocation } from 'react-router-dom';
import styles from './GoBackBtn.module.css';
import { useRef } from 'react';
export const GoBackBtn = () => {
  const location = useLocation();
  const url = useRef(location.state ?? '/');
  return (
    <Link className={styles.link} to={url.current}>
      Go Back
    </Link>
  );
};
