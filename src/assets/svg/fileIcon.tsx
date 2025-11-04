type Props = {
  active?: boolean;
  tooltipId?: string;
};

const FileIcon = ({ active, tooltipId }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-tooltip-id={tooltipId}
    >
      <path
        d="M5.00016 18.3333C4.55814 18.3333 4.13421 18.1577 3.82165 17.8451C3.50909 17.5326 3.3335 17.1087 3.3335 16.6666V3.3333C3.3335 2.89127 3.50909 2.46734 3.82165 2.15478C4.13421 1.84222 4.55814 1.66663 5.00016 1.66663H11.6668C11.9306 1.6662 12.1919 1.71796 12.4356 1.81894C12.6793 1.91991 12.9006 2.06809 13.0868 2.25496L16.0768 5.24496C16.2642 5.43122 16.4128 5.65275 16.5141 5.89676C16.6153 6.14078 16.6673 6.40244 16.6668 6.66663V16.6666C16.6668 17.1087 16.4912 17.5326 16.1787 17.8451C15.8661 18.1577 15.4422 18.3333 15.0002 18.3333H5.00016Z"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6665 1.66663V5.83329C11.6665 6.05431 11.7543 6.26627 11.9106 6.42255C12.0669 6.57883 12.2788 6.66663 12.4998 6.66663H16.6665"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33317 7.5H6.6665"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3332 10.8334H6.6665"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3332 14.1666H6.6665"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FileIcon;
