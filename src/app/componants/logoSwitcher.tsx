"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function LogoSwitcher() {
  const [active, setActive] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (direction: "left" | "right", length: number) => {
    if (direction === "left" && scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else if (direction === "right" && scrollIndex < length - 1) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const sections = [
    {
      title: "Real Estate Sales",
      desc: "List your property for sale easily with clear photos and accurate details.",
      images: ["/تصميم واجهة منزل بطول ٥ متر واجهة أنيقة بتصميم….jpeg", "/조립식 호주 인증 프레임 하우스 키트 모듈형 럭셔리 빌라 호텔 조립식 목조 주택.jpeg", "/غرفة جلوس مصممه بذكاء الاصطناعي تجمع بين الأناقة….jpeg", "/تصميم واجهة منزل بطول ٥ متر واجهة أنيقة بتصميم….jpeg"],
    },
    {
      title: "Real Estate Purchase",
      desc: "Find the best available deals to purchase real estate with ease.",
      images:  ["/ff1.jpeg", "/ff2.jpeg", "/ff3.jpeg", "/تصميم واجهة منزل بطول ٥ متر واجهة أنيقة بتصميم….jpeg"],
    },
    {
      title: "Real Estate Valuation",
      desc: "Get an accurate valuation of your property based on the latest market standards.",
      images:  ["/تصميم واجهة منزل بطول ٥ متر واجهة أنيقة بتصميم….jpeg", "/조립식 호주 인증 프레임 하우스 키트 모듈형 럭셔리 빌라 호텔 조립식 목조 주택.jpeg", "/غرفة جلوس مصممه بذكاء الاصطناعي تجمع بين الأناقة….jpeg", "/تصميم واجهة منزل بطول ٥ متر واجهة أنيقة بتصميم….jpeg"],
    },
  ];

  return (
    <div className="w-full p-6 mt-30">

      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold">Explore Our Real Estate Services</h1>
        <p className="text-gray-600 mt-2">Choose a service to see related images</p>
      </div>
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {sections.map((sec, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i);
              setScrollIndex(0);
            }}
            className={`px-4 py-2 rounded font-semibold transition ${
              active === i ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        <h2 className="text-xl font-bold text-center">{sections[active].title}</h2>
        <p className="text-gray-600 text-center mt-2">{sections[active].desc}</p>

        {/* Mobile slider */}
        <div className="flex sm:hidden items-center mt-6">
          <button
            title="Scroll left"
            onClick={() => handleScroll("left", sections[active].images.length)}
            disabled={scrollIndex === 0}
            className="p-2 bg-gray-200 rounded-full mr-2 disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <div className="flex overflow-hidden w-full">
              <div
      className="flex transition-transform duration-300"
      style={{ transform: `translateX(-${scrollIndex * 70}%)` }}
    >
      {sections[active]?.images?.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`${sections[active]?.title || "Image"} ${i + 1}`}
          width={160}
          height={112}
          className="rounded mr-2"
        />
      ))}
    </div>
          </div>
          <button
            title="Scroll right"
            onClick={() => handleScroll("right", sections[active].images.length)}
            disabled={scrollIndex >= sections[active].images.length - 1}
            className="p-2 bg-gray-200 rounded-full ml-2 disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {sections[active].images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${sections[active].title} ${i + 1}`}
              width={400}
              height={160}
              className="rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
