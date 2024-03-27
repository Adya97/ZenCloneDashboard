import { CircularProgressbar } from "react-circular-progressbar";
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom"></div>
      <div className="featuredChart">
        <CircularProgressbar value={60} text={"60"} strokeWidth={5}/>
      </div>
      <p className="title">Total sales made today</p>
      <p className="amount">$420</p>
      <p className="desc">
        Previus trasncrions progressing. Last payments may not be includeed.
      </p>
      <div className="summary">
        <div className="item">
            <div className="itemtitle">Target</div>
                <div className="itemresult positive">
                <KeyboardArrowUpIcon fontSize="small"/>

                <div className="resultamount">$12.4k</div>
            </div>
        </div>

        <div className="item">
            <div className="itemtitle">Last Month</div>
                <div className="itemresult positive">
                <KeyboardArrowUpIcon fontSize="small"/>

                <div className="resultamount">$12.4k</div>
            </div>
        </div>

        <div className="item">
            <div className="itemtitle">Last Week</div>
                <div className="itemresult negative ">
                <KeyboardArrowDownIcon fontSize="small"/>

                <div className="resultamount">$12.4k</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default featured
