/**
* @author      Nhatcoder
* @version     1.0.0
* @homeurl     https://github.com/nhatcoder2003/gbot-war
* @author_url     https://www.facebook.com/vuminhnhat10092003
*/
import {
  readFileSync
} from 'fs';
import cli from 'chalkercli';
import gradient from 'gradient-string';
export default () => {
  const str = `\u2591\u2588\u2580\u2588\u2591\u2588\u2591\u2591\u2591\u2588\u2580\u2588\u2591\u2588\u2591\u2588\u2591\u2588\u2580\u2588\u2591\u2588\u2580\u2584\u2591\u2588\u2580\u2588\u2591\u2580\u2588\u2580\r\n\u2591\u2588\u2580\u2588\u2591\u2588\u2591\u2591\u2591\u2588\u2580\u2580\u2591\u2588\u2580\u2588\u2591\u2588\u2580\u2588\u2591\u2588\u2580\u2584\u2591\u2588\u2591\u2588\u2591\u2591\u2588\u2591\r\n\u2591\u2580\u2591\u2580\u2591\u2580\u2580\u2580\u2591\u2580\u2591\u2591\u2591\u2580\u2591\u2580\u2591\u2580\u2591\u2580\u2591\u2580\u2580\u2591\u2591\u2580\u2580\u2580\u2591\u2591\u2580\u2591`;
  console.log(gradient.atlas(str));
  const info = cli.rainbow('⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯                                  \n•Facebook:https://www.facebook.com/profile.php?id=100094612662554\n•Github:Đéo Có \n•Phone or Zalo:phone là con má m \n•Youtube: Phèn \n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯                                  \n').stop();
  info.render();
  const frame = info.frame();
  console.log(frame+`\n`);
}
