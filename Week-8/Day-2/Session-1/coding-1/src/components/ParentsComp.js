import React from 'react';
import RestaurantDetails from './RestaurantDetails'

class ParentsComp extends React.Component{
    render(){
        var restroData = [
            {
                name : "URU Brewpark",
                paymentMode : "Accepts online payment only",
                votes : 766,
                time : 42,
                reviews : "512 reviews",
                costForOne : 799,
                rating : 4.3,
                foodCategory : "Continental , Pizza , Asian , Indian , Desserts",
                url :"https://lh3.googleusercontent.com/wdUvmhmr-UZy0dZ6M4Bzvz0C8EwCYlJniT3eBxauBVpV-TVFEu_1kgfag0hCFimizdg2jLm1yuqz8rJBub4GaeS9XCQ=w800"},
            {
                name : "Chowdhry Sweet House",
                paymentMode : "Accepts cash & online payment only",
                votes : 500,
                time : 30,
                reviews : "19.9k reviews",
                costForOne : 200,
                rating : 4.2,
                foodCategory : "Continental , Pizza , Asian , Indian , Desserts",
                url : "https://thumbor.thedailymeal.com/O5BS3X-3J3JKcsTKYdYd996xqsI=/870x565/https://www.thedailymeal.com/sites/default/files/slideshows/1943277/2108053/0.jpg"
            },
            {
                name : "Bindas Dhabha",
                paymentMode : "Accepts online payment only",
                votes : 400,
                time : 35,
                reviews : "200 reviews",
                costForOne : 100,
                rating : 4.0,
                foodCategory : "North Indian",
                url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5z7DhdslcFIPemA3No4ZLntS-uOy4zwBIQ&usqp=CAU"
            },
            {
                name : "Muncchies",
                paymentMode : "Accepts cash & online payment only",
                votes : 306,
                time : 15,
                reviews : "1k reviews",
                costForOne : 100,
                rating : 3.5,
                foodCategory : "Chinese and Fastfood",
                url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB56i6UQBfsijjp1IP-iAfYHKEuotIsTXvIA&usqp=CAU"
            },
            {
                name : "Pozza Hut",
                paymentMode : "Accepts online payment only",
                votes : 1000,
                time : 40,
                reviews : "5.2k reviews",
                costForOne : 99,
                rating : 3.9,
                foodCategory : "pizza",
                url : "https://media.architecturaldigest.in/wp-content/uploads/2020/04/Mumbai-restaurant-COVID-19-2-1.jpg"
            },
            {
                name : "URU Brewpark",
                paymentMode : "Accepts online payment only",
                votes : 766,
                time : 45,
                reviews : "512 reviews",
                costForOne : 799,
                rating : 4.3,
                url : "https://media-cdn.tripadvisor.com/media/photo-s/08/ca/34/e3/korykos-turkish-restaurant.jpg",
                foodCategory : "Continental , Pizza , Asian , Indian , Desserts"
            },
            {
                name : "Burger King",
                paymentMode : "Accepts cash & online payment only",
                votes : 906,
                time : 25,
                reviews : "4.2k reviews",
                costForOne : 150,
                rating : 4.1,
                foodCategory : "FastFood",
                url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA39pzsqMQc25txa_xQpT5LBrX3gXres9wlw&usqp=CAU"
            },
            {
                name : "A2B Corner",
                paymentMode : "Accepts online payment only",
                votes : 766,
                time : 50,
                reviews : "512 reviews",
                costForOne : 799,
                rating : 4.3,
                foodCategory : "Continental , Pizza , Asian , Indian , Desserts",
                url : "https://images.financialexpress.com/2017/11/gst-food.jpg"
            },
            {
                name : "Bad Boys",
                paymentMode : "Accepts online payment only",
                votes : 1000,
                time : 52,
                reviews : "1,772 reviews",
                costForOne : 200,
                rating : 4.3,
                foodCategory : "North Indian",
                url : "https://www.businesstimes.com.sg/sites/default/files/styles/article_img/public/image/2019/08/23/BT_20190823_TIFFIN1_3871185.jpg?itok=AjXY_9jX"
            },
            {
                name : "Jail Restaurant & Lounge",
                paymentMode : "Accepts online payment only",
                votes : 200,
                time : 42,
                reviews : "521 reviews",
                costForOne : 400,
                rating : 3.7,
                foodCategory : "Continental , Pizza , Asian , Indian , Desserts",
                url : "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/322/322303/selection-of-chinese-food-that-may-cause-chinese-restaurant-syndrome.jpg?w=1155&h=1583"
            }
        ]
    return(
        <RestaurantDetails  restroDeatils = {restroData} />
    )
    }
}
export default ParentsComp;