const getReversedNumber = async (num) => {
    const url = `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/ReverseItNumber/ReverseNumber/${num}`;
    const response = await fetch(url);
    const data = await response.text();
    return data;
  };
  
  export { getReversedNumber };
  