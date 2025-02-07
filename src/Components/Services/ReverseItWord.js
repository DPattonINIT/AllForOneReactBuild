const getReversedWord = async (input) => {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/ReverseItWord/${input}`;
    const response = await fetch(url);
    const data = await response.text();
    return data;
  };
  
  export { getReversedWord };
  