import Header from '../../views/about/header.vue';
import Index from '../../views/about/index.vue';
import Common from '../../views/about/common.vue';
import Footer from '../../views/about/footer.vue';

const aboutRoutes = {
  path: '/about',
  name: 'About',
  components: {
    Header,
    Index,
    Common,
    Footer,
  },
};

export default aboutRoutes;
