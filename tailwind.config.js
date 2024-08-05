module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        'portraitt': '375px',
        'step01': '490px',
        'step1': '590px',
        'step2': '750px',
        'step3': '900px',
        '1090xl': '1090px',
        '1130px': '1130px',
        '3xl': '1300px',

      },
      backgroundImage: {
        'full-screen': "url('../assets/full-screen.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-gradient': 'linear-gradient(-90deg, #F99C04 0%, #000000 100%)',
        'portrait1': "url('../assets/portrait1.png')",
        'portrait2': "url('../assets/full-screen.png')",
        'checked': "url('../assets/info.svg'), rgb(255, 255, 255) ",
        "lines" : "url('/src/assets/lines.svg')",
        'proposition-gradient': 'linear-gradient(90deg, rgb(67, 67, 67), rgb(0, 0, 0) 100%)',
        "ellipse" : 'radial-gradient(50% 50% at 50% 50%, rgba(245, 160, 32, 0.3) 18%, rgba(0, 0, 0, 0.3) 100%)',
        "lines1" : "url('/src/assets/lines1.svg')",
        "lines2" : "url('/src/assets/lines1.svg')",
        "mobile-lines" : "url('/src/assets/mobileLines.svg')",
        'add-map': "url('/src/assets/addMap.svg')",
        "linerrr" : "url('/src/assets/linerr.svg')",
        "lgFull": "gradient(linear, 270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 90.86%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        'girl': "url('/src/assets/girl.svg')",
        "lg-full-screen" : "url('/src/assets/lgFull.svg')",
        "linesMob" : "url('/src/assets/linesMob.svg')",
        "linesMob2" : "url('/src/assets/linesMob2.svg')",

      },
      filter: {
        'blur-200': 'blur(200px)',
      },
      backgroundColor: {
        'proposition-button': 'rgb(38, 37, 37)',
        "blackBg" : "rgb(10, 10, 10)",
        "ellipse-black" : 'rgba(0, 0, 0, 0.85)',
        
      },
      colors: {
        blackBg : "rgb(10, 10, 10)",
        customOrange: 'rgb(249, 156, 4)',
        customBrown: 'rgb(67, 44, 9)',
        customGray: 'rgb(213, 213, 213)',
        propositionBorder: "  rgb(245, 160, 32)",
        borderButton: "rgba(255, 255, 255, 0.4)",
        partner: "rgb(172, 170, 170)",
        extra: "rgb(192, 192, 192)"
      },
    },
    
    fontSize: {
      title: ['32px', '41px'],
      header: ['42px', '53px']
    },
    fontFamily: {
      daysOne: ['DaysOne'], 
      jura: ['Jura'], 
      workSans: ['WorkSans'], 
      workSansB: ['WorkSansB'], 
      karla: ['Karla'],
      franclin: ['franclin'],
      rubik: ['Rubik'], 
    }
  },
  plugins: [],
};
