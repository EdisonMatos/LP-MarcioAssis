import { Link } from "react-scroll";
import { Phone } from "lucide-react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content, { infos } from "../../content/content";
import IconButton from "../interactives/IconButton";
import imgAppStore from "../../assets/imgs/hero/appStore.png";
import imgGooglePlay from "../../assets/imgs/hero/googlePlay.png";
import SectionArea from "../sectionElements/SectionArea.jsx";
import SectionWrapper from "../sectionElements/SectionWrapper.jsx";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { FaWhatsapp } from "react-icons/fa";
import { CalendarCheck2 } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { classNames } from "primereact/utils";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function FooterSocial({ LightMode, addres, obs }) {
  return (
    <footer
      className={
        LightMode
          ? "black"
          : "bg-gradient-to-b from-bgSectionDark to-black full gap-y-[42px] text-white font-secondFont text-left text-paragraph4 flex flex-col justify-between items-center bg-cover bg-center bg-no-repeat"
      }
    >
      <SectionArea paddingtop={true} paddingbot={false} className="pb-[23px]">
        <SectionWrapper className="gap-[42px]">
          <div className=" w-full max-w-[1215px] flex flex-col gap-y-[80px] desktop1:flex-row desktop1:justify-between">
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px] text-paragraph3">
              <MotionDivDownToUp>
                <div className="h-[115px] flex justify-start items-center">
                  <img
                    src={content.texts.navbar.logo.img}
                    alt={content.texts.navbar.logo.alt}
                    className="max-h-[88px] w-auto  p-[12px]"
                    // className="max-h-[88px] w-auto bg-white p-[12px]"
                  ></img>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <FaWhatsapp size={24} color={LightMode ? "black" : "white"} />
                  <a
                    href={whatsappContactLink}
                    target="_blank"
                    className="hover:underline"
                  >
                    {content.texts.infos.phone}
                  </a>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <Mail />

                  <p className="text-paragraph2">{content.texts.infos.email}</p>
                </div>
              </MotionDivDownToUp>
              {addres && (
                <MotionDivDownToUp>
                  <div className="flex full gap-x-[12px] items-center opacity-90">
                    <div>
                      <MapPin />
                    </div>
                    <p>{content.texts.infos.adress}</p>
                  </div>
                </MotionDivDownToUp>
              )}

              {/* EXPEDIENTE */}
              <MotionDivDownToUp>
                <div className="flex full gap-x-[12px] items-center opacity-90">
                  <div>
                    <CalendarCheck2 />
                  </div>
                  <p>{content.texts.infos.footerexpediente}</p>
                </div>
              </MotionDivDownToUp>

              {/* Msg de observação */}

              {obs && (
                <MotionDivDownToUp>
                  {" "}
                  <div className="flex full gap-x-[12px] items-center opacity-90">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-clock"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>

                    <p>{content.texts.infos.obsFooter}</p>
                  </div>
                </MotionDivDownToUp>
              )}
            </div>
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <MotionDivDownToUp>
                <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
                  {content.texts.footer.midSectionName}
                </h1>
              </MotionDivDownToUp>
              {/* Texto footer */}
              <MotionDivDownToUp>
                <p className="opacity-90">{content.texts.footer.footerText}</p>
              </MotionDivDownToUp>
              {/* <MotionDivDownToUp>
                <p className="font-bold mt-[32px] mb-[16px]">
                  Nos encontre no Google Maps
                </p>
                <div className="opacity-90">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31496.286939401998!2d-49.4966658!3d-16.6489271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e67f49e245171%3A0xe8acb6a48ae5cc5e!2sM%C3%A1rcio%20Assis%20Advogados!5e1!3m2!1spt-BR!2sbr!4v1733161783119!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </MotionDivDownToUp> */}
              {/* Botões de download */}
              {/* <p className="opacity-90">Baixe nosso app:</p>
              <div className="invert">
                {" "}
                <div className="flex flex-col items-start gap-[10px]">
                  <a
                    href="#"
                    target="_blank"
                    className="transition hover:scale-110"
                  >
                    <img
                      src={imgAppStore}
                      alt="Botão para a App Store"
                      className=""
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="transition hover:scale-110"
                  >
                    <img
                      src={imgGooglePlay}
                      alt="Botão para a Google Play"
                      className=""
                    />
                  </a>
                </div>
              </div> */}

              {/* Ícones redes sociais */}
              <MotionDivDownToUp>
                <p className="opacity-90">{content.texts.footerSocialText}</p>
                <div className="mt-2 opacity-90">
                  {" "}
                  <div className="flex gap-[10px] items-center">
                    {/* Instagram icon */}

                    <a
                      href={content.texts.links.instagram}
                      target="_blank"
                      aria-label="Link para o Instagram"
                    >
                      <IconButton
                        ariaLabel="Botão para o Instagram"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill=""
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-instagram"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        }
                      />
                    </a>

                    {/* Instagram icon */}

                    <a
                      href={content.texts.links.tiktok}
                      target="_blank"
                      aria-label="Link para o TikTok"
                    >
                      <IconButton
                        ariaLabel="Botão para o TikTok"
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                          >
                            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                          </svg>
                        }
                      />
                    </a>
                    {/* <a
                      href={content.texts.infos.linkedInProfile}
                      target="_blank"
                    >
                      <IconButton
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill=""
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-linkedin"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        }
                      />
                    </a> */}
                  </div>
                </div>
              </MotionDivDownToUp>
            </div>
            <div className="flex flex-col gap-y-[16px] desktop1:w-[290px]">
              <MotionDivDownToUp>
                <h1 className="font-medium font-mainFont text-title2 desktop1:text-title5 desktop1:h-[115px] flex items-center">
                  {content.texts.infos.footerNavegacaoText}
                </h1>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex justify-between full opacity-90">
                  <div className="w-[46%] flex flex-col gap-y-[16px]">
                    <div className="h-[36px] hover:underline">
                      <Link
                        to="home"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        href="#"
                      >
                        <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                          {content.texts.navbar.menuItems[0]}
                        </span>
                      </Link>
                    </div>
                    <div className="h-[36px] hover:underline">
                      <Link
                        to="about"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        href="#"
                      >
                        <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                          {content.texts.navbar.menuItems[2]}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className=" w-[46%] flex flex-col gap-y-[16px]">
                    <div className="h-[36px] hover:underline">
                      <Link
                        to="service"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-20}
                        href="#"
                      >
                        <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                          {content.texts.navbar.menuItems[1]}
                        </span>
                      </Link>
                    </div>
                    <div className="h-[36px] hover:underline">
                      <Link
                        to="faq"
                        className="cursor-pointer"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        href="#"
                      >
                        <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                          {content.texts.navbar.menuItems[3]}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </MotionDivDownToUp>
            </div>
          </div>
          <div className="hidden w-[88%] max-w-[1110px] bg-secondary"></div>
          <div className="text-center w-full phone2:w-[90%] max-w-[1110px] flex flex-col mb-[48px] phone2:mb-[80px] tablet1:mb-[27px]">
            <p className="w-full opacity-75">
              {content.texts.footer.copyrightLine}
            </p>
            <p>
              <a
                className="transition hover:underline"
                target="_blank"
                href="https://www.paperstreet.com.br"
              >
                {" "}
                {content.texts.infos.footerDivulgacaoText}
              </a>
            </p>
          </div>
        </SectionWrapper>
      </SectionArea>
    </footer>
  );
}
