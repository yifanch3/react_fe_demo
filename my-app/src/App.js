import logo from './logo.svg';
import { SideBar } from './modules/sidebar/sidebar';
import { TopBar }  from './modules/topbar/topbar';
import { Maps } from './modules/maps/maps';
import styles from './app.module.css';
import './App.css';

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <TopBar />
      <div className={styles.contents}>
          <Maps />
      </div>
    </div>
  );
}

export default App;
