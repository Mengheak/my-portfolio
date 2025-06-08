import { ref, onUnmounted } from "vue";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../firebase";

const user = ref<User | null>(null);

const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser;
});

onUnmounted(() => unsubscribe());

export function useAuth() {
  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const signup = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  return { user, login, signup, logout };
}
