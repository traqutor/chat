<template>
<div class="container">
    <div class="task-color-wrapper" v-bind:style="{ backgroundColor: color }"></div>
    <div style="flex: 1">
      {{ title }}
    </div>
    <div>
      <span>
          <div class="tooltip" v-if="!!countActive && countActive > 0">
            <span
              style="background-color: #28a745;"
              class="badge">
              {{ countActive }}
            </span>
            <span class="tooltiptext">Active of this type: {{ countActive }}</span>
          </div>

          <span
            v-if="!!countActive && countActive > 0"
            style="margin-left: 5px; margin-right: 5px">
          -
          </span>

          <span
            v-if="!!countTotal && countTotal > 0"
            style="color: #fff; background-color: #6c757d;"
            class="badge">
            {{ countTotal }}
          </span>
        </span>
    </div>
</div>
</template>

<script>
import {
  mapGetters,
  mapMutations,
  mapActions,
} from 'vuex';

export default {
  name: 'CountsTaskElement',

  props: {
    color: {
      type: String,
      required: true,
      default: 'white',
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    countActive: {
      type: Number,
      required: false,
      default: 0,
    },
    countTotal: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  computed: {
    ...mapGetters({

    }),
  },

  components: {},

  methods: {
    ...mapActions({}),

    ...mapMutations({}),
  },
};
</script>

<style lang="scss" scoped>
  .task-color-wrapper {
    height: 35px;
    width: 35px;
    border-radius: 5px;
    margin-right: 15px;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 150%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .badge {
    padding-left: .5rem !important;
    padding-right: .5rem !important;
    color: #fff;
    font-size: 15px !important;
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out,
      background-color .15s ease-in-out,
      border-color .15s ease-in-out,
      box-shadow .15s ease-in-out;
  }

  .container {
    display: flex;
    align-items: center;
    margin: 5px 0px 5px 0px;
    display: flex;
    align-items: center;
  }
</style>
