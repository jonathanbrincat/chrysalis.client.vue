import { Options, Vue } from 'vue-class-component';

const URI = 'http://127.0.0.1:3333/posts';

@Options({
  components: {
  },
})
export default class Post extends Vue {
  private post: object = {
    'body': '', 'created_at': '', 'foobar': '', 'id': 0, 'title': '', 'titleAndDate': '', 'updated_at': '', 'user_id': 0
  };
  private entries: Array<object> = [];
  private favourites: Array<object> = [];

  async created() {
    console.log('route >> ', this.$route.params.id);

    try {
      const response = await fetch(`${URI}/${this.$route.params.id}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      const { post, entries, favourites } = await response.json();

      this.post = post;
      this.entries = entries;
      this.favourites = favourites;

      console.log('post ', post)
      console.log('entries ', entries)
      console.log('favourites ', favourites)

    }catch(error) {
      console.log('Something went wrong ', error);
    }
  }
}
