import React from "react";

const Edit = ( {log} ) => {
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
                border: "5px solid navy"
            }}>
                <h1 style={{
                    textAlign: "center",
                    color: "navy",
                    fontSize: "1.75em",
                    textShadow: "1px 1px 5px royalblue",
                    textDecoration: "underline"
                }}>Edit Log</h1>
                <span style={{
                    display: "flex", 
                    justifyContent: "right"
                }}>
                    <a style={{
                        color: "mediumblue",
                        textDecoration: "none",
                        marginRight: "5vw",
                        fontWeight: "bold",
                        border: "3px solid navy",
                        backgroundColor: "azure",
                        boxShadow: "5px 5px 5px navy",
                        padding: "10px",
                        borderRadius: "20px"
                    }} href={`/logs/${log._id}`}>↩ Back</a>
                </span>
                <form style={{
                    margin: "5vh 8vw",
                    display: "flex",
                    flexFlow: "column wrap",
                    color: "navy",
                    textDecoration: "none",
                    textShadow: "2px 2px 10px deepskyblue",
                    width: "max-content"
                }} action={`/logs/${log._id}?_method=PUT`} method="POST">
                    <label htmlFor="title">
                        <strong>Log Title: </strong>
                    </label>
                    <input name="title" size={50} type="text" defaultValue={log.title} style={{
                        marginBottom: "3vh",
                    }}/>

                    <label htmlFor="entry">
                        <strong>Log Entry: </strong>
                    </label>
                    <textarea rows={5} cols={60} wrap="hard" name="entry" type="text" defaultValue={log.entry} style={{
                        marginBottom: "3vh"
                    }}/>

                    <label htmlFor="shipIsBroken">
                        <strong>Ship is broken?: </strong>
                    </label>
                    <input name="shipIsBroken" type="checkbox" defaultChecked={log.shipIsBroken} style={{
                        marginLeft: "1vw",
                        width: "20px"
                    }}/>

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
                        width: "max-content",
                        cursor: "pointer"
                }}>Submit</button>
                </form>
            </section>
        </body>
     );
}
 
export default Edit;