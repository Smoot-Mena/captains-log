import React from "react";

const Edit = ( {meal} ) => {
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
                border: "5px solid saddlebrown"
            }}>
                <h1 style={{
                    textAlign: "center",
                    color: "#4d2600",
                    fontSize: "1.75em",
                    textShadow: "1px 1px 5px chocolate",
                    textDecoration: "underline"
                }}>Edit Meal</h1>
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
                    }} href={`/meals/${meal._id}`}>↩ Back</a>
                </span>
                <form style={{
                    margin: "5vh 8vw",
                    display: "flex",
                    flexFlow: "column wrap",
                    color: "sienna",
                    textDecoration: "none",
                    textShadow: "2px 2px 10px chocolate",
                    width: "max-content"
                }} action={`/meals/${meal._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">
                        <strong>Meal Name: </strong>
                    </label>
                    <input name="name" type="text" size={50} defaultValue={meal.name} style={{
                        marginBottom: "3vh",
                    }}/>

                    <label htmlFor="rating">
                        <strong>Meal Popularity: </strong>
                    </label>
                    <input name="rating" type="number" max={10} min={0} defaultValue={meal.rating} style={{
                        marginBottom: "3vh"
                    }}/>

                    <label htmlFor="details">
                        <strong>Description: </strong>
                    </label>
                    <textarea rows={4} cols={40} wrap="hard" name="details" type="text" defaultValue={meal.details} style={{
                        marginBottom: "3vh"
                    }}/>

                    <label htmlFor="servedHot">
                        <strong>Dish is served?: </strong>
                    </label>
                    <input name="servedHot" type="checkbox" defaultChecked={meal.servedHot} style={{
                        marginLeft: "1vw",
                        width: "20px"
                    }}/>

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
                        width: "max-content",
                        cursor: "pointer"
                }}>Submit</button>
                </form>
            </section>
            
        </body>
     );
}
 
export default Edit;