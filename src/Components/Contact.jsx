import React from 'react'

function Contact() {
  return (
    <div>
        
        <div className='flex justify-evenly w-[90%] m-auto py-20'>
            <div>
                <p className='text-lg font-semibold'>Contact Us</p>
                <br />
                <h1 className='text-4xl font-bold'>GET IN TOUCH WITH US</h1>
                <br />
                <p className='w-[50%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>
                <br />
                <br />
                <div className='flex gap-8'>
                    <div><img src="https://www.svgrepo.com/show/499807/home-page.svg" alt="" width={40} /></div>
                    <div>
                        <h1 className='text-2xl font-bold'>Our Location</h1>
                        <p className='text-lg'>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                    </div>
                </div>
                <br />
                <div className='flex gap-8'>
                    <div><img src="https://www.svgrepo.com/show/499799/telephone-number.svg" alt="" width={40} /></div>
                    <div>
                        <h1 className='text-2xl font-bold'>Phone No</h1>
                        <p className='text-lg'>12345678910</p>
                    </div>
                </div>
                <br />
                <div className='flex gap-8'>
                    <div><img src="https://www.svgrepo.com/show/421616/email-mail-web.svg" alt="" width={40} /></div>
                    <div>
                        <h1 className='text-2xl font-bold'>Emial</h1>
                        <p className='text-lg'>abc123@gmail.com</p>
                    </div>
                </div>
                <br />

            </div>
            <div>
                <form action="">
                    <input type="text" placeholder='Enter Your Name'  className='border-2 border-slate-500 px-32 py-2'/>
                    <br />
                    <br />
                    <input type="text" placeholder='Enter Your Email'  className='border-2 border-slate-500 px-32 py-2'/>
                    <br />
                    <br />
                    <input type="text" placeholder='Enter Your Phone'  className='border-2 border-slate-500 px-32 py-2'/>
                    <br />
                    <br />
                    <textarea name="" id="" className='border-2 border-slate-500' cols={54} rows={8}></textarea>
                    <br />
                    <br />
                    <button className='bg-blue-500 text-white px-52 py-2'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
