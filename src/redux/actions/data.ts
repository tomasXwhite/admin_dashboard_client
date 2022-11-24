import axios from "axios";
import { useDispatch } from "react-redux";
import { getData } from "../reducers/dataSlice";
import { Dispatch } from "react";


export const getDataAction = () => async (dispatch: any) => {

    try {
        console.log("action")
        const { data } = await axios
            .get(`http://localhost:3001/data`)
        return dispatch(getData(data.msg))





    } catch (err) {
        console.log(err)
        alert("Error while fetching data")
    }
}