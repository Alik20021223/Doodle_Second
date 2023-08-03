import React from "react";
import { useSelector } from "react-redux";
import { useResize } from "../../store/width/useWidthSize";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Footer() {
  const colorOfBody = useSelector(state => state.menuBar.colorOfBody)
  const icons = useSelector(state => state.menuBar.icons)
  const menuFooter = useSelector(state => state.menuBar.menuFooter)
  const svgDoodleWhite = useSelector(state => state.menuBar.svgDoodleWhite)
  const svgDoodleBlack = useSelector(state => state.menuBar.svgDoodleBlack)
  const svgContent = colorOfBody === 'light-theme' ? svgDoodleBlack : svgDoodleWhite;
  const { width } = useResize();

  const {t} = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footerBlock-1">
            <a href="/" className="logoFooter logoFooter-2">
                <span className="logoFooter-text">
                  {svgContent && <div dangerouslySetInnerHTML={{ __html: svgContent }} />}
                    <div className="logoFooter-dot"></div>
                </span>
            </a>
            <div className="iconsFooter">
            <div className="icons-3">
              {icons.map((o) => (
                <a key={o.id} href={o.href} className={`linkIcon-6 linkIcon-7 linkIcon-3 linkIcon-4 linkIcon-5-${o.p}`}>
                  <span className="btnOff">{o.spanTxt}</span>
                  <div>
                    <div>
                      <img src={colorOfBody === 'light-theme' ? o.hrefWhiteImg : o.href_img} alt={o.alt} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            </div>
            <div className="blockFooter">
              {width > 768 && (
                <div className="typeFooter">
                  {menuFooter.map((o) => (
                    <>
                    <a key={o.id} href={o.href} className="typeOfFooter-1 typeOfFooter-2">{t(o.txt)}</a>
                    <span key={o.txt} className="slashFooter" >|</span>
                    </>
                  ))}
                </div>
                )}
                {width < 757 && (
                  <>
                  <div className="typeFooter">
                    {menuFooter.map((o) => (
                      <>
                      {o.id < 4 && <a key={o.id} href={o.href} className="typeOfFooter-1 typeOfFooter-2">{t(o.txt)}</a>}
                        {(o.id < 4 && o.id !== 3) && <span key={o.txt} className="slashFooter" >|</span>}
                      </>
                    ))}
                  </div>
                <div className="typeFooter">
                  {menuFooter.map((o) => (
                    <>
                    {o.id > 3 && <a key={o.id} href={o.href} className="typeOfFooter-1 typeOfFooter-2">{t(o.txt)}</a>}
                      {(o.id > 3 && o.id !== 6) && <span key={o.txt} className="slashFooter" >|</span>}
                    </>
                  ))}
                </div>
                  </>
                )}
            </div>
            <span className="allLow">{t("AllOk")}</span>
          </div>
        </div>
        <div className="footer-inner">
            <div className="footerBlock-2">
                <div>
                    <a href="mailto:alisher20021223@icloud.com" className="linkToMyEmail-1 linkToMyEmail-2 linkToMyEmail-3">
                        alisher20021223@icloud.com
                    </a>
                    <a href="/" className="linkToMyEmail-1 linkToMyEmail-2 linkToMyEmail-4">
                        {t("Presentation")}
                    </a>
                </div>
                <div>
                    <a className="politicFooter" href="/">
                        <span className="txtPoliticFooter">{t("privacy_1")}</span>
                    </a>
                </div>
                {width < 757 && (
                  <div className="mobPolitic">
                    <a className="politicFooter-1" href="/">
                        <span className="txtPoliticFooter">{t("privacy_1")}</span>
                    </a>
                    <span className="allLow-1">{t("AllOk")}</span>
                  </div>
                )}
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
