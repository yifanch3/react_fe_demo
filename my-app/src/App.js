import logo from './logo.svg';
import { SideBar } from './modules/sidebar/sidebar';
import { TopBar }  from './modules/topbar/topbar';
import { Maps } from './modules/maps/maps';
import { OperationPanel } from './modules/operation_panel/operation_panel';
import styles from './app.module.css';
import './App.css';

function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <TopBar />
      <div className={styles.contents}>
          <Maps />
          <OperationPanel />
      </div>
    </div>
  );
}

export default App;
