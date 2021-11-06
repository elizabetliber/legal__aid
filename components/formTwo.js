import styles from "/styles/Home.module.css"

export function FormTwo() {
    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value
        })
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        })
        console.log(formData)
    }

    return (
        <div className={styles.grid}>
            <style jsx>{`
              label {
                display: block;
                margin-bottom: .2em;
              }

              textarea {
                border: 1px solid #110b0b;
              }

              input {
                border: 1px solid #110b0b;
              }

              button {
                color: white;
                background-color: aqua;
                padding: .8em 1em;
                border: 0;
                border-radius: .2em;
              }
            `}</style>
            <form method="post" onSubmit={handleOnSubmit}>
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                </p>
                <p><label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea name="message"/>
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}