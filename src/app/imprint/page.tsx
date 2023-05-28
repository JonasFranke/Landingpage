import Link from "next/link";

const Page = () => {
    return (
        <div className="text-white m-2">
            <Link href="/"><button className="bg-blue-500 rounded p-2">Zurück</button></Link>
            <h1 className="text-2xl font-bold mb-3 mt-5">Impressum</h1>
            <p>Angaben gemäß § 5 TMG</p>
            <p>Jonas Franke
                <br/>
                28357 Bremen
                <br/>
            </p>
            <p className="mt-2">
                <strong>
                    Vertreten durch:
                </strong>
                <br/>
                Jonas Franke
            </p>
            <p>
                <strong>
                    Kontakt:
                </strong>
                <br/>
                <Link href="mailto:info@jonasfranke.xyz">
                    info@jonasfranke.xyz
                </Link>
            </p>
            <p className="mt-5">
                <strong className="font-bold">Haftungsausschluss:</strong>
                <br/>
                <strong className="">Datenschutz</strong>
                <br/>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. <br/>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. <br/>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br/>
            </p>
        </div>
    );
};

export default Page;