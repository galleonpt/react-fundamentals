import React from "react"
import Post from "./Posts"
import Header from "./Header"

export default function App(){
	return (
		<>
			<Header title="JStack's Blog" subtitle="Weekly posts">
				<h2>Weekly posts</h2>
			</Header>

			<hr></hr>

			<Post
				likes = {20}
				post={{
					title: "Noticia 01",
					subtitle: "Subtitulo 01"
				}} >
			 </Post>
			<Post
				likes = {4 }
				post={{
					title: "Noticia 01",
					subtitle: "Subtitulo 01"
				}} >
			 </Post>
			<Post
				likes={10}
				post={{
					title: "Noticia 01",
					subtitle: "Subtitulo 01"
				}} >
			 </Post>
		</>
	)
}