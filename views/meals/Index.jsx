import React from "react";

const Index = ( {meals} ) => {
    return ( 
        <section>
            <h1>Index Page</h1>
            <section>{meals.map((meal) => (
                <section key={meal._id}>
                    <h3>
                        <a href={`/meals/${meal.id}`}>{meal.name.toUpperCase()}</a>
                    </h3>
                    <p>Meal Details: {meal.details}</p>
                    <p>Dish served?: {meal.servedHot ? "Meal is served hot" : "Meal is served cold"}</p>
                </section>
            ))}</section>
        </section>
     );
}
 
export default Index;