(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{325:function(t,e,r){"use strict";r.r(e);r(36),r(49);var n={name:"WorkFormatTypeSection",props:{title:{type:String,required:!1},subtitle:{type:String,required:!1},workFormatItems:{type:Array,required:!0}}},o=(r(335),r(9)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"wrapper"},[e("div",{staticClass:"title"},[t.title?e("h2",{staticClass:"title__item"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?e("h2",{staticClass:"title__subtitle"},[t._v("( "+t._s(t.subtitle)+" )")]):t._e()]),t._v(" "),e("ul",{staticClass:"list"},t._l(t.workFormatItems,(function(r){return e("li",{key:r.id,staticClass:"list__item",staticStyle:{color:"#A2C1AF"}},[e("span",{staticClass:"list__text"},[t._v(t._s(r.description))])])})),0)])}),[],!1,null,"171902a7",null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);var n=r(325),o=r(338),d={name:"WorkFormatType",components:{WorkFormatTypeSection:n.default},data:function(){return{items:o.a}}},c=r(9),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("work-format-type-section",{attrs:{title:"Карьерное консультирование",subtitle:"онлайн-сессии 60 - 90 минут","work-format-items":t.items.career}}),t._v(" "),e("work-format-type-section",{attrs:{title:"Коучинг",subtitle:"онлайн-сессия 60 минут","work-format-items":t.items.coach}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WorkFormatTypeSection:r(325).default})},334:function(t,e,r){var content=r(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("32f6ced8",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r(334)},336:function(t,e,r){var n=r(26)(!1);n.push([t.i,".wrapper[data-v-171902a7]{margin-bottom:50px}.title[data-v-171902a7]{margin-left:40px}.title__item[data-v-171902a7]{font-size:35px;color:#a2c1af}.title__subtitle[data-v-171902a7]{font-size:20px;color:#999;color:#a2c1af}.list[data-v-171902a7]{margin-left:70px}.list__item[data-v-171902a7]{margin:20px 0;color:#a2c1af;font-size:20px}.list__text[data-v-171902a7]{font-size:20px;color:#555}@media screen and (max-width:1023px){.wrapper[data-v-171902a7]{margin-bottom:20px}.title[data-v-171902a7]{margin-left:0;text-align:center}.title__item[data-v-171902a7]{font-size:25px}.title__subtitle[data-v-171902a7]{margin-bottom:20px;font-size:20px}.list[data-v-171902a7]{width:70%;margin:auto}.list__item[data-v-171902a7]{font-size:20px}}@media screen and (max-width:767px){.title[data-v-171902a7]{margin-left:0;text-align:center}.title[data-v-171902a7],.title__item[data-v-171902a7]{font-size:25px}.list[data-v-171902a7]{width:80%}.list__item[data-v-171902a7]{font-size:16px}}",""]),t.exports=n},338:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return x}));var n=r(339),o=r.n(n),d=r(340),c=r.n(d),l=r(341),m=r.n(l),f=r(342),_=r.n(f),v={career:[{id:0,description:"Алгоритм действий: с чего начать, при смене профессии"},{id:1,description:"Определение дальнейших шагов для профессионального развития"},{id:2,description:"Анализ рынка, помощь с определением зарплатных ожиданий"},{id:3,description:"Оценка сильных и слабых сторон"},{id:4,description:"Составление эффективного резюме"},{id:5,description:"Упаковка профиля на LinkedIn и Habr Career"},{id:6,description:"Подготовка самопрезентации к собеседованию"},{id:7,description:"Тестовое интервью с HR"}],coach:[{id:0,description:"Помощь с определением своих целей и путей их достижения"},{id:1,description:"Эмоциональное и профессиональное выгорание"},{id:2,description:"Проблемы в межличностных отношениях"},{id:3,description:"Неуверенность в себе: синдром “отличника” и “самозванца”"},{id:4,description:"Боязнь публичных выступлений"},{id:5,description:"Определение истинной мотивации"},{id:6,description:"Проработка установок и ограничивающих убеждений"},{id:7,description:"Поиск внутренних ресурсов"},{id:8,description:"Повышение личной эффективности и многое другое"}]},x=[{id:0,title:"Работа с резюме",subtitle:"онлайн-сессия 60 минут",image:o.a,tags:[{id:0,description:"Оформление существующего или создание с нуля нового резюме"},{id:1,description:"Заполнение всех необходимых блоков, включая достижения"},{id:2,description:"Составление сопроводительного письма"},{id:3,description:"Бонус: чек-лист “эффективное резюме”"}],price:"1500"},{id:2,title:"Карьерное консультирование",subtitle:"онлайн-сессия 60 - 90 минут",image:c.a,tags:[{id:0,description:"Ответы на ваши вопросы по поиску работы"},{id:1,description:"Анализ рынка"},{id:2,description:"Определение зарплатных ожиданий"},{id:3,description:"Помощь с определением перспектив карьерного развития"},{id:4,description:"Определение ваших дальнейших шагов на рынке труда"},{id:5,description:"Разбор вопросов, задаваемых на собеседованиях"},{id:6,description:"Формирование самопрезентации"},{id:7,description:"Бонус: сопровождение в чате в течение 3х недель после консультации (можно задавать вопросы)"}],price:"3000"},{id:3,title:"Коуч-сессии",subtitle:"онлайн-сессия 60 минут",image:m.a,tags:[{id:0,description:"1 коуч сессия позволяет поработать над одним запросом"},{id:1,description:"описание запроса"},{id:2,description:"определение успешного результата сессии"},{id:3,description:"работа с инструментами коучинга, направленная на достижения вашей цели"}],price:"3000"},{id:4,title:"Пакетные сессии",subtitle:"",image:_.a,tags:null,pack:[{id:0,description:["Карьерная консультация + работа с резюме","Бонус: сопровождение 3 недели в чате после консультации","Бонус: чек-лист эффективное резюме, который можно использовать в будущем"],price:"3500"},{id:1,description:["Пакет из 3х коуч сессий","Прописываем план работы на 3 встречи"],price:"7000"},{id:2,description:["Пакет из 5 коуч сессий","Прописываем план работы на 5 встреч"],price:"12000"}],price:"15000"}]},339:function(t,e,r){t.exports=r.p+"img/cv.41150a7.jpg"},340:function(t,e,r){t.exports=r.p+"img/career.088ad65.jpg"},341:function(t,e,r){t.exports=r.p+"img/coach.afeda6c.jpg"},342:function(t,e,r){t.exports=r.p+"img/pack.685c5a2.jpg"}}]);