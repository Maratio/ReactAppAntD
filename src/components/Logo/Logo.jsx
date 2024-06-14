import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <img
        className={classes.image}
        src={
          'https://papik.pro/grafic/uploads/posts/2023-04/1681547548_papik-pro-p-turfirmi-logotip-vektor-1.png'
        }
        alt="logo"
      />
    </div>
  );
}
