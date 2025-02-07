const getGreeting = async (name) => {
  const response = await fetch(
    `https://darrylallforone-dgb6b5bvesfchjeq.westus-01.azurewebsites.net/SayHello/SayHello/${name}`
  );
  const data = await response.text();
  return data;
};

export { getGreeting };
