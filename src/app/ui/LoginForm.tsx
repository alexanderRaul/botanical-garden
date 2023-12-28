'use client'

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react'

export default function LoginForm() {

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false
    });

    if (!response?.error) {
      router.push('/dashboard');
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="sm:w-[50%] sm:mx-auto w-[100%]">
      <div className="flex-1 rounded-lg pb-4 pt-8">
        <h1 className="mb-3 text-2xl">
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-base text-white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="text-black w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-base text-white"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                autoComplete="current-password"
                className="text-black w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="border rounded px-2 text-base w-[60%] mt-5">send</button>
      </div>
    </form>
  )
}
