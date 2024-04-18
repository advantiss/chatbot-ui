import { FC } from "react"

interface ChatbotUISVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const ChatbotUISVG: FC<ChatbotUISVGProps> = ({ theme, scale = 1 }) => {
  return (
    <svg
      width={189 * scale}
      height={194 * scale}
      viewBox="0 0 189 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="180"
        height="180"
        fill={`${theme === "dark" ? "none" : "#fff"}`}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.9967 79.8177L79.8173 33.9971C85.4408 28.3736 94.5584 28.3736 100.182 33.9971L128.285 62.1H105.863L99.9649 52.1626C99.3164 51.0699 98.1398 50.4 96.8691 50.4L83.0587 50.4C81.783 50.4 80.6025 51.0751 79.9557 52.1747L73.0734 63.8747C72.4107 65.0013 72.4107 66.3986 73.0734 67.5253L79.9557 79.2253C80.6025 80.3248 81.783 81 83.0587 81H96.8691C98.1398 81 99.3164 80.3301 99.9649 79.2374L105.863 69.3H135.485L146.003 79.8177C151.626 85.4412 151.626 94.5588 146.003 100.182L100.182 146.003C94.5584 151.626 85.4408 151.626 79.8173 146.003L51.7144 117.9H74.1365L80.0347 127.837C80.6832 128.93 81.8598 129.6 83.1304 129.6H96.9409C98.2166 129.6 99.397 128.925 100.044 127.825L106.926 116.125C107.589 114.999 107.589 113.601 106.926 112.475L100.044 100.775C99.397 99.6751 98.2166 99 96.9409 99H83.1304C81.8598 99 80.6832 99.6699 80.0346 100.763L74.1366 110.7H44.5144L33.9967 100.182C28.3732 94.5588 28.3732 85.4412 33.9967 79.8177ZM28.9056 105.273C20.4703 96.8382 20.4703 83.1618 28.9056 74.7265L74.7261 28.906C83.1615 20.4706 96.8378 20.4706 105.273 28.906L151.094 74.7265C159.529 83.1618 159.529 96.8382 151.094 105.273L105.273 151.094C96.8378 159.529 83.1615 159.529 74.7261 151.094L28.9056 105.273ZM108.756 102.625L103.447 93.6L78.3288 93.6L72.9649 102.637C72.3164 103.73 71.1398 104.4 69.8691 104.4H56.0587C54.783 104.4 53.6025 103.725 52.9557 102.625L46.0734 90.9253C45.4107 89.7986 45.4107 88.4013 46.0734 87.2747L52.9557 75.5747C53.6025 74.4751 54.783 73.8 56.0587 73.8H69.8691C71.1398 73.8 72.3164 74.4699 72.9649 75.5626L79.3972 86.4H102.388L108.756 75.5747C109.403 74.4751 110.583 73.8 111.859 73.8H125.669C126.94 73.8 128.116 74.4699 128.765 75.5626L135.709 87.2626C136.381 88.3953 136.381 89.8047 135.709 90.9374L128.765 102.637C128.116 103.73 126.94 104.4 125.669 104.4H111.859C110.583 104.4 109.403 103.725 108.756 102.625ZM128.427 89.1L123.62 81H113.918L109.153 89.1L113.918 97.2H123.62L128.427 89.1ZM67.8195 81L72.627 89.1L67.8195 97.2H58.1177L53.353 89.1L58.1177 81H67.8195Z"
        fill={`${theme === "dark" ? "#fff" : "#0a0a0a"}`}
      />
    </svg>
  )
}
