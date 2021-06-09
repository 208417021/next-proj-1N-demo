import { useState } from 'react';
import styles from '../../styles/Meals.module.css';
import cards_styles from '../../styles/Cards.module.scss';
import cards from '../../meals-data';
import Layout from '../../components/Layout2/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faRandom } from "@fortawesome/free-solid-svg-icons"; // faRandom button

export default function meals() {
    const [input,setInput] = useState('')
    const [mealData, setMealData] = useState([])

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    console.log(input);

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .catch(error => console.error('Error',error))
        .then(res => {
            console.log(res)
            setMealData(res.meals)
        })
    }

    return (
        <Layout>
        <div>
            
            <div className={styles.container}>
                <h1>Meal Finder</h1>
                <div className={styles.flex}>
                    <form className={styles.flex} id="submit">
                    <input type="text" value={input} placeholder="Search for meals or keywords" className={styles.input} onChange={handleInput}/>
                        <button className={styles.search_btn} type="submit" onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </button>
                    </form>
                    <button className={styles.random_btn} id="random">
                        <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
                    </button>
                </div>

                <div id="result-heading"></div>
                <div id="result-heading" className={styles.title__search}><h1>Search Results for ' {input} ' :</h1></div>
                <div id="meals" className={styles.gallery}>

                       {mealData.map((meal)=>(
                           <div className={styles["gallery-card"]}>
                             <img className={styles["gallery-card__img"]} src={meal.strMealThumb} alt={meal.strMeal}/>
                             <div className={styles["gallery-card__details"]} data-mealid={meal.idMeal}> 
                               <h2>{meal.strMeal}</h2>
                             </div>
                           </div>
                        //<Meal key={meal.id} name={meal.name} image={meal.image}></Meal>
                       ))}
                </div>

                <div id="single-meal"></div>
            </div>
            
        </div>
        </Layout>
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