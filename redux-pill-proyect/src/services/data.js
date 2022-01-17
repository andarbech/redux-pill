import propertiesApi from "../api/properties";

const getData = () => new Promise(async (resolve) => {
  const data = await propertiesApi.getProperties();
  console.log(data);

  // const data = Math.round(Math.random() * 100);
  setTimeout(() => { resolve(data) }, 2000);
});

export default getData;