import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isOpenMenu: false,
  colorOfBody: "light-theme",
  bodyClass: "light-theme",
  projectType: "Все",
  buttonId: 1,
  menuFooter: [
    {
      id: 1,
      href: "/services",
      txt: "Услуги",
    },
    {
      id: 2,
      href: "/projects",
      txt: "Проекты",
    },
    {
      id: 3,
      href: "/technologies",
      txt: "Технологии",
    },
    {
      id: 4,
      href: "/blog",
      txt: "Блог",
    },
    {
      id: 5,
      href: "/vacancies",
      txt: "Вакансии",
      after_txt: "We re hiring",
    },
    {
      id: 6,
      href: "/contacts",
      txt: "Контакты",
    },
  ],
  icons: [
    {
      id: 1,
      href_img: "./img/header-img/telegram-icon.svg",
      hrefWhiteImg: "./img/header-img/white-icon/telegram-icon.svg",
      hrefRedImg: "./img/header-img/red-icon/telegram-icon.svg",
      alt: "tg-icon",
      href: "https://t.me/Alik.1223",
      p: 0,
      spanTxt: "Link to Telegram",
    },
    {
      id: 2,
      href_img: "./img/header-img/youtube-icon.svg",
      hrefWhiteImg: "./img/header-img/white-icon/youtube-icon.svg",
      hrefRedImg: "./img/header-img/red-icon/youtube-icon.svg",
      alt: "yt-icon",
      href: "https://t.me/Alik.1223",
      p: 1,
      spanTxt: "Link to Youtube",
    },
    {
      id: 3,
      href_img: "./img/header-img/instagram-icon.svg",
      hrefWhiteImg: "./img/header-img/white-icon/instagram-icon.svg",
      hrefRedImg: "./img/header-img/red-icon/instagram-icon.svg",
      alt: "ins-icon",
      href: "https://t.me/Alik.1223",
      p: 2,
      spanTxt: "Link to Instagram",
    },
    {
      id: 4,
      href_img: "./img/header-img/vk.svg",
      hrefWhiteImg: "./img/header-img/white-icon/vk.svg",
      hrefRedImg: "./img/header-img/red-icon/vk.svg",
      alt: "vk-icon",
      href: "https://t.me/Alik.1223",
      p: 3,
      spanTxt: "Link to Vk",
    },
    {
      id: 5,
      href_img: "./img/header-img/facebook.svg",
      hrefWhiteImg: "./img/header-img/white-icon/facebook.svg",
      hrefRedImg: "./img/header-img/red-icon/facebook.svg",
      alt: "fb-icon",
      href: "https://t.me/Alik.1223",
      p: 4,
      spanTxt: "Link to Facebook",
    },
    {
      id: 6,
      href_img: "./img/header-img/email.svg",
      hrefWhiteImg: "./img/header-img/white-icon/email.svg",
      hrefRedImg: "./img/header-img/red-icon/email.svg",
      alt: "em-icon",
      href: "https://t.me/Alik.1223",
      p: 5,
      spanTxt: "link to Email",
    },
  ],
  imageComp: {
    imgComp: "https://doubletapp.ai/static/svg/bg/technology.svg",
    altComp: "image-comp",
  },
  imageMobile: {
    imgMobile_1: "https://doubletapp.ai/static/svg/bg/technology-mobile.svg",
    altMob_1: "Mobile-Image",
    imgMob:
      "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/339828-PAJTL4-7.png",
    altMob_2: "Mobile-Logo",
  },
  imageWeb: {
    imgMobile_1: "https://doubletapp.ai/static/svg/bg/technology-mobile.svg",
    altMob_1: "Web-Image",
    imgMob: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/web.png",
    altMob_2: "Web-Logo",
  },
  imageDesign: {
    imgMobile_1: "https://doubletapp.ai/static/svg/bg/technology-mobile.svg",
    altMob_1: "Web-Image",
    imgMob:
      "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/design.png",
    altMob_2: "Web-Logo",
  },
  imageMl: {
    imgMobile_1: "https://doubletapp.ai/static/svg/bg/technology-mobile.svg",
    altMob_1: "Web-Image",
    imgMob: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/ml.png",
    altMob_2: "Web-Logo",
  },
  imageQa: {
    imgMobile_1: "https://doubletapp.ai/static/svg/bg/technology-mobile.svg",
    altMob_1: "Web-Image",
    imgMob:
      "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/audit.png",
    altMob_2: "Web-Logo",
  },
  technologies: [
    {
      id: 1,
      h2: "Web",
      TechType: [
        {
          h3_kind: "Bakend",
          typeofKind: [
            {
              id: 11,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Coredata.svg",
              p: "CoreData",
            },
            {
              id: 12,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/CoreML.svg",
              p: "CoreMl",
            },
            {
              id: 13,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/ARKit.svg",
              p: "ARKit",
            },
            {
              id: 14,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/swift.svg",
              p: "Swift",
            },
            {
              id: 15,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/obj.svg",
              p: "Objective-C",
            },
          ],
        },
        {
          h3_kind: "Frontend",
          typeofKind: [
            {
              id: 16,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/dagger.svg",
              p: "Dagger",
            },
            {
              id: 17,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Retrofit.svg",
              p: "Retrofit",
            },
            {
              id: 18,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/OkHttp.svg",
              p: "OkHttp",
            },
            {
              id: 19,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Room.svg",
              p: "Room",
            },
            {
              id: 20,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/RXJava.svg",
              p: "RXJava",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      h2: "Mobile",
      TechType: [
        {
          h3_kind: "IOS",
          typeofKind: [
            {
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Coredata.svg",
              p: "CoreData",
            },
            {
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/CoreML.svg",
              p: "CoreMl",
            },
            {
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/ARKit.svg",
              p: "ARKit",
            },
            {
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/swift.svg",
              p: "Swift",
            },
            {
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/obj.svg",
              p: "Objective-C",
            },
          ],
        },
        {
          h3_kind: "Android",
          typeofKind: [
            {
              id: 20,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/dagger.svg",
              p: "Dagger",
            },
            {
              id: 21,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Retrofit.svg",
              p: "Retrofit",
            },
            {
              id: 22,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/OkHttp.svg",
              p: "OkHttp",
            },
            {
              id: 23,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Room.svg",
              p: "Room",
            },
            {
              id: 24,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/RXJava.svg",
              p: "RXJava",
            },
          ],
        },
        {
          h3_kind: "Crossplatform",
          typeofKind: [
            {
              id: 25,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/reactjs.svg",
              p: "ReactNative",
            },
            {
              id: 26,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/flutter.svg",
              p: "Flutter",
            },
            {
              id: 27,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/expo.svg",
              p: "Expo",
            },
            {
              id: 28,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/swift.svg",
              p: "Swift",
            },
            {
              id: 29,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/obj.svg",
              p: "Objective-C",
            },
          ],
        },
        {
          h3_kind: "Мобильные инструменты и сервисы",
          typeofKind: [
            {
              id: 30,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Crashlytics.svg",
              p: "Crashlytics",
            },
            {
              id: 31,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Appsee.svg",
              p: "Appsee",
            },
            {
              id: 32,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Firebase.svg",
              p: "Firebase",
            },
            {
              id: 33,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Mapbox.svg",
              p: "Mapbox",
            },
            {
              id: 34,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Googlemaps.svg",
              p: "Googlemaps",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      h2: "Machine learning",
      TechType: [
        {
          typeofKind: [
            {
              id: 40,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/keras.svg",
              p: "Keras",
            },
            {
              id: 41,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/tensorflow.svg",
              p: "Tensorflow",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      h2: "DataBases",
      TechType: [
        {
          typeofKind: [
            {
              id: 50,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/keras.svg",
              p: "Keras",
            },
            {
              id: 51,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/tensorflow.svg",
              p: "Tensorflow",
            },
            {
              id: 52,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/mysql.svg",
              p: "MySQL",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      h2: "Devops",
      TechType: [
        {
          typeofKind: [
            {
              id: 60,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/keras.svg",
              p: "Keras",
            },
            {
              id: 61,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/tensorflow.svg",
              p: "Tensorflow",
            },
            {
              id: 62,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/mysql.svg",
              p: "MySQL",
            },
            {
              id: 63,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/mysql.svg",
              p: "MySQL",
            },
            {
              id: 64,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/mysql.svg",
              p: "MySQL",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      h2: "Design",
      TechType: [
        {
          h3_kind: "UX (USER EXPERIENCE)",
          typeofKind: [
            {
              id: 70,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Coredata.svg",
              p: "CoreData",
            },
            {
              id: 71,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/CoreML.svg",
              p: "CoreMl",
            },
            {
              id: 72,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/ARKit.svg",
              p: "ARKit",
            },
          ],
        },
        {
          h3_kind: "UI (USER INTERFACE)",
          typeofKind: [
            {
              id: 73,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/dagger.svg",
              p: "Dagger",
            },
            {
              id: 74,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Retrofit.svg",
              p: "Retrofit",
            },
            {
              id: 75,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/OkHttp.svg",
              p: "OkHttp",
            },
            {
              id: 76,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Room.svg",
              p: "Room",
            },
            {
              id: 77,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/RXJava.svg",
              p: "RXJava",
            },
          ],
        },
        {
          h3_kind: "ИНТЕРАКТИВНОЕ ПРОТОТИПИРОВАНИЕ / АНИМАЦИЯ",
          typeofKind: [
            {
              id: 78,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/reactjs.svg",
              p: "ReactNative",
            },
            {
              id: 79,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/flutter.svg",
              p: "Flutter",
            },
            {
              id: 80,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/expo.svg",
              p: "Expo",
            },
            {
              id: 81,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/swift.svg",
              p: "Swift",
            },
            {
              id: 82,
              src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/obj.svg",
              p: "Objective-C",
            },
          ],
        },
      ],
    },
  ],
  mobile_tech: {
    id: 2,
    h2: "Mobile",
    TechType: [
      {
        h3_kind: "IOS",
        typeofKind: [
          {
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Coredata.svg",
            p: "CoreData",
          },
          {
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/CoreML.svg",
            p: "CoreMl",
          },
          {
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/ARKit.svg",
            p: "ARKit",
          },
          {
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/swift.svg",
            p: "Swift",
          },
          {
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/obj.svg",
            p: "Objective-C",
          },
        ],
      },
      {
        h3_kind: "Android",
        typeofKind: [
          {
            id: 20,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/dagger.svg",
            p: "Dagger",
          },
          {
            id: 21,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Retrofit.svg",
            p: "Retrofit",
          },
          {
            id: 22,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/OkHttp.svg",
            p: "OkHttp",
          },
          {
            id: 23,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Room.svg",
            p: "Room",
          },
          {
            id: 24,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/RXJava.svg",
            p: "RXJava",
          },
        ],
      },
      {
        h3_kind: "Crossplatform",
        typeofKind: [
          {
            id: 25,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/reactjs.svg",
            p: "ReactNative",
          },
          {
            id: 26,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/flutter.svg",
            p: "Flutter",
          },
          {
            id: 27,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/expo.svg",
            p: "Expo",
          },
          {
            id: 28,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/swift.svg",
            p: "Swift",
          },
          {
            id: 29,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/obj.svg",
            p: "Objective-C",
          },
        ],
      },
      {
        h3_kind: "Мобильные инструменты и сервисы",
        typeofKind: [
          {
            id: 30,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Crashlytics.svg",
            p: "Crashlytics",
          },
          {
            id: 31,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Appsee.svg",
            p: "Appsee",
          },
          {
            id: 32,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Firebase.svg",
            p: "Firebase",
          },
          {
            id: 33,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Mapbox.svg",
            p: "Mapbox",
          },
          {
            id: 34,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Googlemaps.svg",
            p: "Googlemaps",
          },
        ],
      },
    ],
  },
  web_tech: {
    id: 1,
    h2: "Web",
    TechType: [
      {
        h3_kind: "Bakend",
        typeofKind: [
          {
            id: 11,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Coredata.svg",
            p: "CoreData",
          },
          {
            id: 12,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/CoreML.svg",
            p: "CoreMl",
          },
          {
            id: 13,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/ARKit.svg",
            p: "ARKit",
          },
          {
            id: 14,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/swift.svg",
            p: "Swift",
          },
          {
            id: 15,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/obj.svg",
            p: "Objective-C",
          },
        ],
      },
      {
        h3_kind: "Frontend",
        typeofKind: [
          {
            id: 16,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/dagger.svg",
            p: "Dagger",
          },
          {
            id: 17,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Retrofit.svg",
            p: "Retrofit",
          },
          {
            id: 18,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/OkHttp.svg",
            p: "OkHttp",
          },
          {
            id: 19,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Room.svg",
            p: "Room",
          },
          {
            id: 20,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/RXJava.svg",
            p: "RXJava",
          },
        ],
      },
    ],
  },
  design_tech: {
    id: 6,
    h2: "Design",
    TechType: [
      {
        h3_kind: "UX (USER EXPERIENCE)",
        typeofKind: [
          {
            id: 70,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Coredata.svg",
            p: "CoreData",
          },
          {
            id: 71,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/CoreML.svg",
            p: "CoreMl",
          },
          {
            id: 72,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/ARKit.svg",
            p: "ARKit",
          },
        ],
      },
      {
        h3_kind: "UI (USER INTERFACE)",
        typeofKind: [
          {
            id: 73,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/dagger.svg",
            p: "Dagger",
          },
          {
            id: 74,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Retrofit.svg",
            p: "Retrofit",
          },
          {
            id: 75,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/OkHttp.svg",
            p: "OkHttp",
          },
          {
            id: 76,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/Room.svg",
            p: "Room",
          },
          {
            id: 77,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/RXJava.svg",
            p: "RXJava",
          },
        ],
      },
      {
        h3_kind: "ИНТЕРАКТИВНОЕ ПРОТОТИПИРОВАНИЕ / АНИМАЦИЯ",
        typeofKind: [
          {
            id: 78,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/reactjs.svg",
            p: "ReactNative",
          },
          {
            id: 79,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/flutter.svg",
            p: "Flutter",
          },
          {
            id: 80,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/expo.svg",
            p: "Expo",
          },
          {
            id: 81,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/swift.svg",
            p: "Swift",
          },
          {
            id: 82,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/obj.svg",
            p: "Objective-C",
          },
        ],
      },
    ],
  },
  ml_tech: {
    id: 3,
    h2: "Machine learning",
    TechType: [
      {
        typeofKind: [
          {
            id: 40,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/keras.svg",
            p: "Keras",
          },
          {
            id: 41,
            src: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/tensorflow.svg",
            p: "Tensorflow",
          },
        ],
      },
    ],
  },
  langMobileTxt: "Русский",
  menubarLang: 1,
  projects: [
    {
      id: 1,
      href: "projects/",
      project_h3: "Яндекс Путешествия",
      project_p: "Приложение для покупки авиабилетов и бронирования отелей",
      dowloand_count: "100 000+",
      dowloand_p: "установок приложения",
      img: "./img/main-img/yandex-travel.webp",
      mob: true,
    },
    {
      id: 2,
      href: "projects/firstProject",
      project_h3: "Vozz",
      project_p: "Приложение для нетворкинга",
      dowloand_count: "5000",
      dowloand_p: "скачиваний",
      img: "./img/main-img/vozz.webp",
      mob: true,
      web: true,
    },
    {
      id: 3,
      href: "projects/#",
      project_h3: "Ural Music Night",
      project_p: "Приложение и сайт для ивента",
      dowloand_count: "1300",
      dowloand_p: "Обработанных заявок",
      img: "./img/main-img/praktika.webp",
      mob: true,
    },
    {
      id: 4,
      href: "projects/#",
      project_h3: "Praktika",
      project_p: "Приложение для обучения медитации",
      dowloand_count: "10%",
      dowloand_p: "конверсия приложения",
      img: "./img/main-img/praktika.webp",
      mob: true,
      web: true,
    },
    {
      id: 5,
      href: "projects/#",
      project_h3: "Praktika",
      project_p: "Приложение для обучения медитации",
      dowloand_count: "10%",
      dowloand_p: "конверсия приложения",
      img: "./img/main-img/praktika.webp",
      mob: true,
    },
    {
      id: 6,
      href: "projects/#",
      project_h3: "Praktika",
      project_p: "Приложение для обучения медитации",
      dowloand_count: "10%",
      dowloand_p: "конверсия приложения",
      img: "./img/main-img/praktika.webp",
      machine: true,
    },
    {
      id: 7,
      href: "projects/#",
      project_h3: "Praktika",
      project_p: "Приложение для обучения медитации",
      dowloand_count: "10%",
      dowloand_p: "конверсия приложения",
      img: "./img/main-img/praktika.webp",
      mob: true,
      web: true,
    },
    {
      id: 8,
      href: "projects/#",
      project_h3: "Praktika",
      project_p: "Приложение для обучения медитации",
      dowloand_count: "10%",
      dowloand_p: "конверсия приложения",
      img: "./img/main-img/praktika.webp",
      mob: true,
    },
    {
      id: 9,
      href: "projects/#",
      project_h3: "Praktika",
      project_p: "Приложение для обучения медитации",
      dowloand_count: "10%",
      dowloand_p: "конверсия приложения",
      img: "./img/main-img/praktika.webp",
      web: true,
    },
    {
      id: 10,
      href: "projects/#",
      project_h3: "Praktika",
      project_p: "Приложение для обучения медитации",
      dowloand_count: "10%",
      dowloand_p: "конверсия приложения",
      img: "./img/main-img/praktika.webp",
      mob: true,
    },
  ],
  filter: [
    {
      id: 1,
      txt: "Все",
    },
    {
      id: 2,
      txt: "Мобильное приложение",
    },
    {
      id: 3,
      txt: "Веб",
    },
    {
      id: 4,
      txt: "Машинное обучение",
    },
  ],
  vacancions: [
    {
      id: 1,
      name: "Дизайнер директор",
      link: "/vacancies/art-director",
    },
    {
      id: 2,
      name: "Дизайнер директор",
      link: "/vacancies/art-director",
    },
    {
      id: 3,
      name: "Дизайнер директор",
      link: "/vacancies/art-director",
    },
    {
      id: 4,
      name: "Дизайнер директор",
      link: "/vacancies/art-director",
    },
  ],
  animArrow: 0,
  svgDoodleWhite: `<?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
   "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="165.000000pt" height="45.000000pt" viewBox="0 0 195.000000 65.000000"
   preserveAspectRatio="xMidYMid meet">
  
  <g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"
  fill="#fff" stroke="none">
  <path d="M478 604 c-25 -13 -39 -45 -20 -44 18 1 56 29 58 44 3 19 -3 20 -38
  0z"/>
  <path d="M473 548 c-13 -6 -23 -19 -23 -29 0 -16 3 -17 33 -4 17 7 33 20 35
  29 4 18 -13 20 -45 4z"/>
  <path d="M1303 493 c-31 -16 -33 -20 -33 -67 l0 -51 -51 3 c-93 7 -151 -38
  -163 -127 -8 -60 -33 -91 -75 -91 -48 0 -76 31 -76 83 0 58 25 87 74 87 20 0
  42 -4 50 -9 10 -7 19 -4 28 7 18 25 16 29 -18 41 -102 35 -209 -26 -209 -119
  0 -95 89 -155 195 -130 52 12 91 55 100 111 3 24 11 54 17 66 15 30 67 47 102
  34 25 -10 26 -14 26 -81 0 -68 -1 -71 -27 -81 -20 -8 -39 -7 -66 1 -34 10 -40
  9 -52 -7 -17 -23 -13 -29 30 -43 24 -8 45 -8 72 -1 25 7 39 7 41 1 2 -6 19
  -10 38 -10 l34 0 0 200 c0 110 -1 200 -2 199 -2 0 -18 -8 -35 -16z"/>
  <path d="M1393 492 l-33 -16 0 -158 c0 -91 4 -168 10 -179 11 -20 54 -26 80
  -9 12 8 12 11 -3 27 -14 16 -17 46 -19 185 l-3 165 -32 -15z"/>
  <path d="M473 490 c-20 -8 -23 -17 -23 -64 l0 -56 -44 6 c-56 8 -109 -10 -141
  -47 -89 -107 9 -248 146 -209 22 7 35 7 37 0 5 -13 59 -13 67 1 4 5 -1 26 -10
  46 -22 45 -22 120 -1 161 10 20 16 56 16 102 0 74 -3 78 -47 60z m-35 -242 c3
  -70 1 -77 -18 -83 -34 -11 -88 4 -105 28 -23 33 -19 84 10 113 20 20 33 25 68
  22 l42 -3 3 -77z"/>
  <path d="M594 366 c-47 -21 -74 -61 -74 -113 0 -89 49 -134 145 -134 96 0 145
  45 145 134 0 99 -113 158 -216 113z m130 -58 c41 -58 2 -148 -63 -148 -62 0
  -97 104 -51 150 29 29 94 27 114 -2z"/>
  <path d="M1518 358 c-78 -45 -91 -162 -24 -217 27 -23 88 -31 144 -20 57 11
  57 11 42 40 -9 15 -15 17 -30 9 -26 -14 -82 -12 -103 4 -9 7 -22 27 -28 44 -9
  26 -7 39 8 69 16 33 23 38 56 41 26 2 45 -2 58 -14 35 -31 24 -43 -43 -46 -48
  -2 -63 -7 -63 -18 0 -12 18 -16 93 -18 l92 -3 0 38 c0 48 -22 81 -66 99 -47
  20 -93 17 -136 -8z"/>
  </g>
  </svg>
  `,
  svgDoodleBlack: `<?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
   "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="165.000000pt" height="45.000000pt" viewBox="0 0 195.000000 65.000000"
   preserveAspectRatio="xMidYMid meet">
  
  <g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M478 604 c-25 -13 -39 -45 -20 -44 18 1 56 29 58 44 3 19 -3 20 -38
  0z"/>
  <path d="M473 548 c-13 -6 -23 -19 -23 -29 0 -16 3 -17 33 -4 17 7 33 20 35
  29 4 18 -13 20 -45 4z"/>
  <path d="M1303 493 c-31 -16 -33 -20 -33 -67 l0 -51 -51 3 c-93 7 -151 -38
  -163 -127 -8 -60 -33 -91 -75 -91 -48 0 -76 31 -76 83 0 58 25 87 74 87 20 0
  42 -4 50 -9 10 -7 19 -4 28 7 18 25 16 29 -18 41 -102 35 -209 -26 -209 -119
  0 -95 89 -155 195 -130 52 12 91 55 100 111 3 24 11 54 17 66 15 30 67 47 102
  34 25 -10 26 -14 26 -81 0 -68 -1 -71 -27 -81 -20 -8 -39 -7 -66 1 -34 10 -40
  9 -52 -7 -17 -23 -13 -29 30 -43 24 -8 45 -8 72 -1 25 7 39 7 41 1 2 -6 19
  -10 38 -10 l34 0 0 200 c0 110 -1 200 -2 199 -2 0 -18 -8 -35 -16z"/>
  <path d="M1393 492 l-33 -16 0 -158 c0 -91 4 -168 10 -179 11 -20 54 -26 80
  -9 12 8 12 11 -3 27 -14 16 -17 46 -19 185 l-3 165 -32 -15z"/>
  <path d="M473 490 c-20 -8 -23 -17 -23 -64 l0 -56 -44 6 c-56 8 -109 -10 -141
  -47 -89 -107 9 -248 146 -209 22 7 35 7 37 0 5 -13 59 -13 67 1 4 5 -1 26 -10
  46 -22 45 -22 120 -1 161 10 20 16 56 16 102 0 74 -3 78 -47 60z m-35 -242 c3
  -70 1 -77 -18 -83 -34 -11 -88 4 -105 28 -23 33 -19 84 10 113 20 20 33 25 68
  22 l42 -3 3 -77z"/>
  <path d="M594 366 c-47 -21 -74 -61 -74 -113 0 -89 49 -134 145 -134 96 0 145
  45 145 134 0 99 -113 158 -216 113z m130 -58 c41 -58 2 -148 -63 -148 -62 0
  -97 104 -51 150 29 29 94 27 114 -2z"/>
  <path d="M1518 358 c-78 -45 -91 -162 -24 -217 27 -23 88 -31 144 -20 57 11
  57 11 42 40 -9 15 -15 17 -30 9 -26 -14 -82 -12 -103 4 -9 7 -22 27 -28 44 -9
  26 -7 39 8 69 16 33 23 38 56 41 26 2 45 -2 58 -14 35 -31 24 -43 -43 -46 -48
  -2 -63 -7 -63 -18 0 -12 18 -16 93 -18 l92 -3 0 38 c0 48 -22 81 -66 99 -47
  20 -93 17 -136 -8z"/>
  </g>
  </svg>
  `,
  adress: [
    {
      city: "Таджикистан, г.Худжанд",
      adressCity: "просп.Исмоили Сомони здание Дилбархон 4-ый этаж",
      logoCity: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="45" viewBox="0 0 49 45" fill="none" class="injected-svg" data-src="https://s3.timeweb.com/doubletapp-dt-site-prod/files/EKB.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path d="M0.782169 32.1742H4.43062C4.5746 32.1742 4.69131 32.0575 4.69131 31.9135C4.69131 31.7695 4.5746 31.6528 4.43062 31.6528H0.782169C0.638191 31.6528 0.521484 31.7695 0.521484 31.9135C0.521484 32.0575 0.638191 32.1742 0.782169 32.1742Z" fill="white"></path>
      <path d="M0.782169 34.7802H4.43062C4.5746 34.7802 4.69131 34.6635 4.69131 34.5195C4.69131 34.3755 4.5746 34.2588 4.43062 34.2588H0.782169C0.638191 34.2588 0.521484 34.3755 0.521484 34.5195C0.521484 34.6635 0.638191 34.7802 0.782169 34.7802Z" fill="white"></path>
      <path d="M6.51655 32.1742H10.165C10.309 32.1742 10.4257 32.0575 10.4257 31.9135C10.4257 31.7695 10.309 31.6528 10.165 31.6528H6.51655C6.37257 31.6528 6.25586 31.7695 6.25586 31.9135C6.25586 32.0575 6.3722 32.1742 6.51655 32.1742Z" fill="white"></path>
      <path d="M6.51655 34.7802H10.165C10.309 34.7802 10.4257 34.6635 10.4257 34.5195C10.4257 34.3755 10.309 34.2588 10.165 34.2588H6.51655C6.37257 34.2588 6.25586 34.3755 6.25586 34.5195C6.25586 34.6635 6.3722 34.7802 6.51655 34.7802Z" fill="white"></path>
      <path d="M6.51655 37.3866H10.165C10.309 37.3866 10.4257 37.2699 10.4257 37.1259C10.4257 36.9819 10.309 36.8652 10.165 36.8652H6.51655C6.37257 36.8652 6.25586 36.9819 6.25586 37.1259C6.25586 37.2699 6.3722 37.3866 6.51655 37.3866Z" fill="white"></path>
      <path d="M12.249 32.1742H15.8974C16.0414 32.1742 16.1581 32.0575 16.1581 31.9135C16.1581 31.7695 16.0418 31.6528 15.8974 31.6528H12.249C12.105 31.6528 11.9883 31.7695 11.9883 31.9135C11.9883 32.0575 12.105 32.1742 12.249 32.1742Z" fill="white"></path>
      <path d="M12.249 34.7802H15.8974C16.0414 34.7802 16.1581 34.6635 16.1581 34.5195C16.1581 34.3755 16.0418 34.2588 15.8974 34.2588H12.249C12.105 34.2588 11.9883 34.3755 11.9883 34.5195C11.9883 34.6635 12.105 34.7802 12.249 34.7802Z" fill="white"></path>
      <path d="M12.249 37.3866H15.8974C16.0414 37.3866 16.1581 37.2699 16.1581 37.1259C16.1581 36.9819 16.0418 36.8652 15.8974 36.8652H12.249C12.105 36.8652 11.9883 36.9819 11.9883 37.1259C11.9883 37.2699 12.105 37.3866 12.249 37.3866Z" fill="white"></path>
      <path d="M12.249 39.9926H15.8974C16.0414 39.9926 16.1581 39.8759 16.1581 39.7319C16.1581 39.5879 16.0418 39.4712 15.8974 39.4712H12.249C12.105 39.4712 11.9883 39.5879 11.9883 39.7319C11.9883 39.8759 12.105 39.9926 12.249 39.9926Z" fill="white"></path>
      <path d="M22.6747 32.1742H25.8023C25.9462 32.1742 26.0629 32.0575 26.0629 31.9135C26.0629 31.7695 25.9462 31.6528 25.8023 31.6528H22.6747C22.5308 31.6528 22.4141 31.7695 22.4141 31.9135C22.4141 32.0575 22.5308 32.1742 22.6747 32.1742Z" fill="white"></path>
      <path d="M22.6747 34.7802H25.8023C25.9462 34.7802 26.0629 34.6635 26.0629 34.5195C26.0629 34.3755 25.9462 34.2588 25.8023 34.2588H22.6747C22.5308 34.2588 22.4141 34.3755 22.4141 34.5195C22.4141 34.6635 22.5308 34.7802 22.6747 34.7802Z" fill="white"></path>
      <path d="M26.0629 37.1259C26.0629 36.9819 25.9462 36.8652 25.8023 36.8652H22.6747C22.5308 36.8652 22.4141 36.9819 22.4141 37.1259C22.4141 37.2699 22.5308 37.3866 22.6747 37.3866H25.8023C25.9462 37.3866 26.0629 37.2699 26.0629 37.1259Z" fill="white"></path>
      <path d="M22.6747 16.0161H25.8023C25.9462 16.0161 26.0629 15.8994 26.0629 15.7554C26.0629 15.6115 25.9462 15.4951 25.8023 15.4951H22.6747C22.5308 15.4951 22.4141 15.6118 22.4141 15.7558C22.4141 15.8998 22.5308 16.0161 22.6747 16.0161Z" fill="white"></path>
      <path d="M21.8915 23.053C22.0355 23.053 22.1522 22.9363 22.1522 22.7923V18.1015C22.1522 17.9575 22.0355 17.8408 21.8915 17.8408C21.7476 17.8408 21.6309 17.9575 21.6309 18.1015V22.7923C21.6309 22.9363 21.7476 23.053 21.8915 23.053Z" fill="white"></path>
      <path d="M23.9757 18.4691C24.0826 18.3727 24.0913 18.208 23.9949 18.1011C23.8982 17.9939 23.7339 17.9851 23.627 18.0819L22.6719 18.941V21.875L23.6383 22.6483C23.6863 22.6869 23.7437 22.7054 23.8008 22.7054C23.8775 22.7054 23.9531 22.672 24.0048 22.6076C24.0946 22.4953 24.0764 22.3313 23.964 22.2411L23.1933 21.6249V19.1733L23.9757 18.4691Z" fill="white"></path>
      <path d="M48.4739 28.7863C48.4739 28.6423 48.3572 28.5256 48.2132 28.5256H31.5342V25.9195H31.0128V23.3134C31.0128 23.1694 30.8961 23.0527 30.7521 23.0527C30.6085 23.0527 30.4918 23.1694 30.4918 23.3134V25.9195H29.9704V23.8348C29.9704 23.6908 29.8537 23.5741 29.7098 23.5741C29.5661 23.5741 29.4494 23.6904 29.4494 23.8344V25.9191H28.9281V23.313H27.8857V18.6774L28.8525 16.5142L27.8548 15.6118C27.873 15.5765 27.8857 15.5376 27.8857 15.4951V14.4527C27.8857 14.3087 27.769 14.192 27.625 14.192C27.4811 14.192 27.3647 14.3084 27.3647 14.4527V15.4951H26.8433V13.4703L27.2949 12.5428L27.1462 12.4116C27.1004 12.3708 26.7684 12.1098 25.9885 11.9575C26.0082 11.9171 26.0209 11.8735 26.0172 11.8255L25.409 4.31153C25.4064 4.27844 25.3963 4.24827 25.3828 4.22027C25.7933 3.88505 26.0616 3.38187 26.0616 2.81176C26.0616 1.80609 25.2432 0.987305 24.2371 0.987305C23.2315 0.987305 22.4127 1.80571 22.4127 2.81176C22.4127 3.38149 22.6806 3.88501 23.0915 4.21953C23.078 4.24752 23.0679 4.27806 23.0653 4.31078L22.4574 11.8247C22.4538 11.8727 22.4665 11.9164 22.4861 11.9567C21.7063 12.1091 21.3744 12.3701 21.3285 12.4108L21.1801 12.5417L21.631 13.4703V15.495H21.1096V14.4527C21.1096 14.3087 20.9929 14.192 20.8489 14.192C20.7049 14.192 20.5886 14.3083 20.5886 14.4527V15.495C20.5886 15.5379 20.6013 15.5765 20.6195 15.6121L19.6222 16.5149L20.5886 18.6777V23.3134H19.5462V25.9195H19.0249V23.8348C19.0249 23.6908 18.9082 23.5741 18.7642 23.5741C18.6202 23.5741 18.5035 23.6904 18.5035 23.8344V25.9191H17.9821V23.313C17.9821 23.169 17.8654 23.0523 17.7214 23.0523C17.5778 23.0527 17.4611 23.1694 17.4611 23.3134V25.9195H16.9398V28.5256H0.260685C0.116707 28.5256 0 28.6423 0 28.7862C0.000363552 28.9302 0.116707 29.0466 0.260685 29.0466H16.9398V44.4728V44.4385C16.9398 44.6493 16.9394 44.5057 16.9398 44.6493C16.9401 44.7933 17.0565 44.91 17.2004 44.91L24.2376 44.9873L31.273 44.91C31.417 44.91 31.5337 44.7933 31.5337 44.6493C31.5337 44.5057 31.5337 44.6493 31.5337 44.4728V29.0466H48.2128C48.3571 29.0466 48.4739 28.9303 48.4739 28.7863ZM22.9341 2.81179C22.9341 2.09336 23.5187 1.50874 24.2372 1.50874C24.956 1.50874 25.5402 2.09336 25.5402 2.81179C25.5402 3.53022 24.956 4.11484 24.2372 4.11484C23.5187 4.11484 22.9341 3.53022 22.9341 2.81179ZM22.977 11.8677L23.5725 4.50641C23.7791 4.58785 24.0023 4.6362 24.2372 4.6362C24.4724 4.6362 24.6956 4.58785 24.9021 4.50641L25.498 11.8677C25.4984 11.8746 25.5024 11.8804 25.5035 11.887C25.2792 11.8637 25.0385 11.8466 24.7585 11.8466H23.7162C23.4362 11.8466 23.1955 11.8637 22.9716 11.887C22.9727 11.8801 22.9763 11.8746 22.977 11.8677ZM20.0673 26.4405V23.8344H21.1097V18.6222L20.252 16.6472L20.9497 16.0161H22.1524V13.3499L21.8383 12.7042C22.0964 12.5751 22.6745 12.3675 23.7158 12.3675H24.7581C25.8012 12.3675 26.3793 12.5759 26.636 12.7039L26.3219 13.3499V16.0161H27.5246L28.2219 16.6472L27.3872 18.5156L27.3646 23.8344H28.407V26.4405H29.4493V44.4701L27.3646 44.4683V24.8769C27.5086 24.8769 27.6253 24.7602 27.6253 24.6162C27.6249 24.4722 27.5086 24.3555 27.3646 24.3555H21.1101C20.9661 24.3555 20.8494 24.4722 20.8494 24.6162C20.8494 24.7602 20.9657 24.8769 21.1097 24.8769V44.4692L19.025 44.471V26.4405H20.0673ZM24.2375 44.4664L23.1948 44.4671V41.564C23.1959 41.512 23.2425 40.2966 24.2372 40.2966C25.2257 40.2966 25.2781 41.5127 25.2795 41.5564V44.4671L24.2375 44.4664ZM24.2372 39.7752C23.0407 39.7752 22.6909 40.9354 22.6734 41.5564V44.4679L21.6311 44.4689V24.8776H26.8433V44.4689L25.8009 44.4679V41.5487C25.7835 40.9354 25.4337 39.7752 24.2372 39.7752ZM17.4612 29.0464V26.4403H18.5036V44.4708L17.4612 44.4719V29.0464ZM31.0129 44.4718L29.9706 44.4707V26.4402H31.0129V44.4718Z" fill="white"></path>
      <path d="M47.6923 31.6528H44.0439C43.8999 31.6528 43.7832 31.7695 43.7832 31.9135C43.7832 32.0575 43.8999 32.1742 44.0439 32.1742H47.6923C47.8363 32.1742 47.953 32.0575 47.953 31.9135C47.953 31.7695 47.8363 31.6528 47.6923 31.6528Z" fill="white"></path>
      <path d="M47.6923 34.2588H44.0439C43.8999 34.2588 43.7832 34.3755 43.7832 34.5195C43.7832 34.6635 43.8999 34.7802 44.0439 34.7802H47.6923C47.8363 34.7802 47.953 34.6635 47.953 34.5195C47.953 34.3755 47.8363 34.2588 47.6923 34.2588Z" fill="white"></path>
      <path d="M41.9599 31.6528H38.3115C38.1675 31.6528 38.0508 31.7695 38.0508 31.9135C38.0508 32.0575 38.1675 32.1742 38.3115 32.1742H41.9599C42.1039 32.1742 42.2206 32.0575 42.2206 31.9135C42.2206 31.7695 42.1043 31.6528 41.9599 31.6528Z" fill="white"></path>
      <path d="M41.9599 34.2593H38.3115C38.1675 34.2593 38.0508 34.376 38.0508 34.52C38.0508 34.6639 38.1675 34.7806 38.3115 34.7806H41.9599C42.1039 34.7806 42.2206 34.6639 42.2206 34.52C42.2206 34.376 42.1043 34.2593 41.9599 34.2593Z" fill="white"></path>
      <path d="M41.9599 36.8652H38.3115C38.1675 36.8652 38.0508 36.9819 38.0508 37.1259C38.0508 37.2699 38.1675 37.3866 38.3115 37.3866H41.9599C42.1039 37.3866 42.2206 37.2699 42.2206 37.1259C42.2206 36.9819 42.1043 36.8652 41.9599 36.8652Z" fill="white"></path>
      <path d="M36.2255 31.6528H32.5771C32.4331 31.6528 32.3164 31.7695 32.3164 31.9135C32.3164 32.0575 32.4328 32.1742 32.5771 32.1742H36.2255C36.3695 32.1742 36.4862 32.0575 36.4862 31.9135C36.4862 31.7695 36.3695 31.6528 36.2255 31.6528Z" fill="white"></path>
      <path d="M36.2255 34.2593H32.5771C32.4331 34.2593 32.3164 34.376 32.3164 34.52C32.3164 34.6639 32.4328 34.7806 32.5771 34.7806H36.2255C36.3695 34.7806 36.4862 34.6639 36.4862 34.52C36.4862 34.376 36.3695 34.2593 36.2255 34.2593Z" fill="white"></path>
      <path d="M36.2255 36.8652H32.5771C32.4331 36.8652 32.3164 36.9819 32.3164 37.1259C32.3164 37.2699 32.4328 37.3866 32.5771 37.3866H36.2255C36.3695 37.3866 36.4862 37.2699 36.4862 37.1259C36.4862 36.9819 36.3695 36.8652 36.2255 36.8652Z" fill="white"></path>
      <path d="M36.2255 39.4712H32.5771C32.4331 39.4712 32.3164 39.5879 32.3164 39.7319C32.3164 39.8759 32.4328 39.9926 32.5771 39.9926H36.2255C36.3695 39.9926 36.4862 39.8759 36.4862 39.7319C36.4862 39.5879 36.3695 39.4712 36.2255 39.4712Z" fill="white"></path>
      <path d="M26.583 23.053C26.7269 23.053 26.8436 22.9363 26.8436 22.7923V18.1015C26.8436 17.9575 26.7269 17.8408 26.583 17.8408C26.439 17.8408 26.3223 17.9575 26.3223 18.1015V22.7923C26.3223 22.9363 26.439 23.053 26.583 23.053Z" fill="white"></path>
      <path d="M24.4791 18.1002C24.3827 18.2071 24.3914 18.3721 24.4983 18.4681L25.2807 19.1724V21.624L24.51 22.2406C24.3976 22.3307 24.3794 22.4947 24.4692 22.6071C24.5209 22.6714 24.5965 22.7049 24.6732 22.7049C24.7303 22.7049 24.7877 22.6863 24.8357 22.6478L25.8021 21.8745V18.9404L24.8474 18.081C24.7401 17.985 24.5758 17.9933 24.4791 18.1002L24.4791 18.1002Z" fill="white"></path>
      </svg>`,
    },
  ],
  blogMainImg: "https://doubletapp.ai/static/svg/bg/blog.svg",
  blogPhoneMainImg: "https://doubletapp.ai/static/svg/bg/blog-mobile.svg",
  imgMainBlockBlog:
    "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/_%D0%91%D0%92%D0%92%D0%9C_y6Ejfld.png",
  resourceBlockBlog:
    "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/%D0%98%D0%9A%D0%9E%D0%9D%D0%9A%D0%90_ZBn7J1k.jpg",
  blocks: [
    {
      href: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/%D0%A1%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0_%D0%A1%D0%B0%D0%B9%D1%82_XJTfsAA.png",
      subheading:
        "Doodle хантит молодых специалистов: летняя оплачиваемая стажировка для разработчиков",
      date: "8 апреля 2022 г.",
      p1: "Рассказываем, как пойти на оплачиваемую стажировку в Doodle и по каким направлениям.",
    },
    {
      href: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/%D0%A1%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0_%D0%A1%D0%B0%D0%B9%D1%82_XJTfsAA.png",
      subheading:
        "Doodle хантит молодых специалистов: летняя оплачиваемая стажировка для разработчиков",
      date: "8 апреля 2022 г.",
      p1: "Рассказываем, как пойти на оплачиваемую стажировку в Doodle и по каким направлениям.",
    },
    {
      href: "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/%D0%A1%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%9A%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0_%D0%A1%D0%B0%D0%B9%D1%82_XJTfsAA.png",
      subheading:
        "Doodle хантит молодых специалистов: летняя оплачиваемая стажировка для разработчиков",
      date: "8 апреля 2022 г.",
      p1: "Рассказываем, как пойти на оплачиваемую стажировку в Doodle и по каким направлениям.",
    },
  ],
  capabilities: [
    {
      id: 1,
      href: "mobile",
      href_2: "/services/mobile",
      block: {
        icon: "../img/main-img/mobile.svg",
        block_txt: "Мобильная Разработка",
      },
    },
    {
      id: 2,
      href: "web",
      href_2: "/services/web",
      block: {
        icon: "../img/main-img/web.svg",
        block_txt: "Веб-разработка",
      },
    },
    {
      id: 3,
      href: "ml",
      href_2: "/services/ml",
      block: {
        icon: "../img/main-img/machine.svg",
        block_txt: "Машинное обучение",
      },
    },
    {
      id: 4,
      href: "design",
      href_2: "/services/design",
      block: {
        icon: "../img/main-img/design.svg",
        block_txt: "Дизайн",
      },
    },
    {
      id: 5,
      href: "qa",
      href_2: "/services/qa",
      block: {
        icon: "../img/main-img/audit.svg",
        block_txt: "Аудит",
      },
    },
  ],
  projects_1: [
    {
      id: 1,
      href: "projects/#",
      project_h3: "Яндекс Путешествия",
      project_p: "Приложение для покупки авиабилетов и бронирования отелей",
      dowloand_count: "100 000+",
      dowloand_p: "установок приложения",
      img: "../img/main-img/yandex-travel.webp",
      class: 1,
    },
    {
      id: 2,
      href: "projects/firstProject",
      project_h3: "Vozz",
      project_p: "Приложение для нетворкинга",
      dowloand_count: "5000",
      dowloand_p: "скачиваний",
      img: "../img/main-img/vozz.webp",
      class: 2,
    },
    {
      id: 3,
      href: "projects/#",
      project_h3: "Ural Music Night",
      project_p: "Приложение и сайт для ивента",
      dowloand_count: "100 000+",
      dowloand_p: "установок приложения",
      img: "../img/main-img/umn.webp",
      class: "a",
    },
    {
      id: 4,
      href: "projects/#",
      project_h3: "Praktika",
      project_p: "Приложение для обучения медитации",
      dowloand_count: "10%",
      dowloand_p: "конверсия приложения",
      img: "../img/main-img/praktika.webp",
      class: "b",
    },
    {
      id: 5,
      href: "/projects",
      project_p: "Всего 14 проектов",
      project_h3: "Все проекты",
      class: "b",
    },
  ],
  clients: [
    {
      id: 1,
      hrefSvg: "./img/main-img/alibra_clients.svg",
    },
    {
      id: 2,
      hrefSvg: "./img/main-img/alibra_clients.svg",
    },
    {
      id: 3,
      hrefSvg: "./img/main-img/alibra_clients.svg",
    },
    {
      id: 4,
      hrefSvg: "./img/main-img/alibra_clients.svg",
    },
    {
      id: 5,
      hrefSvg: "./img/main-img/alibra_clients.svg",
    },
    {
      id: 6,
      hrefSvg: "./img/main-img/alibra_clients.svg",
    },
    {
      id: 7,
      hrefSvg: "./img/main-img/alibra_clients.svg",
    },
    {
      id: 8,
      hrefSvg: "./img/main-img/alibra_clients.svg",
    },
  ],
  stepsMobile: [
    {
      number: 1,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 2,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 3,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 4,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 5,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 6,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
  ],
  stepsWeb: [
    {
      number: 1,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 2,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 3,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 4,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 5,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 6,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
  ],
  stepsDesign: [
    {
      number: 1,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 2,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 3,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 4,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 5,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 6,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 7,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
  ],
  stepsMl: [
    {
      number: 1,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 2,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 3,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 4,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 5,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
    {
      number: 6,
      title: "Анализ",
      text: "Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии заказчика и потребности пользователей.",
    },
  ],
  projectListMobile: [
    {
      id: 1,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      siteLink: "/#",
      androidLink: "/#",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
    {
      id: 2,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
    {
      id: 3,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      androidLink: "/#",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
  ],
  projectListWeb: [
    {
      id: 1,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      siteLink: "/#",
      androidLink: "/#",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
    {
      id: 2,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
    {
      id: 3,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      androidLink: "/#",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
  ],
  projectListDesign: [
    {
      id: 1,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      siteLink: "/#",
      androidLink: "/#",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
    {
      id: 2,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
    {
      id: 3,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      androidLink: "/#",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
  ],
  projectListMl: [
    {
      id: 1,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      siteLink: "/#",
      androidLink: "/#",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
    {
      id: 2,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
    {
      id: 3,
      href: "#",
      img_src:
        "https://s3.timeweb.com/doubletapp-old-dt-site-prod/files/hitfactor.png",
      txt: "Ural Music Night",
      androidLink: "/#",
      appleLink: "/#",
      p: "Сайт и мобильное приложение для музыкального фестиваля Екатеринбурга",
    },
  ],
  faqSectionMobile: [
    {
      id: 1,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
    {
      id: 2,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
    {
      id: 3,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
  ],
  faqSectionWeb: [
    {
      id: 1,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
    {
      id: 2,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
  ],
  faqSectionDesign: [
    {
      id: 1,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
    {
      id: 2,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
  ],
  faqSectionMl: [
    {
      id: 1,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
    {
      id: 2,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
  ],
  faqSectionQa: [
    {
      id: 1,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
    {
      id: 2,
      question: "Что такое мобильное приложение?",
      answer_1:
        "Мобильное приложение — программы, запускаемые на смартфоне или планшете. Приложения бывают установленными на телефон изначально, или скаченными из AppStore или GooglePlay пользователями. Функционал приложений безграничен — от проверки почты до оформления заказа в магазине, от игр до ведения бухгалтерии.",
      answer_2:
        "Наша компания занимается iOS-разработкой для устройств Apple и Android-разработкой.",
    },
  ],
  techListQa: [
    {
      id: 1,
      p: "Валидность кода;",
    },
    {
      id: 2,
      p: "Скорость загрузки на разных устройствах;;",
    },
    {
      id: 3,
      p: "Корректность отображения страниц в разных браузерах;;",
    },
    {
      id: 4,
      p: "Наличие вредоносного кода;",
    },
    {
      id: 5,
      p: "Соответствие хостинга нужным критериям;",
    },
    {
      id: 6,
      p: "Работу системы управления;",
    },
    {
      id: 7,
      p: "Структуры данных;",
    },
    {
      id: 8,
      p: "Настройки сервера;",
    },
  ],
  tryListQa: [
    {
      id: 1,
      p: "Архитектуру ресурса и понятность навигации;",
    },
    {
      id: 2,
      p: "Интутивно понятный интерфейс;",
    },
    {
      id: 3,
      p: "Достаточность функциональных элементов и понятность их работы;",
    },
    {
      id: 4,
      p: "Текстовый и медийный контент;",
    },
    {
      id: 5,
      p: "Удобство диалоговых элементов;",
    },
    {
      id: 6,
      p: "Корректность отображения сайта в любых браузерах при любых настройках экрана;",
    },
  ],
  arrowFaq: `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="17" viewBox="0 0 27 17" class="injected-svg svg" data-src="/static/svg/icon-arrow-bottom.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <path fill="#D73F30" fill-rule="evenodd" stroke="#D73F30" d="M1.001 1.443c.07-.387.57-.583.878-.27l11.63 13.57 11.629-13.57s.233-.224.494-.162c.33.077.485.518.266.813l-12.01 14.014a.526.526 0 0 1-.76 0L1.118 1.824c-.062-.084-.128-.104-.117-.381z"></path>
  </svg>`,
  projectDataFirst: {
    nameProject: 'Vozz',
    describtion: 'Приложение для нетворкинга в университетах и бизнес-школах',
    Links: [
      {
        id: 1,
        href: '#',
        svg: '../img/main-img/siteIcon.svg',
        txt: 'https://vozz.ai',
      },
      {
        id: 2,
        href: '#',
        svg: '../img/main-img/GooglePlay.svg',
        txt: 'Google play',
      },
      {
        id: 3,
        href: '#',
        svg: '../img/main-img/appleIcon.svg',
        txt: 'Apple Store',
      },
    ],
    href: '#',
    img1: '../img/main-img/vozz-desktop.webp',
    img2: '../img/main-img/vozz-mobile.webp',
    ProjectToNumber: [
      {
        id: 1,
        num: 5000,
        txt: 'скачиваний',
        class: 8,
      },
      {
        id: 2,
        num: 2000,
        txt: 'пользователей',
        class: 9,
      },
      {
        id: 3,
        num: 2,
        txt: 'бизнес-школы',
        class: 'a',
      }
    ],
    imgTask: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2Fvozz_about_wjhzKcp.webp&w=3840&q=75',
    txtTasks: 'Летом 2020 года в Doodle обратилась компания Edge App Ltd, базирующаяся в Лондоне, Великобритания, с просьбой разработать собственное мобильное приложение для пользователей iOS и Android, чтобы сделать первый шаг к реализации своей миссии по созданию удобной платформы для нетворкинга студентов и выпускников внутри сообщества бизнес-школ и университетов.',
    txtTasksResult: 'Мы создали мобильное приложение и веб-профиль для генерации уникальных кодов доступа. В мобильном приложении под Android и iOS реализованы функции:',
    ListResult: [
      {
        id: 1,
        strong: 'Закрытые сообщества',
        txt: 'Для каждой бизнес-школы или университета создается своя собственная закрытая площадка, доступ на которую есть только у студентов, выпускников или сотрудников учебного заведения. Администратор сообщества генерирует уникальный код авторизации для каждого студента и выпускника учебного заведения.',
      },
      {
        id: 2,
        strong: 'Закрытые сообщества',
        txt: 'Для каждой бизнес-школы или университета создается своя собственная закрытая площадка, доступ на которую есть только у студентов, выпускников или сотрудников учебного заведения. Администратор сообщества генерирует уникальный код авторизации для каждого студента и выпускника учебного заведения.',
      },
      {
        id: 3,
        strong: 'Закрытые сообщества',
        txt: 'Для каждой бизнес-школы или университета создается своя собственная закрытая площадка, доступ на которую есть только у студентов, выпускников или сотрудников учебного заведения. Администратор сообщества генерирует уникальный код авторизации для каждого студента и выпускника учебного заведения.',
      },
      {
        id: 4,
        strong: 'Закрытые сообщества',
        txt: 'Для каждой бизнес-школы или университета создается своя собственная закрытая площадка, доступ на которую есть только у студентов, выпускников или сотрудников учебного заведения. Администратор сообщества генерирует уникальный код авторизации для каждого студента и выпускника учебного заведения.',
      },
    ],
    imgResult: [
      {
        id: 1,
        img: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2Fvozz_1.webp&w=3840&q=75',
      },
      {
        id: 2,
        img: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2Fvozz_2.webp&w=3840&q=75',
      },
      {
        id: 3,
        img: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2Fvozz_3.webp&w=3840&q=75',
      },
      {
        id: 4,
        img: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2Fvozz_4.webp&w=3840&q=75',
      },
      {
        id: 5,
        img: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2Fvozz_5.webp&w=3840&q=75',
      },
    ],
    tech: [
      {
        id: 1,
        h2: 'Backend',
        lang: [
          {
            cd: 10,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 11,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 12,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 13,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 14,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
        ]
      },
      {
        id: 2,
        h2: 'Backend',
        lang: [
          {
            cd: 15,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 16,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 17,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 18,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 19,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
        ]
      },
      {
        id: 3,
        h2: 'Backend',
        lang: [
          {
            cd: 10,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 11,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 12,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 13,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 14,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
        ]
      },
      {
        id: 4,
        h2: 'Backend',
        lang: [
          {
            cd: 20,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 21,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 22,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 23,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
          {
            cd: 24,
            h3: 'Python',
            img_1: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_active.svg',
            img_2: 'https://s3.timeweb.com/doubletapp-dt-site-prod/files/python_inactive.svg',
          },
        ]
      },
    ],
    imgAfterTech: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FMask_2_68N6lvv.png&w=3840&q=75',
    ourTeam: [
      {
        id: 1,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 2,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 3,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 4,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 5,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 6,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 7,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 8,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 9,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 10,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 11,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 12,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 13,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      {
        id: 14,
        img1: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2FLer-4_9m4DeQd.png&w=3840&q=75',
        name: 'Валерия',
        job: 'designer',
      },
      
    ],
    review: {
      reviewTxt: 'Команда Doodle проделала для нас потрясающую работу с момента запуска проекта. Когда мы начали работать в середине июля, у нас был только прототип приложения. Doodle проделали исключительную работу в условиях сжатых сроков, выпустив первые рабочие версии приложения менее чем за три месяца.Doodle имеет действительно гибкую команду молодых профессионалов, которые могут не только следовать рекомендациям, но и предлагать инновационные решения неожиданных проблем, которые неизбежно возникают при разработке приложений.',
      img: 'https://doubletapp.ai/_next/image?url=https%3A%2F%2Fs3.timeweb.com%2Fdoubletapp-dt-site-prod%2Ffiles%2Fvozz_avatar_ocbqYni.webp&w=3840&q=75',
      name: 'Александр Жопов',
      profeccion: 'CEO VOZZ',
    }
    
  },
  arrowProject: `<svg width="76" height="68" viewBox="0 0 76 68" xmlns="http://www.w3.org/2000/svg">
  <path class="repaint" d="M12 4.60326V7.3864L0 12V9.33047L8.98435 6.00517L0 2.67986V0L12 4.60326Z" />
  <path class="repaint" d="M44 4.60326V7.3864L32 12V9.33047L40.9843 6.00517L32 2.67986V0L44 4.60326Z" />
  <path class="repaint" d="M76 4.60963V7.39037L64 12V9.33277L72.9843 6.01033L64 2.67756V0L76 4.60963Z" />
  <path class="repaint" d="M12 32.6122V35.3904L0 40V37.3224L8.98435 34L0 30.6801V28L12 32.6122Z" />
  <path  d="M44 32.6122V35.3904L32 40V37.3224L40.9843 34L32 30.6801V28L44 32.6122Z"/>
  <path class="repaint" d="M76 32.6106V35.3894L64 40V37.3219L72.9843 33.9987L64 30.6807V28L76 32.6106Z" />
  <path class="repaint" d="M12 60.617V63.3959L0 68V65.3138L8.98435 61.9961L0 58.6758V56L12 60.617Z" />
  <path class="repaint" d="M44 60.617V63.3959L32 68V65.3138L40.9843 61.9961L32 58.6758V56L44 60.617Z" />
  <path class="repaint" d="M76 60.6106V63.392L64 68V65.3115L72.9843 61.991L64 58.6781V56L76 60.6106Z" />
</svg>
  `,
  arrowProject_2: `<svg width="76" height="68" viewBox="0 0 76 68" xmlns="http://www.w3.org/2000/svg">
  <path class="repaint" d="M12 4.60326V7.3864L0 12V9.33047L8.98435 6.00517L0 2.67986V0L12 4.60326Z" />
  <path class="repaint" d="M44 4.60326V7.3864L32 12V9.33047L40.9843 6.00517L32 2.67986V0L44 4.60326Z" />
  <path class="repaint" d="M76 4.60963V7.39037L64 12V9.33277L72.9843 6.01033L64 2.67756V0L76 4.60963Z" />
  <path class="repaint" d="M12 32.6122V35.3904L0 40V37.3224L8.98435 34L0 30.6801V28L12 32.6122Z" />
  <path  d="M44 32.6122V35.3904L32 40V37.3224L40.9843 34L32 30.6801V28L44 32.6122Z" fill="#E31E30"/>
  <path class="repaint" d="M76 32.6106V35.3894L64 40V37.3219L72.9843 33.9987L64 30.6807V28L76 32.6106Z" />
  <path class="repaint" d="M12 60.617V63.3959L0 68V65.3138L8.98435 61.9961L0 58.6758V56L12 60.617Z" />
  <path class="repaint" d="M44 60.617V63.3959L32 68V65.3138L40.9843 61.9961L32 58.6758V56L44 60.617Z" />
  <path class="repaint" d="M76 60.6106V63.392L64 68V65.3115L72.9843 61.991L64 58.6781V56L76 60.6106Z" />
  </svg>
  `,
  radius: 0,

};

export const heaterSlice = createSlice({
  name: "menuBar",
  initialState,
  reducers: {
    handleButton: (state, actions) => {
      const id = actions.payload.id;
      const name = actions.payload.txt;
      state.projectType = name;
      state.buttonId = id;
    },

    toggleLogoMenu: (state) => {
      state.isOpenMenu = false;
    },

    toggleLangList: (state) => {
      state.isOpen = !state.isOpen;
    },

    handleClick: (state, actions) => {
      const id = actions.payload;
      state.animArrow = id;
      console.log(state.animArrow);
    },

    toggleLangChange: (state, actions) => {
      let id = actions.payload;
      state.menubarLang = id;
      state.langMobileTxt = id === 2 ? "English" : "Русский";
    },

    toggleMenuList: (state) => {
      state.isOpenMenu = !state.isOpenMenu;
      document.body.style = state.isOpenMenu ? "overflow: hidden" : "";
      document.getElementById("root").style = state.isOpenMenu
        ? "overflow: hidden"
        : "";
    },

    toggleLightSide: (state) => {
      state.colorOfBody =
        state.colorOfBody === "dark-theme" ? "light-theme" : "dark-theme";
    },

    toggleChangeBackground: (state) => {
      state.bodyClass =
        state.colorOfBody === "dark-theme" ? "dark-theme" : "light-theme";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleLangList,
  toggleMenuList,
  toggleLightSide,
  toggleChangeBackground,
  toggleLangChange,
  handleButton,
  handleClick,
  toggleLogoMenu,
} = heaterSlice.actions;

export default heaterSlice.reducer;
