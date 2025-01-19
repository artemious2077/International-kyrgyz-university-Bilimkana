export const LeftArrowIcon = ({width, height, color  }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 46 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width="45"
                height="43"
                rx="6"
                transform="matrix(1 0 0 -1 0.5 43)"
                fill={color}
            />
            <path
                d="M23.3296 30L14.6989 21.7616L23.3296 13.5232"
                stroke="black"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.7001 21.7617H31.5"
                stroke="black"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}