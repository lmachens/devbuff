import AnimatedElement from "./AnimatedElement";
import styles from "../styles/Comparison.module.css";

function Comparison() {
  return (
    <AnimatedElement type="section">
      <h2>Warum DevBuff?</h2>
      <p>
        Anders als andere Bootcamps, brauchen wir auf Grund von einem hohen Grad
        an Automatisierung kein großes Team und können weitere Kosten durch
        jahrelanger Erfahrung deutlich reduzieren.
      </p>
      <div className={styles.comparison}>
        <section className={styles.bad}>
          <h3>Andere Bootcamps</h3>
          <div className={styles.price}>7.500 € - 10.000€</div>
          <ul>
            <li>10-20 Teilnehmer*innen</li>
            <li>Keine Wahl der Coaches</li>
            <li>Generisches Kursinhalte</li>
            <li>Strenge Verträge</li>
            <li>Intransparentes Geschäftsmodell</li>
            <li>Fragwürdige Datenschutzbedingungen</li>
            <li>Kaum öffentlicher Quellcode</li>
          </ul>
        </section>
        <section className={styles.good}>
          <h3>DevBuff</h3>
          <div className={styles.price}>5.000 € - 7.500€</div>
          <ul>
            <li>5-10 Teilnehmer*innen</li>
            <li>Du weißt bei welchem Coach du starten wirst</li>
            <li>Angepasste Inhalte an den Kurs</li>
            <li>Einfache Rechnung ohne Vertrag</li>
            <li>Kein verstecktes Geschäftsmodell</li>
            <li>Deine Daten, deine Kontrolle</li>
            <li>Fast nur Open Source</li>
          </ul>
        </section>
      </div>
    </AnimatedElement>
  );
}

export default Comparison;
