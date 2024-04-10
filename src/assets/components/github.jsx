import React, { useEffect, useState } from 'react'

function github() {
        const [data,Setdata] = useState([])
    useEffect(() =>{
        fetch(' https://api.github.com/users/ShekharPareek')
        .then(response => response.json())
        .then(data =>{
            Setdata(data)
        })
    },[])
    return (
        <div>
        <div className="py-16 bg-white">
           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center sm:items-center justify-center  lg:gap-12">
                <div><img className='w-[150px] rounded-xl' src={data.avatar_url} alt="" /></div>
                  <h1 className='bg-slate-500 text-center p-4 text-white'><span>GitHub Users : {data.followers} </span><span>Repos: {data.public_repos}</span></h1>
                  <div>{data.bio} </div>
              </div>
          </div>
          </div>
          </div>
    )
}

export default github
