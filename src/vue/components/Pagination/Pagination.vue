<template>
  <ul class="ui__pagination">    
    <li :class="['pagination__page', 'pagination__page-previous', { 'pagination__page--disable': isFirst(pagination) }]">
      <a class="pagination__page-link" aria-label="Previous">
        <svg class="ui__icon icon__svg">
          <use xlink:href="/assets/svg/fontawesome/solid.svg#chevron-left"></use>
        </svg>
      </a>
    </li>
    
    <li :class="['pagination__page', 'pagination__page-index', { 'pagination__page-index--active': isCurrent(page, pagination) }]" v-for="page in paginate(pagination.page, pagination.lastPage, 5)" :key="page">
      <span class="pagination__page-ellipsis" v-if="page === '...'">
        {{ page }}
      </span>

      <a class="pagination__page-link" v-bind="{ 'aria-disabled': isCurrent(page, pagination), 'aria-selected':isCurrent(page, pagination) }" v-else>
        {{ page }}
      </a>
    </li>

    <li :class="['pagination__page', 'pagination__page-next', { 'pagination__page--disable' : isLast(pagination) }]">
      <a class="pagination__page-link" aria-label="Next">
        <svg class="ui__icon icon__svg">
          <use xlink:href="/assets/svg/fontawesome/solid.svg#chevron-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script lang="js">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    pagination: String
  }
})
export default class Pagination extends Vue {
  // pagination!: string

  isFirst(pagination) {
    return pagination.page == 1
  }

  isCurrent(page, pagination) {
    return pagination.page == page
  }

  isLast(pagination) {
    return pagination.page == pagination.lastPage
  }

  setPage(page, pagination) {
    if(page < 1 || page > pagination.lastPage) return pagination.page;

    return page;
  }

  // appendParams(current_url, key, value) {
    // const current = url.parse(current_url)
    // const params = new URLSearchParams(current.search)

    // params.set(key, value)

    // return params.toString()
  // }

  paginate(curr, total, delta = 5) {
    const noop = (v, indice) => (total === 1 || indice%total === 1) ? [] : (v === 1) ? [v, '...'] : ['...', v];

    if(delta > total) delta = total;

    let indice;
    indice = curr - Math.floor(delta / 2);
    indice = Math.max(indice, 1);
    indice = Math.min(indice, 1 + (total - delta));

    return [...noop(1, indice), ...Array.from({length: delta}, () => indice++), ...noop(total, indice)];
  }
}
</script>

<style scoped lang="scss">
</style>
