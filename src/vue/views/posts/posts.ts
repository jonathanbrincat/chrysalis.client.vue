import { Options, Vue } from 'vue-class-component';

const URI = 'http://127.0.0.1:3333/posts';

@Options({
  components: {
  },
})
export default class Posts extends Vue {
  private posts: any = "";
  private tags: any = "";
  private favourites: any = "";

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

    }catch(error) {
      console.log('Something went wrong ', error);
    }
  }
}
