
const express=require('express');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app=express()
const port=process.env.PORT || 5000;

app.use(cors())
app.use(express.json());


const uri = "mongodb+srv://showmandas3216: nrAE49ICpeAR7yVQ@cluster0.wnllbqw.mongodb.net/?retryWrites=true&w=majority";

// nrAE49ICpeAR7yVQ


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {

        const userCollection=client.db('UserData').collection('users');







     await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send("crud project is running");
})

app.listen(port,()=>{
    console.log(`crud project is running on port ${port}`);
})