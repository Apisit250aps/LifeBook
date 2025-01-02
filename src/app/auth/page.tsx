"use client"

import { signIn } from "next-auth/react"

export default function Page() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            onClick={() => signIn("google", { redirect: false })}
            className="btn btn-primary"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  )
}