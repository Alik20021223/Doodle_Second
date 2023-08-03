import React from "react";
import Projects from "../Projects/Projects";
import Clients from "../Clients/Clients";
import Forma from "../Forma/Forma";

function Video({width}) {
  return (
    <>
    <section className="videoSection">
        <div className="video-inner video-inner-2">
          <div className="video-pTop"></div>
          <div className="video-pTop-2">
            <div className="video-name" tabIndex={0} role="button">
              <span className="sh-name">sh</span>
              <button className="typeOfButtonVideo">
                <img
                  src={`${width > 757 ? `./img/main-img/sphere-small.webp` : `https://doubletapp.ai/_next/image?url=%2Fv2%2Fstatic%2Fimages%2FSphere.webp&w=1200&q=75`}`}
                  alt="sphere-video"
                  sizes="100vw"
                  decoding="async"
                  data-nimg="fill"
                  loading="lazy"
                  className="sphere-video"
                />
                <div className="play-video">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="red" fillRule="evenodd" clipRule="evenodd" d="M18.6915 11.1588C19.3038 11.5525 19.3038 12.4475 18.6915 12.8412L7.54076 20.0095C6.87525 20.4373 6 19.9595 6 19.1683L6 4.83167C6 4.0405 6.87525 3.56266 7.54076 3.99049L18.6915 11.1588Z" fill="#FFFFFF"/>
                        </svg>
                    </div>
                </div>
              </button>
              <span className="sh-name">wreel</span>
            </div>
          </div>
        </div>
      </section>
    <Projects/>
    <Clients/>
    <Forma/>
    </>
  );
}

export default Video;
