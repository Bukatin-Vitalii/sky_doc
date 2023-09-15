<template>
  <div
    :style="[{ fontSize: `${fSize}px` }, { '--vh': `${vH}px` }]"
    :class="{
      'js-is-mobile': isMobileStatus,
      'js-is-desktop': !isMobileStatus,
    }"
  >
    <slot />
  </div>
</template>

<script>
const sizesConfig = {
  desktop: {
    width: 1920,
    height: 1080,
    minWidth: 1080,
    minHeight: 500,
    fontSize: 16,
  },

  mobile: {
    width: 425,
    height: 668,
    minWidth: 0,
    minHeight: 0,
    fontSize: 16,
  },
};

export default {
  name: 'Resize',
  data() {
    return {
      vW: undefined,
      vH: undefined,
      orientationVertical: false,
    };
  },

  computed: {
    isMobileStatus() {
      return this.vW < sizesConfig.desktop.minWidth;
    },

    currentSizesConfig() {
      return this.isMobileStatus ? sizesConfig.mobile : sizesConfig.desktop;
    },

    fSize() {
      const config = this.currentSizesConfig;
      if (!this.vW || !this.vH) return config.fontSize;

      const horizontalRatio = Math.max(config.minWidth, this.vW) / config.width;
      const verticalRatio = Math.max(config.minHeight, this.vH) / config.height;
      const minRatio = this.isMobileStatus
        ? horizontalRatio
        : Math.min(horizontalRatio, verticalRatio);

      return config.fontSize * minRatio <= 16 ? config.fontSize * minRatio : 16;
    },
  },

  created() {
    if (process.client) {
      this.vW = window.innerWidth;
      this.vH = window.innerHeight;
    }
  },

  mounted() {
    window.addEventListener('resize', this.onResize);
  },

  methods: {
    onResize(needEmit = true) {
      this.vW = window.innerWidth || document.documentElement.clientWidth;
      this.vH = window.innerHeight || document.documentElement.clientHeight;
      //if (needEmit) this.$root.$emit('resize');
    },
  },
};
</script>
