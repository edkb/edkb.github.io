import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Eduardo Binotto</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Based on this nice portfolio {' '}
					<a
						href="https://github.com/smakosh/gatsby-portfolio-dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						template
					</a>
					,{' '}powered by {' '}
					<a
						href="https://www.gatsbyjs.org/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Gatsby
					</a>
					{' '} and made with{' '}
					<span aria-label="love" role="img">
						💖
					</span>{' '}
					by{' '}
					<a
						href="https://github.com/smakosh"
						rel="noopener noreferrer"
						target="_blank"
					>
						Smakosh
					</a>
				</span>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
