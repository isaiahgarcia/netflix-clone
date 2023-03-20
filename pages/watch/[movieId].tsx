import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
    const router = useRouter();
    const { movieId } = router.query;

    const { data } = useMovie(movieId as string);

    const Play = (function () {
        switch (data?.title) {
          case 'Burning Out Before 22':
            return (<iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/cjQvBid-KLQ?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            ></iframe>);
            break;
          case 'Lady Bird':
            return (<iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/ZaQ5_bczSJI?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            ></iframe>);
            break;
          case 'Aftersun':
            return (<iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/912Ntw7oYOg?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            ></iframe>);
            break;
          case 'Everything Everywhere All at Once':
            return (<iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/kBKg4_xVgp4?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            ></iframe>);
            break;
          case 'The Super Mario Bros. Movie':
            return (<iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/RjNcTBXTk4I?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            ></iframe>);
            break;
          case 'Mamma Mia!':
            return (<iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/xBHWyT1UedA?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            ></iframe>);
            break;
          case 'Black Swan':
            return (<iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/lkHlLZzpQHU?autoplay=1" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            ></iframe>);
            break;
          default:
            return (<video
            autoPlay
            controls
            className="h-full w-full"
            src={data?.videoUrl}
            ></video>);
            break;
        }
      })();

    return (
        <div className='h-screen w-screen bg-black'>
            <nav className="
                fixed
                w-full
                p-4
                z-10
                flex
                flex-row
                items-center
                gap-8
                bg-black
                bg-opacity-70
            ">
                <AiOutlineArrowLeft onClick={() => router.push('/')} className="text-white cursor-pointer" size={40} />
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light">
                        Watching
                    </span>
                    : {data?.title}
                </p>
            </nav>
            {Play}
        </div>
    )
}

export default Watch;