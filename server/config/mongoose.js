import mongoose from 'mongoose';

const { DB, HOST, MONGO_PORT } = process.env;

const disconnectMongoDBAndKillProcess = () => mongoose.disconnect(() => process.exit(1));

mongoose.connect(`mongodb://${HOST}:${MONGO_PORT}/${DB}`, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose default connection has occured ${err}  error`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0);
  });
});

process.on('uncaughtException', err => {
  console.error(err);
  disconnectMongoDBAndKillProcess();
});
