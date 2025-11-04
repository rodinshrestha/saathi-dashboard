type Props = {
  active?: boolean;
  tooltipId?: string;
};

const ListIcon = ({ active, tooltipId }: Props) => {
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
        d="M2.5 4.16663H2.50833"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10H2.50833"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15.8334H2.50833"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6665 4.16663H17.4998"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6665 10H17.4998"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6665 15.8334H17.4998"
        stroke={active ? "#fff" : "#717182"}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ListIcon;
