import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  return (
    <div>
      <Navbar user={user} />
      {user && <PostForm user={user} />}
      <PostList />
    </div>
  );
}
