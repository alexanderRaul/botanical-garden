import { sql } from '@vercel/postgres';
import { BlogPost, Event } from './definitions';

export async function fetchBlogById(id: string) {
  try {
    const data = await sql<BlogPost>`SELECT title, content, publication_date FROM blog_posts WHERE id = ${id}`
    return data.rows[0];

  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch events data.');
  }
}

export async function fetchBlogSummaries() {
  try {
    const data = await sql<BlogPost>`SELECT title, publication_date, id FROM blog_posts`
    return data.rows;

  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch events data.');
  }
}

export async function fetchEventsSummaries() {
  try {
    const data = await sql<Event>`SELECT title, date, id FROM events`
    return data.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch events summaries data.');
  }
}

export async function fetchEvents() {
  try {
    //    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Event>`SELECT * FROM events`
    return data.rows;
  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch events data.');
  }
}
