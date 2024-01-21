import React from "react";

const Index = ( {logs} ) => {
    return ( 
        <body style={{
            backgroundColor: "dodgerblue",
            margin: "0",
            display: "flex",
            flexDirection: "column"
        }}>
            <nav style={{
                display: "flex",
                width: "100vw",
                justifyContent: "right",
                backgroundColor: "deepskyblue",
                height: "10vh",
                borderBottom: "4px solid navy"
            }}>
                <a style={{
                    color: "mediumblue",
                    textDecoration: "none",
                    fontSize: "1.5em",
                    marginRight: "5vw",
                    marginTop: "2vh",
                    fontWeight: "bold",
                    textShadow: "3px 3px 5px azure"
                }} href="/logs/new">Create Log</a>
            </nav>
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
            }}>Logs Page</h1>
                <span style={{
                    display: "flex", 
                    justifyContent: "right"
                }}>
                    <a style={{
                    color: "deepskyblue",
                    textDecoration: "none",
                    marginRight: "5vw",
                    fontWeight: "bold",
                    border: "3px solid darkblue",
                    backgroundColor: "lightcyan",
                    boxShadow: "5px 5px 5px blue",
                    padding: "10px",
                    borderRadius: "20px"
                }} href={`/`}>↩ Back</a>
                </span>
                <section style={{
                padding: "5vh 5vw"
            }}>{logs.map((log) => (
                    <section style={{
                        borderBottom: "3px solid royalblue",
                        color: "navy"
                    }} key={log._id}>
                        <h3>
                            <a style={{
                            color: "navy",
                            textDecoration: "none",
                            textShadow: "2px 2px 10px deepskyblue"
                        }} href={`/logs/${log.id}`}>{log.title.toUpperCase()}</a>
                        </h3>
                        <span>
                            <strong><i>Time Created: </i>
                            </strong>{log.createdAt.toDateString()} | </span>
                        <span><strong><i>Time Updated: </i></strong>{log.updatedAt.toDateString()}</span>
                        <p><strong>Entry: </strong>{log.entry}</p>
                        <p><strong>Ship Status: </strong>{log.shipIsBroken ? "Ship is Broken" : "Ship is not Broken"}</p>
                    </section>
                ))}</section>
            </section>
        </body>
     );
}
 
export default Index;