
import { Card } from "../components/home/Cards"
import Header from "../components/home/Header"
import ItemsList from "../components/home/ItemsList"



function home() {
  return (
    <div className="fixed h-screen w-full flex flex-col">
    <Header />
  <ItemsList />
  <Card />

  
    </div>
  )
}

export default home
