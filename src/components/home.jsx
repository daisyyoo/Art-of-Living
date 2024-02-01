import React from 'react';

const styles = {
    image: {
      backgroundImage: 'url("/images/holding-hands-pic.webp")',
      backgroundSize: 'cover',
      backgroundPosition: '60%',
      width: '100%',
      height: '100%'
    },
    overlay: {
      backgroundColor: 'rgba(69, 69, 69, 0.4)',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
    },
    textItalic: {
      color: '#f4f6ff',
      top: '50%',
      fontFamily: 'Merriweather',
      fontStyle: 'italic',
      textAlign: 'center',
      width: '100%'
    },
    textName: {
      color: '#f4f6ff',
      bottom: '5%',
      right: '5%',
      fontFamily: 'Merriweather',
      fontSize: '1.2rem',
      fontStyle: 'italic'
    },
    header: {
      color: '#10375c',
      lineHeight: '2.5rem'
    },
    text: {
      color: '#10375c',
      fontSize: '1.1rem',
      lineHeight: '1.5rem'
    }
  };

export default function Home(props) {
    return (
      <>
        <div className="image-container" >
          <div style={styles.image} className="position-relative">
            <div style={styles.overlay} className="position-absolute"/>
            <h6 style={styles.textItalic} className="position-absolute m-0 home-img-text">where hope and care come together in sincerity</h6>
            <h2 style={styles.textName} className="position-absolute m-0">Hope Care Hospice</h2>
          </div>
        </div>
        <div className="container p-3 px-lg-0 col-lg-10">
          <div className="d-flex flex-column justify-contents-center">
            <h1 style={styles.header} className="py-2 mb-3 my-lg-4 mb-lg-5">Welcome to Hope Care Hospice</h1>
            <p style={styles.text} className="mb-4">Hope Care Hospice is a Hospice Care provider based in Placentia, California. A lot of families in the community have need for our services and we know how critical our role is in the management of their health.</p>
            <p style={styles.text} className="mb-4">Because our clients are in such difficult situations, we can understand that it can be hard to make decisions when it comes to their hospice care arrangements. Family members are also oftentimes under the same stressful situations. That is why we provide services that benefit the patient as well as their entire household.</p>
          </div>
        </div>
      </>
    );
  }