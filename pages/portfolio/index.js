// import styles from '../../styles/Portfolio.module.css';
import cards_styles from '../../styles/Cards.module.scss';

export default function Portfolio() {
  return (
    <div>
      <section className={cards_styles.card_container}>
        <div className={cards_styles.card}>
          <div className={cards_styles.card__body}>
            <img
              src='https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
              alt=''
              className={cards_styles.card__image}
            />
            <h2 className={cards_styles.card__title}>The Everyday Salad</h2>
            <p className={cards_styles.card__description}>
              Take your boring salads up a knotch. This recipe is perfect for
              lunch and only contains 5 ingredients!
            </p>
          </div>
          <button className={cards_styles.card__btn}>View Recipe</button>
        </div>
        <div className={cards_styles.card}>
          <div className={cards_styles.card__body}>
            <img
              src='https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
              alt=''
              className={cards_styles.card__image}
            />
            <h2 className={cards_styles.card__title}>The Everyday Salad</h2>
            <p className={cards_styles.card__description}>
              Take your boring salads up a knotch. This recipe is perfect for
              lunch and only contains 5 ingredients!
            </p>
          </div>
          <button className={cards_styles.card__btn}>View Recipe</button>
        </div>
        <div className={cards_styles.card}>
          <div className={cards_styles.card__body}>
            <img
              src='https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
              alt=''
              className={cards_styles.card__image}
            />
            <h2 className={cards_styles.card__title}>The Everyday Salad</h2>
            <p className={cards_styles.card__description}>
              Take your boring salads up a knotch. This recipe is perfect for
              lunch and only contains 5 ingredients!
            </p>
          </div>
          <button className={cards_styles.card__btn}>View Recipe</button>
        </div>
      </section>
    </div>
  );
}
