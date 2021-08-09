import axios from "axios";

type animal = "cat" | "dog";

const fetchData = async (animal: animal) => {
  const endpoint =
    animal === "cat"
      ? "https://api.thecatapi.com/v1/images/search"
      : "https://dog.ceo/api/breeds/image/random";
  const data = await axios.get(endpoint);
  return data;
};

export default fetchData;
