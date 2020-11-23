import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = () => <Layout>
	<article id="main">
		<header>
		</header>
		<section className="wrapper style5">
			<div className="inner">

				<section>
					<h4>Angaben gemäß § 5 TMG:</h4>
					<hr />
					<p><Link to="/">chalet-lauchernalp.ch</Link> vertreten durch</p>
					<p>Brunhild Hofmann<br />
					Dieburger Straße 98 A<br />
						64287 Darmstadt</p>
					<p>Tel.: +49 6151 45475</p>
					<p><a href="mailto:brunhild-hofmann@t-online.de">brunhild-hofmann@t-online.de</a></p>
					<hr />
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
