import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bienvenido a Mi Landing Page</h1>
      </header>
      
      <main className={styles.main}>
        <p className={styles.description}>
          Esta es una landing page de ejemplo creada con Next.js
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Característica 1</h2>
            <p>Descripción de la primera característica importante.</p>
          </div>
          
          <div className={styles.card}>
            <h2>Característica 2</h2>
            <p>Descripción de la segunda característica importante.</p>
          </div>
          
          <div className={styles.card}>
            <h2>Característica 3</h2>
            <p>Descripción de la tercera característica importante.</p>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>© 2024 Mi Landing Page. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}