import React, {useState} from "react"
import Post from "./Posts"
import Header from "./Header"

export default function App(){
	const  [posts, setPosts] = useState([
		{ id: Math.random(), title: "Title#01", subtitle: "Sub#01", likes: 10 },
		{ id: Math.random(), title: "Title#02", subtitle: "Sub#02", likes: 20 },
		{ id: Math.random(), title: "Title#03", subtitle: "Sub#03", likes: 30 },
	])


	function handleRefresh(){
		setPosts((prevState) => [
			...prevState, 
			{
				id: Math.random(), title: `Title#${prevState.length +1}`, subtitle: `Sub#${prevState.length +1}`, likes: 10
			}
		])
	}

	return (
		<>
			<Header title="JStack's Blog" subtitle="Weekly posts">
				<h2>
					Weekly posts
					<button onClick={handleRefresh}>Refresh</button>
				</h2>
			</Header>

			<hr></hr>

			{posts.map(item=>{
				return (
					<Post key={item.title+item.subtitle} likes={item.likes} post={{title: item.title, subtitle: item.subtitle}}/>
				)
			})}
		</>
	)
}