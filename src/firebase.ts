import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from './firebase-applet-config.json';

// Safe checking if config is populated
export const isFirebaseConfigured = !!(firebaseConfig && firebaseConfig.apiKey && firebaseConfig.projectId);

let app;
let dbInstance: any = null;
let authInstance: any = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    // CRITICAL: Must use firestoreDatabaseId if provided, or default database
    dbInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');
    authInstance = getAuth(app);
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
}

export const db = dbInstance;
export const auth = authInstance;

// Auth Provider
export const googleProvider = isFirebaseConfigured ? new GoogleAuthProvider() : null;

// Validate Connection (from Firebase Integration guidelines)
export async function testConnection() {
  if (!isFirebaseConfigured || !db) return;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}

if (isFirebaseConfigured) {
  testConnection();
}

// --- ERROR HANDLING PRIMITIVES ---
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const currentAuth = authInstance;
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: currentAuth?.currentUser?.uid || null,
      email: currentAuth?.currentUser?.email || null,
      emailVerified: currentAuth?.currentUser?.emailVerified || null,
      isAnonymous: currentAuth?.currentUser?.isAnonymous || null,
      tenantId: currentAuth?.currentUser?.tenantId || null,
      providerInfo: currentAuth?.currentUser?.providerData?.map((provider: any) => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error details: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// --- PERSISTENCE HELPER FUNCTIONS ---

export async function loginWithGoogle() {
  if (!isFirebaseConfigured || !authInstance || !googleProvider) {
    throw new Error("Firebase is not fully configured yet.");
  }
  return signInWithPopup(authInstance, googleProvider);
}

export async function logoutUser() {
  if (!authInstance) return;
  return signOut(authInstance);
}
