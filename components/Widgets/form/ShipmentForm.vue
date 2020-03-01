<template>
  <v-form v-model="valid">
    <v-subheader class="pa-0 mt-3">CONTACT DETAIL</v-subheader>
    <v-text-field
      v-model="formModel.name"
      v-validate="'required'"
      label="Full Name"
      name="fullname"
      placeholder="Michael Wang"
      data-vv-name="fullname"
      :error-messages="errors.collect('fullname')"
      required
    ></v-text-field>
    <v-text-field
      v-model="formModel.email"
      v-validate="'required|email'"
      label="Email"
      placeholder="wangqiangshen@gmail.com"
      name="email"
      data-vv-name="email"
      :error-messages="errors.collect('email')"
      required
    ></v-text-field>
    <v-text-field
      v-model="formModel.phone"
      v-validate="'required'"
      label="Phone"
      placeholder="(###) ### - ####"
      data-vv-name="phone"
      :error-messages="errors.collect('phone')"
      mask="phone"
      required
    ></v-text-field>
    <v-subheader class="pa-0 mt-3">SHIP ADDRESS</v-subheader>
    <v-select
      v-model="formModel.country"
      v-validate="'required'"
      :items="countries"
      data-vv-name="country"
      :error-messages="errors.collect('country')"
      label="Country"
      auto
      required
      item-text="country"
      item-value="abbr"
    ></v-select>
    <v-select
      v-model="formModel.state"
      v-validate="'required'"
      :items="states"
      data-vv-name="state"
      :error-messages="errors.collect('state')"
      label="State"
      auto
      required
      item-text="name"
      item-value="id"
    ></v-select>
    <v-select
      v-model="formModel.city"
      v-validate="'required'"
      :items="cities"
      data-vv-name="city"
      :error-messages="errors.collect('city')"
      label="City"
      required
      auto
      item-text="name"
      item-value="id"
    ></v-select>
    <v-text-field
      v-model="formModel.zipcode"
      label="Zip Code"
      required
    ></v-text-field>
    <v-text-field
      v-model="formModel.address"
      v-validate="'required'"
      label="Address"
      data-vv-name="address"
      :error-messages="errors.collect('address')"
      required
    ></v-text-field>
    <div class="form-btn">
      <v-btn outlined color="primary" @click="submit">Submit</v-btn>
      <v-btn outlined @click="clear">Clear</v-btn>
    </div>
  </v-form>
</template>

<script>
import Countries from "@/api/country";
export default {
  $_veeValidate: {
    validator: "new"
  },
  data: () => ({
    formModel: {
      country: null
    },
    countries: Countries,
    states: [
      { name: "Florida", abbr: "FL", id: 1, country_id: 1 },
      { name: "Georgia", abbr: "GA", id: 2, country_id: 1 },
      { name: "Nebraska", abbr: "NE", id: 3, country_id: 1 },
      { name: "California", abbr: "CA", id: 4, country_id: 1 }
    ],
    cities: [
      { name: "New York", abbr: "NY", id: 1, country_id: 1 },
      { name: "Tample", abbr: "TA", id: 2, country_id: 1 },
      { name: "San Francisco", abbr: "SF", id: 3, country_id: 1 }
    ],
    valid: true
  }),
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    submit() {
      this.$validator.validateAll();
    },
    clear() {
      this.formModel = {};
      this.$validator.reset();
    }
  }
};
</script>
