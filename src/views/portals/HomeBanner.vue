<template>
  <section>
    <div class="intro-banner has-text-centered">
      <div class="title is-1 with-background" v-translate>
        The mountain sports community
      </div>

      <div class="outings-links">
        <router-link
          v-for="activity of $options.activities"
          :key="activity"
          :to="{ name: 'outings', query: { act: activity } }"
          :title="$gettext(activity, 'activities')"
          class="outings-link"
        >
          <icon-activity :activity="activity" />
        </router-link>
      </div>

      <div class="title is-4 has-text-weight-normal with-background" v-translate>
        Camptocamp.org aims to facilitate information sharing between mountain addicts and contribute to the safety of
        mountain activities.
      </div>

      <div class="buttons is-centered">
        <router-link :to="{ name: 'topoguide' }" class="button is-primary">
          <icon-topoguide />&nbsp; <span v-translate="">Topoguide</span><br />
          <span v-translate="" class="is-size-4">Conditions, summits, routes</span>...
        </router-link>

        <router-link :to="{ name: 'forum' }" class="button is-primary">
          <icon-forum />&nbsp; <span v-translate>Forum</span><br />
          <span v-translate class="is-size-4">Share with us!</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  activities: [
    'skitouring',
    'snow_ice_mixed',
    'mountain_climbing',
    'rock_climbing',
    'ice_climbing',
    'hiking',
    'snowshoeing',
    'paragliding',
    'mountain_biking',
    'via_ferrata',
    'slacklining',
  ],
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/variables.scss';

section {
  background-image: url('~@/assets/img/backgrounds/alexbuisse-greenland.jpg');
  background-size: cover;
  background-position-y: 50%;
}

.intro-banner {
  padding-bottom: 40px;
  padding-top: 70px;
  color: #fff;
  width: 80%;
  min-width: 730px;
  height: 100%;
  margin: auto;
  align-items: center;
}

.title.is-4 {
  margin-top: 25px;
}

.with-background {
  padding: 10px;
  background-color: rgba(21, 50, 69, 0.4);
  color: #fff;
}

.outings-links {
  line-height: 60px;
  margin-top: 60px;

  .outings-link svg {
    vertical-align: text-bottom;
    margin: 5px;
    color: $color-base-c2c;
    background-color: #fff;
    border-radius: 50%;
    font-size: 4rem;
    width: 4rem;
    height: 4rem;
  }
}

.button {
  display: inline-block;
  height: auto;
}

@media screen and (max-width: $tablet) {
  .intro-banner {
    width: 100%;
    min-width: auto;
    padding: 20px;
  }

  .title.is-4 {
    margin-top: 0;
  }
}
</style>
