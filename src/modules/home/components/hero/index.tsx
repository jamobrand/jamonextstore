import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Go for bold in your home
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Check it out. Give your home an instant update with quick yet playful
          additions like wall art, storage, rugs, clocks and more.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      {/* <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      /> */}
      <Image
        src="/home-interior.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @spacejoy https://unsplash.com/@spacejoy"
        className="absolute inset-0 brightness-50"
        draggable="false"
      />
    </div>
  )
}

export default Hero
