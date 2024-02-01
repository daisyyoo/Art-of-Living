import React from 'react';
import Button from 'react-bootstrap/Button';

const styles = {
  textTop: {
    color: '#10375c',
    lineHeight: '1.7rem'
  },
  textBot: {
    color: '#f4f6ff',
    lineHeight: '1.7rem'
  },
  image: {
    objectFit: 'cover'
  }
};

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="container-fluid mt-3 background-half-color">
        <div className="row flex-column col-lg-10 m-auto">
          <h1 className="px-3 py-2 my-2 my-lg-3">About Us</h1>
        </div>
        <div className="row flex-column col-lg-10 m-auto">
          <div className="p-3 py-2">
            <h6 style={styles.textTop} className="mb-4">
              Hope Care Hospice is a Hospice Care provider based in Placentia, California. A lot of families in the community have need for our services and we know how critical our role is in the management of their health.
            </h6>
          </div>
          <div className="d-flex justify-content-center about-us-image-container">
            <img style={styles.image} className="col-9 img-fluid rounded" src="/images/Chinese-Senior-Unique-Man-w-Caregiver.webp" alt="Chinese-Senior-Unique-Man-w-Caregiver" />
          </div>
          <div className="d-flex justify-content-center">
            <Button className="call-button-all m-2 my-4 px-5" href="tel:+1-714-724-8033"><b>Call us at 714.724.8033</b></Button>
          </div>
          <div className="p-3 py-2">
            <h6 style={styles.textBot} className="mb-4">
              Because our clients are in such difficult situations, we can understand that it can be hard to make decisions when it comes to their hospice care arrangements. Family members are also oftentimes under the same stressful situations. That is why we provide services that benefit the patient as well as their entire household.
            </h6>
          </div>
          <div className="p-3 py-2">
            <h6 style={styles.textBot} className="mb-4">
              Hope Care Hospice is not a place, but rather an approach to care while focusing on the comfort of the patient who has a life-limiting illness. While their health issues may limit their life expectancy, it does not have to limit their quality of life in their remaining days. This is what we strive to achieve for the families under our care. If you would like the same privilege for your own family, please call us at 714-724-8033.
            </h6>
          </div>
        </div>
      </div>
    );
  }
}