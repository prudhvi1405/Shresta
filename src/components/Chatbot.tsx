import React from 'react';

const Chatbot: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.chatbotContainer}>
        <h2 style={styles.heading}>Chat with our Assistant about Retail Information</h2>
        <iframe
          style={styles.iframe}
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/6c426689-b59a-49af-a7dd-1174ce362c44"
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: '#121212', // Dark background for a sleek, modern look
    display: 'flex', // Flexbox for centering
    justifyContent: 'center', // Horizontally center
    alignItems: 'center', // Vertically center
    height: '100vh', // Full viewport height
  },
  chatbotContainer: {
    width: '100%',
    maxWidth: '600px', // Max width for the container
    backgroundColor: '#1e1e1e', // Dark container background for contrast
    padding: '40px', // Increased padding for spacious look
    borderRadius: '15px', // Rounded corners
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)', // Deeper shadow for better depth
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
  },
  iframe: {
    width: '100%',
    height: '500px', // Slightly larger iframe for a better user experience
    border: 'none',
    borderRadius: '10px', // Rounded iframe corners
  },
  heading: {
    fontSize: '28px', // Slightly larger font size for better prominence
    fontWeight: '700', // Bolder font weight for emphasis
    color: '#ffffff', // White text for contrast on dark background
    marginBottom: '25px', // Increased margin for more breathing space
  },
};

export default Chatbot;
