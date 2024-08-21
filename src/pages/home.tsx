import Header from "../components/Home/Header"
import Card from "../components/Home/Card"
import ItemsList from "../components/Home/ItemsList"



export default function Home()  {
  return (
    <div className="fixed h-screen w-full flex flex-col">
    <Header />
  <ItemsList />

  <Card />
  

  
    </div>
  )
}


