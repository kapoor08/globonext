import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import benefitOneImg from "../../public/benefit-one.png";

export const Benefits = ({ data, imgPos }) => {
  const iconMap = {
    FaceSmileIcon: <FaceSmileIcon />,
    ChartBarSquareIcon: <ChartBarSquareIcon />,
    CursorArrowRaysIcon: <CursorArrowRaysIcon />,
    benefitOneImg: (
      <Image src={benefitOneImg.src} alt="Benefit" width={200} height={200} />
    ),
  };

  const t = useTranslations("Data");

  const bulletKeys = ["point1", "point2", "point3"];

  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          <Image
            src={data.image}
            width={521}
            height={521}
            alt="Benefits"
            className={"object-cover"}
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {t("title")}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {t("desc")}
            </p>
          </div>

          <div className="w-full mt-5">
            {bulletKeys.map((key) => {
              const title = t(`bullets.${key}.title`);
              const desc = t(`bullets.${key}.desc`);
              const iconName = t(`bullets.${key}.icon`);
              const icon = iconMap[iconName];

              if (!icon) {
                return null;
              }

              return (
                <Benefit key={key} title={title} icon={icon}>
                  {desc}
                </Benefit>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

function Benefit(props) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
