<template>
 <div>
  <div class="header user">
      <span class="nickname">
          <label class="name">
              Hooyu
          </label>
          <label class="pro active">PRO</label>
      </span>
  </div>
  <div class="stat">
   <div class="datas">
    <div class="data">
     <div class="number">680</div>
     <div class="type">MEMO</div>
    </div>
    <div class="data">
     <div class="number">168</div>
     <div class="type">DAY</div>
    </div>
   </div>
  </div>
  <ul class="menu">
      <router-link to="/" tag="li" active-class="selected"><li>LOG</li></router-link>
      <li>账号详情</li>
      <li>帮助</li>
      <li>退出</li>
  </ul>
 </div>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.header {
    height: 6.5rem;
}

.user {
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.nickname {
    font-size: 1.8rem;
    font-weight: bold;
    color: #5F5F5F;
}

.user .nickname .name {
    display: inline-block;
    cursor: pointer;
}

.user .nickname .pro {
    color: white;
    background: #9D9D9D;
    font-size: 1.2rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
    display: inline-block;
    position: relative;
    bottom: 0.2rem;
    cursor: pointer;
}

.user .nickname .pro.active {
    background: #212F4B;
}

.datas {
    display: flex;
    justify-content: space-between;
    padding: 0 1.6rem;
    text-align: left;
    color: #9d9d9d;
}

.datas .number {
    font-size: 2.4rem;
    font-weight: bold;
}

.datas .type {
    font-size: 1.2rem;
}

.menu {
    font-size: 1.4rem;
    color: #9d9d9d;
    text-align: left;
    margin: .8rem 0;
}

.menu li {
    line-height: 3.6rem;
    padding-left: 2rem;
    cursor: pointer;
}

.menu .selected li  {
    background: #55BB8E;
    color: #ffffff;
    border-radius: 5px;
}
</style>
