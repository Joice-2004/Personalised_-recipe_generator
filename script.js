document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ingredientsInput = document.getElementById('ingredients').value;
    const dietaryPreference = document.getElementById('diet').value;

    // Your recipes array (make sure to include it here)
    const recipes = [
        { title: "Vegetable Stir Fry", ingredients: ["carrot", "broccoli", "soy sauce"], diet: "vegan" },
        { title: "Pasta Primavera", ingredients: ["pasta", "tomato", "bell pepper"], diet: "vegetarian" },
        { title: "Gluten-Free Pizza", ingredients: ["gluten-free dough", "cheese", "tomato sauce"], diet: "gluten-free" },
        { title: "Chicken Salad", ingredients: ["chicken", "lettuce", "olive oil"], diet: "paleo" },
        { title: "Vegetable Curry", ingredients: ["cauliflower", "coconut milk", "curry powder"], diet: "vegan" },
        { title: "Vegetable Stir Fry", ingredients: ["carrot", "broccoli", "soy sauce"], diet: "vegan" },
    { title: "Pasta Primavera", ingredients: ["pasta", "tomato", "bell pepper"], diet: "vegetarian" },
    { title: "Gluten-Free Pizza", ingredients: ["gluten-free dough", "cheese", "tomato sauce"], diet: "gluten-free" },
    { title: "Chicken Salad", ingredients: ["chicken", "lettuce", "olive oil"], diet: "paleo" },
    { title: "Vegetable Curry", ingredients: ["cauliflower", "coconut milk", "curry powder"], diet: "vegan" },
    { title: "Quinoa Salad", ingredients: ["quinoa", "cucumber", "feta cheese"], diet: "vegetarian" },
    { title: "Shrimp Tacos", ingredients: ["shrimp", "corn tortillas", "avocado"], diet: "gluten-free" },
    { title: "Chickpea Stew", ingredients: ["chickpeas", "spinach", "tomatoes"], diet: "vegan" },
    { title: "Beef Stir Fry", ingredients: ["beef", "bell peppers", "soy sauce"], diet: "paleo" },
    { title: "Caprese Salad", ingredients: ["mozzarella", "tomatoes", "basil"], diet: "vegetarian" },
    { title: "Banana Bread", ingredients: ["bananas", "flour", "sugar"], diet: "vegetarian" },
    { title: "Eggplant Parmesan", ingredients: ["eggplant", "marinara sauce", "mozzarella"], diet: "vegetarian" },
    { title: "Stuffed Peppers", ingredients: ["bell peppers", "rice", "ground turkey"], diet: "gluten-free" },
    { title: "Lentil Soup", ingredients: ["lentils", "carrots", "celery"], diet: "vegan" },
    { title: "Baked Salmon", ingredients: ["salmon", "lemon", "dill"], diet: "paleo" },
    { title: "Vegetable Quesadilla", ingredients: ["tortillas", "cheese", "mixed vegetables"], diet: "vegetarian" },
    { title: "Zucchini Noodles", ingredients: ["zucchini", "marinara sauce", "garlic"], diet: "vegan" },
    { title: "Mushroom Risotto", ingredients: ["arborio rice", "mushrooms", "vegetable broth"], diet: "vegetarian" },
    { title: "Pancakes", ingredients: ["flour", "milk", "eggs"], diet: "vegetarian" },
    { title: "Beef Tacos", ingredients: ["ground beef", "taco shells", "lettuce"], diet: "gluten-free" },
    { title: "Chili con Carne", ingredients: ["ground beef", "beans", "tomatoes"], diet: "paleo" },
    { title: "Greek Salad", ingredients: ["cucumbers", "olives", "feta cheese"], diet: "vegetarian" },
    { title: "Tofu Stir Fry", ingredients: ["tofu", "broccoli", "soy sauce"], diet: "vegan" },
    { title: "Apple Crisp", ingredients: ["apples", "oats", "brown sugar"], diet: "vegetarian" },
    { title: "BBQ Chicken", ingredients: ["chicken", "BBQ sauce", "coleslaw"], diet: "gluten-free" },
    { title: "Cauliflower Rice", ingredients: ["cauliflower", "garlic", "olive oil"], diet: "vegan" },
    { title: "Spinach Frittata", ingredients: ["eggs", "spinach", "cheese"], diet: "vegetarian" },
    { title: "Beef Burgers", ingredients: ["ground beef", "buns", "lettuce"], diet: "gluten-free" },
    { title: "Roasted Vegetables", ingredients: ["carrots", "potatoes", "olive oil"], diet: "vegan" },
    { title: "Chicken Tikka Masala", ingredients: ["chicken", "yogurt", "spices"], diet: "paleo" },
    { title: "Baked Ziti", ingredients: ["ziti pasta", "marinara sauce", "mozzarella"], diet: "vegetarian" },
    { title: "Fruit Smoothie", ingredients: ["banana", "yogurt", "berries"], diet: "vegetarian" },
    { title: "Stuffed Mushrooms", ingredients: ["mushrooms", "cream cheese", "herbs"], diet: "vegetarian" },
    { title: "Pesto Pasta", ingredients: ["pasta", "pesto", "cherry tomatoes"], diet: "vegetarian" },
    { title: "Grilled Cheese Sandwich", ingredients: ["bread", "cheese", "butter"], diet: "vegetarian" },
    { title: "Cabbage Rolls", ingredients: ["cabbage", "rice", "ground beef"], diet: "gluten-free" },
    { title: "Mango Salsa", ingredients: ["mango", "onion", "cilantro"], diet: "vegan" },
    { title: "Pork Chops", ingredients: ["pork", "garlic", "herbs"], diet: "paleo" },
    { title: "Baked Potatoes", ingredients: ["potatoes", "sour cream", "chives"], diet: "vegetarian" },
    { title: "Chicken Fajitas", ingredients: ["chicken", "bell peppers", "tortillas"], diet: "gluten-free" },
    { title: "Omelette", ingredients: ["eggs", "cheese", "bell peppers"], diet: "vegetarian" },
    { title: "Peanut Butter Cookies", ingredients: ["peanut butter", "sugar", "eggs"], diet: "gluten-free" },
    { title: "Lasagna", ingredients: ["lasagna noodles", "ricotta", "marinara"], diet: "vegetarian" },
    { title: "Beet Salad", ingredients: ["beets", "arugula", "goat cheese"], diet: "vegetarian" },
    { title: "Chickpea Salad", ingredients: ["chickpeas", "cucumbers", "tomatoes"], diet: "vegan" },
    { title: "Pork Fried Rice", ingredients: ["rice", "pork", "peas"], diet: "gluten-free" },
    { title: "Fruit Salad", ingredients: ["mixed fruits", "mint", "lime juice"], diet: "vegan" },
    { title: "Clam Chowder", ingredients: ["clams", "potatoes", "cream"], diet: "gluten-free" },
    { title: "Chicken Alfredo", ingredients: ["chicken", "fettuccine", "Alfredo sauce"], diet: "gluten-free" },
    { title: "Baked Beans", ingredients: ["beans", "brown sugar", "mustard"], diet: "vegan" },
    { title: "Vegetable Fried Rice", ingredients: ["rice", "mixed vegetables", "soy sauce"], diet: "vegan" },
    { title: "Chicken Noodle Soup", ingredients: ["chicken", "noodles", "carrots"], diet: "gluten-free" },
    { title: "Lemon Garlic Shrimp", ingredients: ["shrimp", "lemon", "garlic"], diet: "paleo" },
    { title: "Falafel", ingredients: ["chickpeas", "herbs", "spices"], diet: "vegan" },
    { title: "Vegetable Sushi", ingredients: ["sushi rice", "nori", "vegetables"], diet: "vegan" },
    { title: "Coconut Curry", ingredients: ["coconut milk", "curry paste", "vegetables"], diet: "vegan" },
    { title: "Chocolate Cake", ingredients: ["flour", "cocoa powder", "sugar"], diet: "vegetarian" },
    { title: "Turkey Burgers", ingredients: ["ground turkey", "buns", "lettuce"], diet: "gluten-free" },
    { title: "Potato Salad", ingredients: ["potatoes", "mayo", "mustard"], diet: "vegetarian" },
    { title: "Stuffed Acorn Squash", ingredients: ["acorn squash", "quinoa", "cranberries"], diet: "vegan" },
    { title: "Spinach Salad", ingredients: ["spinach", "strawberries", "almonds"], diet: "vegan" },
    { title: "Beef Stroganoff", ingredients: ["beef", "mushrooms", "sour cream"], diet: "gluten-free" },
    { title: "Sweet Potato Fries", ingredients: ["sweet potatoes", "olive oil", "spices"], diet: "vegan" },
    { title: "Shrimp Scampi", ingredients: ["shrimp", "garlic", "lemon"], diet: "paleo" },
    { title: "Chili Sin Carne", ingredients: ["beans", "tomatoes", "bell peppers"], diet: "vegan" },
    { title: "Chicken Enchiladas", ingredients: ["chicken", "tortillas", "cheese"], diet: "gluten-free" },
    { title: "Egg Salad", ingredients: ["eggs", "mayo", "mustard"], diet: "vegetarian" },
    { title: "Oatmeal Cookies", ingredients: ["oats", "flour", "raisins"], diet: "vegetarian" },
    { title: "Pork Ramen", ingredients: ["pork", "noodles", "broth"], diet: "gluten-free" },
    { title: "Tomato Basil Soup", ingredients: ["tomatoes", "basil", "cream"], diet: "vegetarian" },
    { title: "Crispy Chickpeas", ingredients: ["chickpeas", "olive oil", "spices"], diet: "vegan" },
    { title: "Vegetable Pad Thai", ingredients: ["rice noodles", "vegetables", "peanuts"], diet: "vegan" },
    { title: "Carrot Cake", ingredients: ["carrots", "flour", "sugar"], diet: "vegetarian" },
    { title: "Peach Cobbler", ingredients: ["peaches", "sugar", "flour"], diet: "vegetarian" },
    { title: "Kerala Fish Curry", ingredients: ["fish", "coconut milk", "tamarind", "spices"], diet: "non-vegetarian" },
    { title: "Puttu", ingredients: ["rice flour", "coconut", "salt"], diet: "vegan" },
    { title: "Appam", ingredients: ["rice flour", "coconut milk", "yeast"], diet: "vegan" },
    { title: "Sambar", ingredients: ["toor dal", "vegetables", "tamarind", "spices"], diet: "vegan" },
    { title: "Avial", ingredients: ["mixed vegetables", "coconut", "yogurt", "curry leaves"], diet: "vegetarian" },
    { title: "Karimeen Pollichathu", ingredients: ["pearl spot fish", "banana leaves", "spices", "coconut"], diet: "non-vegetarian" },
    { title: "Thoran", ingredients: ["cabbage", "coconut", "mustard seeds", "green chilies"], diet: "vegan" },
    { title: "Kappa (Tapioca) and Fish Curry", ingredients: ["tapioca", "fish", "coconut milk", "spices"], diet: "non-vegetarian" },
    { title: "Chappathi", ingredients: ["whole wheat flour", "water", "salt"], diet: "vegan" },
    { title: "Nadan Chicken Curry", ingredients: ["chicken", "coconut oil", "onion", "spices"], diet: "non-vegetarian" },
    { title: "Biryani", ingredients: ["rice", "chicken", "spices", "yogurt"], diet: "non-vegetarian" },
    { title: "Payasam", ingredients: ["rice", "jaggery", "coconut milk", "cardamom"], diet: "vegetarian" },
    { title: "Beef Ularthiyathu", ingredients: ["beef", "coconut", "spices", "onions"], diet: "non-vegetarian" },
    { title: "Vegetable Biryani", ingredients: ["rice", "mixed vegetables", "spices", "yogurt"], diet: "vegetarian" },
    { title: "Fish Fry", ingredients: ["fish", "spices", "coconut oil"], diet: "non-vegetarian" },
    { title: "Dosa", ingredients: ["rice", "urad dal", "water"], diet: "vegan" },
    { title: "Kootu Curry", ingredients: ["vegetables", "dal", "coconut", "spices"], diet: "vegan" },
    { title: "Palada Payasam", ingredients: ["rice ada", "milk", "sugar", "cardamom"], diet: "vegetarian" },
    { title: "Mutton Curry", ingredients: ["mutton", "coconut milk", "spices", "onions"], diet: "non-vegetarian" },
    { title: "Fish Molee", ingredients: ["fish", "coconut milk", "spices", "green chilies"], diet: "non-vegetarian" },
    { title: "Chili Chicken", ingredients: ["chicken", "green chilies", "spices", "onions"], diet: "non-vegetarian" },
    { title: "Onam Sadya", ingredients: ["various dishes"], diet: "vegetarian" },
    { title: "Kondattam (Roasted Cashew)", ingredients: ["cashew nuts", "spices"], diet: "vegan" },
    { title: "Neyyappam", ingredients: ["rice flour", "jaggery", "coconut", "cardamom"], diet: "vegetarian" },
    { title: "Methi Chicken", ingredients: ["chicken", "fenugreek leaves", "spices"], diet: "non-vegetarian" },
    { title: "Uzhunnu Vada", ingredients: ["urad dal", "onions", "spices"], diet: "vegan" },
    { title: "Kozhikode Biryani", ingredients: ["rice", "mutton", "spices"], diet: "non-vegetarian" },
    { title: "Prawn Curry", ingredients: ["prawns", "coconut milk", "spices"], diet: "non-vegetarian" },
    { title: "Kadala Curry", ingredients: ["black chickpeas", "coconut", "spices"], diet: "vegan" },
    { title: "Kuthari Choru", ingredients: ["red rice", "coconut", "spices"], diet: "vegan" },
    { title: "Palappam", ingredients: ["rice flour", "coconut milk", "yeast"], diet: "vegan" },
    { title: "Egg Curry", ingredients: ["eggs", "onions", "spices", "tomatoes"], diet: "vegetarian" },
    { title: "Puttu Kadala", ingredients: ["puttu", "black chickpeas"], diet: "vegan" },
    { title: "Pumpkin Erissery", ingredients: ["pumpkin", "coconut", "spices"], diet: "vegan" },
    { title: "Prawn Fry", ingredients: ["prawns", "spices", "coconut oil"], diet: "non-vegetarian" },
    { title: "Tapioca and Beef", ingredients: ["tapioca", "beef", "spices"], diet: "non-vegetarian" },
    { title: "Mutton Biriyani", ingredients: ["mutton", "rice", "spices"], diet: "non-vegetarian" },
    { title: "Kappa Biriyani", ingredients: ["tapioca", "chicken", "spices"], diet: "non-vegetarian" },
    { title: "Pulissery", ingredients: ["yogurt", "vegetables", "coconut"], diet: "vegetarian" },
    { title: "Thalassery Biryani", ingredients: ["rice", "chicken", "spices"], diet: "non-vegetarian" },
    { title: "Chakkakuru Mezhukkupuratti", ingredients: ["jackfruit seeds", "coconut", "spices"], diet: "vegan" },
    { title: "Malabar Parotta", ingredients: ["maida", "water", "salt"], diet: "vegan" },
    { title: "Kalamari Fry", ingredients: ["squid", "spices", "coconut oil"], diet: "non-vegetarian" },
    { title: "Pachadi", ingredients: ["yogurt", "vegetables", "coconut"], diet: "vegetarian" },
    { title: "Pineapple Payasam", ingredients: ["pineapple", "rice", "coconut milk"], diet: "vegetarian" },
    { title: "Chor Choru", ingredients: ["rice", "curry", "salad"], diet: "vegetarian" },
    { title: "Karam Puli", ingredients: ["fish", "tamarind", "spices"], diet: "non-vegetarian" },
    { title: "Tomato Thoran", ingredients: ["tomatoes", "coconut", "spices"], diet: "vegan" },
    { title: "Fish Peralan", ingredients: ["fish", "coconut", "spices"], diet: "non-vegetarian" },
    { title: "Nadan Prawns Curry", ingredients: ["prawns", "coconut milk", "spices"], diet: "non-vegetarian" },
    { title: "Sukhiyan", ingredients: ["moong dal", "jaggery", "flour"], diet: "vegan" },
    { title: "Pork Curry", ingredients: ["pork", "coconut", "spices"], diet: "non-vegetarian" }   
    ];

    const availableIngredients = ingredientsInput.split(',').map(item => item.trim().toLowerCase());
    
    const filteredRecipes = recipes.filter(recipe => {
        const recipeIngredients = recipe.ingredients.map(item => item.toLowerCase());
        
        // Check if the recipe matches dietary preference
        const matchesDietaryPreference = dietaryPreference === "" || recipe.diet === dietaryPreference;

        // Check for partial matches (at least 1 matching ingredient)
        const hasMatchingIngredients = recipeIngredients.some(ingredient => availableIngredients.includes(ingredient));

        return matchesDietaryPreference && hasMatchingIngredients;
    });

    displayRecipes(filteredRecipes);
});

function displayRecipes(recipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = ""; // Clear previous results

    if (recipes.length === 0) {
        recipesDiv.innerHTML = "<p>No recipes found. Please try different ingredients or preferences.</p>";
        return;
    }

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';
        recipeDiv.innerHTML = `<strong>${recipe.title}</strong><br>Ingredients: ${recipe.ingredients.join(', ')}`;
        recipesDiv.appendChild(recipeDiv);
    });
}
