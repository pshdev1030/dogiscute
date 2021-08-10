import axios from "axios";

type animal = "cat" | "dog";

const fetchData = async (animal: animal) => {
  const endpoint =
    animal === "cat"
      ? "https://api.thecatapi.com/v1/images/search"
      : "https://dog.ceo/api/breeds/image/random";
  try {
    const data = await axios.get(endpoint);
    return animal === "cat" ? data.data[0].url : data.data.message;
  } catch (err) {
    console.error(err);
  }
};

export default fetchData;
