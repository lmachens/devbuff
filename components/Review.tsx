import styles from "../styles/Review.module.css";

type ReviewProps = {
  message: string;
  author: string;
  source: string;
  link: string;
};

function Review({ message, author, source, link }: ReviewProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={styles.review}>
      <figure>
        <blockquote cite={link} className={styles.blockquote}>
          <p>{message}</p>
        </blockquote>
        <figcaption className={styles.figcaption}>
          {author} über <cite>{source}</cite>
        </figcaption>
      </figure>
    </a>
  );
}

export default Review;
