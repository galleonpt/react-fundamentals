import React, { useState } from "react"
import Post from "./Post"
import Header from "./Header"
import { ThemeProvider } from "./ThemeContext"

import styles from "./App.css"

export default function App(){

	const  [posts, setPosts] = useState([
		{ id: Math.random(), title: "Title#01", subtitle: "Sub#01", likes: 10, read: true, deleted: true },
		{ id: Math.random(), title: "Title#02", subtitle: "Sub#02", likes: 20, read: false, deleted: false },
		{ id: Math.random(), title: "Title#03", subtitle: "Sub#03", likes: 30, read: false, deleted: false },
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
		setPosts((prevState)=> prevState.map((post)=> post.id === postId ? {...post, deleted: true} : post))
	}

	return (
		<ThemeProvider>
			<Header title="JStack's Blog">
				<h2 className={styles.title}>
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
		</ThemeProvider>
	)
}