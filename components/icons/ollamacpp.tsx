import { FC } from "react"

interface OllamaCppSVGProps {
  height?: number
  width?: number
  className?: string
}

export const OllamaCppSVG: FC<OllamaCppSVGProps> = ({
  height = 60,
  width = 60,
  className
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0879 28.3796L28.3797 12.0879C30.3792 10.0884 33.621 10.0884 35.6204 12.0879L45.6126 22.08H37.6402L35.5431 18.5467C35.3125 18.1582 34.8941 17.92 34.4423 17.92H29.532C29.0784 17.92 28.6587 18.1601 28.4287 18.551L25.9816 22.711C25.746 23.1116 25.746 23.6084 25.9816 24.009L28.4287 28.169C28.6587 28.5599 29.0784 28.8 29.532 28.8L34.4423 28.8C34.8941 28.8 35.3125 28.5618 35.5431 28.1733L37.6402 24.64L48.1726 24.64L51.9122 28.3796C53.9117 30.3791 53.9117 33.6209 51.9122 35.6204L35.6204 51.9121C33.621 53.9116 30.3792 53.9116 28.3797 51.9121L18.3875 41.92H26.3598L28.4569 45.4533C28.6875 45.8418 29.1059 46.08 29.5576 46.08H34.468C34.9216 46.08 35.3413 45.84 35.5713 45.449L38.0184 41.289C38.254 40.8884 38.254 40.3916 38.0184 39.991L35.5713 35.831C35.3413 35.4401 34.9216 35.2 34.468 35.2H29.5576C29.1059 35.2 28.6875 35.4382 28.4569 35.8267L26.3598 39.36H15.8275L12.0879 35.6204C10.0884 33.6209 10.0884 30.3791 12.0879 28.3796ZM10.2777 37.4306C7.27851 34.4314 7.27851 29.5687 10.2777 26.5694L26.5695 10.2777C29.5687 7.27845 34.4314 7.27845 37.4306 10.2777L53.7224 26.5694C56.7216 29.5687 56.7216 34.4314 53.7224 37.4306L37.4306 53.7223C34.4314 56.7216 29.5687 56.7216 26.5695 53.7223L10.2777 37.4306ZM38.6689 36.489L36.7813 33.28H27.8506L25.9435 36.4933C25.7129 36.8818 25.2945 37.12 24.8427 37.12L19.9324 37.12C19.4788 37.12 19.0591 36.88 18.8291 36.489L16.382 32.329C16.1464 31.9284 16.1464 31.4316 16.382 31.031L18.8291 26.871C19.0591 26.4801 19.4788 26.24 19.9324 26.24H24.8427C25.2945 26.24 25.7129 26.4782 25.9435 26.8667L28.2305 30.72H36.4048L38.6689 26.871C38.8989 26.4801 39.3186 26.24 39.7722 26.24H44.6826C45.1344 26.24 45.5527 26.4782 45.7833 26.8667L48.2524 31.0267C48.4914 31.4294 48.4914 31.9306 48.2524 32.3333L45.7833 36.4933C45.5527 36.8818 45.1344 37.12 44.6826 37.12L39.7722 37.12C39.3186 37.12 38.8989 36.88 38.6689 36.489ZM45.6632 31.68L43.9538 28.8L40.5043 28.8L38.8102 31.68L40.5043 34.56H43.9538L45.6632 31.68ZM24.114 28.8L25.8233 31.68L24.114 34.56H20.6644L18.9703 31.68L20.6644 28.8L24.114 28.8Z"
        fill="black"
      />
    </svg>
  )
}
