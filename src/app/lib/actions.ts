'use server'

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const CreateEventSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  date: z.string()
})

const CreateEventFormSchema = CreateEventSchema.omit({
  id: true,
  date: true
})

export async function createEvent(formData: FormData) {
  const { title, content } = CreateEventFormSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
  })

  const [date] = new Date().toISOString().split('T');

  await sql`
    INSERT INTO events (title, description, date)
    VALUES (${title}, ${content}, ${date})
  `

  revalidatePath('/dashboard');
  revalidatePath('/schedule');
  redirect('/dashboard');
}

const CreateBlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  date: z.string()
})

const CreateBlogPostFormSchema = CreateBlogPostSchema.omit({
  id: true,
  date: true
})

export async function createBlogPost(formData: FormData) {
  const { title, content } = CreateBlogPostFormSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  const [date] = new Date().toISOString().split('T');

  await sql`
    INSERT INTO blog_posts (title, content, publication_date)
    VALUES (${title}, ${content}, ${date})
  `

  revalidatePath('/dashboard');
  revalidatePath('/blog');
  redirect('/dashboard');
}
