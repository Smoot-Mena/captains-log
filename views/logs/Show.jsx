import React from "react";

const Show = ( {log} ) => {
    return ( 
        <section>
            <h1>Show Page <span>
                <a href="/logs">↩ Back Home</a></span></h1>
            <h3>Log title: {log.title}</h3>
            <p>Log entry: {log.entry}</p>
            <p>{log.shipIsBroken ? "The ship is broken" : "The ship is not broken"}</p>
            <a href={`/logs/${log._id}/edit`}>Edit Entry</a>
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>
        </section>
    );
}
 
export default Show;