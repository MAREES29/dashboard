import { API_URL, endPoints } from "./url";
import axios from "axios";

const fetchAllProduct = async (navigate) => {
  const url = `${API_URL}${endPoints.product}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    navigate("/error");
  }
};

const fetchGetegory = async (navigate) => {
  const url = `${API_URL}${endPoints.category}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    navigate("/error");
  }
};

const fetchSingleProduct = async (navigate, id) => {
  const url = `${API_URL}${endPoints.product}/${id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    navigate("/error");
  }
};

export { fetchAllProduct, fetchGetegory, fetchSingleProduct };
