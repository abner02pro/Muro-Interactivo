import { useState } from "react";
import { db } from "../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function PostForm({ user }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    await addDoc(collection(db, "posts"), {
      content,
      author: user.displayName || user.email,
      createdAt: serverTimestamp(),
    });

    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="¿Qué estás pensando?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Publicar</button>
    </form>
  );
}
