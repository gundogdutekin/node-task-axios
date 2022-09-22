import axios from "axios"

const getData=async(Number)=>{
   await axios.get(`https://jsonplaceholder.typicode.com/users/${Number}`)
   .then((res)=>{
    console.log(res.data)
 })
 await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${Number}`)
   .then((res)=>{
    console.log(res.data)
 })
    
}

export default getData