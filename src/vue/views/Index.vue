<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <div class="ui__hero" style="background-image: url(https://picsum.photos/id/237/1380/640)">
      <div class="hero__panel">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>Find your perfect pal</h1>

              <form style="display: flex; flex-direction: row; align-items: flex-end; margin: 0 -12px;" action="" method="POST">
                <p class="form__field" style="margin: 1em 0; padding: 0 12px; flex: 1;">
                  <label class="form__control">
                    <span>Category</span>
                    <select name="category">
                      <option value="">Any</option>
                      <option value="1">Cat</option>
                      <option value="2">Dog</option>
                      <option value="3">Rabbit</option>
                      <option value="4">Hamster</option>
                    </select>
                  </label>
                </p>

                <p class="form__field" style="margin: 1em 0; padding: 0 12px; flex: 1;">
                  <label class="form__control">
                    <span>Breed</span>
                    <select name="breed">
                      <option value="">Any</option>
                      <option value="1">Bengal</option>
                      <option value="2">Maine Coon</option>
                      <option value="3">Persian</option>
                      <option value="4">Siamese</option>
                    </select>
                  </label>
                </p>

                <p class="form__field" style="margin: 1em 0; padding: 0 12px; flex: 1;">
                  <label class="form__control">
                    <span>Location</span>
                    <input type="text" name="location" placeholder="Town or postcode" />
                  </label>
                </p>

                <p class="form__field" style="margin: 1em 0; padding: 0 12px;">
                  <button class="ui__btn btn__primary" type="submit" style="width: 200px;">
                    <span>Find</span>
                    <svg class="ui__icon icon__svg">
                      <use xlink:href="/assets/svg/fontawesome/solid.svg#search"></use>
                    </svg>
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Promoted adverts</h2>
        </div>
        <div class="col-4">
          <article class="ui__card2">
            <header class="card__header">
              <a href="{{ route('posts.show', { id: 1 }) }}"><img src="https://picsum.photos/380/260" alt="" /></a>
            </header>

            <div class="card__body">
              <h3><a href="{{ route('posts.show', { id: 1 }) }}">Lorem ipsum dolor elit</a></h3>
            </div>

            <footer class="card__footer"></footer>
          </article>
        </div>

        <div class="col-4">
          <article class="ui__card2">
            <header class="card__header">
              <a href="{{ route('posts.show', { id: 2 }) }}"><img src="https://picsum.photos/380/260" alt="" /></a>
            </header>

            <div class="card__body">
              <h3><a href="{{ route('posts.show', { id: 2 }) }}">Dolore velit sapiente ipsa</a></h3>
            </div>

            <footer class="card__footer"></footer>
          </article>
        </div>

        <div class="col-4">
          <article class="ui__card2">
            <header class="card__header">
              <a href="{{ route('posts.show', { id: 3 }) }}"><img src="https://picsum.photos/380/260" alt="" /></a>
            </header>

            <div class="card__body">
              <h3><a href="{{ route('posts.show', { id: 3 }) }}">Modi consequuntur atque</a></h3>
            </div>

            <footer class="card__footer"></footer>
          </article>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h2>Latest adverts</h2>
        </div>
        <div class="col-3">
          <article class="ui__card2">
            <header class="card__header">
              <a href="{{ route('posts.show', { id: 1 }) }}"><img src="https://picsum.photos/380/240" alt="" /></a>
            </header>

            <div class="card__body">
              <h3><a href="{{ route('posts.show', { id: 1 }) }}">Architecto velit ipsa totam</a></h3>
            </div>

            <footer class="card__footer"></footer>
          </article>
        </div>

        <div class="col-3">
          <article class="ui__card2">
            <header class="card__header">
              <a href="{{ route('posts.show', { id: 2 }) }}"><img src="https://picsum.photos/380/240" alt="" /></a>
            </header>

            <div class="card__body">
              <h3><a href="{{ route('posts.show', { id: 2 }) }}">em repellat soluta eveniet</a></h3>
            </div>

            <footer class="card__footer"></footer>
          </article>
        </div>

        <div class="col-3">
          <article class="ui__card2">
            <header class="card__header">
              <a href="{{ route('posts.show', { id: 3 }) }}"><img src="https://picsum.photos/380/240" alt="" /></a>
            </header>

            <div class="card__body">
              <h3><a href="{{ route('posts.show', { id: 3 }) }}">Lorem ipsum consectetur elit</a></h3>
            </div>

            <footer class="card__footer"></footer>
          </article>
        </div>

        <div class="col-3">
          <article class="ui__card2">
            <header class="card__header">
              <a href="{{ route('posts.show', { id: 4 }) }}"><img src="https://picsum.photos/380/240" alt="" /></a>
            </header>

            <div class="card__body">
              <h3><a href="{{ route('posts.show', { id: 4 }) }}">Sapiente voluptatibus</a></h3>
            </div>

            <footer class="card__footer"></footer>
          </article>
        </div>
      </div>
    </div>

    <br><br>

    <div class="ui__ribbon" style="background: #C6C5B9 /*url('assets/tiles/foobar.jpg')*/; background-size: 20%;">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div style="height: 400px;">
              <h3>Your saved adverts</h3>
              <!-- <p>with paw print tile pattern in the background</p> -->

              <h3>Recent activity</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Pet guides</h3>
        </div>
        <div class="col-6">
          <dl class="ui__directory">
            <dt>Cats</dt>
            <dd><a href="{{ route('guides.show', { id: 1 }) }}">Abyssinian</a></dd>
            <dd><a href="{{ route('guides.show', { id: 2 }) }}">Bengal</a></dd>
            <dd><a href="{{ route('guides.show', { id: 3 }) }}">Birman</a></dd>
            <dd><a href="{{ route('guides.show', { id: 4 }) }}">British Shorthair</a></dd>
            <dd><a href="{{ route('guides.show', { id: 5 }) }}">Maine Coon</a></dd>
            <dd><a href="{{ route('guides.show', { id: 6 }) }}">Mixed breed</a></dd>
            <dd><a href="{{ route('guides.show', { id: 7 }) }}">Ocicat</a></dd>
            <dd><a href="{{ route('guides.show', { id: 8 }) }}">Persian</a></dd>
            <dd><a href="{{ route('guides.show', { id: 9 }) }}">Ragdoll</a></dd>
            <dd><a href="{{ route('guides.show', { id: 10 }) }}">Russian Blue</a></dd>
            <dd><a href="{{ route('guides.show', { id: 11 }) }}">Siamese</a></dd>
          </dl>
        </div>

        <div class="col-6">
          <dl class="ui__directory">
            <dt>Dogs</dt>
            <dd><a href="{{ route('guides.show', { id: 12 }) }}">Akita Inu</a></dd>
            <dd><a href="{{ route('guides.show', { id: 13 }) }}">Beagle</a></dd>
            <dd><a href="{{ route('guides.show', { id: 14 }) }}">Boxer</a></dd>
            <dd><a href="{{ route('guides.show', { id: 15 }) }}">Bulldog</a></dd>
            <dd><a href="{{ route('guides.show', { id: 16 }) }}">Chihiahia</a></dd>
            <dd><a href="{{ route('guides.show', { id: 17 }) }}">Cockapoo</a></dd>
            <dd><a href="{{ route('guides.show', { id: 18 }) }}">Cocker Spaniel</a></dd>
            <dd><a href="{{ route('guides.show', { id: 19 }) }}">English Setter</a></dd>
            <dd><a href="{{ route('guides.show', { id: 20 }) }}">German Shepard</a></dd>
            <dd><a href="{{ route('guides.show', { id: 21 }) }}">Jack Russell</a></dd>
            <dd><a href="{{ route('guides.show', { id: 22 }) }}">Labradors</a></dd>
            <dd><a href="{{ route('guides.show', { id: 23 }) }}">Mixed Breed</a></dd>
            <dd><a href="{{ route('guides.show', { id: 24 }) }}">Rottweiler</a></dd>
            <dd><a href="{{ route('guides.show', { id: 25 }) }}">Shih Tzus</a></dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="ui__ribbon" style="background-color: #62929E; color: white;">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 style="text-shadow: 2px 2px 1px rgba(0,0,0, 1);">How it works</h3>
          </div>

          <label>
            <input type="checkbox" /> Buying / Selling
          </label>

          <div class="col-4">
            <h4>Seach</h4>
            <p>illustration 1</p>
          </div>

          <div class="col-4">
            <h4>Contact</h4>
            <p>illustration 2</p>
          </div>

          <div class="col-4">
            <h4>Reserve</h4>
            <p>illustration 3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/vue/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Index extends Vue {
  private posts: any = "hear me now";

  async created() {
    try {
      const response = await fetch('http://127.0.0.1:3333/posts', {
        headers: {
          'Accept': 'application/json'
        }
      });
      const { posts, tags, favourites } = await response.json();

      this.posts = posts.data;

    }catch(error) {
      console.log('Something went wrong ', error);
    }
  }
}
</script>
