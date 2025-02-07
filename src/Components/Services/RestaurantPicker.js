const getRestaurant = async (category) => {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/RestaurantPicker/${category}`;
  
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error("Failed to fetch the result.");
      }
      const data = await response.text();  
      return data;  
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Oops! Something went wrong.";  
    }
  };
  
  export { getRestaurant };
  