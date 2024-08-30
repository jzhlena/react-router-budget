// Local storage functions

export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
// ^ fetches any data given a key, in local storage and returns it

// delete item
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
  }