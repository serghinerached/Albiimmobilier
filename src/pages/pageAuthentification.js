// Fichier : PageAuthentification.js
import React, { useState } from 'react';
import DivPageLogin from './pageLogin';
import DivPageInscription from './pageInscription';

function DivPageAuthentification() {

  const [showLogin, setShowLogin] = useState(true);

  if (showLogin) {
    return <DivPageLogin onNavigateToLogin={() => setShowLogin(false)} />;
  } else {
    return <DivPageInscription DivPageInscription={() => setShowLogin(true)} />;
  }
}

export default DivPageAuthentification;