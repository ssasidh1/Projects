import './App.css'
import ParkingL from './parking_layout'
import ParkingS from './parking_layout_stats'
export default function ParkingF(){
    return(
        // <div className = "box">
            <div className='parking_full'>
                <ParkingL />
                <ParkingS />
            </div>
        // </div>
    )
}