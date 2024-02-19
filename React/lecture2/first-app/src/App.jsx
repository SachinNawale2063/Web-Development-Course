import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Card from "./components/Card.jsx"

function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title='card 1' description='card 1 description'/>
        <Card title='card 2' description='card 2 description'/>
        <Card title='card 3' description='card 3 description'/>
        <Card title='card 4' description='card 4 description'/>
        <Card title='card 5' description='card 5 description'/>
        <Card title='card 6' description='card 6 description'/>
        <Card title='card 7' description='card 7 description'/>
      </div>
      <Footer/>
    </>
  )
}

export default App


// npm create vite@latest 
// npm i 
// npm run dev