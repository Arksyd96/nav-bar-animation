import React from 'react';
import { Layout } from 'antd'
import Styled from '@emotion/styled'
import Navbar from './components/Navbar'
import './App.css'
import SecondaryNavbar from './components/SecondaryNavbar';
import Background from './img/hero.jpg'

const { /*Header,*/ Content, Footer } = Layout

const Hero = Styled.section({
	background: `url(${Background}) no-repeat center center`,
	backgroundSize: 'cover',
	height: '600px',
	width: '100%'
})


class App extends React.Component<any, any>{
	public render() {
		return (
			<div>
				<Navbar />
				<Content>
					<Hero />
					<SecondaryNavbar />
					<main>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, quos, voluptate, sunt, in suscipit quibusdam quis dignissimos eligendi repellendus ipsam exercitationem adipisci nostrum fugit accusamus quae cum nisi accusantium eaque.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolore, impedit eveniet necessitatibus voluptate distinctio quam repellendus voluptates voluptatum inventore rem sapiente minus esse saepe iste harum architecto numquam quis vero dignissimos beatae est id libero adipisci enim odio natus commodi explicabo modi similique nesciunt deserunt vel consectetur velit omnis quaerat corrupti. Cumque, perspiciatis, culpa, reprehenderit laboriosam obcaecati deleniti soluta tempora ipsum ipsam iure temporibus dolore modi quidem cum doloribus ex vel suscipit sapiente ut esse optio voluptates molestias natus nostrum illo nihil quisquam facilis hic atque voluptas quae pariatur placeat officia doloremque quia ea recusandae rem iste asperiores iusto debitis quod incidunt id nemo repellendus itaque. Iure, vel, expedita quam repellendus aliquam fugit autem obcaecati libero reiciendis excepturi officia voluptate molestiae quis itaque consequatur nulla ea sunt facilis cupiditate tempora sequi nam in asperiores! Sunt, maxime at id eaque debitis quasi a possimus eveniet eum velit tempore quidem voluptates expedita quibusdam officiis. Ipsum, quaerat, vero, adipisci enim autem inventore eum maiores consectetur culpa molestiae cumque sed qui dolorem. Placeat, quae deleniti molestiae minima cupiditate quaerat sit est perspiciatis error iste. Ratione, minus, commodi, magni laborum doloribus libero ullam quos tenetur quis molestias ipsam consequuntur harum asperiores culpa nostrum omnis.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolore, impedit eveniet necessitatibus voluptate distinctio quam repellendus voluptates voluptatum inventore rem sapiente minus esse saepe iste harum architecto numquam quis vero dignissimos beatae est id libero adipisci enim odio natus commodi explicabo modi similique nesciunt deserunt vel consectetur velit omnis quaerat corrupti. Cumque, perspiciatis, culpa, reprehenderit laboriosam obcaecati deleniti soluta tempora ipsum ipsam iure temporibus dolore modi quidem cum doloribus ex vel suscipit sapiente ut esse optio voluptates molestias natus nostrum illo nihil quisquam facilis hic atque voluptas quae pariatur placeat officia doloremque quia ea recusandae rem iste asperiores iusto debitis quod incidunt id nemo repellendus itaque. Iure, vel, expedita quam repellendus aliquam fugit autem obcaecati libero reiciendis excepturi officia voluptate molestiae quis itaque consequatur nulla ea sunt facilis cupiditate tempora sequi nam in asperiores! Sunt, maxime at id eaque debitis quasi a possimus eveniet eum velit tempore quidem voluptates expedita quibusdam officiis. Ipsum, quaerat, vero, adipisci enim autem inventore eum maiores consectetur culpa molestiae cumque sed qui dolorem. Placeat, quae deleniti molestiae minima cupiditate quaerat sit est perspiciatis error iste. Ratione, minus, commodi, magni laborum doloribus libero ullam quos tenetur quis molestias ipsam consequuntur harum asperiores culpa nostrum omnis.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, quos, voluptate, sunt, in suscipit quibusdam quis dignissimos eligendi repellendus ipsam exercitationem adipisci nostrum fugit accusamus quae cum nisi accusantium eaque.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolore, impedit eveniet necessitatibus voluptate distinctio quam repellendus voluptates voluptatum inventore rem sapiente minus esse saepe iste harum architecto numquam quis vero dignissimos beatae est id libero adipisci enim odio natus commodi explicabo modi similique nesciunt deserunt vel consectetur velit omnis quaerat corrupti. Cumque, perspiciatis, culpa, reprehenderit laboriosam obcaecati deleniti soluta tempora ipsum ipsam iure temporibus dolore modi quidem cum doloribus ex vel suscipit sapiente ut esse optio voluptates molestias natus nostrum illo nihil quisquam facilis hic atque voluptas quae pariatur placeat officia doloremque quia ea recusandae rem iste asperiores iusto debitis quod incidunt id nemo repellendus itaque. Iure, vel, expedita quam repellendus aliquam fugit autem obcaecati libero reiciendis excepturi officia voluptate molestiae quis itaque consequatur nulla ea sunt facilis cupiditate tempora sequi nam in asperiores! Sunt, maxime at id eaque debitis quasi a possimus eveniet eum velit tempore quidem voluptates expedita quibusdam officiis. Ipsum, quaerat, vero, adipisci enim autem inventore eum maiores consectetur culpa molestiae cumque sed qui dolorem. Placeat, quae deleniti molestiae minima cupiditate quaerat sit est perspiciatis error iste. Ratione, minus, commodi, magni laborum doloribus libero ullam quos tenetur quis molestias ipsam consequuntur harum asperiores culpa nostrum omnis.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolore, impedit eveniet necessitatibus voluptate distinctio quam repellendus voluptates voluptatum inventore rem sapiente minus esse saepe iste harum architecto numquam quis vero dignissimos beatae est id libero adipisci enim odio natus commodi explicabo modi similique nesciunt deserunt vel consectetur velit omnis quaerat corrupti. Cumque, perspiciatis, culpa, reprehenderit laboriosam obcaecati deleniti soluta tempora ipsum ipsam iure temporibus dolore modi quidem cum doloribus ex vel suscipit sapiente ut esse optio voluptates molestias natus nostrum illo nihil quisquam facilis hic atque voluptas quae pariatur placeat officia doloremque quia ea recusandae rem iste asperiores iusto debitis quod incidunt id nemo repellendus itaque. Iure, vel, expedita quam repellendus aliquam fugit autem obcaecati libero reiciendis excepturi officia voluptate molestiae quis itaque consequatur nulla ea sunt facilis cupiditate tempora sequi nam in asperiores! Sunt, maxime at id eaque debitis quasi a possimus eveniet eum velit tempore quidem voluptates expedita quibusdam officiis. Ipsum, quaerat, vero, adipisci enim autem inventore eum maiores consectetur culpa molestiae cumque sed qui dolorem. Placeat, quae deleniti molestiae minima cupiditate quaerat sit est perspiciatis error iste. Ratione, minus, commodi, magni laborum doloribus libero ullam quos tenetur quis molestias ipsam consequuntur harum asperiores culpa nostrum omnis.
							</p>
						</div>
					</main>
				</Content>
				<Footer>Footer</Footer>
			</div>
		);
	}
}

export default App;
