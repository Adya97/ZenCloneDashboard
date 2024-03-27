import "./home.scss"
import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Widgets from "../../widgets/widgets"
import Charts from "../../components/charts/charts"
import Featured from "../../components/featured/featured"
import Table from "../../components/table/table"

const home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>  
          <Widgets type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Charts title="Last 6 Months (Revenue)" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transcations</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default home
