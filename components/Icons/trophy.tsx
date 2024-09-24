import React from "react";
import Svg, { Path, G } from "react-native-svg";

interface TrophyIconProps {
  fill?: string;
}

const TrophyIcon = ({ fill }: TrophyIconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill={fill}>
      <Path
        d="M12.1499 16.5V18.6"
        stroke="#BFBFBF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.1499 22H17.1499V21C17.1499 19.9 16.2499 19 15.1499 19H9.1499C8.0499 19 7.1499 19.9 7.1499 21V22V22Z"
        stroke="#BFBFBF"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <Path
        d="M6.1499 22H18.1499"
        stroke="#BFBFBF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
        stroke="#BFBFBF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.47004 11.6501C4.72004 11.4101 4.06004 10.9701 3.54004 10.4501C2.64004 9.4501 2.04004 8.2501 2.04004 6.8501C2.04004 5.4501 3.14004 4.3501 4.54004 4.3501H5.19004C4.99004 4.8101 4.89004 5.3201 4.89004 5.8501V8.8501C4.89004 9.8501 5.10004 10.7901 5.47004 11.6501Z"
        stroke="#BFBFBF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.5298 11.6501C19.2798 11.4101 19.9398 10.9701 20.4598 10.4501C21.3598 9.4501 21.9598 8.2501 21.9598 6.8501C21.9598 5.4501 20.8598 4.3501 19.4598 4.3501H18.8098C19.0098 4.8101 19.1098 5.3201 19.1098 5.8501V8.8501C19.1098 9.8501 18.8998 10.7901 18.5298 11.6501Z"
        stroke="#BFBFBF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default TrophyIcon;
