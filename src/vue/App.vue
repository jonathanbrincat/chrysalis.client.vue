<template lang="pug">
header#app__masthead
  .container
    nav.navbar.navbar-expand-md.navbar-light
      .navbar-header
        p.ui__brand.navbar-brand
          router-link.brand__link(to="/")
             svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.778 100")
              path(d="M31.941,62.825h25.65V37.175H31.941ZM52.654,47.532h-5.42v-5.42h5.42Zm-15.777-5.42H42.3V52.468H52.654v5.42H36.877Zm37.417-4.937A12.825,12.825,0,1,0,87.119,50,12.84,12.84,0,0,0,74.294,37.175Zm0,20.713A7.888,7.888,0,1,1,82.182,50,7.9,7.9,0,0,1,74.294,57.888Zm58.719-20.713A12.825,12.825,0,1,0,145.837,50,12.84,12.84,0,0,0,133.013,37.175Zm0,20.713A7.888,7.888,0,1,1,140.9,50,7.9,7.9,0,0,1,133.013,57.888Zm-29.36-20.713A12.825,12.825,0,1,0,116.478,50,12.84,12.84,0,0,0,103.653,37.175Zm0,20.713a7.888,7.888,0,1,1,7.488-10.356h-7.488v4.936h7.488A7.9,7.9,0,0,1,103.653,57.888Z" fill="#394149")

        #app__navigation.collapse.navbar-collapse.justify-content-between
          ul.ui__navigation.navigation__primary.navbar-nav
            li
              router-link(to="/posts") Listings

main#app__body
  router-view

footer#app__footer
  .container
    p Powered by pix'ie dust. Fuelled by tea. pix8 Ltd &copy; 2020.
    p <small>&hellip;something is brewing ☕.</small>
</template>
