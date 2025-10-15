// Fichier : PageAuthentification.js
import React, { useState } from 'react';
import DivPageLogin from './pageLogin';
import DivPageInscription from './pageInscription';

function DivPageAuthentification() {

  const [showLogin, setShowLogin] = useState(true);

  if (showLogin) {
    return <DivPageLogin onNavigateToInscription={() => setShowLogin(false)} />;
  } else {
    return <DivPageInscription onNavigateToLogin={() => setShowLogin(true)} />;
  }
}

export default DivPageAuthentification;