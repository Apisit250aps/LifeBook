import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import client from "./libs/database/mongod"

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(client),
  session: { strategy: "jwt" },
  providers: [Google]
})
