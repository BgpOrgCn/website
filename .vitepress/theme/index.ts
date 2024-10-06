import Theme from 'vitepress/theme'
import './style/var.css'
import { onMounted, onBeforeUnmount } from 'vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    onMounted(() => {
      let hue = 0;
      const speed = 60; // 调整速度，值越大越慢

      function updateGradient() {
        hue = (hue + 1) % 360;
        const gradient = `linear-gradient(to left, hsl(${hue}, 50%, 50%), hsl(${hue + 30}, 50%, 50%), hsl(${hue + 60}, 50%, 50%))`;
        document.documentElement.style.setProperty('--vp-home-hero-name-background', gradient);
        
        setTimeout(updateGradient, speed); // 控制更新的速度
      }

      updateGradient();
    });

    onBeforeUnmount(() => {
    });
  }
}