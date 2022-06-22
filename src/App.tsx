import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Player } from "./components/Player";
import { Sidebar } from "./components/Sidebar";
import { client } from "./lib/apollo"
import {Event} from "././pages/Event"

const GET_LESSONS_QUERY = gql`
  query{ 
    lessons{
      id
      title
    }
  }
`
interface Lesson {
  id:string;
  title:string;
}

function App() {
  // useEffect(() => {
  //   client.query({query: GET_LESSONS_QUERY}).then(response => {
  //     console.log(response.data);
  //   })
  // }, [])
  const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <div>
    <Event />
    </div>
  )
}

export default App
