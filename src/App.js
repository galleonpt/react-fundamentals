import React from "react"
import Post from "./Posts"
import Header from "./Header"

export default function App(){

	const posts = [
		{ title: "Title#01", subtitle: "Sub#01", likes: 10 },
		{ title: "Title#02", subtitle: "Sub#02", likes: 20 },
		{ title: "Title#03", subtitle: "Sub#03", likes: 30 },
	]

	return (
		<>
			<Header title="JStack's Blog" subtitle="Weekly posts">
				<h2>Weekly posts</h2>
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