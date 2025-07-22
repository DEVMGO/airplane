const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="30" height="12" viewBox="0 0 20 10" fill="none" >
      <path
        d="M4.75 8.75L1 5M1 5L4.75 1.25M1 5H19"
        stroke={props.stroke ? props.stroke : "#9ea5b1"}
        strokeWidth={props.strokeWidth ? props.strokeWidth : "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
