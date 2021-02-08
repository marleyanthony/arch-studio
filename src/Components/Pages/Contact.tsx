import Hero from '../Hero';
import { ContactPageHero } from '../../Models/Contact';
import ContactDetails from '../Contact/ContactDetails';
import MapForm from '../Contact/MapForm';

const Contact = () => {
  return (
    <div className="contact-page">
      <Hero content={ContactPageHero} />
      <ContactDetails />
      <MapForm />
    </div>
  )
}

export default Contact
