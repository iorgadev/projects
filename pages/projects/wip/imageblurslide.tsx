import React from "react";
import Image from "next/image";
import { images } from "../../../data/images";

export default function ImageBlurSlide() {
  return (
    <div className="project imageblurslide">
      <h1>Image Blur Slide</h1>
      <div className="imageblurslide__container">
        <div className="imageblurslide__image">
          <Image
            src={images[2]}
            alt="blur image slide in"
            layout="intrinsic"
            width={300}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
