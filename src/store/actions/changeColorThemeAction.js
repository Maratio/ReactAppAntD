export const changeColorThemeAction = (payload) => {
  switch (payload) {
      case "white":
          return {
              type: "colorWhite",
              payload
          };
      case "aqua":
          return {
              type: "colorAqua",
              payload
          };
      case "orange":
          return {
              type: "colorOrange",
              payload
          };
      default:
          return {
              type: "colorWhite",
              payload
          };
  }
}