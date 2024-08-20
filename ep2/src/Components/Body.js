import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withpromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import { UserContext } from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantCardPromoted = withpromotedLabel(RestaurantCard);

  const { myName, setUserName } = useContext(UserContext);

  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiFetchedData = await fetch(SWIGGY_API);
      const JSONData = await apiFetchedData.json();

      const resData =
        JSONData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error, "Failed to fetch Data from Swiggy API");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const filteredRestaurant = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filteredRestaurant);
    }
  };
  return (
    <div className="bg-yellow-400 p-[35%] md:p-[10%] w-screen ">
      {listOfRestaurants?.length == 0 && (
        <h1 className="font-extrabold  text-center text-base md:text-2xl mb-36">
          Fetching Data from <span className="text-orange-500">Swiggy</span>{" "}
          API...
        </h1>
      )}
{/* Search Filter */}
      <div className="flex justify-center items-center flex-col mb-4 md:mb-20">
        <div className="flex justify-center font-bold w-1/2 items-center gap-2 ">
          <input
            placeholder="Search Restuarant Name ..."
            className="bg-slate-200 p-2  md:px-4 md:py-3 md:w-screen rounded-lg capitalize"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white p-2 md:px-4 md:py-3 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex justify-center font-bold w-screen items-center">
          {filteredRestaurants?.length > 0 ? (
            <h2 className="font-extrabold text-center p-2 mt-2 bg-transparent shadow-lg">
              {filteredRestaurants?.length} Restaurants
            </h2>
          ) : (
            <h2 className="font-extrabold text-sm md:text-md text-center p-2  mt-2 bg-transparent shadow-lg">Sorry ! No Restaurants Found</h2>
          )}
        </div>
      </div>
{/* Top avgRating Filter */}
      <div className="flex md:justify-between justify-center flex-col md:flex-row">
        <button
          className="font-semibold text-sm md:text-md font-serif bg-orange-400 p-2 my-2 active:bg-orange-600 hover:bg-orange-500"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          <h2>Top Restaurants</h2>
        </button>

        <div className="hidden md:inline-blocks text-end">
          <input
            className="p-2 font-bold my-2 capitalize"
            onChange={(e) => setUserName(e.target.value)}
            value={myName}
            placeholder="Enter your Name..."
          />
        </div>
      </div>

      {
      /* All restaurants */
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.length !== 0 ? ( filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/browse/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })):(
          <h2 className="font-extrabold text-sm md:text-md text-center p-2  mt-2 bg-transparent shadow-lg">No Restaurants Found</h2>
        )}
      </div>
      }
    </div>
  );
};

export default Body;

// import { useEffect, useState } from 'react';
// import RestaurantCard from './RestaurantCard';
// // import Shimmer from './Shimmer';

// const Body = () => {
//   // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
//   // * useState() - Super Powerful variable
//   // * useEffect() -

//   // * State Variable - Super Powerful variable
//   const [listOfRestaurants, setListOfRestaurants] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const [searchText, setSearchText] = useState('');

//   // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
//   console.log('Body rendered');

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       'https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
//     );

//     const json = await data.json();

//     console.log(json);
//     // * optional chaining
//     // setListOfRestaurants(json.data.cards[2].data.data.cards);
//     setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
//   };

//   // * Conditional Rendering
//   // if (listOfRestaurants.length === 0) {
//   //   return <Shimmer />;
//   // }

//   return listOfRestaurants.length === 0 ? (
//     <h1>LOADING ...</h1>
//   ) : (
//     <div className="body">
//       {/* <div className="search-container">
//         <input type="text" placeholder="Search Food or Restaurant" />
//         <button>Search</button>
//       </div> */}
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             placeholder="Search a restaurant you want..."
//             className="searchBox"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               // * Filter th restaurant cards and update the UI
//               // * searchText
//               console.log(searchText);

//               const filteredRestaurant = listOfRestaurants.filter((res) =>
//                 res.data.name.toLowerCase().includes(searchText.toLowerCase())
//               );

//               setFilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             // * Filter logic
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.data.avgRating > 4
//             );

//             setListOfRestaurants(filteredList);
//             console.log(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
//         {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
//         {filteredRestaurant.map((restaurant) => (
//           <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;
