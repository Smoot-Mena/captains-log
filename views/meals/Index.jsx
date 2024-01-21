import React from "react";

const Index = ( {meals} ) => {

    return ( 
        <body style={{
            backgroundColor: "peru",
            margin: "0",
            display: "flex",
            flexDirection: "column"
        }}>
            <nav style={{
                display: "flex",
                width: "100vw",
                justifyContent: "right",
                backgroundColor: "tan",
                height: "10vh",
                borderBottom: "4px solid saddlebrown"
            }}>
                <a style={{
                    color: "sienna",
                    textDecoration: "none",
                    fontSize: "1.5em",
                    marginRight: "5vw",
                    marginTop: "2vh",
                    fontWeight: "bold",
                    textShadow: "3px 3px 5px beige"
                }} href="/meals/new">Create Meal</a>
            </nav>
            <section style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "column wrap",
                backgroundColor: "blanchedalmond",
                width: "50vw",
                margin: "10vh 25vw",
                border: "5px solid saddlebrown"
            }}>
            <h1 style={{
                textAlign: "center",
                color: "#4d2600",
                fontSize: "1.75em",
                textShadow: "1px 1px 5px chocolate",
                textDecoration: "underline"
            }}>Meals Page</h1>
            <span style={{
                display: "flex", 
                justifyContent: "right"
            }}>
                <a style={{
                    color: "chocolate",
                    textDecoration: "none",
                    marginRight: "5vw",
                    fontWeight: "bold",
                    border: "3px solid chocolate",
                    backgroundColor: "blanchedalmond",
                    boxShadow: "5px 5px 5px #4d2600",
                    padding: "10px",
                    borderRadius: "20px"
                }} href={`/`}>↩ Back</a>
            </span>
            <section style={{
                padding: "5vh 5vw"
            }}>{meals.map((meal) => (
                <section style={{
                    borderBottom: "3px solid peru",
                    color: "#4d2600"
                }} key={meal._id}>
                    <h3>
                        <a style={{
                            color: "sienna",
                            textDecoration: "none",
                            textShadow: "2px 2px 10px chocolate"
                        }} href={`/meals/${meal.id}`}>{meal.name.toUpperCase()}</a>
                    </h3>
                    <h5>
                        <i>Meal Popularity: {meal.rating}</i>
                    </h5>
                    <p><strong>Meal Details: </strong> {meal.details}</p>
                    <p><strong>Dish served?:</strong> {meal.servedHot ? "Meal is served hot" : "Meal is served cold"}</p>
                </section>
            ))}</section>
            </section>
        </body>
     );
}
 
export default Index;