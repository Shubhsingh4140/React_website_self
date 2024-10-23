

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '0': '0',
        'px': '1px',
        '1': '0.25rem',  // 4px
        '2': '0.5rem',   // 8px
        '3': '0.75rem',  // 12px
        '4': '1rem',     // 16px
        '5': '1.25rem',  // 20px
        '6': '1.5rem',   // 24px
        '8': '2rem',     // 32px
        '10': '2.5rem',  // 40px
        '12': '3rem',    // 48px
        '14': '3.5rem',  // 56px
        '16': '4rem',    // 64px
        '20': '5rem',    // 80px
        '24': '6rem',    // 96px
        '28': '7rem',    // 112px
        '32': '8rem',    // 128px
        '36': '9rem',    // 144px
        '40': '10rem',   // 160px
        '44': '11rem',   // 176px
        '48': '12rem',   // 192px
        '52': '13rem',   // 208px
        '56': '14rem',   // 224px
        '60': '15rem',   // 240px
        '64': '16rem',   // 256px
        '72': '18rem',   // 288px
        '80': '20rem',   // 320px
        '96': '24rem',   // 384px
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
        '200': '50rem',  // 800px
        '300': '75rem',  // 1200px
        'full': '100%',
        'screen': '100vh', // Full screen height
      },
      width: {
        '0': '0',
        'px': '1px',
        '1': '0.25rem',  // 4px
        '2': '0.5rem',   // 8px
        '3': '0.75rem',  // 12px
        '4': '1rem',     // 16px
        '5': '1.25rem',  // 20px
        '6': '1.5rem',   // 24px
        '8': '2rem',     // 32px
        '10': '2.5rem',  // 40px
        '12': '3rem',    // 48px
        '14': '3.5rem',  // 56px
        '16': '4rem',    // 64px
        '20': '5rem',    // 80px
        '24': '6rem',    // 96px
        '28': '7rem',    // 112px
        '32': '8rem',    // 128px
        '36': '9rem',    // 144px
        '40': '10rem',   // 160px
        '44': '11rem',   // 176px
        '48': '12rem',   // 192px
        '52': '13rem',   // 208px
        '56': '14rem',   // 224px
        '60': '15rem',   // 240px
        '64': '16rem',   // 256px
        '72': '18rem',   // 288px
        '80': '20rem',   // 320px
        '96': '24rem',   // 384px
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
        '200': '50rem',  // 800px
        '300': '75rem',  // 1200px
        'full': '100%',
        'screen': '100vw', },
      colors:{
        
        customBlue: 'rgb(55,175,225)',
        customYellow:'rgb(255, 254, 203)'
      }
    },
  },
  plugins: [],
}



