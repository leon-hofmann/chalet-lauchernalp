import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
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
        {/* <h2>
            Arcu aliquet vel lobortis ata nisl
            <br />
            eget augue amet aliquet nisl cep donec
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p> */}
        {/* </header> */}
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Sommer
          </h2>
          <p>
            Im Sommer finden Sie alles, was die Natur zu bieten hat: Grösse, Schönheit, Stille, eine reiche Flora und Fauna. Geniessen Sie Ihren Aufenthalt und lassen Sie sich von der intakten Natur inspirieren. Im Sommer empfiehlt sich die Lauchernalp als idealer Ausgangspunkt für diverse Wanderungen unterschiedlichen Schweregrades.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Winter
          </h2>
          <p>
            Im Winter kommen die Ski, Snowboard- sowie auch Langlauffreunde auf Ihre Kosten. Das Skigebiet Lauchernalp bietet dem Wintergast alle erdenkbaren touristischen Attraktionen: Alpinskifahren, Snowboarden, Varianten- und Tourenskifahren, Winterwandern, Langlaufen, Schlitteln, Pferdeschlittenfahrten, Curling und Eislauf.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          {/* <h2>
            Anreise
          </h2> */}
          <h6>Anreise mit der Bahn</h6>
          <p>In Goppenstein, am Eingang zum Lötschental, halten alle Schnellzüge (jede Stunde ein Inter- oder Eurocity) der Linie Basel-Bern-Lötschberg-Simplin-Italien. Von Goppenstein geht es weiter mit dem Bus, der direkt in Wiler vor der Gondelstation hält.</p>
          <h6>Anreise mit dem Auto</h6>
          <p>Aus dem Norden und Osten über Bern nach Spiez. Anschließend auf der gut ausgebauten Hauptstraße nach Kandersteg zur Autoverladung. In 15 min fährt Sie der Zug nach Goppenstein und von dort sind es nur noch wenige Minuten ins Lötschental.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          {/* <h2>
            Anreise
          </h2> */}
          <h6>Anreise im Winter</h6>
          <p>Im Winter ist die Lauchernalp nur mit der Seilbahn zu erreichen. An der Talstation stehen Parkplätze zur Verfügung. Personen- und Gepäcktransport erfogt mit der Seilbahn. Der Weitertransport von Gepäck kann gegen Gebühr mit einem Pistenfahrzeug erfolgen. Bei leichtem Gepäck und gutem skifahrerischem Können ist es auch möglich, das Chalet unter Nutzung des Skiliftes auf Skiern anzufahren.</p>
          <h6>Anreise im Sommer</h6>
          <p>Im Sommer ist die Alp über eine gebührenpflichtige Strasse erreichbar. Mit dem PKW kann man bis auf ca. 50 m an das Chalet heranfahren. Ein Parkplatz ist vorhanden. Fahrzeiten der Bergbahn: http://www.loetschental.ch, dann Bergbahnen anklicken.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout >
);

export default IndexPage;
