import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(docs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="post-list">
      <h2>Publicaciones</h2>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <strong>{post.author}</strong>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
