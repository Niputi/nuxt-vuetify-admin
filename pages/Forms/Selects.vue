<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <!-- <v-flex lg6 xs12>
          <v-widget title="Single Selection">
            <div slot="widget-content">
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-subheader>Standard</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      v-model="e1"
                      :items="countries"
                      label="Select"
                      item-text="country"
                      item-value="abbr"
                      single-line
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Standard with focus</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      v-model="e2"
                      :items="countries"
                      label="Select"
                      item-text="country"
                      item-value="abbr"
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Error</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      v-model="e3"
                      label="Select"
                      :items="countries"
                      :error-messages="['Please select an option']"
                      item-text="country"
                      item-value="abbr"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Prepend Icon</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      v-model="e5"
                      label="Select"
                      prepend-icon="map"
                      :items="countries"
                      item-text="country"
                      item-value="abbr"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Append Icon</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      v-model="e6"
                      label="Select"
                      :items="countries"
                      append-icon="map"
                      item-text="country"
                      item-value="abbr"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Auto complete</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-autocomplete
                      v-model="e7"
                      label="Select"
                      :items="countries"
                      item-text="country"
                      item-value="abbr"
                    ></v-autocomplete>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex> -->
      <v-flex lg6 xs12>
        <v-widget title="Mulitple Selection">
          <div slot="widget-content">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-subheader>Tags</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-combobox
                    v-model="multi1"
                    :items="countries"
                    multiple
                    label="Select"
                    multi-line
                    item-text="country"
                    item-value="abbr"
                    return-object
                  ></v-combobox>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>Tags and chips</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-combobox
                    v-model="multi2"
                    :items="countries"
                    multiple
                    chips
                    label="Select"
                    class="input-group--focused"
                    item-text="country"
                  ></v-combobox>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>Rules</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-combobox
                    v-model="select"
                    label="Async items"
                    autocomplete
                    :loading="loading"
                    multiple
                    cache-items
                    chips
                    required
                    :items="items"
                    item-text="country"
                    item-value="country"
                    :rules="[
                      () => select.length > 0 || 'You must choose at least one'
                    ]"
                    :search-input.sync="search"
                  ></v-combobox>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>Slots - Closable chips</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-combobox
                    v-model="multi4"
                    label="Select"
                    :items="countries"
                    chips
                    multiple
                    multi-line
                    item-text="country"
                    item-value="abbr"
                    return-object
                  >
                    <template slot="selection" slot-scope="data">
                      <v-chip
                        :key="JSON.stringify(data.item.abbr)"
                        close
                        class="chip--select-multi"
                        :selected="data.selected"
                        @input="data.parent.selectItem(data.item.abbr)"
                      >
                        <v-avatar class="accent">{{ data.item.abbr }}</v-avatar>
                        {{ data.item.country }}
                      </v-chip>
                    </template>
                  </v-combobox>
                </v-flex>
                <v-flex xs6>
                  <v-subheader>Slots</v-subheader>
                </v-flex>
                <v-flex xs6>
                  <v-combobox
                    v-model="multi3"
                    label="Select"
                    :items="countries"
                    chips
                    multiple
                    multi-line
                    item-text="country"
                    item-value="abbr"
                    return-object
                  >
                    <template slot="selection" slot-scope="data">
                      <v-chip
                        :key="JSON.stringify(data.item.abbr)"
                        class="chip--select-multi"
                        :selected="data.selected"
                        @input="data.parent.selectItem(data.item.abbr)"
                      >
                        <v-avatar class="accent">{{ data.item.abbr }}</v-avatar>
                        {{ data.item.country }}
                      </v-chip>
                    </template>
                  </v-combobox>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VWidget from "@/components/VWidget";
import Countries from "@/data/country";
export default {
  components: {
    VWidget
  },
  watch: {
    search(val) {
      val && this.querySelections(val);
    }
  },
  asyncData() {
    return {
      loading: false,
      items: [],
      search: null,
      select: [],
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      e5: null,
      e6: null,
      e7: null,
      multi1: [],
      multi2: [],
      multi3: [],
      multi4: [],
      multi5: [],
      countries: Countries
    };
  },
  methods: {
    querySelections(v) {
      console.log(v);
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.countries.filter(e => {
          return (
            (e.country || "").toLowerCase().indexOf((v || "").toLowerCase()) >
            -1
          );
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>
