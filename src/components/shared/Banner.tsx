import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import bannerImg from "@/assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-slate-300 rounded-md">
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <Image className="rounded-md" src={bannerImg} alt="banner" />
        </div>
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2 className="font-bold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis,
            hic eveniet dolores explicabo atque quis ipsam, quos voluptatum
            autem ipsum dolore quisquam sapiente nulla mollitia corrupti unde
            laborum. Adipisci.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            iure obcaecati eveniet, perferendis quos recusandae consequuntur
            dolores placeat vero pariatur nesciunt adipisci ipsa nisi aut
            eligendi quia nam dolor voluptatibus?
          </p>
          <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// 02:23:09
