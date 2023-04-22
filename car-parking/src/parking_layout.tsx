import './App.css'
import carT from './lib/carE.png'
import carF from './lib/parking.png'
export default function ParkingL(){
    let count = 4;
    
    return(
        // <div className = "box">
            <div className='parking1'>
            <center>
            {ParkingIconGenerator()}
            </center>
            </div>
        // </div>
        
    );
}


function ParkingIconGenerator(){
    let status=[true,true,true,false,false,true,"","",false]
    let a:any =Array.from({length:9},(v,i)=>i);
    console.log("lnegth",a);
    
   let ret=a.map((i:number,id:number) => {
            console.log("here");
            return <img  id={`${id}`} onClick={book} src={status[id]?carT:carF} key={id} className='car' ></img>
        });
        
        console.log(ret);
        function book(event:any){
            let el=event.target;
            let elId=el.getAttribute("id");
            console.log(el.src.split("3000")[1])
            if (status[elId])alert(" occupied")
            else {
                console.log(carT,carF)
                console.log(el.src===carF)
                if(el.src.split("3000")[1]===carT)el.src=carF
                else el.src=carT
                //alert(el.src)
            }
        }
        return ret;
    
    
}