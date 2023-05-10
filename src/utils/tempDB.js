import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://admin:HhWulLxw8LNECgCh@firstcluster.hxneups.mongodb.net/Kino",
  { useUnifiedTopology: true }
);

export async function registerUser(user) {
  try {
    await client.connect();
    return await client.db("Kino").collection("Users").insertOne(user);
  } catch {
  } finally {
    await client.close();
  }
}

export async function getUserByUserName(userName) {
  try {
    await client.connect();
    return await client
      .db("Kino")
      .collection("Users")
      .findOne({ userName: userName });
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

export async function getUserByUserEmail(email) {
  try {
    await client.connect();
    return await client
      .db("Kino")
      .collection("Users")
      .findOne({ email: email });
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

export async function getAllUsers() {
  try {
    await client.connect();
    return await client.db("Kino").collection("Users").find({}).toArray();
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
