const AskingQuestions = async (name, wakeUpTime) => {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/AskingQuestions/AskingQuestions/${name}/${wakeUpTime}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
      });
      if (!response.ok) {
        console.error('Error Response:', response.status, response.statusText);
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.text();
      return data;
    } catch (error) {
      console.error('Error in AskingQuestions service:', error);
      throw new Error("Something went wrong. Please try again.");
    }
  };
  
  export { AskingQuestions };
  