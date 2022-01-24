import propertiesApi from "../api/properties";

const getData = () => new Promise(async (resolve) => {
  const data = await propertiesApi.getProperties();
  setTimeout(() => { resolve(data) }, 2000);
});

export default getData;