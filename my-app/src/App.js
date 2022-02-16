import logo from './logo.svg';
import { SideBar } from './modules/sidebar/sidebar';
import { Maps } from './modules/maps/maps';
import styles from './app.module.css';
import './App.css';

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.contents}>
          <Maps />
      </div>
    </div>
  );
}

export default App;
