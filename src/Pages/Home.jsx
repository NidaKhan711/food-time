import Header from '../Components/Header'
import Cards from '../Components/Cards'
import About from '../Components/About'
import { useState } from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  let headerData =[
    {text1:'Delicious ',text2 :'Pizza',text3:' with perfect toppings and crust'},
    {text1:'Juicy',text2:'Burger',text3:'with premium ingredients and sauces'},
    {text1:'Hearty',text2:'Sandwich',text3:'with fresh, quality ingredients in every bite.'},
  ]
  const [headerCount,setHeaderCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Header  headerCount={headerCount}/>
    <Cards/>
    <About/>
    </>
  )
}

export default Home