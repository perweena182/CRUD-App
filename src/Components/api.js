import axios from "axios";

export const getNames = async () => {
	return await axios.post("${process.env.REACT_APP_API}");
}


