const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width={props.width ? props.width : "24"}
      height={props.height ? props.height : "24"}
      className={props.className ? props.className : ""}
      viewBox="0 0 24 24"
    >
      <path opacity="0.4" d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z" />
      <path d="M5.56994 8.12L2.21994 11.47C1.92994 11.76 1.92994 12.24 2.21994 12.53L5.56994 15.88C5.85994 16.17 6.33994 16.17 6.62994 15.88C6.91994 15.59 6.91994 15.11 6.62994 14.82L4.55994 12.75H15.2499C15.6599 12.75 15.9999 12.41 15.9999 12C15.9999 11.59 15.6599 11.25 15.2499 11.25H4.55994L6.62994 9.18C6.77994 9.03 6.84994 8.84 6.84994 8.65C6.84994 8.46 6.77994 8.26 6.62994 8.12C6.33994 7.82 5.86994 7.82 5.56994 8.12Z" />
    </svg>

  );
};

export default LogoutIcon;
