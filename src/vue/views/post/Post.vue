<template>
  <div class="container">
    <div style="display: flex; justify-content: space-between;">
      <div>
        <p>
          <a href="javascript:void(0)" @click="$router.go(-1)">
            <svg class="ui__icon icon__svg">
              <use xlink:href="/assets/svg/fontawesome/solid.svg#arrow-left"></use>
            </svg>
            <span>Go back</span>
          </a>
        </p>

        <p>
          <span>Animal</span>/<span>Breed</span>/<span>Location</span>
        </p>
      </div>
      
      <div style="display: flex; align-items: center;">
      </div>

      <div style="display: flex; align-items: center;">
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-8">
        <h1>Post {{ $route.params.id }}</h1>
        <h2>Location</h2>
      </div>

      <div class="col-4">
      </div>

      <div class="col-4">
        <!--
        <p>
          {{ post.__meta__.likes_count }} Likes
          <svg class="ui__icon icon__svg">
            <use xlink:href="/assets/svg/fontawesome/regular.svg#thumbs-up"></use>
          </svg>
          |
          <a class="btn btn__primary" href="">
            Like
          </a>
        </p>
      -->

        <ul>
          <li>
            <svg class="ui__icon icon__svg" style="color: blue;">
              <use xlink:href="/assets/svg/fontawesome/solid.svg#cat"></use>
            </svg>
            <span>2</span>
          </li>
          <li>
            <svg class="ui__icon icon__svg" style="color: pink;">
              <use xlink:href="/assets/svg/fontawesome/solid.svg#cat"></use>
            </svg>
            <span>2</span>
          </li>
        </ul>
      </div>

      <div class="col-8">
        <!-- IF Edited:datetimestamp -->
        <!-- View revisions -->
        <div>{{ post.body }}</div>
      </div>

      <template v-for="entry in entries" :key="entry.id">
        <hr>

        <div class="col-12">
          <br>
          <div class="row align-items-end">
            <div class="col-8">
              <picture class="gallery">
                <img :src="`https://picsum.photos/${entry.resources[0].filename}/1200/800`" :alt="entry.resources[0].description" v-if="entry.resources.length" />
                
                <p v-else>Awaiting photography</p>
              </picture>
            </div>

            <div class="col-4">
              <div class="gallery__thumbnails">
                <ul v-if="entry.resources.length">
                  <li v-for="resource in entry.resources" :key="resource.id">
                    <img :src="`https://picsum.photos/${resource.filename}/120/120`" :alt="resource.description" />
                  </li>
                </ul>
              </div>

              <table class="reserve">
                <tr>
                  <th colspan="2">{{ entry.title }}</th>
                </tr>
                <tr>
                  <td colspan="2">{{ entry.colour }} {{ entry.type }}</td>
                </tr>
                <tr>
                  <td>
                    <template v-if="entry.sex === 'm'">
                      <span>Male</span>
                      <svg class="ui__icon icon__svg">
                        <use xlink:href="/assets/svg/fontawesome/solid.svg#mars"></use>
                      </svg>
                    </template>

                    <template v-else-if="entry.sex === 'f'">         
                      <span>Female</span>
                      <svg class="ui__icon icon__svg">
                        <use xlink:href="/assets/svg/fontawesome/solid.svg#venus"></use>
                      </svg>
                    </template>
                  </td>
                  <td class="price">{{ entry.value }}</td>
                </tr>
                <tr>
                  <td colspan="2" style="text-align: right;">
                    <button type="button" class="ui__btn btn__primary" v-if="entry.is_available">
                      <span>Reserve</span>
                      <svg class="ui__icon icon__svg">
                        <use xlink:href="/assets/svg/fontawesome/solid.svg#bullseye"></use>
                      </svg>
                    </button>

                    <button type="button" class="ui__btn btn__primary" disabled="" v-else>
                      <span>Unavailable</span>
                      <svg class="ui__icon icon__svg">
                        <use xlink:href="/assets/svg/fontawesome/solid.svg#lock"></use>
                      </svg>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="offset-4 col-8">
          <!-- IF Edited:datetimestamp -->
          <!-- View revisions -->
          <p>{{ entry.body }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script src="./post.ts" lang="ts"></script>

<style src="./post.scss" lang="scss" scoped></style>
