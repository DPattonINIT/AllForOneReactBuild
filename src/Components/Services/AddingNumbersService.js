const AddNumbers = async (firstNum, secondNum) => {
    const response = await fetch (`https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/Adding2Numbers/AddNumbers/${firstNum}/${secondNum}`);

    const data = await response.text();

    console.log(data);
    return data;
}
export {AddNumbers}