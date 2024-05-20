import React,{ useState} from 'react'
import { data } from '../data/Restaurantdata'
import Card from './Card'

function Restaurant() {
   
    const [data2, setData2] = useState(data)
    const [inputval, setInputval] = useState("");
    const [ratingval, setRatingval] = useState(0);
  
    const searchrestaurant = (e) => {
      const val = e.target.value;
      setInputval(val)
      // console.log(inputval)
      const filterreastaurant = data.filter((item) => {
        if (item.name.toLowerCase().includes(val.toLowerCase())) return item
  
      })
      setData2(filterreastaurant)
    }
    const ratingfilter = (e) => {
      let rateval = e.target.value;
      setRatingval(rateval)
      const ratingfiltered = data.filter((el) => {
        return el.rating >= rateval
      })
      setData2(ratingfiltered);
    }
  
  
    return (
      <>
        {/* <Header /> */}
        <br />
  
        <div className='w-[90%] m-auto flex flex-row justify-between'>
  
          <input type="text" className='border-2 border-black p-1' placeholder='Search reastaurant' onChange={searchrestaurant} value={inputval} />
          <input type="number" value={ratingval} onChange={ratingfilter} className='border-2 border-black p-1' />
  
        </div>
        <br />
        <br />
        <br />
  
  
        <div className='w-[90%] m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
  
          {
  
            data2.map((item) => {
              return <Card key={item._id.$oid} name={item.name} address={item.address} outcode={item.outcode} postcode={item.postcode} rating={item.rating} typeoffood={item.type_of_food} url={item.URL} address2={item["address line 2"]} />
  
            })
  
          }
  
        </div>
        <br />
        <br />
        <br />
        <br />
  
      </>
    )
  }
  


export default Restaurant
