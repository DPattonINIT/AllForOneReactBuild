const getComparison = async (num1, num2) => {
    try {
        
        const response = await fetch(`https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/GreaterThanOrLessThan/GetNumber/${num1}/${num2}`);
        
        
        if (!response.ok) {
            throw new Error("Failed to fetch data from the server.");
        }

        
        const data = await response.text();

        
        return data;
    } catch (error) {
        
        throw new Error("Something went wrong: " + error.message);
    }
};

export { getComparison };
