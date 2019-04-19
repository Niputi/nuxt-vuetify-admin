<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    fixed
    app
    width="260"
    dark
  >
    <v-toolbar dark>
      <img
        src="https://via.placeholder.com/36/000000/FFFFFF/?text=TMP"
        height="36"
        alt="placeholder image"
      />
      <v-toolbar-title class="ml-0 pl-3">
        <span>Nuxt Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-list dense expand>
      <template v-for="(item, i) in menus">
        <!--group with subitems-->
        <v-list-group
          v-if="item.items"
          :key="item.name"
          :group="item.group"
          :prepend-icon="item.icon"
          no-action="no-action"
        >
          <v-list-tile slot="activator" ripple="ripple">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <template v-for="(subItem, k) in item.items">
            <!--sub group-->
            <v-list-group
              v-if="subItem.items"
              :key="subItem.name"
              :group="subItem.group"
              sub-group="sub-group"
            >
              <v-list-tile slot="activator" ripple="ripple">
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(grand, j) in subItem.children"
                :key="j"
                :to="grand.to"
                ripple="ripple"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <!--child item-->
            <v-list-tile
              v-else
              :key="k"
              :to="subItem.to"
              :disabled="subItem.disabled"
              :target="subItem.target"
              ripple="ripple"
            >
              <v-list-tile-content>
                <v-list-tile-title>
                  <span>{{ subItem.title }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="subItem.action">
                <v-icon :class="[subItem.actionClass || 'success--text']">{{
                  subItem.action
                }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list-group>
        <v-subheader v-else-if="item.header" :key="i">{{
          item.header
        }}</v-subheader>
        <v-divider v-else-if="item.divider" :key="i"></v-divider>
        <!--top-level link-->
        <v-list-tile
          v-else
          :key="item.name"
          :to="item.to"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
        >
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action v-if="item.subAction">
            <v-icon class="success--text">{{ item.subAction }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    mini: false,
    menus: [
      {
        title: "Dashboard",
        group: "apps",
        icon: "dashboard",
        to: "/"
      },
      {
        title: "Widgets",
        icon: "widgets",
        items: [
          { title: "Chart", to: "/Widgets/Chart" },
          { title: "List", to: "/Widgets/Lists" },
          { title: "Social", to: "/Widgets/Social" },
          {
            title: "Statistic",
            to: "/Widgets/Statistic"
          }
        ]
      },
      { header: "UI Elements" },
      {
        title: "General",
        icon: "tune",
        items: [
          { title: "Alerts", to: "/General/Alerts" },
          { title: "Avatars", to: "/General/Avatars" },
          { title: "Badges", to: "/General/Badges" },
          { title: "Buttons", to: "/General/Buttons" },
          { title: "Cards", to: "/General/Cards" },
          { title: "Carousels", to: "/General/Carousels" },
          { title: "Chips", to: "/General/Chips" },
          { title: "Colors", to: "/General/Colors" },
          { title: "Datepicker", to: "/General/Datepicker" },
          { title: "Dialogs", to: "/General/Dialogs" },
          { title: "Pagination", to: "/General/Pagination" },
          { title: "Progress", to: "/General/Progress" },
          { title: "Snackbar", to: "/General/Snackbar" },
          { title: "Tables", to: "/General/Tables" },
          { title: "Tooltip", to: "/General/Tooltip" },
          { title: "Typography", to: "/General/Typography" }
        ]
      },
      {
        title: "Pickers",
        group: "pickers",
        icon: "filter_vintage",
        items: [
          {
            title: "Timepicker",
            to: "/Pickers/Timepicker"
          },
          {
            title: "Datepicker",
            to: "/Pickers/Datepicker"
          }
        ]
      },
      {
        title: "Layouts",
        group: "Layouts",
        icon: "view_compact",
        items: [
          {
            title: "BottomSheets",
            to: "/Layouts/BottomSheets"
          },
          {
            title: "Expansion panels",
            to: "/Layouts/ExpansionPanels"
          },
          { title: "Footer", to: "/Layouts/footer" },
          { title: "Lists", to: "/Layouts/lists" },
          {
            title: "Jumbotrons",
            to: "/Layouts/jumbotrons"
          },
          { title: "Menus", to: "/Layouts/menus" },
          { title: "Tabs", to: "/Layouts/tabs" },
          {
            title: "Toolbars",
            to: "/Layouts/toolbar"
          },
          {
            title: "Timeline",
            to: "/Layouts/timeline"
          }
        ]
      },
      {
        title: "Forms & Controls",
        group: "Forms & Controls",
        icon: "edit",
        items: [
          {
            title: "Selects",
            to: "/Forms/selects"
          },
          {
            title: "Selection Controls",
            to: "/Forms/Selection-Controls"
          },
          {
            title: "Text Fields",
            to: "/Forms/Text-Fields"
          },
          {
            title: "Steppers",
            to: "/Forms/steppers"
          }
        ]
      },
      { header: "Extras" },
      {
        title: "Pages",
        group: "extra",
        icon: "list",
        items: [
          { title: "Register", to: "/register" },
          { title: "Login", to: "/login" },
          { title: "404", to: "/NotFound" }
        ]
      }
    ]

    // BottomSheets
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.sidebar;
      },
      set(val) {
        this.$store.commit("SIDEBAR", val);
      }
    }
  }
};
</script>

<style scoped>
#appDrawer {
  overflow: hidden;
}
#appDrawer .drawer-menu--scroll {
  height: calc(100vh - 48px);
  overflow: auto;
}
</style>
