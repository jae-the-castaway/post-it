"use client";

import Image from "next/image";
import AddPost from "./components/AddPost";

export default function Home() {
  return (
    <main className="">
      <h1>Hello next</h1>
      <AddPost />
    </main>
  );
}
