import { useTranslation } from 'react-i18next';

function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
        <p className="mb-2">Lorem Ipsum GmbH</p>
        <p className="mb-2">Musterstraße 123</p>
        <p className="mb-4">12345 Musterstadt</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
        <p className="mb-4">Max Mustermann</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p className="mb-2">Telefon: +49 (0) 123 456789</p>
        <p className="mb-2">E-Mail: info@example.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Registereintrag</h2>
        <p className="mb-2">Eintragung im Handelsregister</p>
        <p className="mb-2">Registergericht: Amtsgericht Musterstadt</p>
        <p className="mb-4">Registernummer: HRB 12345</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
        <p className="mb-4">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE123456789
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p className="mb-2">Max Mustermann</p>
        <p className="mb-2">Musterstraße 123</p>
        <p className="mb-4">12345 Musterstadt</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
        
        <h3 className="text-xl font-medium mb-3">Haftung für Inhalte</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <h3 className="text-xl font-medium mb-3">Haftung für Links</h3>
        <p className="mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h3 className="text-xl font-medium mb-3">Urheberrecht</h3>
        <p className="mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
        <p className="mb-4">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </section>
    </div>
  );
}

export default Impressum;
