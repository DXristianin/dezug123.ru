<template>
  <div id="app">

    <div class="section1">
      <div class="header">
        <div class="content">
          <p>
            Дезинфекция
          </p>
          <p>
            <b><a href="tel:+7(918)-663-77-93">+7(918)-663-77-93</a></b>
          </p>
        </div>
      </div>
      <div class="content">
      <h1><span>Уничтожение насекомых</span> по России.</h1>
      <h2>Выезд мастера <span>бесплатно</span></h2>
      <a href="tel:+7(918)-663-77-93" class="button b1">Вызвать мастера</a>
      </div>
    </div>

    <div class="section2">
      <div class="content">
        <el-row :gutter="40">
          <el-col :md="6" :sm="12">

            <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/dez1.png')" alt="Ballon" width="400px" style="padding-bottom:15px">
                </div>
                <h2>ДЕЗИНСЕКЦИЯ</h2>
                <p class="dez_description">
                  - уничтожение клопов<br>
                  - уничтожение тараканов<br>
                  - уничтожение клещей<br>
                  - уничтожение блох<br>
                  - уничтожение муравьев<br>
                  - уничтожение комаров<br>
                  А также мух, слепней, ос, пчел, короеда, мокриц, шершней, огневки, шершней.
                </p>
              </div>
            </div> 
      </el-col>
            <el-col :md="6" :sm="12">

            <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/dez2.png')" alt="Ballon" width="400px" style="padding-bottom:15px">
                </div>
                <h2>ДЕРАТИЗАЦИЯ</h2>
                <p class="dez_description">
                  - уничтожение крыс<br>
                  - уничтожение мышей<br>
                  - уничтожение кротов
                </p>
              </div>
            </div> 


          </el-col>
          <el-col :md="6" :sm="12">

           <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/dez3.png')" alt="Ballon" width="400px" style="padding-bottom:15px">
                </div>
                <h2>ДЕЗОДОРАЦИЯ</h2>
                <p class="dez_description">
                  Дезодорация квартиры, склада, офиса, дома требуется в тех случаях, когда качество воздуха не позволяет использовать помещение по назначению, комфортно находиться внутри.
                </p>
              </div>
            </div> 
          </el-col>
          <el-col :md="6" :sm="12">

            <div class="card">
              <div class="grid-content bg-purple">
                <div class="img">
                <img :src="require('~/assets/images/dez4.png')" alt="Ballon" width="400px" style="padding-bottom:15px">
                </div>
                <h2>ДЕЗИНФЕКЦИЯ</h2>
                <p class="dez_description">
                  - уничтожение бактерий <br>
                  - уничтожение плесени <br>
                  - Обработка помещений от COVID-19 <br>
                  И других вирусов
                </p>
              </div>
            </div> 
          </el-col>
        
        </el-row>
      </div>
    </div> 

    <div class="section4">
      <div class="content">
        <h2>Сертификаты</h2>
        <el-row :gutter="50">
          <el-col :md="6" :sm="6" :xs="6">
            <div class="s">
              <el-image 
                style="width:100%"
                :src="require('~/assets/images/s11.jpg')"
                :preview-src-list="srcList">
              </el-image>
            </div>
          </el-col>
          <el-col :md="6" :sm="6" :xs="6">
            <div class="s">
              <el-image 
                style="width:100%"
                :src="require('~/assets/images/s22.jpg')"
                :preview-src-list="srcList">
              </el-image>
            </div>
          </el-col>
          <el-col :md="6" :sm="6" :xs="6">
            <div class="s">
              <el-image 
                style="width:100%"
                :src="require('~/assets/images/s33.jpg')"
                :preview-src-list="srcList">
              </el-image>
            </div>
          </el-col>
          <el-col :md="6" :sm="6" :xs="6">
          <div class="s">
            <el-image 
              style="width:100%"
              :src="require('~/assets/images/s44.jpg')"
              :preview-src-list="srcList">
            </el-image>
          </div>
        </el-col>
        </el-row>
      </div>
    </div>

    <div class="section5">
      <div class="content">
        <h2>
          Социальная скидка
        </h2>
        <br>
        <p>
          Мы предоставляем скидки пенсионерам, инвалидам, многодетным семьям<br>
          Бесплатный вызов мастера
        </p>
        <br>
        <a href="tel:+7(918)-663-77-93" class="button b1">Свяжитесь с нами для получения подробной информации</a>
      </div>
    </div>

    <div class="section3">
      <div class="content">
        <el-row :gutter="140">
          <el-col :md="12">
            <div class="grid-content bg-purple">
              <h2>DezUg - доверь дело профессионалам!</h2>
              <p>
              В сферу деятельности нашей организации входит - уничтожение насекомых и грызунов относящихся к группе вредителей, 
              а также услуги по дезинфекции (уничтожение вирусов и бактерий, плесени) и дезодорации (устранение неприятных запахов), 
              гербицидная обработка( истребление нежелательной сорной растительности).
              </p>   
            </div>
          </el-col>
          <el-col :md="12">
            <div class="grid-content bg-purple-light">
              <h2>Контакты</h2>
              <p>Телефон:</p>
              <h3><a href="tel:+7(918)-663-77-93">+7(918)-663-77-93</a></h3>
              <br>
              <p>E-mail:</p>
              <h3><a href="mailto:dezug123@mail.ru">dezug123@mail.ru</a></h3>
              <br>
              <p>Режим работы : круглосуточно 24/7</p>
            </div>
          </el-col>
        </el-row>
      </div>
      
    </div>
<div class="copyright">
  <p>
     © 2020 dezug123.ru
  </p>
</div>







  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
  
    },
    data: () => ({
      srcList:[
        require('assets/images/s1.jpg'),
        require('assets/images/s2.jpg'),
        require('assets/images/s3.jpg'),
        require('assets/images/s4.jpg'),
      ]
    }),
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
        font-size: 28px;
        font-family: 'Montserrat-Light';
      }
      .dez_description {
        padding-top: 10px;
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
    background: url('assets/images/bg3.jpg');
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
  }
  .section3 h2 {
    padding-bottom: 20px;
  }


  @media screen and  (max-width: 564px) {
    h1 {
      font-size: 32px;
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
  }

  .copyright {
    text-align: center;
    background: black;
    color: white;
    padding: 12px 0px;
  
  
  }

  .section5 {
    background: orange;
    color: white;

    a {
      
    }
  }
  .section5 .content {
    padding: 70px 0px;
    text-align: center;
  }
 
</style>