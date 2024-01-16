import React from "react";

const New = () => {
    return ( 
    <section>
        <h1>New Page</h1>
        <form action="/logs" method="POST">
            <label htmlFor="title">Title</label>
            <input name="title" type="text" />

            <label htmlFor="entry">Entry</label>
            <input name="entry" type="textarea" />

            <label htmlFor="shipIsBroken">Ship is broken?</label>
            <input name="shipIsBroken" type="checkbox" />

            <button>Submit</button>
        </form>
    </section> 
    );
}
 
export default New;