import React from "react";

const Show = ( {log} ) => {
    return ( 
        <body style={{
            backgroundColor: "dodgerblue",
            margin: "0",
            display: "flex",
            flexDirection: "column"
        }}>
            <section style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "column wrap",
                backgroundColor: "azure",
                width: "50vw",
                margin: "10vh 25vw",
                border: "5px solid navy",
                color: "navy",
                textShadow: "2px 2px 10px deepskyblue",
                padding: "0 10px"
            }}>
                <h1 style={{
                    textAlign: "center",
                    color: "navy",
                    fontSize: "1.75em",
                    textShadow: "1px 1px 5px royalblue",
                    textDecoration: "underline"
                }}>{log.title} Page </h1>
                <span style={{
                        display: "flex", 
                        justifyContent: "right"
                    }}>
                    <a style={{
                            color: "royalblue",
                            textDecoration: "none",
                            marginRight: "5vw",
                            fontWeight: "bold",
                            border: "3px solid royalblue",
                            backgroundColor: "azure",
                            boxShadow: "5px 5px 5px navy",
                            padding: "10px",
                            borderRadius: "20px",
                            textShadow: "none"
                        }} href="/logs">↩ Back Home</a>
                </span>
                <h3><strong>Log title: </strong>{log.title}</h3>
                <p><strong>Log entry: </strong>{log.entry}</p>
                <p>{log.shipIsBroken ? "The ship is broken" : "The ship is not broken"}</p>
                <a style={{
                    color: "royalblue",
                    textDecoration: "none",
                    marginRight: "5vw",
                    fontWeight: "bold",
                    border: "3px solid royalblue",
                    backgroundColor: "azure",
                    boxShadow: "5px 5px 5px navy",
                    padding: "10px",
                    borderRadius: "20px",
                    width: "max-content",
                    textShadow: "none"
                }} href={`/logs/${log._id}/edit`}>Edit Entry</a>
                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <button style={{
                        color: "royalblue",
                        textDecoration: "none",
                        fontWeight: "bold",
                        border: "3px solid royalblue",
                        backgroundColor: "azure",
                        boxShadow: "5px 5px 5px navy",
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