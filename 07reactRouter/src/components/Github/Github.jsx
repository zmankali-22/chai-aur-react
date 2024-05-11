import { useLoaderData } from "react-router-dom"

export default function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     } )
    // },[])
  return (
    <div className='text-cenetr m-4 bg-gray-600 text-white p-4 text-3xl' >Github: Followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async() => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary")
  return res.json()
}