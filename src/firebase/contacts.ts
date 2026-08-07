import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

// Registra desde qué botón se originó cada click de WhatsApp, para tener historial
// de interés sin exponer todavía un formulario de contacto.
export function logContactClick(source: string) {
  return addDoc(collection(db, 'contacts'), {
    source,
    timestamp: serverTimestamp(),
  });
}
