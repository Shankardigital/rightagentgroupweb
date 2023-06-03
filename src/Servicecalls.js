import axios from "axios"
import { baseurl } from "./Baceurl";
import { adminbaseurl } from "./Baceurl";

// get function
export const getAllData = (url) => {
  return axios.get(baseurl + url)
}
// add function
export const addData = (url, data) => {
  return axios.post(baseurl + url, data)
}
// add admin function
export const addDataadmin = (url, data) => {
  return axios.post(adminbaseurl + url, data)
}
// update function
export const updateData = (url, data) => {
  return axios.put(baseurl + url, data)
}
// delete function
export const deletedData = (url) => {
  return axios.delete(baseurl + url)
}
