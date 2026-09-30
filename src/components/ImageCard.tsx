import { useState } from "react";
import { motion } from "framer-motion";
import type { ImageType } from "../types";

const ImageCard = ({
  image,
  onClick,
  ref,
}: {
  image: ImageType;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="break-inside-avoid mb-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={onClick}
      ref={ref}
    >
      <div className="relative w-full rounded-lg overflow-hidden bg-white/5">
        <img
          src={image.imageUrl}
          alt={image.imageFolderName || "Portfolio Work"}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-auto mb-2 transition-opacity duration-500 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="bg-secondary/80 absolute bottom-4 left-2 p-2 rounded-lg w-fit">
          <p className="font-montserrat text-white ">
            {image.imageFolderName}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageCard;