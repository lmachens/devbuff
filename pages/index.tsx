import type { NextPage } from "next";
import Image from "next/image";
import AppHeader from "../components/AppHeader";
import Badge from "../components/Badge";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import RegistrationForm from "../components/RegistrationForm";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AppHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.hero__info}>
            <h2 className={styles.title}>Dein Weg zum Web Developer</h2>

            <p className={styles.description}>
              Starte deine Karriere als Freelancer in unseren Remote Web
              Developer Bootcamps.
            </p>

            <a href="#start" className={`button ${styles.hero__start}`}>
              Jetzt mehr erfahren
            </a>
          </div>
          <div className={styles.hero__image}>
            <Image
              src="/web-developer.png"
              alt="Web Developer"
              layout="responsive"
              width={695}
              height={585}
              objectFit="contain"
            />
          </div>
        </section>

        <section className={styles.info}>
          <h2 className={styles.subtitle}>Deine Karriere</h2>
          <p>
            Du lernst wie du als Freelancer durchstartest, spannende Projekte in
            dein Portfolio aufnimmst und dafür einen guten Stundensatz bekommst.
            Egal, ob du bereits Erfahrungen als Web Developer hast oder nicht,
            das Bootcamp bereitet dich perfekt auf deine Zukunft vor.
          </p>
        </section>
        <section className={styles.phase}>
          <div>
            <Image
              src="/social.png"
              alt="Social"
              layout="responsive"
              width={1587}
              height={1158}
              objectFit="contain"
            />
          </div>
          <div className={styles.phase__info}>
            <h2>1. Stell dich vor</h2>
            <p>
              Wir möchten mit Talenten arbeiten, die hoch motiviert sind und das
              Bootcamp mit erstaunlichen Ergebnissen absolvieren.
            </p>
            <p>
              Aus diesem Grund möchten wir mit dir über deine Motivation
              sprechen und dich kennenlernen, damit wir die Kursinhalte optimal
              auf alle Teilnehmer*innen zuschneiden können.
            </p>
            <p>
              Keine Angst, du brauchst keine Vorerfahrung als Web Developer zu
              haben, allerdings achten wir darauf, dass du selbständig arbeiten
              kannst und belastbar bist. Wir haben viel vor 😀.
            </p>
            <p>
              Das Bootcamp findet Remote statt und ist deutschsprachig,
              allerdings solltest du dich auch auf Englisch verständigen können.
            </p>
          </div>
        </section>
        <section className={styles.phase}>
          <div className={styles.phase__image}>
            <Image
              src="/support.png"
              alt="Support"
              layout="responsive"
              width={1587}
              height={1158}
              objectFit="contain"
            />
          </div>
          <div className={styles.phase__info}>
            <h2>2. Das Bootcamp startet</h2>
            <p>
              Jetzt geht es los! Die nächsten 8-12 Wochen wirst du deine Skills
              als Web Developer aufbauen und von Tag 1 im Code-Editor arbeiten
              🤖.
            </p>
            <p>
              In den ersten 8 Wochen wirst du Montag bis Freitag von ca. 9-17
              Uhr alle wichtigen Grundlagen kennenlernen und in Praxisprojekten
              anwenden. Im Pair-Programming arbeitest du mit den anderen
              Kursteilnehmer*innen zusammen um perfekt im Team arbeiten zu
              können.
            </p>
            <p>
              Falls du dich für die Projektphase entschieden hast, wirst du die
              letzten 4 Wochen nutzen, um an deinem Abschlussprojekt zu
              arbeiten. Hierbei erarbeitest du dir neue Themen, setzt einen
              Fokus und baust dein Portfolio auf, um als Freelancer neue
              Projekte zu gewinnen.
            </p>
            <p>Der Fokus wird auf folgenden Inhalten liegen:</p>
            <p className={styles.stack}>
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>MongoDB</Badge>
              <Badge>Git</Badge>
            </p>
          </div>
        </section>
        <section className={styles.phase}>
          <div className={styles.phase__image}>
            <Image
              src="/launch-project.png"
              alt="Capstone"
              layout="responsive"
              width={1587}
              height={1158}
              objectFit="contain"
            />
          </div>
          <div className={styles.phase__info}>
            <h2>3. Du hast es geschafft</h2>
            <p>
              Voller Stolz und mit einer guten Basis bist du bereit als
              Freelancer die ersten Projekte zu gewinnen. Du profitierst
              weiterhin von unserer Community, in der du dich auch nach
              Abschluss des Bootcamps Unterstützung bekommst.
            </p>
            <p>
              Spannende Projekte findest du über verschiedene Portale,
              Headhunter oder Kontakte, die du in den letzten 12 Wochen
              kennengelernt hast.
            </p>
            <a href="#start" className="button">
              Jetzt mehr erfahren
            </a>
          </div>
        </section>
        <section className={styles.team}>
          <h2 className={styles.subtitle}>Dein Coach</h2>
          <div className={styles.coach}>
            <div>
              <p>
                <span className={styles.coach__catch}>Hi 👋, ich bin Leon</span>
                <br />
                und bin seit über 10 Jahren leidenschaftlicher Web Developer. In
                den letzten Jahren arbeitete ich als Head Coach für das{" "}
                <a
                  href="https://www.neuefische.de"
                  target="_blank"
                  rel="noreferrer"
                >
                  neue fische
                </a>{" "}
                Coding Bootcamp, in dem ich mehr als 100 Web Developer
                ausgebildet hatte.
              </p>
              <p>
                Mein Herz schlägt für Gaming und Open Source ❤, was sich durch
                viele Projekte zeigt, an denen ich in den letzten Jahren
                gearbeitet habe. Eine dieser Projekte ist{" "}
                <a href="https://th.gl" target="_blank" rel="noreferrer">
                  Trophy Hunter
                </a>
                , eine Gaming App für League of Legends.
              </p>
              <p>
                Mehr über mich findest du auf{" "}
                <a
                  href="https://leon.machens.koeln"
                  target="_blank"
                  rel="noreferrer"
                >
                  meiner Website
                </a>{" "}
                und auf{" "}
                <a
                  href="https://github.com/lmachens"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
            <div className={styles.avatar}>
              <Image
                src="/leon.png"
                alt="Leon Machens"
                layout="responsive"
                width={600}
                height={607}
              />
            </div>
          </div>
        </section>
        <section className={styles.start} id="start">
          <h2 className={styles.subtitle}>Jetzt mehr erfahren</h2>
          <RegistrationForm />
        </section>
      </main>
      <footer className={styles.footer}>
        <small>
          © 2021{" "}
          <a
            href="https://leon.machens.koeln/"
            target="_blank"
            rel="noreferrer"
          >
            Leon Machens
          </a>{" "}
          | <Link href="/legal">Impressum &amp; Datenschutz</Link>
          <br />
          Ohne Cross-Site-Trackers oder andere gruseligen Dinge ❤️
        </small>
      </footer>
    </div>
  );
};

export default Home;
