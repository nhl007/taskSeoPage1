import { connect } from 'mongoose';

const connectDatabase = () => {
  const env = process.env.NODE_ENV;
  const db =
    env === 'production'
      ? process.env.MONGO_PROD_URL
      : process.env.DB_LOCAl_URI;

  connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    dbName: 'seoassignment',
  })
    .then((con) => {
      if (env.match('development')) {
        console.log(
          `Connected to MongoDB with Host: ${con.connection.host}:${con.connection.port}`
        );
      }
      if (env.match('production')) {
        console.log('Connected to MongoDB in Production environment');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDatabase;
