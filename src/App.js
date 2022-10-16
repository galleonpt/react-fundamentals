import React, {useState} from "react"
import Post from "./Posts"
import Header from "./Header"

export default function App(){
	const  [posts, setPosts] = useState([
		{ id: Math.random(), title: "Title#01", subtitle: "Sub#01", likes: 10, read: true },
		{ id: Math.random(), title: "Title#02", subtitle: "Sub#02", likes: 20, read: false },
		{ id: Math.random(), title: "Title#03", subtitle: "Sub#03", likes: 30, read: false },
	])

	function handleRefresh(){
		setPosts((prevState) => [
			...prevState, 
			{
				id: Math.random(), title: `Title#${prevState.length +1}`, subtitle: `Sub#${prevState.length +1}`, likes: 10, read: false
			}
		])
	}

	function handleRemovePost(postId){
		setPosts((prevState)=> prevState.filter(post => post.id !== postId))
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

			{posts.map(post=>{
				return (
					<Post 
						key={post.id}
						post={post}
						onRemove={handleRemovePost}
					/>
				)
			})}
		</>
	)
}