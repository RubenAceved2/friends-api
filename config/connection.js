const { MongoClient } = require("mongodb");

const connection = async () => {
  const client = new MongoClient(
    "mongodb+srv://root:root@rubencluster-eroht.gcp.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client;
};

module.exports = connection;
