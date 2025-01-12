import React from 'react';
import contact from '../images/contact.png'; // Ensure this path is correct
import ramana from '../images/ramanasoft.png'; // Ensure this path is correct

function ContactInfo() {
  
  return (
    <div style={styles.container}>

      <h1 style={styles.header}>Ramanasoft</h1>
      <div style={styles.contactInfo}>
        <h2>Contact Information</h2>
        <div style={styles.address}>
          <h3>Address:</h3>
          <p>Ramanasoft</p>
          <p>Ameerpet, Hyderabad</p>
          <p>Telangana, India</p>
        </div>

        {/* Embedding the map with an iframe */}
        <div style={styles.mapContainer}>
          <h3>Location on Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_LINK" // Replace with your actual map embed link
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// Basic styling in JS
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f4f4f9',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  contactInfo: {
    marginTop: '20px',
  },
  address: {
    marginTop: '10px',
    fontSize: '18px',
    color: '#555',
  },
  mapContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default ContactInfo;
