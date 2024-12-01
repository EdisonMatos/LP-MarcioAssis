import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";

export default function AboutInstagram() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea id="about" className="bg-bgSectionDark" paddingtop={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px]  desktop1:gap-x-[40px]  desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          {/* <img
            src={imgPhone}
            className="desktop1:bg-center bg-no-repeat bg-cover h-[450px] tablet1:h-[800px] desktop1:h-[760px] rounded-2xl"
          ></img> */}
          <img
            src={content.texts.about.aboutSocial.img.img}
            alt={content.texts.about.aboutSocial.img.alt}
            className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]"
          />
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className="text-center"
              miniTitle={content.texts.about.aboutSocial.miniTag}
              sectionHeaderTitle={content.texts.about.aboutSocial.title}
              sectionHeaderSubtitle={content.texts.about.aboutSocial.subtitle}
              color=""
              type="article"
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="text-white text-opacity-80 mb-[48px]">
              {content.texts.about.aboutSocial.paragraph}
            </Paragraphs>
          </MotionDivDownToUp>

          {/* Início Botões das redes sociais */}

          {/* <div className=" flex flex-col gap-[16px] w-[100%] tablet1:w-[60%] desktop1:w-[80%] desktop2:w-[60%]">
            <MotionDivDownToUp>
              <Button
                label="Me siga no Instagram"
                className="w-[75%]"
                buttonLink={content.texts.infos.instagramProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <Button
                label="Me siga no Facebook"
                className="w-[75%]"
                buttonLink={content.texts.infos.facebookProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <Button
                label="Me siga no Linkedin"
                className="w-[75%]"
                buttonLink={content.texts.infos.linkedInProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
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
            </MotionDivDownToUp>


          {/* Fim Botões das redes sociais */}

          {/* Início Botão de saiba mais abrindo modal */}

          <MotionDivDownToUp>
            <Button
              label="Siga-me no Instagram"
              buttonLink={content.texts.links.instagram}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              }
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp className="mt-[18px]">
            <Button
              label="Siga-me no TikTok"
              buttonLink={content.texts.links.tiktok}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                </svg>
              }
            />
          </MotionDivDownToUp>

          {/* Fim Botão de saiba mais abrindo modal */}
        </div>
      </SectionWrapper>

      {/* Início de shape div 

      <div class="custom-shape-divider-bottom-1722451194 mt-[64px] desktop1:mt-[96px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

              Fim de shape div */}
    </SectionArea>
  );
}
