import React from "react"
import PropTypes from "prop-types"

export default function Post(props){
	console.log(props)
	return (
		<>
			<article>
				<strong>{props.post.title}</strong> <br></br>
				<small>{props.post.subtitle}</small>
				<br></br>
				Likes: {props.likes}
			</article>
			<br></br>
		</>
	)
}

Post.propTypes = {
	likes: PropTypes.number.isRequired,
	post: PropTypes.shape({
		title:PropTypes.string.isRequired,
		subtitle:PropTypes.string.isRequired,
	}).isRequired
}