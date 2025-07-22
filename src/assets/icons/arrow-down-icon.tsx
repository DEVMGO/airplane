const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : "18"}
      height={props.height ? props.height : "9"}
      className={props.className ? props.className : ""}
      viewBox="0 0 18 9"
      fill="none"
    >
      <path
        d="M16.9201 0.950001L10.4001 7.47C9.63008 8.24 8.37008 8.24 7.60008 7.47L1.08008 0.950001"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
