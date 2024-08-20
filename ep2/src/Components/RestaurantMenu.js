import { useParams } from 'react-router-dom';
// import Shimmer from './Shimmer';
// import ShimmerMenu from './ShimmerMenu';
import { CDN_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/hooks/useRestaurantmenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId)

    const [showIndex ,setShowIndex] = useState(null)
    // console.log(resInfo)

  if (resInfo === null) return <h2>No restaurant Info found : null</h2>;


  const {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info;
  
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
  console.log(categories);

  return (
    <div className="text-center p-[35%] md:p-[10%]">
      <div className='mx-auto w-3/12'>
        <img src={CDN_URL+cloudinaryImageId}/>
      </div>
      <h1 className="text-2xl my-2 font-bold">{name}</h1>
      <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>
      {/* Categories Accordian */}
      {categories.map(( category, index )=> {
        return <RestaurantCategory 
                  key={category.card.card.title}  
                  data={category?.card?.card}
                  showItem ={showIndex === index ? true : false}
                  setShowIndex = {()=> setShowIndex(index)}
                  showIndex ={showIndex}
                  />
      }) }
    </div>
  );
};

export default RestaurantMenu;
