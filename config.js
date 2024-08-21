let BASE_URL ;
if(process.env.NODE_ENV === "development") {
    BASE_URL = "http://localhost:3000"
}else{
    BASE_URL = "https://eatnow-r5hq.onrender.com"
}

export  { BASE_URL }