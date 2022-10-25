import styled, {css} from "styled-components";

export const Container = styled.article`
	margin-bottom: 24px;

	/* opacity: ${(props) => props.deleted ? .5 : 1} */
	
	// or(css function is not mandatory but if we leave as a string we lose syntax highlight)
	${(props) => css`
		opacity: ${props.deleted ? .5 : 1}
	`}


`;

export const Subtitle = styled.small`
	display: block
`;

export const Rate = styled.span`
	font-size: 10px;
	opacity: .7;
`;