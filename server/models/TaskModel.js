const { Pool } = require('pg');

const myURI = 'postgres://jfanexrv:kjM4wKG7NRh9LCut9DCrekv1TmWYeDhM@fanny.db.elephantsql.com/jfanexrv';

const URI = process.env.PG_URI || myURI;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: URI
});

module.exports = {
  query: (text, params, callback) => {
      console.log(`Executed query: ${text}`)
      return pool.query(text, params, callback)
  }
}