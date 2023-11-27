import React from 'react';
import styles from './loading.module.css'

const Loading = () => {
  return <p id='ring' className={styles.loading}>Loading...</p>;
};

export default Loading;