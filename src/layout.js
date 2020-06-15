const header = new Vue({
  el: ".header",
  data: {
    title: "식당예약",
  },
});

const footer = new Vue({
  el: ".footer",
  data: {
    copy: `Copyright ${new Date().getFullYear()} 식당예약. All rights reserved`,
  },
});
