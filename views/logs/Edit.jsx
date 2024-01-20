import React from "react";

const Edit = ( {log} ) => {
    return ( 
        <section>
            <h1>Edit Log</h1>
            <form action={`/logs/${log.id}?_method=PUT`} method="POST">
                <label htmlFor="title">Title</label>
                <input name="title" type="text" defaultValue={log.title} />

                <label htmlFor="entry">Entry</label>
                <input name="entry" type="text" defaultValue={log.entry} />

                <label htmlFor="shipIsBroken">Ship is broken?</label>
                <input name="shipIsBroken" type="checkbox" defaultChecked={log.shipIsBroken}/>

                <button>Submit</button>
            </form>
        </section>
     );
}
 
export default Edit;