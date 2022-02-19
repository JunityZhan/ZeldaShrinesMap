<template>
  <div class="main">
   <!-- <img src="./assets/background4.jpg" class="picture">-->
    <div class="content">
      <Header/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Map from './views/Map'
export default{
  name: 'App',
  components: {
    Header,
    Map,
    
  },
}


</script>
<style scoped>
*
{
  font-family: "botw";
  color: #B99F65;
}
.main
{
  background-image:url(./assets/background2.png);
  width:100%;
  background-position: center center;
  background-repeat: repeat-y;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  background-size:cover;
}
.test
{
  line-height: 10px;
  font-family: 'botw';
  font-size: 10px;
}



.button1
{
  padding: 20px;
  border-radius:50%;
  position: absolute;
  left: 107px;
  top: 68px;
  border: 0;

}
</style>
