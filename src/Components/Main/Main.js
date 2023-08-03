import React, { useState, useEffect } from "react";
import Video from "./Video/Video";
import { useResize } from "../../store/width/useWidthSize";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Main() {
  const service = [
    {
      id: 1,
      name: "Mobile",
      txt: "Создаём нативные и кроссплатформенные приложения под iOS и Android, от&nbsp;разработки концепции до реализации успешного продукта",
      img_1: "./img/main-img/service-mobile-1.webp",
      img_2: "./img/main-img/service-mobile-2.webp",
      rotate_1: -8,
      rotate_2: 7.65,
      i: 4,
      href: "/services/mobile",
    },
    {
      id: 2,
      name: "Web",
      txt: "Создаём красивые лендинги и высоконагруженные сервисы на React, Python и Go",
      img_1: "./img/main-img/service-web-1.webp",
      img_2: "./img/main-img/service-web-2.webp",
      rotate_1: -4.69,
      rotate_2: 4.68,
      i: 6,
      href: "/services/web",
    },
    {
      id: 3,
      name: "Design",
      txt: "Создаём продуманный и эстетичный дизайн, который помогает компаниям решать бизнес-задачи",
      img_1: "./img/main-img/service-design-1.webp",
      img_2: "./img/main-img/service-design-2.webp",
      rotate_1: -4.69,
      rotate_2: 7.65,
      i: 8,
      href: "/services/design",
    },
    {
      id: 4,
      name: "ML",
      txt: "Создаём продукты на основе искусственного интеллекта и оптимизируем ваш бизнес, находя зависимости в данных",
      img_1: "./img/main-img/service-ml-1.webp",
      img_2: "./img/main-img/service-ml-2.webp",
      img_3: "./img/main-img/service-ml-3.webp",
      rotate_1: -12,
      rotate_2: -20,
      rotate_3: 20,
      letters: ['a', 'b', 'c'],
      href: "/services/ml",
    },
    {
      id: 5,
      name: "QA",
      txt: "Следим за качеством на каждом этапе создания продукта. Проверяем вручную, пишем автотесты, проводим нагрузочное тестирование и находим уязвимости",
      img_1: "./img/main-img/service-qa-1.webp",
      img_2: "./img/main-img/service-qa-2.webp",
      img_3: "./img/main-img/service-qa-3.webp",
      rotate_1: -12,
      rotate_2: -20,
      rotate_3: 20,
      letters: ['d', 'e', 'f'],
      href: "/services/qa",
    },
  ];

  const [isScrollImage, setScrollImage] = useState(0);
  const [idClicked, setClicked] = useState(service[0].id);
  const [idMarginBottom, setMarginBottom] = useState(0);
  const [idBottom, setBottom] = useState(0);
  const [idArrow, setArrow] = useState(0);
  const [idService_1, setService_1] = useState(service[0].id);
  const [idService_2, setService_2] = useState(0);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setScrollImage(400);
    } else if (window.scrollY < 400) {
      setScrollImage(0);
    }
  });

  useEffect(() => {
    handleCheck(service[0].id);
  }, []);

  const {t} = useTranslation();

  const { width } = useResize();

  const handleCheck = (id) => {
    if (width > 757) {
      if (id === 1 || id === 5) {
        setClicked(id);
        setMarginBottom(261);
        setBottom(-237);
      } else if (id > 1 && id < 5) {
        setClicked(id);
        setMarginBottom(229);
        setBottom(-205);
      } 
    } else {
      if (id === 1 || id === 5 || id === 4) {
        setClicked(id);
        setMarginBottom(201);
        setBottom(-181);
      } else if (id > 1 && id < 4) {
        setClicked(id);
        setMarginBottom(181);
        setBottom(-157);
      } 
    }
  };

  const getFontSize = (id, idClicked) => {
    switch (Math.abs(id - idClicked)) {
      case 0:
        return 80;
      case 1:
        return 48;
      case 2:
        return 36;
      case 3:
        return 24;
      case 4:
        return 18;
      default:
        return 8;
    }
  };

  const getLineHeight = (id, idClicked) => {
    switch (Math.abs(id - idClicked)) {
      case 0:
        return 100;
      case 1:
        return 58;
      case 2:
        return 44;
      case 3:
        return 29;
      case 4:
        return 22;
      default:
        return 8;
    }
  };

  const getFontSize_Mob = (id, idClicked) => {
    switch (Math.abs(id - idClicked)) {
      case 0: 
        return 42;
      default: 
        return 36;
    }
  };

  const getLineHeight_Mob = (id, idClicked) => {
    switch (Math.abs(id - idClicked)) {
      case 0: 
        return 56;
      default: 
        return 56;
    }
  };

  const handleArrow = (id) => {
    switch (id) {
      case 1:
        return setArrow(0);
      case 2:
        return setArrow(82);
      case 3:
        return setArrow(150);
      case 4:
        return setArrow(203);
      case 5:
        return setArrow(249);
      default:
        return 0;
    }
  };

  const handleArrow_Mob = (id) => {
    switch (id) {
      case 1:
        return setArrow(0);
      default:
        return setArrow(idArrow + 80);
    }
  };

  const handleService = (id) => {
    if (id <= 3) {
      setService_1(id);
      setService_2(0)
    } else if (id > 3 && id <= 5) {
      setService_2(id);
      setService_1(0)
    }
  };


  const {letters} = service[3]
  
  return (
    <div className="main-div">
      <section className="section-main">
        <h1 className="btnOff">WEB, MOBILE, DESIGN & Neural Networks</h1>
        <div className="innerSectionDiv" aria-hidden="true">
          <span className="typeOfPoss sizeOfPoss animOfPoss">
            web, mobile, design
          </span>
          <span className="typeOfPoss sizeOfPoss animOfPoss positionOfPoss">
            neural networks
          </span>
          <span className="typeOfPro sizeOfPro animOfPro">
            {t("CreateCycle")}
          </span>
          <div className="linkToUs">
            <button
              className="btnLinkToUs-1 btnLinkToUs-2 justForBtn btnLinkToUs-4 sizeOfLinkToUs"
              data-for=":r0:"
              data-tip="button"
            >
              {t("LinkToUs")}
            </button>
            <div className="redLine-1 redLine-2"></div>
          </div>
        </div>
        {width < 767 && (
          <div className="CircleBlock">
            <div className="BlockCircle-1 BlockCircle-2">
              <div className="circleImg">
                <img src="https://doubletapp.ai/_next/image?url=%2Fv2%2Fstatic%2Fimages%2FSphere.webp&w=828&q=75" alt="red-circle" width={376} height={376} style={{color: `transparent`}}/>
              </div>
            </div>
          </div>
        )}
        <div className="animOfArrow typeOfArrow">
          <div>
            <div>
              <svg
                width="135"
                height="64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="decor-svg"
              >
                <path d="M12.51 4.848v2.93L0 12.639V9.825l9.365-3.502L0 2.822V0l12.51 4.848zM12.51 30.28v2.927L0 38.066v-2.822l9.365-3.502L0 28.242v-2.824l12.51 4.861zM12.51 55.714v2.931L0 63.501v-2.833l9.365-3.5L0 53.668v-2.822l12.51 4.87zM43.018 4.848v2.93l-12.509 4.86V9.825l9.365-3.502-9.365-3.502V0l12.51 4.848zM43.018 30.28v2.927L30.51 38.066v-2.822l9.365-3.502-9.365-3.5v-2.824l12.51 4.861zM43.018 55.714v2.931L30.51 63.501v-2.833l9.365-3.5-9.365-3.501v-2.822l12.51 4.87zM73.527 4.859v2.93l-12.509 4.859V9.837l9.366-3.502-9.366-3.513V0l12.51 4.859zM73.527 30.29v2.928l-12.509 4.859v-2.822l9.366-3.502-9.366-3.497v-2.824l12.51 4.858zM73.527 55.726v2.93l-12.509 4.856V60.68l9.366-3.499-9.366-3.49v-2.823l12.51 4.859zM104.036 4.859v2.93l-12.509 4.859V9.837l9.366-3.502-9.366-3.513V0l12.509 4.859zM104.036 30.29v2.928l-12.509 4.859v-2.822l9.366-3.502-9.366-3.497v-2.824l12.509 4.858zM104.036 55.726v2.93l-12.509 4.856V60.68l9.366-3.499-9.366-3.49v-2.823l12.509 4.859zM134.545 4.859v2.93l-12.509 4.859V9.837l9.366-3.502-9.366-3.513V0l12.509 4.859zM134.545 30.29v2.928l-12.509 4.859v-2.822l9.366-3.502-9.366-3.497v-2.824l12.509 4.858zM134.545 55.726v2.93l-12.509 4.856V60.68l9.366-3.499-9.366-3.49v-2.823l12.509 4.859z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {(width > 1279) && (
        <div
        className="animOfImage"
        style={{
          transition: `transform 0.8s ease`,
          transform: `translateY(${isScrollImage}px)`,
        }}
      >
        <div
          style={{
            transform: `scale(1)`,
            transformOrigin: `right center`,
            willChange: `transform`,
          }}
        >
          <div className="animOfImage-2">
            <img
              src="./img/main-img/Sphere.webp"
              alt="image-circle"
              style={{
                position: `absolute`,
                height: `100%`,
                width: `100%`,
                inset: `0px`,
                color: `transparent`,
              }}
              decoding="async"
              data-nimg="fill"
            />
          </div>
        </div>
      </div>
      )}
      <div className="typeOfService-1 typeOfService-2">
        <section className="secOfService-1 container_adaptive">
          <h2 className="btnOff">Наши услуги</h2>
          <div className="mainBlock-1">
            <div className="sizeOfBlockService-1 sizeOfBlockService-2" style={(width>757 && width<1279) ? { transform: `translateY(-${idArrow}px)` } : {}}>
              {service.map((o) => (
                <div
                  key={o.id}
                  className="buttonOfService"
                  style={{
                    marginBottom: `${
                      o.id === idClicked ? `${idMarginBottom}px` : `24px`
                    }`,
                  }}
                  role="button"
                  onClick={() => {
                    handleCheck(o.id);
                    if (width > 757) {
                      handleArrow(o.id);
                    } else {
                      handleArrow_Mob(o.id);
                    }
                    handleService(o.id);
                  }}
                >
                  <span
                    className={`${
                      o.id === idClicked ? "spanOfService-2" : "spanOfService-4"
                    } spanOfService-1  spanOfService-3`}
                    style={{
                      fontSize: `${width > 757 ? getFontSize(o.id, idClicked) : getFontSize_Mob(o.id, idClicked)}px`,
                      lineHeight: `${width > 757 ? getLineHeight(o.id, idClicked) : getLineHeight_Mob(o.id, idClicked)}px`,
                    }}
                  >
                    {o.name}
                  </span>
                  {o.id === idClicked && (
                    <span
                      key={o.id}
                      className="sizeOfPro typeOfSerTxt"
                      style={{ bottom: `${idBottom}px` }}
                    >
                      <span>{t(o.name)}</span>
                      <div className="More">
                        <Link
                          className="sizeOfLinkToUs more-1 more-2 more-3 more-4 more-5 more-6 more-7"
                          to={o.href}
                          title="Подробнее"
                        >
                          {t("More")}
                        </Link>
                        <div className="redLine-3 redLine-2"></div>
                      </div>
                    </span>
                  )}
                </div>
              ))}
              <div
                className="typeOfArrowService"
                aria-hidden="true"
                style={{ transform: `translateY(${idArrow}px)` }}
              ></div>
            </div>
            {width > 767 && (
              <div
              className="PhotoService"
              style={{ transform: `scale(${width > 1279 ? 1 : 0.853})`, transformOrigin: `right center` }}
            >
              <div className="blockForImage">
                {service.map((o) => (
                  <>
                    {o.id===idService_1 && (
                      <>
                        <div
                          key={o.id}
                          className={`image-service-${o.i++} typeOfImageService `}
                          style={{
                            rotate: `${o.rotate_1}deg`,
                          }}
                        >
                          <img
                            src={`${o.img_1}`}
                            alt="Service-Img"
                            sizes="100vw"
                            decoding="async"
                            data-nimg="fill"
                            loading="lazy"
                            className="mobileService"
                          />
                        </div>
                        <div
                          key={o.i}
                          className={`image-service-${o.i++} typeOfImageService `}
                          style={{
                            rotate: `${o.rotate_2}deg`,
                          }}
                        >
                          <img
                            src={`${o.img_2}`}
                            alt="Service-Img"
                            sizes="100vw"
                            decoding="async"
                            data-nimg="fill"
                            loading="lazy"
                            className="mobileService"
                          />
                        </div>
                      </>
                    )}
                    {o.id===idService_2  && (
                      <>
                        <div
                          key={o.rotate_1}
                          className={`image-service-${letters[0]} typeOfImageService`}
                          style={{
                            rotate: `${o.rotate_1}deg`,
                          }}
                        >
                          <img
                            src={`${o.img_1}`}
                            alt="Service-Img"
                            sizes="100vw"
                            decoding="async"
                            data-nimg="fill"
                            loading="lazy"
                            className="mobileService"
                          />
                        </div>
                        <div
                          key={o.rotate_2}
                          className={`image-service-${letters[1]} typeOfImageService`}
                          style={{
                            rotate: `${o.rotate_2}deg`,
                          }}
                        >
                          <img
                            src={`${o.img_2}`}
                            alt="Service-Img"
                            sizes="100vw"
                            decoding="async"
                            data-nimg="fill"
                            loading="lazy"
                            className="mobileService"
                          />
                        </div>
                        <div
                          key={o.rotate_3}
                          className={`image-service-${letters[2]} typeOfImageService`}
                          style={{
                            rotate: `${o.rotate_3}deg`,
                          }}
                        >
                          <img
                            src={`${o.img_3}`}
                            alt="Service-Img"
                            sizes="100vw"
                            decoding="async"
                            data-nimg="fill"
                            loading="lazy"
                            className="mobileService"
                          />
                        </div>
                      </>
                    )}
                  </>
                ))}
                <div className="redCircleAir">
                  <img src="https://doubletapp.ai/_next/image?url=%2Fv2%2Fstatic%2Fimages%2FSphere.webp&w=1200&q=75" alt="RedCircle"/>
                </div>
              </div>
            </div>
            )}
          </div>
        </section>
      </div>
      <Video width={width}/>
    </div>

  );
}

export default Main;
