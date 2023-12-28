import { sql } from '@vercel/postgres';
import { BlogPost, Event, Tree } from './definitions';
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchTrees() {
  noStore();

  try {
    const data = await sql<Tree>`SELECT * FROM trees`
    return data.rows;
  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch events data.');
  }
}

export async function fetchBlogById(id: string) {
  noStore();

  try {
    const data = await sql<BlogPost>`SELECT title, content, publication_date FROM blog_posts WHERE id = ${id}`
    return data.rows[0];

  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch events data.');
  }
}

export async function fetchBlogSummaries() {
  noStore();


  try {

    // La función realiza la consulta a la base de datos.
    const data = await sql<BlogPost>`SELECT title, publication_date, id FROM blog_posts`

    // La consulta se resuelve correctamente, y data.rows se llena con los datos reales de la base de datos.
    // Resultado Esperado:
    // La función debería devolver los datos reales de la base de datos correctamente.
    return data.rows;

  } catch (error) {
    // Simulemos un escenario donde la consulta a la base de datos falla.
    // La consulta falla, y se ejecuta el bloque catch.
    // Se imprime un mensaje de error en la consola.
    console.error('Database Error:', error);

    // La función arroja un nuevo error con el mensaje 'Failed to fetch blog summaries data.'
    // Resultado Esperado:
    // La función debería manejar el error correctamente, imprimir el mensaje de error en la consola
    // y lanzar un nuevo error con el mensaje adecuado.
    throw new Error('Failed to fetch blog summaries data.');
  }
}

// Conclusiones:
// La función debería manejar correctamente tanto el caso exitoso como el de error.
// Los resultados obtenidos manualmente deberían coincidir con las expectativas definidas.
// Si la función se comporta según lo esperado en estos casos, se considera que ha pasado la prueba de caja blanca.

export async function fetchEventsSummaries() {
  noStore();

  try {
    const data = await sql<Event>`SELECT title, date, id FROM events`
    return data.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch events summaries data.');
  }
}

export async function fetchEvents() {
  noStore();

  try {
    //    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Event>`SELECT * FROM events`
    return data.rows;
  } catch (error) {

    console.error('Database Error:', error);
    throw new Error('Failed to fetch events data.');
  }
}
