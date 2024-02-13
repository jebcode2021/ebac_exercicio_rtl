import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://a-static.mlcdn.com.br/450x450/helicoptero-com-controle-remoto-3-canais-estrela/magazineluiza/183725000/e09322c63fac297a349f757db874185d.jpg">
        Olhá só esse produto Helicóptero de Controle Remoto!
      </Post>
    </div>
  );
}

export default App;
