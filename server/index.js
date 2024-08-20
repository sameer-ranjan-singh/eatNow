import express from "express"
import cors from "cors"
import axios from "axios"

const port = 3000

const app = express()
app.use(cors())

//GET list of Restaurants 
app.get("api/swiggy/restaurants", async (req,res)=> {
   try{
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const data = await response.data
    res.json(data)
   }catch(error){
    res.status(500).json(error, "Failed to fetch restaurants data")
   }
})

//GET Restaurant Menu 
app.get("api/swiggy/menu", async (req,res)=> {
   try{
    const response = await axios.get("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=")
    const data = await response.data
    res.json(data)
   }catch(error){
    res.status(500).json(error, "Failed to fetch menu data")
   }
})

app.listen(port, ()=> {
    console.log(`Server is Listening on port ${port}`)
})
