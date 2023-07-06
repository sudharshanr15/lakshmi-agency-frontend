import { Navbar } from '../core/templates/common/nav'
import { Footer } from '../core/templates/common/footer'
import { Card } from '../core/templates/body/dashboard/card'
import { Graph } from '../core/templates/body/dashboard/graph'

export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <Card/>
    <Graph/>
    <Footer/>
    </>
    
  )
}
