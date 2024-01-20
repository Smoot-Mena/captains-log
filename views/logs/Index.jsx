import React from "react";

const Index = ( {logs} ) => {
    return ( 
        <section>
            <h1>Index Page</h1>
            <section>{logs.map((log) => (
                <section key={log._id}>
                    <h3>
                        <a href={`/logs/${log.id}`}>{log.title.toUpperCase()}</a>
                    </h3>
                    <span><i>Time Created: </i>{log.createdAt.toDateString()} | </span>
                    <span><i>Time Updated: </i>{log.updatedAt.toDateString()}</span>
                    <p>Entry: {log.entry}</p>
                    <p>Ship Status: {log.shipIsBroken ? "Ship is Broken" : "Ship is not Broken"}</p>
                </section>
            ))}</section>
        </section>
     );
}
 
export default Index;