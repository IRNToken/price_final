
const axios = require('axios')
let key=process.env.REACT_APP_RAPID_API_KEY
console.log(key)

const Home = () => {

  
let price = () => { 

  const options = {
    method: 'GET',
    url: 'http://localhost:8000/acs'
}
  axios.request(options).then((response) => {
    console.log(response)
    document.getElementById("root").innerHTML = (response.data)
  }) .catch((error) => {
    console.error(error)
})
  
 }
  return (
    <div className="value">
     {price(()=>{
      return <h1></h1>
     })}
    
    
    </div>
  );

}
export default Home;
