// Data for different categories
const categoryData = {
    Biryani: [
        {
          name: "Chicken Biryani",
          category: "Biryani",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
        },
        {
          name: "Mutton Biryani",
          category: "Biryani",
          image: "https://as2.ftcdn.net/v2/jpg/05/71/42/51/1000_F_571425194_y5UjtzDuj6kVRCW4AV3Bcc5462ylORVw.jpg"

        },
        {
          name: "Vegetable Biryani",
          category: "Biryani",
          image: "https://media.istockphoto.com/id/178993688/photo/biryani-rice.jpg?s=612x612&w=0&k=20&c=jj25ifsZ_hyfuOW2IbGz_bSVpnZG8d2DYdmckcKCrYc="
        }
        
      ],
    
      Burger: [
        {
          name: "Classic Beef Burger",
          category: "Burger",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"

        },
        {
          name: "Chicken Burger",
          category: "Burger",
          image: "https://en.pimg.jp/098/287/626/1/98287626.jpg"
        },
    
        {
          name: "Fish Burger",
          category: "Burger",
          image: "https://media.istockphoto.com/id/1248457221/photo/burger-with-flying-elements-delicious-burger-with-flying-ingredients-isolated-on-white.jpg?s=612x612&w=0&k=20&c=qxFrbbSX5WQjoN753Qo8nO2KKG2OLIioh5UsPCJMTj0="
        }
      ],
      Pizza: [
        {
          name: "Margherita Pizza",
          category: "Pizza",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"

        },
        {
          name: "Pepperoni Pizza",
          category: "Pizza",
          image: "https://st2.depositphotos.com/1029251/49362/i/450/depositphotos_493627754-stock-photo-pepperoni-pizza-pepperoni-pizza-isolated.jpg"
        },
        {
          name: "BBQ Chicken Pizza",
          category: "Pizza",
          image: "https://www.thedietchefs.com/wp-content/uploads/2023/12/Dominos-BBQ-Chicken-Pizza.jpg"
        }
        
      ],
      NorthIndian: [
        {
          name: "Butter Chicken",
          category: "NorthIndian",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"

        },
        {
          name: "Paneer Tikka Masala",
          category: "NorthIndian",
          image: "https://img.freepik.com/premium-photo/starter-snack-paneer-tikka-with-stick-plate-with-green-chutney-isolated-white-indian-cuisine-dish-with-grilled-cottage-cheese-with-vegetables-spices_466689-1203.jpg"
        },
        {
          name: "Aloo Paratha",
          category: "NorthIndian",
          image: "https://www.gourmetcraftfoods.com/cdn/shop/products/AlooParathacopy-min_530x@2x.jpg?v=1616665846"
        }
        
      ],
      SouthIndian: [
        {
          name: "Rice Sambhar",
          category: "SouthIndian",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png"

        },
        {
          name: "Masala Dosa ",
          category: "SouthIndian",
          image: "https://img.freepik.com/premium-photo/south-indian-breakfast-dosa-isolated-white-background_759447-1612.jpg"
        },
        {
          name: "Uttapam",
          category: "SouthIndian",
          image: "https://st2.depositphotos.com/5653638/11442/i/450/depositphotos_114429936-stock-photo-south-indian-food-two-uttapam.jpg"
        }
      ],
      Chinese: [
        {
          name: "Chowmein",
          category: "Chinese",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
        },
        {
          name: "Manchurian",
          category: "Chinese",
          image: "https://st3.depositphotos.com/3757173/36261/i/450/depositphotos_362611348-stock-photo-schechuan-meat-with-vegetables-isolated.jpg"
        },
        {
          name: "Spring Rolls ",
          category: "Chinese",
          image: "https://img.freepik.com/premium-photo/fried-spring-rolls-white-plate-white-background_35063-235.jpg"
        }
        
      ],
      Cake: [
        {
          name: "Chocolate Cake",
          category: "Cake",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png"
        },
        {
          name: "Red Velvet Cake",
          category: "Cake",
          image: "https://media.istockphoto.com/id/1350808060/photo/portion-of-delicious-red-velvet-cake-isolated-on-white.jpg?s=612x612&w=0&k=20&c=q0HFsV6LRtCXoHvlkaDvaKI2Vvu3TBDPOTRMvdAN0xI="
        },
        {
          name: "Black forest Cake",
          category: "Cake",
          image: "https://static.vecteezy.com/system/resources/thumbnails/026/558/217/small_2x/stock-of-black-forest-cake-foodgraphy-isolated-white-background-ai-generated-photo.jpg"
        }
      ],
      PureVeg: [
        {
          name: "Vegetable",
          category: "PureVeg",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png"

        },
        
        {
          name: "Vegetable Salad",
          category: "PureVeg",
          image: "https://st2.depositphotos.com/1069055/6503/i/450/depositphotos_65034945-stock-photo-fresh-salad.jpg"
        },
        {
          name: "Veg Aloo Tikka",
          category: "PureVeg",
          image: "https://img.freepik.com/premium-photo/aloo-tikki-white-plate_894067-17270.jpg"
        }
      ],
      Kabab: [
        {
          name: "Seekh Kabab",
          category: "Kabab",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png"

        },
        {
          name: "Hara Bhara Kabab",
          category: "Kabab",
          image: "https://thumbs.dreamstime.com/b/hara-bhara-kabab-kebab-indian-vegetarian-snack-served-chutney-hara-bhara-kabab-kebab-207181779.jpg"
        },
        {
          name: "Soya Chaap",
          category: "Kabab",
          image: "https://img.freepik.com/premium-photo/chicken-hariyali-kakab-malai-malai-kebab-tricolour-served-with-skewers-yogurt-dip-plate_466689-47601.jpg"
        }
      ],
      Momos: [
        {
          name: "Vegetable Momos",
          category: "Momos",
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png"

        },
        {
          name: "Tandoori Momos",
          category: "Momos",
          image: "https://www.shutterstock.com/image-illustration/momos-chutney-on-plate-isolated-260nw-2293941683.jpg"
        },
        {
          name: "Afghani Momos",
          category: "Momos",
          image: "https://media.istockphoto.com/id/867284284/photo/dumplings-in-a-white-background.jpg?s=612x612&w=0&k=20&c=iMXzwpu2KlEvsr1P273Dl0yL1-P5Uva9lV5YFtvE72o="
        }
      ]
};


function displayCategories() {
    const allcategories = document.getElementById('categories');

    for (const i in categoryData) {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');

        const image = document.createElement('img');
        image.src = categoryData[i][0].image; 
        image.addEventListener('click', () => navigateCategory(i));

       

        categoryElement.appendChild(image);
        allcategories.appendChild(categoryElement);
    }
}


function navigateCategory(category) {
   

    const categoryDataString = JSON.stringify(categoryData[category]);
    sessionStorage.setItem('categoryData', categoryDataString);
    window.location.href = 'details.html';
}


displayCategories();
