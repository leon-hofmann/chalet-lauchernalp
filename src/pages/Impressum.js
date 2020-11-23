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
Addition					<h4>Kontakt</h4>
					<p><Link to="/">chalet-lauchernalp.ch</Link> vertreten durch</p>
					<p>Brunhild Hofmann<br />
					Dieburger Straße 98 A<br />
						64287 Darmstadt</p>
					<p>Tel.: +49 6151 45475</p>
					<p><a href="mailto:brunhild-hofmann@t-online.de">brunhild-hofmann@t-online.de</a></p>
					<hr />
					<h4>Umsatzsteuer</h4>
					Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: <br />
					DE211172297
					<hr />
					<h4>Streitschlichtung</h4>
					<p>
						Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.</p>
					<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. </p>
				</section>
			</div>
		</section>
	</article>

</Layout>;

export default IndexPage;
