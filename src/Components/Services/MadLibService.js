const fetchStory = async (nouns, adjectives) => {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/MadLib/${nouns.join(
      "/"
    )}/${adjectives.join("/")}`;
  
    try {
      const response = await fetch(url, { method: "POST" });
  
      if (!response.ok) {
        throw new Error("Failed to fetch the story.");
      }
  
      const data = await response.text();
      return data; 
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Oops! Something went wrong.";
    }
  };
  
  export { fetchStory };
  