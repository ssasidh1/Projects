import './App.css'
import ParkingL from './parking_layout'
import ParkingS from './parking_layout_stats'
export default function ParkingF(props:any){
const lots=['A','B','C','D','E','F']
    console.log(props.state);
    return(
        // <div className = "box">
            <div className='parking_full'>
                <center><p className="name">{lots[props.name]}</p></center>
                <ParkingL state={props.state}/>
                <ParkingS />
            </div>
        // </div>
    )
}