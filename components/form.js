import {useState} from 'react'
import styles from '/styles/Home.module.css';

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
            }
        })
    }

    return (
        <div className={styles.container}>
            <form className={styles.main}>
                <form className={styles.inputGroup}>
                    <label htmlFor='name'> Имя </label>
                    <input type='text' name='name' className={styles.inputField} onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </form>
                <form className={styles.inputGroup}>
                    <label htmlFor='email'> Электронная почта </label>
                    <input type='email' name='email' className={styles.inputField} onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                </form>
                <form className={styles.inputGroup}>
                    <label htmlFor='message'> Сообщение </label>
                    <input type='text' name='message' className={styles.inputField} onChange={(e) => {
                        setMessage(e.target.value)
                    }}/>
                </form>
                <input type='submit' className="button" onClick={(e) => {
                    handleSubmit(e)
                }}/>
            </ form>
        </div>
    )
}