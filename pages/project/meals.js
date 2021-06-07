
import styles from '../../styles/Meals.module.css';
import cards_styles from '../../styles/Cards.module.scss';
import cards from '../../meals-data';
import Layout from '../../components/Layout2/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faRandom } from "@fortawesome/free-solid-svg-icons"; // faRandom button

export default function meals() {
    return (
        <div>
            <Layout>
            <div className={styles.container}>
                <h1>Meal Finder</h1>
                <div className={styles.flex}>
                    <form className={styles.flex} id="submit">
                        <input
                            type="text"
                            id="search"
                            placeholder="Search for meals or keywords"
                        />
                        <button className={styles.search_btn} type="submit">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </button>
                    </form>
                    <button className={styles.random_btn} id="random">
                        <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
                    </button>
                </div>

                <div id="result-heading"></div>

                <div id="meals" className={styles.meals}>
                    <div className={styles.meal}>
                        <img
                            src="https://www.themealdb.com/images/media/meals/1529446137.jpg"
                            alt="Egg Drop Soup"
                        />
                        <div className={styles.meal_info} data-mealid="52955">
                            <h3>Egg Drop Soup</h3>
                        </div>
                    </div>

                    <div className={styles.meal}>
                        <img
                            src="https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg"
                            alt="Tuna and Egg Briks"
                        />
                        <div className={styles.meal_info} data-mealid="52975">
                            <h3>Tuna and Egg Briks</h3>
                        </div>
                    </div>

                    <div className={styles.meal}>
                        <img
                            src="https://www.themealdb.com/images/media/meals/1550440197.jpg"
                            alt="Salmon Eggs Eggs Benedict"
                        />
                        <div className={styles.meal_info} data-mealid="52962">
                            <h3>Salmon Eggs Eggs Benedict</h3>
                        </div>
                    </div>

                    <div className={styles.meal}>
                        <img
                            src="https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg"
                            alt="Roasted Eggplant With Tahini, Pine Nuts, and Lentils"
                        />
                        <div className={styles.meal_info} data-mealid="52816">
                            <h3>Roasted Eggplant With Tahini, Pine Nuts, and Lentils</h3>
                        </div>
                    </div>

                    <div className={styles.meal}>
                        <img
                            src="https://www.themealdb.com/images/media/meals/yqwtvu1487426027.jpg"
                            alt="Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt"
                        />
                        <div className={styles.meal_info} data-mealid="52817">
                            <h3>Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt</h3>
                        </div>
                    </div>
                </div>

                <div id="single-meal"></div>

                <section className={cards_styles.card_container}>
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </section>
            </div>
            </Layout>
        </div>
    )
}

function Card({ image, title, description }) {
    return (
      <div className={cards_styles.card}>
        <div className={cards_styles.card__body}>
          <img src={image} alt='' className={cards_styles.card__image} />
          <h2 className={cards_styles.card__title}>{title} </h2>
          <p className={cards_styles.card__description}>{description}</p>
        </div>
        <button className={cards_styles.card__btn}>View Recipe</button>
      </div>
    );
  }