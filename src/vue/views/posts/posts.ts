import { Options, Vue } from 'vue-class-component';
import Pagination from '@/vue/components/Pagination/Pagination.vue';

const URI = 'http://127.0.0.1:3333/posts';

@Options({
  components: {
    Pagination
  },
})
export default class Posts extends Vue {
  private posts: object = {
    total: 0, perPage: 0, page: 0, lastPage: 0, data: []
  };
  private tags: Array<{id: number; name: string}> = [];
  private favourites: Array<object> = [];

  async created() {
    try {
      const response = await fetch(URI, {
        headers: {
          'Accept': 'application/json'
        }
      });
      const { posts, tags, favourites } = await response.json();

      this.posts = posts;
      this.tags = tags;
      this.favourites = favourites;

      console.log(posts)
      console.log(tags)
      console.log(favourites)

    }catch(error) {
      console.log('Something went wrong ', error);
    }
  }
}
