import { useBanner } from "../contexts/BannerContext";
import styles from "../style/Banner.module.css"

function Banner() {
  const { bannerMessage, bannerType } = useBanner();

  const bannerBackgroundColor = (() => {  
    if (bannerType === 'Error') {
      return 'red'
    } else if (bannerType === 'Success') {
      return 'green'
    } else {
      return 'blue'
    }
  })

  if (!bannerMessage) return null;

  return (
    <div className={styles.banner} style={{backgroundColor: bannerBackgroundColor()}}>
      {bannerMessage}
    </div>
  );
}

export default Banner;