import { ContactPageLocations } from '../../Models/Contact';

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <div className="contact-details__heading">
        Contact Details
      </div>
      <div className="contact-details__location-wrapper">
        {
          ContactPageLocations.map((location, index) => {
            return (
              <>
                <div className="contact-details__location" key={index}>
                  <h5 className="contact-details__name">
                    {location.name}
                  </h5>
                  <p className="contact-details__info">
                    Mail: {location.email}
                  </p>
                  <p className="contact-details__info">
                    Address: {location.address}
                  </p>
                  <p className="contact-details__info">
                    Phone: {location.phone}
                  </p>
                </div>
                <button className="contact-details__view-map">
                  View On Map
                  <i className="fas fa-arrow-right hero__arrow"></i>
                </button>
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default ContactDetails
