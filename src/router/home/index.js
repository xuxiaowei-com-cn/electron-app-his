import Header from '../../views/home/header.vue';
import Index from '../../views/home/index.vue';
import Common from '../../views/home/common.vue';
import Footer from '../../views/home/footer.vue';

const homeRoutes = {
  path: '/',
  name: 'Home',
  components: {
    Header,
    Index,
    Common,
    Footer,
  },
};

export default homeRoutes;
