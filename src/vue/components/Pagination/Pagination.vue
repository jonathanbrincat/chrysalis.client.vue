<template lang="pug">
ul.ui__pagination
  li(:class="['pagination__page', 'pagination__page-previous', { 'pagination__page--disable': isFirst(pagination) }]")
    a.pagination__page-link(aria-label="Previous")
      svg.ui__icon.icon__svg
        use(xlink:href="/assets/svg/fontawesome/solid.svg#chevron-left")
  
  li(:class="['pagination__page', 'pagination__page-index', { 'pagination__page-index--active': isCurrent(page, pagination) }]" v-for="page in paginate(pagination.page, pagination.lastPage, 5)" :key="page")
    span.pagination__page-ellipsis(v-if="page === '...'") {{ page }}

    a.pagination__page-link(v-bind="{ 'aria-disabled': isCurrent(page, pagination), 'aria-selected':isCurrent(page, pagination) }" v-else) {{ page }}

  li(:class="['pagination__page', 'pagination__page-next', { 'pagination__page--disable' : isLast(pagination) }]")
    a.pagination__page-link(aria-label="Next")
      svg.ui__icon.icon__svg
        use(xlink:href="/assets/svg/fontawesome/solid.svg#chevron-right")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

type PageObject = {
  total: number;
  perPage: number;
  page: number;
  lastPage: number;
  data: Array<string | number>;
}

@Options({
  props: {
    pagination: Object
  }
})
export default class Pagination extends Vue {
  pagination!: PageObject;

  isFirst(pagination: PageObject): boolean {
    return pagination.page == 1;
  }

  isCurrent(page: number, pagination: PageObject): boolean {
    return pagination.page == page;
  }

  isLast(pagination: PageObject): boolean {
    return pagination.page == pagination.lastPage;
  }

  setPage(page: number, pagination: PageObject): number {
    if(page < 1 || page > pagination.lastPage) return pagination.page;

    return page;
  }

/*  appendParams(current_url, key, value): string {
    const current = url.parse(current_url)
    const params = new URLSearchParams(current.search)

    params.set(key, value)

    return params.toString()
  }*/

  paginate(curr: number, total: number, delta = 5): Array<number | string> {
    const noop = (v: number, indice: number): Array<number | string> => (total === 1 || indice%total === 1) ? [] : (v === 1) ? [v, '...'] : ['...', v];

    if(delta > total) delta = total;

    let indice: number;
    indice = curr - Math.floor(delta / 2);
    indice = Math.max(indice, 1);
    indice = Math.min(indice, 1 + (total - delta));

    return [...noop(1, indice), ...Array.from({length: delta}, () => indice++), ...noop(total, indice)];
  }
}
</script>

<style scoped lang="scss">
</style>
