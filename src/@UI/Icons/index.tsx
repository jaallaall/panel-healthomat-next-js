import styled from "@emotion/styled";
import BellOn from "../../../public/static/svgs/light/bell-on.svg";
import ChevronDown from "../../../public/static/svgs/light/chevron-down.svg";
import ChevronLeft from "../../../public/static/svgs/light/chevron-left.svg";
import ChevronRight from "../../../public/static/svgs/light/chevron-right.svg";
import ChevronUp from "../../../public/static/svgs/light/chevron-up.svg";
import Children from "../../../public/static/svgs/light/children.svg";
import City from "../../../public/static/svgs/light/city.svg";
import Display from "../../../public/static/svgs/light/display.svg";
import Flask from "../../../public/static/svgs/light/flask.svg";
import HeartPulse from "../../../public/static/svgs/light/heart-pulse.svg";
import Doctor from "../../../public/static/svgs/light/user-doctor.svg";
import Bars from "../../../public/static/svgs/light/bars.svg";

const SpanStyled = styled("span")<{ size: number }>(({ size }) => ({
  svg: {
    width: size,
    height: size,
  },
}));

type IconComponentProps = {
  name: string;
  className?: string;
  size?: number;
};

interface IconTypes {
  [key: string]: ReactSVGComponent;
}

const iconTypes: IconTypes = {
  display: Display,
  doctor: Doctor,
  children: Children,
  bellOn: BellOn,
  city: City,
  flask: Flask,
  heartPulse: HeartPulse,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  bars: Bars,
};

const Icons = ({
  name,
  className,
  size = 18,
  ...props
}: IconComponentProps) => {
  const Icon = iconTypes[name];
  return (
    <SpanStyled
      className={`${className} inline-block leading-normal`}
      size={size}
    >
      <Icon {...props} className="fill-current" />
    </SpanStyled>
  );
};

export default Icons;
