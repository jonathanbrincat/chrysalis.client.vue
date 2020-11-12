<template>
  <div>    
    <div class="container">
      <div class="row">
        <div class="col-12">
          <form action="" method="post" role="search">
            <p class="form__field">
              <label class="form__control control__group" style="display: flex;">
                <input type="text" name="q" value="" placeholder="Search posts..." style="flex: 1; border-top-right-radius: 0; border-bottom-right-radius: 0;" />
                <button class="ui__btn btn__primary" type="submit" style="width: 200px; border-top-left-radius: 0; border-bottom-left-radius: 0;">
                  <span>Find</span>
                  <svg class="ui__icon icon__svg">
                    <use xlink:href="/assets/svg/fontawesome/solid.svg#search"></use>
                  </svg>
                </button>
              </label>
            </p>
          </form>
        </div>
      </div>

      <div class="row">
          <div class="col-3">
          <aside>
            <h3 style="border-bottom: 1px solid silver;">Category</h3>
            <ul>
              <li v-for="tag in tags" :key="tag.id">
                <a :href="tag.id">{{ tag.name }}</a>
              </li>
            </ul>

            <h3 style="border-bottom: 1px solid silver;">Location</h3>
            <label>
              <input type="text" placeholder="Town or postcode" />
            </label>

            <label>
              <span>Distance</span>
              <input type="range" />
            </label>

            <h3 style="border-bottom: 1px solid silver;">Filters</h3>
            <p class="form__field">
              <label>
                <span>Price</span>
                <input type="range" />
              </label>
            </p>

            <p class="form__field">
              <label>
                <span>Age</span>
                <input type="range" />
              </label>
            </p>

            <p class="form__field">
              <label>
                <span>Sex</span>
                <input type="checkbox" /> Male
                <input type="checkbox" /> Female
              </label>
              <span>Note: mixed litters will be included</span>
            </p>

            <p class="form__field">
              <label>
                <span>Coat colour</span>
                <input type="checkbox" /> Mixed
                <input type="checkbox" /> Brown
                <input type="checkbox" /> White
                <input type="checkbox" /> Silver
              </label>
            </p>

            <p class="form__field">
              <label>
                <span>Coat type</span>
                <input type="checkbox" /> Mixed
                <input type="checkbox" /> Solid
                <input type="checkbox" /> Marble
                <input type="checkbox" /> Spotted
                <input type="checkbox" /> Rosette
                <input type="checkbox" /> Tabby
              </label>
            </p>

            <p class="form__field">
              <label>
                <span>Special criteria</span>
                <input type="checkbox" /> Pedigree only
                <input type="checkbox" /> Rehome only
              </label>
            </p>
          </aside>
        </div>

        <div class="offset-1 col-8">
          <div style="display: flex; justify-content: space-between;">
            <label>
              <span>Sort by</span>
              <select>
                <option value="">Most recent</option>
                <option value="">Price(ascending)</option>
                <option value="">Price(decending)</option>
                <option value="">Most popular</option>
              </select>
            </label>

            <label>
              <span>Results per page</span>
              <select style="width: auto; display: block;">
                <option value="10">10</option>
                <option value="20">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="">All</option>
              </select>
            </label>
          </div>

          <p>{{ posts.total }} entries</p>

          <Pagination :pagination="posts" />

          <article v-for="post in posts.data" class="ui__card" :key="post.id">
            <header class="card__header">
              <picture>
                <a :href="post.id"><img src="https://picsum.photos/300/200" alt="" /></a>
              </picture>

              <div class="likes">
                <div class="icon">
                  <svg class="ui__icon icon__svg">
                    <use xlink:href="/assets/svg/fontawesome/regular.svg#thumbs-up"></use>
                  </svg>
                </div>
                <span aria-label="Likes">{{ post.__meta__.likes_count }}</span>
              </div>
            </header>

            <!--
            @if(favourites.includes(post.id))
            UNSAVE
            <form class="save" action="{{ route('saved.destroy', { id: post.id }) }}?_method=DELETE" method="POST">
              <button type="submit">
                <svg class="ui__icon icon__svg">
                  <use xlink:href="/assets/svg/fontawesome/solid.svg#star"></use>
                </svg>
              </button>
            </form>

            @else
            SAVE
            <form class="save" action="{{ route('saved.store', { id: post.id }) }}" method="POST">
              <button type="submit">
                <svg class="ui__icon icon__svg">
                  <use xlink:href="/assets/svg/fontawesome/regular.svg#star"></use>
                </svg>
              </button>
            </form>
            @endif
            -->

            <div class="card__body">
              <h2 class="post__title"><a :href="post.id">{{ post.title }}</a></h2>
              <h3 class="post__location">Haslemere, Surrey</h3>
              <p>price / price - range</p>
              <p class="post__synopsis"><a :href="post.id">{{ post.body }}</a></p>
              <ul>
                <li>Boy: 1 snow-sepia</li>
                <li>Girl: 4; 2 brown rosetted; 1 silver marble; 1 snow spotted</li>
              </ul>
            </div>

            <footer class="card__footer">
              <!--
              @if(post.tags.length)
              <ul class="ui__tags">
                <li class="tags__item">
                  @each(tag in post.tags)
                  <span class="ui__tag"><a href="{{ route('tags.index', { id: tag.id }) }}">{{ tag.name }}</a></span>
                  @endeach
                </li>
              </ul>
              @endif
              -->

              <p class="post__meta">Posted on {{ post.created_at }} <span>2 days ago</span> by {{ }}</p>
            </footer>
          </article>

          <Pagination :pagination="posts" />
        </div>
      </div>
    </div>

  </div>
</template>

<script src="./posts.ts" lang="ts"></script>

<style src="./posts.scss" lang="scss" scoped></style>
