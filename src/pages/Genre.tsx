import ImageCard from "../components/ImageCard";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Loader, X } from "lucide-react";
import type { GenreType, BackendImage } from "../types";

const Genre = () => {
  const { id: genreId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;
  const [activeGenre, setActiveGenre] = useState("All");
  const [genre, setGenre] = useState<GenreType>();
  const [images, setImages] = useState<BackendImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [preview,setPreview] = useState(false);
  const previewRef = useRef<HTMLDivElement | null>(null);
  
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  const fetchGenreById = async () => {
    if (!genreId) return;
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/genre/${genreId}`);
      const json = await response.json();
      if (json.success && json.data) {
        setGenre(json.data);
      }
    } catch (error) {
      console.error("Failed to fetch genre:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchImagesInGenre = async () => {
    if (!genreId) return;
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/images/genre/${genreId}`);
      const json = await response.json();
      if (json.success && Array.isArray(json.data)) {
        setImages(json.data);
      }
    } catch (error) {
      console.error("Failed to fetch images in genre:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGenreById();
    fetchImagesInGenre();
  }, [genreId]);

  const folderMap = new Map(
    (genre?.folders || []).map((folder) => [folder.id, folder.name]),
  );

  const filteredImages = images.filter((img) => {
    if (activeGenre === "All") return true;
    const targetFolder = genre?.folders?.find((f) => f.name === activeGenre);
    return targetFolder ? img.folder_id === targetFolder.id : true;
  });

  return (
    <>
      <header className="flex flex-col gap-6 justify-center items-center md:items-start px-6 md:px-14 pt-10 md:pt-14 bg-secondary">
        <button
          type="button"
          onClick={handleBack}
          className="self-start flex items-center gap-2 text-white/80 hover:text-primary transition-colors cursor-pointer group"
          aria-label="Go back"
        >
          <ArrowLeft size={33} className="group-hover:-translate-x-1 transition-transform " />
        </button>

        <h1 className="font-montserrat text-white text-4xl md:text-6xl ">
          {genre?.name}
        </h1>
        <ul className="flex font-montserrat text-white flex-wrap justify-center gap-6 ">
          <li
            key="All"
            onClick={() => setActiveGenre("All")}
            className={`${
              activeGenre === "All"
                ? "border-b-4 border-b-primary text-primary"
                : ""
            } cursor-pointer text-center font-bold hover:text-primary transition-all`}
          >
            All
          </li>
          {genre?.folders?.map((folder) => (
            <li
              key={folder.name}
              onClick={() => setActiveGenre(folder.name)}
              className={`${
                activeGenre === folder.name
                  ? "border-b-4 border-b-primary text-primary"
                  : ""
              } cursor-pointer text-center font-bold hover:text-primary transition-all`}
            >
              {folder.name}
            </li>
          ))}
        </ul>
      </header>
      <div className="bg-secondary min-h-screen p-14">
        {preview && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center p-4 z-50 cursor-pointer"
            onClick={() => setPreview(false)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={() => setPreview(false)}
              aria-label="Close preview"
            >
              <X size={24} />
            </button>
            <img
              src={previewRef.current?.querySelector("img")?.src}
              alt="Preview"
              className="w-auto h-auto max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-md shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader size={30} />
          </div>
        ) : filteredImages.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {filteredImages.map((image) => (
              <ImageCard
                key={image.id}
                onClick={(e)=> {
                  previewRef.current = e.currentTarget;
                  setPreview(true);
                }}
                image={{
                  imageUrl: image.url,
                  imageFolderName:
                    folderMap.get(image.folder_id) || genre?.name || "",
                  imageCreatedYear: image.created_at
                    ? new Date(image.created_at).getFullYear().toString()
                    : "",
                }}
              />
            ))}
          </div>
          
        ) : (
          <div className="flex justify-center items-center py-20">
            <p className="font-montserrat text-neutral text-lg">
              No images found for this category.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Genre;