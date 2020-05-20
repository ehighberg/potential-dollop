import axios from 'axios'

let apiUrl
const apiUrls = {
    production: 'https://mysterious-anchorage-39512.herokuapp.com/',
    development: 'http://localhost:3000/'
}

if (window.location.hostname === 'localhost')
{
    apiUrl = apiUrls.development
} else
{
    apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})


export const getUserByEmail = async (email) => {
  try {
    const userList = await api.get('/users')
    const userId = userList.filter(user => {
      return user.email === email
    })
    console.log(userId)
    return 1
  } catch(error) {
    console.error(error)
  }
}
