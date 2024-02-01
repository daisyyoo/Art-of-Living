import React from 'react';

const styles = {
  bgcolor: {
    backgroundColor: '#10375c'
  },
  title: {
    fontFamily: 'Merriweather',
    color: '#f4f6ff',
    fontWeight: '600',
    fontSize: '1rem'
  },
  text: {
    color: '#f4f6ff',
    fontSize: '0.8rem',
    lineHeight: '1.7rem'
  },
  image: {
    top: '10%',
    right: '5%',
    objectFit: 'contain'
  }
};
export default class Footer extends React.Component {
  render() {
    return (
      <div style={styles.bgcolor} className="p-3 px-md-5 position-relative">
        <div className="d-flex flex-column ">
          <h4 style={styles.title}>Contact us!</h4>
          <p style={styles.text} className="m-0"><b>Tel: </b>(714)724-8033</p>
          <p style={styles.text} className="m-0"><b>Fax: </b>(213)289-5321</p>
          <p style={styles.text} className="m-0">HopeCareHospice2019@gmail.com</p>
          <p style={styles.text} className="m-0">601 E. Yorba Linda Blvd. Ste. 1E, Placentia, CA 92870</p>
        </div>
        <img
          style={styles.image}
          className="position-absolute"
          src='/images/Hospice-logo-4.png'
          alt="hope-care-hospice-logo"
          width="120"
          height="50" />
      </div>
    );
  }
}