const { db } = require('@vercel/postgres');
const { blogPosts, events, trees } = require('../src/app/lib/placeholder-data.js');

async function seedBlogPosts(client) {
  try {
    await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    await client.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        publication_date DATE NOT NULL
      );
    `);

    console.log('Created "blog_posts" table');

    for (const post of blogPosts) {
      await client.query(`
        INSERT INTO blog_posts (id, title, content, publication_date)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (id) DO NOTHING;
      `, [post.id, post.title, post.content, post.publication_date]);
    }

    console.log(`Seeded ${blogPosts.length} blog posts`);
  } catch (error) {
    console.error('Error seeding blog posts:', error);
    throw error;
  }
}

async function seedEvents(client) {
  try {
    await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    // Crea la tabla "events" si aún no existe
    await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        date DATE NOT NULL
      );
    `);

    console.log('Created "events" table');

    // Inserta datos en la tabla "events"
    for (const event of events) {
      await client.query(`
        INSERT INTO events (id, title, description, date)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (id) DO NOTHING;
      `, [event.id, event.title, event.description, event.date]);
    }

    console.log(`Seeded ${events.length} events`);
  } catch (error) {
    console.error('Error seeding events:', error);
    throw error;
  }
}

async function seedTrees(client) {
  try {
    await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    // Crea la tabla "trees" si aún no existe
    await client.query(`
      CREATE TABLE IF NOT EXISTS trees (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        scientific_name VARCHAR(255) NOT NULL,
        common_name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `);

    console.log('Created "trees" table');

    // Inserta datos en la tabla "trees"
    for (const tree of trees) {
      await client.query(`
        INSERT INTO trees (id, scientific_name, common_name, image_url)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (id) DO NOTHING;
      `, [tree.id, tree.scientific_name, tree.common_name, tree.image_url]);
    }

    console.log(`Seeded ${trees.length} trees`);
  } catch (error) {
    console.error('Error seeding trees:', error);
    throw error;
  }
}

async function main() {
  const client = new db.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();

    await seedBlogPosts(client);
    await seedEvents(client);
    await seedTrees(client);
  } catch (error) {
    console.error('An error occurred while seeding the database:', error);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error('An error occurred in the main function:', err);
});

