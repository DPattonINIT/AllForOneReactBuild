const getMagic8BallResponse = async (question) => {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/Magic8Ball/question?question=${encodeURIComponent(question)}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch response from Magic8Ball API");
      }
      const data = await response.text();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Oops! Something went wrong.";
    }
  };
  
  export { getMagic8BallResponse };
  