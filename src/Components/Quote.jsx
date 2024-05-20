import  Data  from "../Components/data/Quotedata"
import React from 'react'

function Quote() {
    return (
        <div>
            <br />
            <br />

            {
                Data.map((quotes) => {
                    return (
                        <>
                            <div className=" w-4/5 m-auto text-center shadow-2xl p-10  overflow-visible">
                                <p className="text-3xl font-bold">{quotes.para}</p>
                                <br />
                                <p>{quotes.author}</p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />


                        </>

                    )
                })
            }

        </div>
    )
}

export default Quote
