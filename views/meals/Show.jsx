import React from "react";

const Show = ( {meal} ) => {
    return ( 
        <body style={{
            backgroundColor: "peru",
            margin: "0",
            display: "flex",
            flexDirection: "column"
        }}>
            <section style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "column wrap",
                backgroundColor: "blanchedalmond",
                width: "50vw",
                margin: "10vh 25vw",
                border: "5px solid saddlebrown",
                color: "#4d2600",
                textShadow: "2px 2px 10px chocolate",
                padding: "0 10px"
            }}>
                <h1 style={{
                    textAlign: "center",
                    color: "#4d2600",
                    fontSize: "1.75em",
                    textShadow: "1px 1px 5px chocolate",
                    textDecoration: "underline"
                }}>{meal.name} Page
                </h1>
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
                            borderRadius: "20px",
                            textShadow: "none"
                        }} href="/meals">↩ Back</a>
                    </span>
                <h3>
                    <strong>Meal Name: </strong>
                    {meal.name}
                </h3>
                <h5>
                    <strong>Meal Popularity: </strong>
                    {meal.rating}
                </h5>
                <p>
                    <strong>Meal description: </strong>
                    <i>{meal.details}</i></p>
                <p>{meal.servedHot ? "This dish is served hot" : "This dish is served cold"}</p>
                <a style={{
                    color: "chocolate",
                    textDecoration: "none",
                    marginRight: "5vw",
                    fontWeight: "bold",
                    border: "3px solid chocolate",
                    backgroundColor: "blanchedalmond",
                    boxShadow: "5px 5px 5px #4d2600",
                    padding: "10px",
                    borderRadius: "20px",
                    width: "max-content",
                    textShadow: "none"
                }} href={`/meals/${meal._id}/edit`}>Edit Meal Details</a>
                <form action={`/meals/${meal._id}?_method=DELETE`} method="POST">
                    <button style={{
                        color: "chocolate",
                        textDecoration: "none",
                        fontWeight: "bold",
                        border: "3px solid chocolate",
                        backgroundColor: "blanchedalmond",
                        boxShadow: "5px 5px 5px #4d2600",
                        padding: "10px",
                        borderRadius: "20px",
                        marginTop: "5vh",
                        marginBottom: "5vh",
                        width: "max-content",
                        cursor: "pointer"
                }}>Delete</button>
                </form>
            </section>
        </body>
     );
}
 
export default Show;