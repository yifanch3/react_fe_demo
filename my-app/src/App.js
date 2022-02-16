import logo from './logo.svg';
import { SideBar } from './modules/sidebar/sidebar';
import styles from './app.module.css';
import './App.css';

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.contents}>
          {'fjhskfas'}
      </div>
    </div>
  );
}

export default App;
