import React, { useRef } from "react"
import { auth } from "../firebase/base"
import { sendPasswordResetEmail } from "firebase/auth"
import { useRouter } from "next/router"
import { PageHeader } from '../components/sections/PageHeader'
import styles from "../styles/forgotpass.module.css"

function forgotPass() {
  const router = useRouter()
  const emailRef = useRef()

  const requestLink = async (e) => {
    e.preventDefault()
    let userEmail = emailRef.current.value
    await sendPasswordResetEmail(auth, userEmail)
    router.push("/login")
  }
  
  return (
    <>
      <PageHeader />
      <div className={styles.centeredGrid}>
        <div className={styles.cardWhite}>
          <h2>Password recovery</h2>
            <span>Enter your email</span>
            <input
              type="email"
              ref={emailRef}
              placeholder="hello@email.com"
              className={styles.input}
            />
            <button
              type="button"
              onClick={requestLink}
              className={styles.formBtn}
            >
              Send link!
            </button>
            <small className={styles.payMsg} onClick={() => router.push("/login")}>
              Go back to login
            </small>
          </div>
        </div>
    </>
  )
}

export default forgotPass