import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const App = () => { 

const [value, setValue] = useState({ 

startDate: new Date(), 
endDate: new Date().setMonth(11) 

}); 

const handleValueChange = (newValue) => {
console.log("newValue:", newValue); 
setValue(newValue); 

} 

return (
    <>
    <button className="btn btn-lg rounded-2xl w-[300px]">
<Datepicker

primaryColor={"cyan"} 
value={value} 
onChange={handleValueChange} 
showShortcuts={true} 
placeholder="Check-in • Check-out"
/> 
</button>



</>
);
}; 
export default App;