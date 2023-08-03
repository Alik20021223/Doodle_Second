import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { toggleLangList, toggleMenuList, toggleLightSide, toggleChangeBackground, toggleLangChange, toggleLogoMenu} from '../../store/slices/headerSlice'
import { useResize } from "../../store/width/useWidthSize";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const [isScroll, setScroll] = useState(false)
  const [isScroll_1, setScroll_1] = useState(false)
  const isOpen = useSelector(state => state.menuBar.isOpen)
  const isOpenMenu = useSelector(state => state.menuBar.isOpenMenu)
  const colorOfBody = useSelector(state => state.menuBar.colorOfBody)
  const bodyClass = useSelector(state => state.menuBar.bodyClass) 
  const icons = useSelector(state => state.menuBar.icons)
  const menuFooter = useSelector(state => state.menuBar.menuFooter)
  const langMobileTxt = useSelector(state => state.menuBar.langMobileTxt)
  const menubarLang = useSelector(state => state.menuBar.menubarLang)
  const svgDoodleWhite = useSelector(state => state.menuBar.svgDoodleWhite)
  const svgDoodleBlack = useSelector(state => state.menuBar.svgDoodleBlack)
  const dispatch = useDispatch();

  const {t, i18n} = useTranslation();

  const { width } = useResize();
  // console.log(t);

  let prevState = window.scrollY;

  if (width > 1279) {
    window.addEventListener('scroll', ()=> {
      if (window.scrollY >= 100) {
        setScroll(window.scrollY)
        setScroll_1(window.scrollY)
      } else if (window.scrollY <= 10){
        setScroll(0)
        setScroll_1(0)
      }
    })
  } else {
    window.addEventListener('scroll', ()=> {
      let currentState = window.scrollY

      if (currentState <= 0) {
        setScroll_1(false)
      } else if (currentState > prevState) {
        setScroll(window.scrollY);
        setScroll_1(window.scrollY);
      } else if (currentState < prevState) {
        setScroll(0);
        setScroll_1(true);
      }

      prevState = currentState;
    })
  }

  const changeLang = (language) => {
    i18n.changeLanguage(language);
  };

  const menuBar_1 = (
    <div
      className={`${isScroll ? `blockMenu-3` : `blockMenu-1`} blockMenu-2`}
      style={isScroll_1 ? { opacity: 1 } : { opacity: 0 }}
      onMouseOver={isScroll ? () => setScroll_1(true) : undefined}
    ></div>
  );
  
  useEffect(() => {
    document.body.classList = `${bodyClass} typeOfBackground animOfBackground`
  }, [bodyClass])

  const svgContent = colorOfBody === 'light-theme' ? svgDoodleBlack : svgDoodleWhite;

  return (
    <header className="header">
      <div  className={`header-1 ${isScroll ? 'header-3' : 'header-2'}`} onMouseOver={() => setScroll(0)}>
        <Link to="/" className="logo logo-2" onClick={()=> dispatch(toggleLogoMenu())}>
            <span>
              {svgContent && <div dangerouslySetInnerHTML={{ __html: svgContent }} />}
            </span>
            <div className="logo-dot"></div>
        </Link>
        <div className="btn-change-light">
          <input type="checkbox" className="btnOff" id="desktopToggle" onClick={() =>{
            dispatch(toggleLightSide());
            dispatch(toggleChangeBackground());
          }}/>
          <label htmlFor="desktopToggle" className="btnLabelChange">
            <div className="btnChange-1">
              <div className={`btnChange-circle ${colorOfBody === 'light-theme' ? 'btnChange-pos-1' : 'btnChange-pos-2'}`}></div>
            </div>
            <span className="btnChangeText">{colorOfBody}</span>
          </label>
        </div>
        <div
          className="btn-change-lang-1 btn-change-lang-2"
          onClick={() => dispatch(toggleLangList())}
        >
          <button
            className={`btnLangCircle ${menubarLang === 'en' ? `btnLangCircle-2` : `btnLangCircle-3`} justForBtn`}
            type="button"
            aria-expanded="true"
          >
            <span className="btnOff">Change language</span>
          </button>
          {isOpen && (
            <ul className="lang-pos-1 lang-pos-2 lang-type">
              <li>
                <button
                  className={`${menubarLang === 'ru' ? 'active-lang-btn' : `lang-btn`} lang-btn-size justForBtn`}
                  type="button"
                  value="ru"
                  onClick={() => {
                    changeLang('ru');
                    dispatch(toggleLangChange('ru'));
                  }}
                >
                  Русский
                </button>
              </li>
              <li>
                <button
                  className={`${menubarLang === 'en' ? 'active-lang-btn' : `lang-btn`} lang-btn-size justForBtn`}
                  type="button"
                  value="en"
                  onClick={() => {
                    changeLang('en');
                    dispatch(toggleLangChange('en'));
                  }}
                >
                  English
                </button>
              </li>
            </ul>
          )}
        </div>
        <button
          aria-label="Открыть меню"
          onClick={()=> dispatch(toggleMenuList())}
          aria-expanded="false"
          className={`btnMenuList-1 btnMenuList-2 btnMenuList-3 justForBtn ${
            isOpenMenu ? "active-menuBar" : ""
          }`}
        >
          <span className="btnOff">Открыть меню</span>
        </button>
        {width > 1279 && <>{menuBar_1}</>}
      </div>
      <div className={`headerNav-1 ${isOpenMenu ? "headerNav-3" : "headerNav-2"}`}>
        <div className="blockNav-1 blockNav-2">
          <div className="btn-change-light-1">
              <input type="checkbox" className="btnOff" id="desktopToggle" onClick={() =>{
                dispatch(toggleLightSide());
                dispatch(toggleChangeBackground());
              }}/>
              <label htmlFor="desktopToggle" className="btnLabelChange">
                <div className="btnChange-1">
                  <div className={`btnChange-circle ${colorOfBody === 'light-theme' ? 'btnChange-pos-1' : 'btnChange-pos-2'}`}></div>
                </div>
                <span className="btnChangeText">{colorOfBody}</span>
              </label>
          </div>
          <nav className={`navMenu-1  ${isOpenMenu ? "navMenu-2" : "active-menubar-1"}`}>
            {menuFooter.map((o) => (
              <Link key={o.id} to={o.href} className="typeOfLink sizeOfLink" onClick={()=> dispatch(toggleMenuList())}>{t(o.txt)}
                {o.id===5 ? <span className="typeLink-1 sizeOfLink-1 ChVisible" key={o.id}>{t(o.after_txt)}</span> : ''}
              </Link>
            ))}
          </nav>
          <div
          className="btn-change-lang-3 btn-change-lang-4"
          onClick={() => dispatch(toggleLangList())}
        >
          <button
            className={`${menubarLang === 'ru' ? `btnLangMobile` : `btnLangMobile-3`} btnLangMobile-2 justForBtn`}
            type="button"
            aria-expanded="true"
          >
            <span className="LangMobileTxt">{langMobileTxt}</span>
            <div className={`arrowToBot ${isOpen ? '' : `arrowToBot-2`}`}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none" className="arrowImg" data-src="/v2/static/icons/arrow.svg" xlink="http://www.w3.org/1999/xlink">
                  <path d="M11.0951 13.75H6.9204L0 0.25L4.00429 0.25L8.99225 10.3545L13.9802 0.25L18 0.25L11.0951 13.75Z"></path>
                </svg>
              </div>
            </div>
          </button>
          <div style={{overflow: `hidden`, height: `${isOpen ? '160px' : `0px`}`}}>
            <div>
            {isOpen  && (
            <ul className="lang-pos-3 lang-type lang-pos-4">
              <li>
                <button
                  className={`${menubarLang === 'ru' ? 'active-lang-btn' : `lang-btn`} lang-btn-size justForBtn`}
                  type="button"
                  value="ru"
                  onClick={() => {
                    changeLang('ru');
                    dispatch(toggleLangChange(1));
                  }}
                >
                  Русский
                </button>
              </li>
              <li>
                <button
                  className={`${menubarLang === 'en' ? 'active-lang-btn' : `lang-btn`} lang-btn-size justForBtn`}
                  type="button"
                  value="en"
                  onClick={() => {
                    changeLang('en');
                    dispatch(toggleLangChange(2));
                  }}
                >
                  English
                </button>
              </li>
            </ul>
          )}
            </div>
          </div>
        </div>
          <div className={`menuFooter-1 ${isOpenMenu ? "menuFooter-2" : ""} blockNav-2`}>
            <div className="icons-1 icons-2">
              {icons.map((o) => (
                <a key={o.id} href={o.href} className={`linkIcon-1 linkIcon-2 linkIcon-3 linkIcon-4 linkIcon-5-${o.p}`}>
                  <span className="btnOff">{o.spanTxt}</span>
                  <div>
                    <div>
                      <img src={o.href_img} alt={o.alt} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
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
            <div
          className="btnChangeLang-Tab btnChangeLang-Tab-2"
          onClick={() => dispatch(toggleLangList())}
        >
          <button
            className={`btnLangCircle ${menubarLang === 'en' ? `btnLangCircle-2` : `btnLangCircle-3`} justForBtn`}
            type="button"
            aria-expanded="true"
          >
            <span className="btnOff">Change language</span>
          </button>
          {isOpen && (
            <ul className="btnLangTab btnLangTab-2 btnLangTab-3">
              <li>
                <button
                  className={`${menubarLang === 'ru' ? 'active-lang-btn' : `lang-btn`} lang-btn-size justForBtn`}
                  type="button"
                  value="ru"
                  onClick={() => {
                    changeLang('ru');
                    dispatch(toggleLangChange(1));
                  }}
                >
                  Русский
                </button>
              </li>
              <li>
                <button
                  className={`${menubarLang === 'en' ? 'active-lang-btn' : `lang-btn`} lang-btn-size justForBtn`}
                  type="button"
                  value="en"
                  onClick={() => {
                    changeLang('en');
                    dispatch(toggleLangChange(2));
                  }}
                >
                  English
                </button>
              </li>
            </ul>
          )}
        </div>
          </div>
        </div>
      </div>
      {width < 1279 && <>{menuBar_1}</>}
    </header>
  );
}

export default Header;
