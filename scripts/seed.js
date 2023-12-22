const { db } = require('@vercel/postgres');
const { blogPosts, events, trees } = require('../src/app/lib/placeholder-data.js');

async function seedBlogPosts(client) {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        publication_date DATE NOT NULL
      );
    `);

    console.log(`Created "blog_posts" table`);

    const insertedBlogPosts = await Promise.all(
      blogPosts.map(async (post) => {
        return client.query(
          `
          INSERT INTO blog_posts (title, content, publication_date)
          VALUES ($1, $2, $3)
          ON CONFLICT (id) DO NOTHING;
        `,
          [post.title, post.content, post.publication_date]
        );
      })
    );

    console.log(`Seeded ${insertedBlogPosts.length} blog posts`);

    return {
      blogPosts: insertedBlogPosts,
    };
  } catch (error) {
    console.error('Error seeding blog posts:', error);
    throw error;
  }
}

async function seedEvents(client) {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        date DATE NOT NULL
      );
    `);

    console.log(`Created "events" table`);

    const insertedEvents = await Promise.all(
      events.map(async (event) => {
        return client.query(
          `
          INSERT INTO events (title, description, date)
          VALUES ($1, $2, $3)
          ON CONFLICT (id) DO NOTHING;
        `,
          [event.title, event.description, event.date]
        );
      })
    );

    console.log(`Seeded ${insertedEvents.length} events`);

    return {
      events: insertedEvents,
    };
  } catch (error) {
    console.error('Error seeding events:', error);
    throw error;
  }
}

async function seedTrees(client) {
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS trees (
        id SERIAL PRIMARY KEY,
        scientific_name VARCHAR(255) NOT NULL,
        common_name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `);

    console.log(`Created "trees" table`);

    const insertedTrees = await Promise.all(
      trees.map(async (tree) => {
        return client.query(
          `
          INSERT INTO trees (scientific_name, common_name, image_url)
          VALUES ($1, $2, $3)
          ON CONFLICT (id) DO NOTHING;
        `,
          [tree.scientific_name, tree.common_name, tree.image_url]
        );
      })
    );

    console.log(`Seeded ${insertedTrees.length} trees`);

    return {
      trees: insertedTrees,
    };
  } catch (error) {
    console.error('Error seeding trees:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedBlogPosts(client);
  await seedEvents(client);
  await seedTrees(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
