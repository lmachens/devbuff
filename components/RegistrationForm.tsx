import { FormEvent, useState } from "react";
import styles from "../styles/RegistrationForm.module.css";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [why, setWhy] = useState("");
  const [when, setWhen] = useState("");
  const [more, setMore] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      setErrorMessage("");
      setIsLoading(true);
      await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, why, when, more }),
      });
      setEmail("");
      setWhy("");
      setWhen("");
      setMore("");
      alert("Danke dir! Wir melden uns bei dir per E-Mail.");
    } catch (error) {
      console.error(error);
      setErrorMessage(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }

  const isValid = email.length > 0 && why.length > 0 && when.length > 0;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form__label}>
        <span>Deine E-Mail-Adresse</span>
        <input
          type="email"
          placeholder="z.B. supercoder2000@devbuff.de"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label className={styles.form__label}>
        <span>Warum möchtest du dabei sein?</span>
        <textarea
          placeholder="Erzähle uns, was deine Motivation ist und warum du als Web Developer Freelancer arbeiten möchtest"
          rows={5}
          value={why}
          onChange={(event) => setWhy(event.target.value)}
          required
        />
      </label>
      <label className={styles.form__label}>
        <span>
          Wann kannst du starten und wie viel Zeit kannst du investieren?
        </span>
        <textarea
          placeholder="Hast du z.B. Verpflichtungen, wodurch du nicht in Vollzeit dabei sein kannst?"
          rows={5}
          value={when}
          onChange={(event) => setWhen(event.target.value)}
          required
        />
      </label>
      <label className={styles.form__label}>
        <span>Möchtest du noch etwas mitteilen?</span>
        <textarea
          placeholder="Wir freuen uns über jedes Feedback!"
          rows={5}
          value={more}
          onChange={(event) => setMore(event.target.value)}
        />
      </label>
      <small>
        Mit dem Absenden des Formulars erkläre ich mich mit der
        Datenschutzerklärung einverstanden.
      </small>
      <input
        type="submit"
        value="Mehr erfahren"
        disabled={isLoading || !isValid}
      />
      {errorMessage && <strong>{errorMessage}</strong>}
    </form>
  );
}

export default RegistrationForm;
