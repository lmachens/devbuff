import type { NextPage } from "next";
import Image from "next/image";
import AppHeader from "../components/AppHeader";
import Badge from "../components/Badge";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import RegistrationForm from "../components/RegistrationForm";
import Review from "../components/Review";
import webDevelopmentSrc from "../public/web-developer.png";
import socialSrc from "../public/social.png";
import supportSrc from "../public/support.png";
import launchProjectSrc from "../public/launch-project.png";
import recoverySrc from "../public/recovery.png";
import buySrc from "../public/buy.png";
import leonSrc from "../public/leon.png";
import AnimatedElement from "../components/AnimatedElement";
import Comparison from "../components/Comparison";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AppHeader />
      <main className={styles.main}>
        <AnimatedElement type="section" className={styles.hero}>
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
              src={webDevelopmentSrc}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </AnimatedElement>

        <AnimatedElement type="section" className={styles.info}>
          <h2 className={styles.subtitle}>Deine Karriere</h2>
          <p>
            Du lernst wie du als Freelancer durchstartest, spannende Projekte in
            dein Portfolio aufnimmst und dafür einen guten Stundensatz bekommst.
            Egal, ob du bereits Erfahrungen als Web Developer hast oder nicht,
            das Bootcamp bereitet dich perfekt auf deine Zukunft vor.
          </p>
        </AnimatedElement>
        <AnimatedElement type="section" className={styles.phase}>
          <div>
            <Image
              src={socialSrc}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.phase__info}>
            <h2>1. Stell dich vor</h2>
            <p>
              Wir möchten mit Talenten arbeiten, die hoch motiviert sind und das
              Bootcamp mit erstaunlichen Ergebnissen absolvieren. Für eine
              perfekte Unterstütztung, ist die maximale Anzahl an
              Teilnehmer*innen auf <b>10</b> limitiert.
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
        </AnimatedElement>
        <AnimatedElement type="section" className={styles.phase}>
          <div className={styles.phase__image}>
            <Image
              src={supportSrc}
              alt=""
              layout="responsive"
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
              Kursteilnehmer*innen zusammen, um perfekt im Team arbeiten zu
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
        </AnimatedElement>
        <AnimatedElement type="section" className={styles.phase}>
          <div className={styles.phase__image}>
            <Image
              src={launchProjectSrc}
              alt=""
              layout="responsive"
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
        </AnimatedElement>
        <AnimatedElement type="section" className={styles.phase}>
          <div className={styles.phase__image}>
            <Image
              src={recoverySrc}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.phase__info}>
            <h2>Die Wochenschwerpunkte</h2>
            <p>
              Wir arbeiten agil und passen die Inhalte dem Kurs an. Als
              Leitfaden kannst du dir aber folgende Wochenschwerpunkte
              anschauen:
            </p>
            <p>
              Woche 1: HTML, Shell, Git, VSCode, CSS
              <br />
              Woche 2: Design, Storybook, CSS Modules
              <br />
              Woche 3: JavaScript, Events, DOM-Manipulation
              <br />
              Woche 4: API, TypeScript
              <br />
              Woche 5: Backend, Node.js, Crypto, MongoDB
              <br />
              Woche 6: React, React Hooks
              <br />
              Woche 7: React Context, TypeScript Advanced
              <br />
              Woche 8: Agile, Kanban, Akquise
            </p>
          </div>
        </AnimatedElement>
        <AnimatedElement type="section" className={styles.phase}>
          <div className={styles.phase__image}>
            <Image
              src={buySrc}
              alt=""
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.phase__info}>
            <h2>Das sind die Kosten</h2>
            <p>
              Das Bootcamp wird zwischen 5.000€ und 7.500€ kosten, je nach der
              Dauer des Bootcamps.
            </p>
            <a href="#start" className="button">
              Jetzt mehr erfahren
            </a>
          </div>
        </AnimatedElement>
        <Comparison />
        <AnimatedElement type="section" className={styles.team}>
          <h2 className={styles.subtitle}>Dein Coach</h2>
          <div className={styles.coach}>
            <div className={styles.avatar}>
              <Image src={leonSrc} alt="Leon Machens" layout="responsive" />
            </div>
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
          </div>
          <div>
            <Review
              message="Leon Machens ist ein großartiger Lehrer und Coach. Eine absolute Empfehlung für diejenigen, die Programmieren lernen wollen."
              author="Mona Vorschulze"
              source="LinkedIn"
              link="https://www.linkedin.com/posts/activity-6829744023838695424-GBx1"
            />
            <Review
              message="Ich habe den Kurs bei den Coaches Leon und Philipp gemacht und kann die beiden nur wärmstens weiterempfehlen."
              author="Stefanie Gierszewski"
              source="Google"
              link="https://goo.gl/maps/33pLmVMdTCFAogZX8"
            />
            <Review
              message="Die Coaches in Köln (Leon und Philipp) sind der Hammer."
              author="Nicolas Becker"
              source="Google"
              link="https://goo.gl/maps/ijWXBhjCWtr2intN8"
            />
            <Review
              message="Leon (Head-Coach) und Philipp (Assistant Coach) haben spannende Übungsaufgaben, Challenges und Unterrichtseinheiten für euch vorbereitet in denen ihr Schritt für Schritt alles wichtige lernt, um in den neuen Job zu starten."
              author="René Schmitz"
              source="Google"
              link="https://goo.gl/maps/izeNqWLHXa6Lsov16"
            />
          </div>
        </AnimatedElement>
        <AnimatedElement type="section" className={styles.start} id="start">
          <h2 className={styles.subtitle}>Jetzt mehr erfahren</h2>
          <RegistrationForm />
        </AnimatedElement>
      </main>
      <AnimatedElement type="footer" className={styles.footer}>
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
      </AnimatedElement>
    </div>
  );
};

export default Home;
