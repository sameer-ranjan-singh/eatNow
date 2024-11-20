import express from "express";
import cors from "cors";
import axios from "axios";

const port = 3000;
const app = express();

app.use(cors())
//   cors({
//   credentials:true,
//    origin: [
//      "https://eatnowsameer.vercel.app/", 
//      "http://localhost:1234",
//      "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
//      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"  
//    ]
//  })


// Log incoming requests for debugging (optional)
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

//GET list of Restaurants
app.get("/api/listofrestaurants", async (req, res) => {
  try {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'); 
    if (!response.ok) {
      throw new Error(`Error fetching restaurants data from Swiggy Api: ${response.status}`);
    }
    const data = await response.json()
    console.log(data)
     res.status(200).send(data);
  } catch (error) {
    console.error('Error fetching restaurants data:', error); // Log the error for debugging
     res.status(500).json({ error: 'Failed to fetch restaurants data' }); // Send an error response
  }
});

//GET Restaurant Menu
app.get("/api/restaurantMenu/:resId", async (req, res) => {
  const resId = req.params.resId
  if(!resId) {
     res.status(404).json({message:"Couldn't find restaurant ID: resId"})
  }
  try{
    const response = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=${resId}`
    );
    const data = await response.json();
     res.json(data);
  }catch (error) {
     res.status(500).json(error, "Failed to fetch menu data");
  }
});

// GET cdn URL
app.get("/api/cdn", async (req,res) => {
  const response = await fetch("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/")
})

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});