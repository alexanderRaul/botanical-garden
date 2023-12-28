import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { unstable_noStore as noStore } from "next/cache"

async function getUser(email: string): Promise<User | undefined> {
  noStore();

  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user) return null;

          if (password === user.password) {
            console.log('login');
            return user;
          }
        }

        console.log('Invalid credentials');
        return null;
      }
    })
  ]
})

export { handler as GET, handler as POST };
