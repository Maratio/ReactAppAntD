import classes from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <img
        className={classes.image}
        src={
          'https://kartinki.pibig.info/uploads/posts/2023-04/1681984069_kartinki-pibig-info-p-kartinki-svyazannie-s-turizmom-arti-instag-33.png'
        }
        alt="logo"
      />
    </div>
  );
}
