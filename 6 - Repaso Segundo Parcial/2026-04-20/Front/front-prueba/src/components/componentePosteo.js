// Debe recibir userId, title y body

export function ComponentePosteo({ userId, title, body }) {

    return (
        <div>

            <hr/>
            <b>{userId}: {title}</b>
            <p>{body}</p>

        </div>
    )
}

