import Banner from "@/components/homepage/Banner";
import Books from "@/components/homepage/Books";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Books></Books>
    </div>
  );
}
