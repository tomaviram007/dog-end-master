import React from "react";

function googleMap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.8567982267336!2d34.77095331546823!3d32.07312172684729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4c800fde3aef%3A0x80e3b23ffa5044f3!2z0J_QsNGA0Log0JzQtdC40YA!5e0!3m2!1sru!2sil!4v1653862091390!5m2!1sru!2sil"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default googleMap;
