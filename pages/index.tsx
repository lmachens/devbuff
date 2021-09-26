import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AppHeader from "../components/AppHeader";
import Badge from "../components/Badge";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevBuff</title>
        <meta name="description" content="DevBuff coding bootcamp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.hero__info}>
            <h2 className={styles.title}>Deine Zukunft als Web Developer</h2>

            <p className={styles.description}>
              Level up als Freelancer in unserem 12 Wochen Remote Web Developer
              Bootcamp.
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
              width={700}
              height={511}
            />
          </div>
        </section>

        <section className={styles.info}>
          <h2 className={styles.subtitle}>Deine Karriere</h2>
          <p>
            Du lernst wie du als Freelancer durchstartest, spannende Projekte in
            dein Portfolio aufnimmst und dafür einen guten Stundensatz bekommst.
            Egal, ob du bereits Erfahrungen als Web Developer hast oder nicht,
            das Bootcamp bereitet dich perfekt für deine Zukunft vor.
          </p>
        </section>
        <section className={styles.phase}>
          <Image
            src="/social.png"
            alt="Social"
            layout="responsive"
            width={700}
            height={511}
          />
          <div className={styles.phase__info}>
            <h2>Stell dich vor</h2>
            <p>
              Wir möchten mit Talent*innen arbeiten, die hoch motiviert sind und
              das Bootcamp mit erstaunlichen Ergebnissen absolvieren.
            </p>
            <p>
              Aus diesem Grund möchten wir mit dir über deine Motivation
              sprechen und dich kennen lernen, damit wir die Kursinhalte optimal
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
          <div className={styles.phase__info}>
            <h2>Das Bootcamp startet</h2>
            <p>
              Jetzt geht es los! Die nächsten 12 Wochen wirst du deine Web
              Developer Skills aufbauen und von Tag 1 im Code-Editor arbeiten
              🤖.
            </p>
            <p>
              In den ersten 8 Wochen wirst du Montag bis Freitag von ca. 9-17
              Uhr alle wichtigen Grundlagen kennen lernen und in Praxisprojekten
              anwenden. Im Pair-Programming arbeitest du mit den anderen
              Kursteilnehmer*innen zusammen um perfekt im Team arbeiten zu
              können.
            </p>
            <p>
              Die letzten 4 Wochen nutzt du um an deinem Abschlussprojekt zu
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
          <Image
            src="/support.png"
            alt="Support"
            layout="responsive"
            width={700}
            height={511}
          />
        </section>
        <section className={styles.phase}>
          <Image
            src="/launch-project.png"
            alt="Capstone"
            layout="responsive"
            width={700}
            height={511}
          />
          <div className={styles.phase__info}>
            <h2>Du hast es geschafft</h2>
            <p>
              Voller Stolz und mit einer guten Basis bist du bereit als
              Freelancer die ersten Projekte zu gewinnen. Du profitierst
              weiterhin von unserer Community, in der du dich auch nach
              Abschluss des Bootcamps Unterstützung bekommst.
            </p>
            <p>
              Spannende Projekte findest du über verschiedene Portale,
              Headhunter oder Kontakte, die du in den letzten 12 Wochen kennen
              gelernt hast.
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
          <form className={styles.form}>
            <label className={styles.form__label}>
              <span>Deine E-Mail-Adresse</span>
              <input
                type="email"
                placeholder="z.B. supercoder2000@devbuff.de"
              />
            </label>
            <label className={styles.form__label}>
              <span>Warum möchtest du dabei sein?</span>
              <textarea
                placeholder="Erzähle uns, was deine Motivation ist und warum du als Web Developer Freelancer arbeiten möchtest"
                rows={5}
              />
            </label>
            <label className={styles.form__label}>
              <span>
                Wann kannst du starten und wie viel Zeit kannst du pro Woche
                investieren?
              </span>
              <textarea
                placeholder="Hast du z.B. Verpflichtungen, wodurch du nicht in Vollzeit dabei sein kannst?"
                rows={5}
              />
            </label>
            <small>
              Mit dem Absenden des Formulars erkläre ich mich mit der
              Datenschutzerklärung einverstanden.
            </small>
            <input type="submit" value="Mehr erfahren" />
          </form>
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
          | Keine Cross-Site trackers oder andere gruseligen Dinge |{" "}
          <Link href="/legal">Impressum &amp; Datenschutz</Link>
        </small>
      </footer>
    </div>
  );
};

export default Home;
