import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic01 from '../assets/images/gras.jpg';
import pic02 from '../assets/images/stausee_ferden.jpg';
import pic03 from '../assets/images/wanderung.jpg';
import pic04 from '../assets/images/schwarzsee.jpg';
import pic05 from '../assets/images/abendsonne.jpg';
import haus_pic01 from '../assets/images/01_balkon.jpg';
import haus_pic02 from '../assets/images/02_leseecke.jpg';
import haus_pic03 from '../assets/images/03_esstisch.jpg';
import haus_pic04 from '../assets/images/04_ofen.jpg';
import haus_pic05 from '../assets/images/05_küche.jpg';
import haus_pic06 from '../assets/images/06_doppelzimmer.jpg';
import haus_pic07 from '../assets/images/07_4erzimmer.jpg';
import haus_pic08 from '../assets/images/08_schneeraupe.jpg';
import haus_pic09 from '../assets/images/09_eingang.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <div id="subHeading"><p>{config.subHeading}</p></div>
        {/* <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul> */}
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          {/* Mehr */}
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        {/* <header className="major"> */}
        <header>
          <h4>Die Rossdorfer Hütte ist ein im traditionellen Stil gebautes Chalet</h4>
          <br />
          <p>Unseren Gästen bieten wir:</p>
        </header>
        <ul>
          <li>Schlafzimmer für 2 Personen</li>
          <li>Schlafzimmer für 4 Personen (2 Hochbetten)</li>
          <li>Badezimmer mit Badewanne, Fußbodenheizung und WC im Untergeschoss</li>
          <li>Zweites WC im Obergeschoss</li>
          <li>Küche mit angrenzendem Wohnbereich</li>
          <li>Großer Esstisch und Sofa zum Ausruhen und Entspannen</li>
          <li>Holzofen</li>
          <li>Balkon mit atemberaubender Aussicht auf die Alpen und die Walliser Gletscher</li>
        </ul>
        <p>
          Raucher bitten wir, auf dem Balkon oder vor dem Chalet zu rauchen. <br />
          Aufgrund möglicher Allergien unserer Gäste sind Tiere nicht erwünscht.
        </p>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic01} alt="" />
        </div>
        <div className="content">
          <h4>Die Lauchernalp im Sommer</h4>
          <p>
            Im Sommer finden Sie alles, was die Natur zu bieten hat: Grösse, Schönheit, Stille, eine reiche Flora und Fauna. Geniessen Sie Ihren Aufenthalt und lassen Sie sich von der intakten Natur inspirieren. Im Sommer empfiehlt sich die Lauchernalp als idealer Ausgangspunkt für diverse Wanderungen unterschiedlichen Schweregrades.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic02} alt="" />
        </div>
        <div className="content">
          <h4>Die Lauchernalp im Winter</h4>
          <p>
            Im Winter kommen die Ski, Snowboard- sowie auch Langlauffreunde auf Ihre Kosten. Das Skigebiet Lauchernalp bietet dem Wintergast alle erdenkbaren touristischen Attraktionen: Alpinskifahren, Snowboarden, Varianten- und Tourenskifahren, Winterwandern, Langlaufen, Schlitteln, Pferdeschlittenfahrten, Curling und Eislauf.
            <br/>
            Vom Chalet aus erreicht man auf Skiern das untere Ende des Sessellifts. Vom oberen Ende des Lifts kann man ebenfalls direkt zur Hütte fahren.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic03} alt="" />
        </div>
        <div className="content">
          <h4>Anreise mit der Bahn</h4>
          <p>In Goppenstein, am Eingang zum Lötschental, halten alle Schnellzüge (jede Stunde ein Inter- oder Eurocity) der Linie Basel-Bern-Lötschberg-Simplin-Italien. Von Goppenstein geht es weiter mit dem Bus, der direkt in Wiler vor der Gondelstation hält.</p>
          <h4>Anreise mit dem Auto</h4>
          <p>Aus dem Norden und Osten über Bern nach Spiez. Anschließend auf der gut ausgebauten Hauptstraße nach Kandersteg zur Autoverladung. In 15 min fährt Sie der Zug nach Goppenstein und von dort sind es nur noch wenige Minuten ins Lötschental.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic04} alt="" />
        </div>
        <div className="content">
          <h4>Anreise im Winter</h4>
          <p>Im Winter ist die Lauchernalp nur mit der Seilbahn zu erreichen. An der Talstation stehen Parkplätze zur Verfügung. Personen- und Gepäcktransport erfogt mit der Seilbahn. Der Weitertransport von Gepäck kann gegen Gebühr mit einem Pistenfahrzeug erfolgen. Bei leichtem Gepäck und gutem skifahrerischem Können ist es auch möglich, das Chalet unter Nutzung des Skiliftes auf Skiern anzufahren.</p>
          <h4>Anreise im Sommer</h4>
          <p>Im Sommer ist die Alp über eine gebührenpflichtige Strasse erreichbar. Mit dem PKW kann man bis auf ca. 50 m an das Chalet heranfahren. Ein Parkplatz ist vorhanden. Die Fahrzeiten der Bergbahn finden Sie <a href="https://www.loetschental.ch/de/bergbahnen/fahrplan" target="_blank" rel="noreferrer">hier</a>.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic05} alt="" />
        </div>
        <div className="content">
          <h4>Preise im Winter</h4>
          <p>
            <ul>
              <li>150 CHF pro Nacht</li>
              <li>100 CHF pro Woche für Strom und Brennholz</li>
              <li>260 CHF einmalig für Endreinigung</li>
              <li>25 CHF einmalig pro Person für Bettwäsche</li>
            </ul>
              Die Mindestmietdauer beträgt im Winter eine Woche.
          </p>
          <h4>Preise im Sommer</h4>
          <p>
            <ul>
              <li>800 CHF pro Woche</li>
              <li>100 CHF pro Woche für Strom und Parkplatz</li>
              <li>50 CHF Maut für die Auffahrt zur Lauchernalp (am Schalter der Bergbahn zu bezahlen)</li>
            </ul>
          </p>
          <h4>Weiteres</h4>
          <p>
            <ul>
              <li>Kurtaxe Erwachsene 4,80 CHF pro Tag</li>
              <li>Kurtaxe Kinder 2,40 CHF pro Tag</li>
              <li>Es ist möglich, im Sommer selbst zu reinigen und eigene Bettwäsche mitzubringen</li>
            </ul>
          </p>
        </div>
      </section>
    </section>

    <section>
      <div className="wrapper">
        <div className="inner">
          <div className="style3 row gtr-50 gtr-uniform">
            <div className="col-4"><span className="image fit"><img src={haus_pic01} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={haus_pic02} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={haus_pic03} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={haus_pic04} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={haus_pic05} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={haus_pic06} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={haus_pic07} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={haus_pic08} alt="" /></span></div>
            <div className="col-4"><span className="image fit"><img src={haus_pic09} alt="" /></span></div>
          </div>
        </div>
      </div>
    </section>


    {/* <section>
					<form method="post" action="#">
						<div className="wrapper style3 row gtr-uniform">
							<div className="col-6 col-12-xsmall">
								<input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
							</div>
							<div className="col-6 col-12-xsmall">
								<input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
							</div>
							<div className="col-12">
								<select name="demo-category" id="demo-category">
									<option value="">- Category -</option>
									<option value="1">Manufacturing</option>
									<option value="1">Shipping</option>
									<option value="1">Administration</option>
									<option value="1">Human Resources</option>
								</select>
							</div>
							<div className="col-4 col-12-small">
								<input type="radio" id="demo-priority-low" name="demo-priority" defaultChecked />
								<label htmlFor="demo-priority-low">Low</label>
							</div>
							<div className="col-4 col-12-small">
								<input type="radio" id="demo-priority-normal" name="demo-priority" />
								<label htmlFor="demo-priority-normal">Normal</label>
							</div>
							<div className="col-4 col-12-small">
								<input type="radio" id="demo-priority-high" name="demo-priority" />
								<label htmlFor="demo-priority-high">High</label>
							</div>
							<div className="col-6 col-12-small">
								<input type="checkbox" id="demo-copy" name="demo-copy" />
								<label htmlFor="demo-copy">Email me a copy</label>
							</div>
							<div className="col-6 col-12-small">
								<input type="checkbox" id="demo-human" name="demo-human" defaultChecked />
								<label htmlFor="demo-human">Not a robot</label>
							</div>
							<div className="col-12">
								<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
							</div>
							<div className="col-12">
								<ul className="actions">
									<li><input type="submit" value="Send Message" className="primary" /></li>
									<li><input type="reset" value="Reset" /></li>
								</ul>
							</div>
						</div>
					</form>
				</section> */}
  </Layout >
);

export default IndexPage;
