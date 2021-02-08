import mapMobile from '../../Assets/contact/mobile/image-map.png';
import mapTablet from '../../Assets/contact/tablet/image-map.png';
import mapDesktop from '../../Assets/contact/desktop/image-map.png';

const MapForm = () => {
  return (
    <section className="map-form">
      <picture>
        <source media="(min-width: 768px)" srcSet={mapTablet} />
        <source media="(min-width: 1200px)" srcSet={mapDesktop} />
        <img src={mapMobile} alt="map" className="map-form__map" />
      </picture>
      <h2 className="map-form__heading">
        Connect With Us
      </h2>
      <div className="map-form__form-wrapper">
        <input type="text" className="map-form__input" placeholder="Name" />
        <input type="text" className="map-form__input" placeholder="Email" />
        <textarea placeholder="Message" className="map-form__textarea" />
        <button className="map-form__submit">
          <i className="fas fa-arrow-right map-form__arrow"></i>
        </button>
      </div>
    </section>
  )
}

export default MapForm
