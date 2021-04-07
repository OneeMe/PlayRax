import { createElement } from 'rax';

import View from 'rax-view';

import Cell from '../../components/Cell';
import styles from './index.module.css';


export default function Home() {
  const left = 'left';
  const right = 'right';
  const center = 'center';
  return (
    <View className={styles.rootContainer}>
      <View className={styles.scrollView}>
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
      </View>
      <View className={styles.scrollView}>
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
      </View>
      <View className={styles.scrollView}>
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
        <Cell left={left} right={right} center={center} />
      </View>
    </View>
  );
}
