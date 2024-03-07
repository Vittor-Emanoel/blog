import { IPost } from "@/entities/Post";
import Image from "next/image";

interface CardPostProps {
  post: IPost[];
}

export function CardPost() {
  return (
    <div className="">
      <Image
        src="https://github.com/Vittor-Emanoel.png"
        width={384}
        height={200}
        alt=""
        className="w-full h-[228px] object-cover object-top"
      />

      <strong>Chato * 07 Mar 2024</strong>
      <h2>UX review presentations</h2>
      <p>
        How do you create compelling presentations that wow your colleagues and
        impress your managers?
      </p>

      <div className="flex gap-2">
        <div className="p-2">Design</div>
        <div className="p-2">Research</div>
        <div className="p-2">Presentation</div>
      </div>
    </div>
  );
}
