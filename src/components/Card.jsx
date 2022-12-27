import { Link } from "react-router-dom"

const Card = ({data}) => {
  if(!data) return null
  
  return (
    <>    
        <div className="my-4 px-10 w-full md:w-1/2 lg:my-4  lg:px-10 lg:w-1/3 ">

         
            <article className="overflow-hidden rounded-lg shadow-lg py-4 px-2 cursor-pointer hover:shadow-2xl">

               
                    <img alt="Placeholder" className="block h-80 w-full rounded-full py-8 px-8" src={data.avatar_url}/>
                

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg font-sans text-gray-700 ">
                        
                       <Link to={`/team/${data.login}`}>{data.name}</Link>
                        
                    </h1>
                    <p className="font-thin text-gray-500 text-sm">
                    {data.location}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    {/* <a className="flex items-center no-underline hover:underline text-black" href="#"> */}
                        {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/> */}
                        <p className="text-sm font-thin text-gray-900">
                            Followers - {data.followers}
                        </p>
                        <p className="ml-2 text-sm font-thin text-gray-900 ">
                            Total repo - {data.public_repos}
                        </p>
                </footer>
            </article>
        </div>
    </>
  )
}

export default Card 