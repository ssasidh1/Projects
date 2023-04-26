import './App.css'
import ParkingL from './parking_layout'
import ParkingS from './parking_layout_stats'
export default function ParkingF(props:any){
    
    
    return(
        // <div className = "box">
            <div className='parking_full'>
                <ParkingL state={props.state}/>
                <ParkingS />
            </div>
        // </div>
    )
}