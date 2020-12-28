<template>
  <div id="app">

    <div class="section1">
      <div class="header">
        <div class="content">
          <p>
            Континент46
          </p>
          <p>
            <b><a href="tel:+7(961)169-39-60">+7 (961) 169-39-60</a></b>
          </p>
        </div>
      </div>
      <div class="content">
      <h1><span>Рекламно-производственная компания </span>Континент46</h1>
      <h2>Дизайн-макет <span>бесплатно</span></h2>
      <a href="tel:+7(961)169-39-60" class="button b1">Рассчитать стоимость</a>
      </div>
    </div>

    <div class="section2">
      <div class="content">
        <el-row :gutter="40">
          <el-col :md="8" :sm="8">

            <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/1.png')" alt="Ballon" width="100px" style="padding-bottom: 15px;margin: 0 auto;">
                </div>
                <h2>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</h2>
                <p class="dez_description">
                  Расскажем о технологиях и правилах размещения, подскажем, как воплотить ваши идеи в жизнь
                </p>
              </div>
            </div> 
      </el-col>
            <el-col :md="8" :sm="8">

            <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/2.png')" alt="Ballon" width="100px" style="padding-bottom: 15px;margin: 0 auto;">
                </div>
                <h2>БЕСПЛАТНЫЙ ДИЗАЙН</h2>
                <p class="dez_description">
                  Оперативно нарисуем 3 варианта дизайн-макета
                </p>
              </div>
            </div> 


          </el-col>
          <el-col :md="8" :sm="8">

           <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/3.png')" alt="Ballon" width="100px" style="padding-bottom: 15px;margin: 0 auto;">
                </div>
                <h2>БЕСПЛАТНЫЙ ВЫЕЗД СПЕЦИАЛИСТА</h2>
                <p class="dez_description">
                  На месте обсудим детали вывески, покажем образцы материалов, выполним точные замеры
                </p>
              </div>
            </div> 
          </el-col>
          <el-col :md="8" :sm="8">

            <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/4.png')" alt="Ballon" width="100px" style="padding-bottom: 15px;margin: 0 auto;">
                </div>
                <h2>АДЕКВАТНЫЕ ЦЕНЫ</h2>
                <p class="dez_description">
                  Как производитель, дадим лучшую цену и ГАРАНТИЮ!
                </p>
              </div>
            </div> 
          </el-col>

          <el-col :md="8" :sm="8">

            <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/5.png')" alt="Ballon" width="100px" style="padding-bottom: 15px;margin: 0 auto;">
                </div>
                <h2>10% СКИДКА</h2>
                <p class="dez_description">
                  Дополнительно уступим 10% при 100% предоплате счета
                </p>
              </div>
            </div> 
          </el-col>

          <el-col :md="8" :sm="8">

            <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/6.png')" alt="Ballon" width="100px" style="padding-bottom: 15px;margin: 0 auto;">
                </div>
                <h2>СОГЛАСУЕМ ВЫВЕСКУ ЗА ВАС</h2>
                <p class="dez_description">
                  Наш специалист возьмет бюрократический вопрос на себя. Вы сохраните время и нервы
                </p>
              </div>
            </div> 
          </el-col>
        
        </el-row>
      </div>
    </div> 

    <div class="section4">
      <div class="content">
        <h2>Частые вопросы</h2>
        <br>
        <br>
        <br>
        <el-row :gutter="40">

          <el-col :md="12" :sm="12">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="Сколько стоит вывеска?" name="1">
                <div>Стоимость вывески рассчитывается индивидуально. Учитывается много факторов: размеры, технологии и материалы, сложность конструкции, место и время монтажа и пр. </div>
                <div>Вы можете отправить запрос на нашу электронную почту kontinent.46@mail.ru и в кратчайшие сроки получить коммерческое предложение.</div>
              </el-collapse-item>
              <br>
              <el-collapse-item title="Нужна вывеска, установленная по правилам. Вы делаете?" name="2">
                <div>Все вывески нашего производства делаются в соответствии с Постановление Правительства Курска</div>
                <div>Наши специалисты бесплатно проконсультируют по возможным вариантам изготовления и размещения рекламы и подготовят дизайн-проект.</div>
              </el-collapse-item>
              <br>
              <el-collapse-item title="Вы регистрируете вывески?" name="3">
                <div>Если вывеска делается по Постановлению Правительства Курска N 902-ПП "О размещении информационных конструкций в городе Курске", то регистрация не требуется. </div>
                <div>В исключительных случаях, когда заказчик настаивает на варианте, не предусмотренным постановлением № 902-ПП, </div>
                <div>мы предоставляем услугу регистрации (отправьте запрос на нашу электронную почту kontinent.46@mail.ru)</div>
              </el-collapse-item>
              <br>
              <el-collapse-item title="Можете ли Вы приехать на замеры?" name="4">
                <div>Да. Выезд наших специалистов на замеры и осмотр осуществляется в дневное или вечернее время (по необходимости).</div>
                <div>Услуга платная (включается в общую стоимость вывески или оплачивается отдельно).</div>
              </el-collapse-item>
              <br>
              <el-collapse-item title="В каком регионе Вы работаете?" name="5">
                <div>Основная часть нашей продукции размещается на территории Москвы и Московской области.</div>
                <div>При этом нами довольно много реализованных проектов на всей территории России, а также ближнего зарубежья.</div>
                <div>Доставку нашей продукции мы осуществляем по всей территории РФ, также возможен монтаж (или шеф-монтаж) на всей территории РФ.</div>
              </el-collapse-item>
              <br>
              <el-collapse-item title="Вы предоставляете услуги дизайнера?" name="6">
                <div>Да. Наши дизайнеры, обладающие достаточным опытом и квалификацией, разработают для Вас проект вывески, рекламного оформления и пр. </div>
                <div>в соответствие с фирменным стилем компании и с учетом всех пожеланий заказчика.</div>
              </el-collapse-item>
              <br>
              <el-collapse-item title="Как заказать вывеску?" name="7">
                <div>Вам необходимо связаться с нами по электронной почте kontinent.46@mail.ru или телефону/WhatsApp: +7 (961) 169-39-60. </div>
                <div>Необходимо предоставить следующие данные: информацию, размещаемую на вывеске, логотип или брендбук (по необходимости), предполагаемый размер вывески, фотографию места монтажа, адрес  и  Ваши пожелания по исполнению и цветовой гамме. </div>
                <div>Если вывеска размещается в торговом центре, потребуется техническое задание от ТЦ (мы делаем нашу продукцию в строгом соответствие с тех. документацией ТЦ).</div>
              </el-collapse-item>
            </el-collapse>
          </el-col>

          <el-col :md="12" :sm="12" id="qnaimg">
            <img :src="require('~/assets/images/bg4.jpg')" alt="Ballon" width="100%" style="padding-bottom: 15px;margin: 0 auto;">
          </el-col>
        </el-row>
        
      </div>
    </div>

    <div class="section3">
      <div class="content">
        <el-row :gutter="140">
          <el-col :md="14">
            <div class="grid-content bg-purple">
              <h2>Континент46 - доверь дело профессионалам!</h2>
              <p class="aabout">
              <ul> <li>Более 10 лет опыта в области изготовления наружной рекламы;</li> <li>Сотрудничество с крупными корпоративными клиентами;</li> <li>Передовое материально-техническое оснащение;</li> <li>Использование качественных материалов;</li> <li>Многоуровневый контроль качества, строгое соблюдение сроков;</li> <li>Быстрая доставка, помощь с установкой и обслуживанием;</li> <li>Адекватные, доступные цены, удобные условия оплаты, гибкие схемы расчета.</li> </ul>
              </p>   
            </div>
          </el-col>
          <el-col :md="10">
            <div class="grid-content bg-purple-light">
              <h2>Контакты</h2>
              <p >Телефон:</p>
              <h3><a href="tel:+7(961)169-39-60">+7 (961) 169-39-60</a></h3>
              <br>
              <p>E-mail:</p>
              <h3><a href="mailto:kontinent.46@mail.ru">kontinent.46@mail.ru</a></h3>
              <br>
              <p>Режим работы : круглосуточно 24/7</p>
            </div>
          </el-col>
        </el-row>
      </div>
      
    </div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1534fbbb9c88bb507fa137153c4429c8e7a285e8750836bdd14c68b85da4bd32&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
<div class="copyright">
  <p>
     © 2020 kontinent46.ru
  </p>
</div>







  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
  
    },
    data() {
      return {
        activeNames: ['1']
      };
    },
    computed: {
      
    },
    async updated() {
      
    },
    methods: {
    
    }
  }
</script>

<style lang='scss'>
  @font-face {
    font-family: 'Montserrat-Bold';
    src: url(assets/fonts/Montserrat-Bold.ttf);
  }
   @font-face {
    font-family: 'Montserrat-ExtraBold';
    src: url(assets/fonts/Montserrat-ExtraBold.ttf);
  }
   @font-face {
    font-family: 'Montserrat-Light';
    src: url(assets/fonts/Montserrat-Light.ttf);
  }
  @font-face {
    font-family: 'Montserrat-Regular';
    src: url(assets/fonts/Montserrat-Regular.ttf);
  }
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat-Regular';
  }
  body * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  h1 {
    font-family: 'Montserrat-ExtraBold';
    font-size: 54px;
  }
  h2 {
    font-family: 'Montserrat-Bold';
    font-size: 32px;
  }
  a {
    text-decoration: none;
    font-family: 'Montserrat-Light';
  }
  .button {
    color: white;
    padding: 15px 40px;
      background: rgb(206, 134, 0);
    border-radius: 7px;
    display: inline-block;
    margin-bottom: 10px;
  }
  .content {
    max-width: 1200px;
    margin: 0 auto;
  }


  .header {
    background: rgba(48, 48, 48, 0.329);
    padding: 30px 10px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    p {
      display: inline-block;
      font-family: 'Montserrat-ExtraBold';

    }

    p:first-child {
      float: left;
      color: orange;
      font-family: 'Montserrat-Bold';
      font-size: 20px;
      text-transform: uppercase;
    }

    p:last-child {
      float: right;
      
    }

    a {
      color: white;
      line-height: 24px;
      position: relative;

    font-family: 'Montserrat-Regular';
      top: 1px;
    }
  }

  .section1 {
    width: 100%;
    background: url('assets/images/bg2.jpg');
    padding: 0 0 0px 0px;
    color: white;
    text-align: left;
    background-size:cover;
    box-shadow:inset 0 0 0 2000px rgba(3, 1, 8, 0.637);
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    position: relative;
 
    .content {
       align-self: center;
       text-align: left;
       flex-grow: 1;
    }

    h2 {
      padding-bottom: 20px;
    }

    h2 span {
      color: orange;
    }

    
  }

  .section2 {
    overflow: hidden;
    background: #f3f3f3;
    padding: 0px 00px;


    .el-row {
      padding: 40px 0 20px 0;
    }
    .card{
      padding: 20px 0;
      

      h2 {
        font-size: 16px;
        font-family: 'Montserrat-ExtraBold';
      }
      .dez_description {
        padding-top: 10px;
        font-size: 16px;
        font-family: 'Montserrat-Light';
      }
       img {
    margin-left: -70px;
  }
    }

    .grid-content {
      text-align: center;

      padding-bottom: 20px;
    }

    h2 {
      font-size: 38px;
      text-align: center;
    }

  }

  


  .section3 {
    max-width: 100%;
    background: url('assets/images/bg1.jpg');
    padding: 150px 10px;
    color: white;

    overflow: hidden;
  
    background-size:cover;
    box-shadow:inset 0 0 0 2000px rgba(3, 1, 8, 0.747);

    a {
      color: white;
    }
    .grid-content{
      padding: 20px;
    }
    .aabout {
      line-height: 1.4em;
    }
  }
  .section3 h2 {
    padding-bottom: 20px;
  }


  @media screen and  (max-width: 564px) {

    .section4 .el-collapse-item__header {
    height: auto;
}
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 24px;
    }
    .section1 {
      h2 {
      font-size: 20px;
    }
    }
    #qnaimg {
      display: none;
    }

    .section4 .content {
      padding: 0px 10px;
    }

    .header p {
      text-align: center;
      margin: 0 auto;
    }
    .header p:first-child {
      float: none;
    }
    .header p:last-child {
      float: none;
    }
    .section1 .content {
      padding: 0 0px 0 20px;
    }
  .dez_description {
    padding: 0 15px;
  }

    img {
      margin-left: -10px !important;
    };

  }

  .section4 {
    padding: 80px 0;
    overflow: hidden;

    h2{
      text-align: center;
    }

    .s{
      padding: 30px 0;
    }

    .el-collapse-item__header {
      background: #f5f5f5;
      padding: 20px;
      font-family: 'Montserrat-Bold';
      font-size: 14px;
      line-height: 1.2em;
    }
    .el-collapse-item__header.is-active {
      background: orange;
      color: white;
    }
    .el-collapse-item__content {
      padding: 20px;
    }
  }

  .copyright {
    text-align: center;
    background: black;
    color: white;
    padding: 12px 0px;
  
  
  }

 
</style>