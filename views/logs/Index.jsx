import React from "react";

const Index = ( {logs} ) => {
    return ( 
        <section>
            <h1>Index Page</h1>
            <section>{logs.map((log) => (
                <section key={log._id}>
                    <h3>
                        <a href={`/logs/${log._id}`}>{log.title.toUpperCase()}</a>
                    </h3>
                    <p>{log.shipIsBroken ? "Ship is Broken" : "Ship is not Broken"}</p>
                </section>
            ))}</section>
        </section>
     );
}
 
export default Index;